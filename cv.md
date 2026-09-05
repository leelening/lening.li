---
layout: single
permalink: /cv/
permalink_name: /cv
title: Curriculum Vitae
author_profile: true
---

<div class="cv-tabs" role="tablist" aria-label="CV language">
  <button class="cv-tab is-active" role="tab" aria-selected="true" data-src="/files/cv/CV_English.pdf" data-name="CV_English.pdf">English</button>
  <button class="cv-tab" role="tab" aria-selected="false" data-src="/files/cv/cv_Chinese.pdf" data-name="cv_Chinese.pdf">中文履历</button>
  <a class="cv-download" id="cv-download" href="/files/cv/CV_English.pdf" download="CV_English.pdf"><i class="fas fa-fw fa-download" aria-hidden="true"></i> Download PDF</a>
</div>

<div class="cv-frame">
  <object id="cv-viewer" data="/files/cv/CV_English.pdf" type="application/pdf" width="100%" height="900">
    <p>Your browser can't display the PDF inline — <a id="cv-fallback" href="/files/cv/CV_English.pdf">download the CV</a> instead.</p>
  </object>
</div>

<p class="cv-note">Compiled at deploy time from the LaTeX source in <a href="https://github.com/leelening/curriculum_vitae">curriculum_vitae</a>, so it is always the latest version.</p>

<script>
(function () {
  var tabs = document.querySelectorAll('.cv-tab');
  var viewer = document.getElementById('cv-viewer');
  var dl = document.getElementById('cv-download');
  var fb = document.getElementById('cv-fallback');
  function show(tab) {
    tabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('is-active'); tab.setAttribute('aria-selected', 'true');
    var src = tab.getAttribute('data-src');
    /* <object> does not reliably reload on data change; swap the node */
    var fresh = viewer.cloneNode(true); fresh.setAttribute('data', src); viewer.parentNode.replaceChild(fresh, viewer); viewer = fresh;
    fb = document.getElementById('cv-fallback'); fb.href = src;
    dl.href = src; dl.setAttribute('download', tab.getAttribute('data-name'));
    try { history.replaceState(null, '', '#' + (src.indexOf('Chinese') > -1 ? 'zh' : 'en')); } catch (e) {}
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t); }); });
  if (location.hash === '#zh') show(tabs[1]);
})();
</script>
