---
layout: single
permalink: /cv/
title: Curriculum Vitae
author_profile: true
excerpt: "Curriculum vitae and one-page resume of Lening Li (English and Chinese), compiled from the latest LaTeX source."
---

<div class="cv-tabs" role="tablist" aria-label="CV language">
  <button class="cv-tab is-active" role="tab" id="cv-tab-en" aria-selected="true" aria-controls="cv-panel" tabindex="0" data-src="/files/cv/CV_English.pdf" data-name="CV_English.pdf">Curriculum Vitae</button>
  <button class="cv-tab" role="tab" id="cv-tab-resume" aria-selected="false" aria-controls="cv-panel" tabindex="-1" data-src="/files/cv/Resume.pdf" data-name="Resume.pdf">Resume</button>
  <button class="cv-tab" role="tab" id="cv-tab-zh" aria-selected="false" aria-controls="cv-panel" tabindex="-1" lang="zh" data-src="/files/cv/cv_Chinese.pdf" data-name="cv_Chinese.pdf">CV <span lang="zh">中文版</span></button>
  <a class="cv-download" id="cv-download" href="/files/cv/CV_English.pdf" download="CV_English.pdf"><i class="fas fa-fw fa-download" aria-hidden="true"></i> Download PDF</a>
</div>

<div class="cv-frame" id="cv-panel" role="tabpanel" aria-labelledby="cv-tab-en">
  <object id="cv-viewer" data="/files/cv/CV_English.pdf" type="application/pdf" height="1140">
    <p>Your browser can't display the PDF inline — <a id="cv-fallback" href="/files/cv/CV_English.pdf">download the CV</a> instead.</p>
  </object>
</div>

<div class="cv-mobile">
  <a class="btn btn--primary" href="/files/cv/CV_English.pdf"><i class="fas fa-fw fa-file-pdf" aria-hidden="true"></i> Curriculum Vitae (PDF)</a>
  <a class="btn" href="/files/cv/Resume.pdf"><i class="fas fa-fw fa-file-pdf" aria-hidden="true"></i> Resume (PDF)</a>
  <a class="btn" href="/files/cv/cv_Chinese.pdf"><i class="fas fa-fw fa-file-pdf" aria-hidden="true"></i> CV <span lang="zh">中文版</span> (PDF)</a>
</div>

<p class="cv-note">Compiled at deploy time from the LaTeX source in <a href="https://github.com/leelening/curriculum_vitae">curriculum_vitae</a>, so it is always the latest version.</p>

<script>
(function () {
  var tabs = document.querySelectorAll('.cv-tab');
  var viewer = document.getElementById('cv-viewer');
  var dl = document.getElementById('cv-download');
  var fb = document.getElementById('cv-fallback');
  function show(tab) {
    tabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); t.setAttribute('tabindex', '-1'); });
    tab.classList.add('is-active'); tab.setAttribute('aria-selected', 'true'); tab.setAttribute('tabindex', '0');
    document.getElementById('cv-panel').setAttribute('aria-labelledby', tab.id);
    var src = tab.getAttribute('data-src');
    /* <object> does not reliably reload on data change; swap the node */
    var fresh = viewer.cloneNode(true); fresh.setAttribute('data', src); viewer.parentNode.replaceChild(fresh, viewer); viewer = fresh;
    fb = document.getElementById('cv-fallback'); fb.href = src;
    dl.href = src; dl.setAttribute('download', tab.getAttribute('data-name'));
    try { history.replaceState(null, '', '#' + (src.indexOf('Chinese') > -1 ? 'zh' : src.indexOf('Resume') > -1 ? 'resume' : 'en')); } catch (e) {}
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
      if (next < 0) return; e.preventDefault(); show(tabs[next]); tabs[next].focus();
    });
  });
  if (location.hash === '#resume') show(tabs[1]); else if (location.hash === '#zh') show(tabs[2]);
})();
</script>
