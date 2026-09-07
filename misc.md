---
layout: single
permalink: /misc/
title: Misc
author_profile: true
feature_row:
  - image_path: teasers/lineupiq.svg
    alt: "Mixed-integer program selecting a salary-cap-optimal eight-player lineup"
    title: "LineupIQ"
    excerpt: "Salary-cap-optimal daily NBA lineups for DraftKings, solved as a binary integer program that maximizes projected fantasy points under the $50,000 cap. Runs automatically every day on GitHub Actions and tracks projected versus actual performance. For entertainment only. [Source on GitHub](https://github.com/leelening/lineupiq)."
    url: https://leelening.github.io/lineupiq/
    btn_label: "View project"
    btn_class: "btn--primary"
  - image_path: teasers/mulval.svg
    alt: "MulVAL attack graph nodes mapped to PDDL init state, actions, and goal"
    title: "MulVAL to PDDL"
    excerpt: "Converts MulVAL logical attack graphs into PDDL for automated planners: leaf facts become the initial state, interaction rules become STRIPS actions, and derived privileges become predicates and the goal. Runs entirely in the browser from MulVAL's `VERTICES.CSV` and `ARCS.CSV`, and produces `domain.pddl` and `problem.pddl`. Used in our [ACC 2023 paper](https://arxiv.org/abs/2210.07385) on proactive sensor placement in probabilistic attack graphs. [Source on GitHub](https://github.com/leelening/mulval_to_pddl)."
    url: https://leelening.github.io/mulval_to_pddl/
    btn_label: "View project"
    btn_class: "btn--primary"
excerpt: "Side projects by Lening Li: LineupIQ and MulVAL to PDDL."
---

Side projects built outside of research and work.

{% include feature_row type="left" %}

