/* Cloudflare Worker behind the sidebar visitor globe (_includes/visitor-globe.html).
 * Adapted from Rushi Qiang's worker (rushi-q.github.io, MIT), globe routes only.
 *
 * Endpoints
 *   POST /hit     count the current visitor; location comes from Cloudflare's
 *                 request.cf geo fields (city-level), nothing else is read or stored
 *   GET  /stats   { points: [{ label, lat, lon, count }] }
 *
 * Storage: one KV key per place, "COUNTRY|City|lat.x|lon.x" -> visit count.
 * No IP addresses, no cookies; the site uses sessionStorage so one browsing
 * session posts /hit once.
 *
 * Bindings
 *   VISITS   KV namespace (required) — see README.md
 */

const ORIGINS = ['https://lening.li', 'https://www.lening.li', 'https://leelening.github.io'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const headers = {
      'Access-Control-Allow-Origin': ORIGINS.includes(origin) ? origin : ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
      'Content-Type': 'application/json',
    };
    const json = (obj, status = 200, extra = {}) =>
      new Response(JSON.stringify(obj), { status, headers: { ...headers, ...extra } });

    if (request.method === 'OPTIONS') return new Response(null, { headers });

    if (url.pathname === '/hit' && request.method === 'POST') {
      const cf = request.cf || {};
      if (cf.latitude == null || cf.longitude == null) return json({ ok: false });
      const key = [
        cf.country || '??',
        cf.city || '',
        (+cf.latitude).toFixed(1),
        (+cf.longitude).toFixed(1),
      ].join('|');
      const current = parseInt((await env.VISITS.get(key)) || '0', 10);
      await env.VISITS.put(key, String(current + 1));
      return json({ ok: true }, 200, { 'Cache-Control': 'no-store' });
    }

    if (url.pathname === '/stats' && request.method === 'GET') {
      const list = await env.VISITS.list({ limit: 1000 });
      const points = await Promise.all(
        list.keys.map(async (k) => {
          const [country, city, lat, lon] = k.name.split('|');
          const count = parseInt((await env.VISITS.get(k.name)) || '0', 10);
          return { label: city ? city + ', ' + country : country, lat: +lat, lon: +lon, count };
        })
      );
      return json({ points }, 200, { 'Cache-Control': 'public, max-age=300' });
    }

    return json({ error: 'not found' }, 404);
  },
};
