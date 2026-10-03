# Visitor globe — backend setup (one time, ~5 minutes)

The sidebar globe draws and turns entirely on the site. To show real visitor
locations and the "N visits · M places" line it needs a tiny free backend that
records where visits come from: `worker.js`, run on Cloudflare Workers (free
tier: 100k requests/day — far more than enough).

It stores **only aggregated city-level counts** — no IP addresses, no cookies
(the site uses `sessionStorage` so one browsing session counts once).

This folder starts with `_`, so Jekyll ignores it; nothing here is published.

## Option A — wrangler CLI (fastest with Node installed)

```bash
cd _cloudflare/visits
npx wrangler login                        # opens the browser once to authorize
npx wrangler kv namespace create VISITS   # prints an id like id = "34d4..."
# paste that id into wrangler.toml (replacing PASTE_NAMESPACE_ID_HERE)
npx wrangler deploy                       # prints the worker URL
```

Then put the printed URL into `_config.yml` as `visitor_stats_url` and push.

## Option B — Cloudflare dashboard (no CLI)

1. Create a free account at https://dash.cloudflare.com/sign-up if needed.
2. **Storage & Databases → KV → Create namespace** — name it `visitor-globe`.
3. **Workers & Pages → Create → Worker** — name it `visits` (this becomes the
   URL), click **Deploy**, then **Edit code**, replace the sample with the
   contents of `worker.js`, and **Deploy** again.
4. In the worker: **Settings → Bindings → Add → KV namespace** — variable name
   `VISITS`, namespace `visitor-globe`. Save (it redeploys).
5. Copy the worker URL, e.g. `https://visits.<your-subdomain>.workers.dev`, and
   paste it into `_config.yml`:

   ```yaml
   visitor_stats_url        : "https://visits.<your-subdomain>.workers.dev"
   ```

6. Commit and push. The globe starts counting from the next visit and shows a
   crimson diamond per city, sized by visit count, with a "N visits · M places"
   line underneath.

Both halves of that line are clickable: **visits** opens a ranked list of visits
per place, **places** the number of places per country. Each list shows five rows
at a time with a "show more" step, and clicking a row turns the globe to that
place and rings it.

## Notes

- The worker only accepts browser requests from `https://lening.li`,
  `https://www.lening.li` and `https://leelening.github.io` (CORS, `ORIGINS` at
  the top of `worker.js`).
- The site only POSTs `/hit` when served from `lening.li` or `*.github.io`
  (`isLive` in `assets/js/visitor-globe.js`), so local previews don't count.
- `GET <worker-url>/stats` in a browser shows the raw JSON at any time.
- To reset all counts, delete the keys in the KV namespace (or the namespace
  itself and re-create it).
- Counts start from zero; the old MapMyVisitors history stays viewable at
  https://mapmyvisitors.com/web/1c81u .
