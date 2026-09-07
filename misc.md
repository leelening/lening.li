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
  - image_path: teasers/pddl-parser.svg
    alt: "PDDL domain and problem expanded into a graph of reachable states and grounded actions"
    title: "PDDL Parser"
    excerpt: "A small, dependency-free Python tool that reads a STRIPS-style PDDL domain and problem (with typing and negative preconditions), grounds every lifted action over the declared objects, and explores the reachable state space by breadth-first search from the initial state. The result is a labelled, deterministic transition system ready for classical planning, MDP solving, or attack-graph analysis. Ships as a Python library, a CLI, and an in-browser demo. [Source on GitHub](https://github.com/leelening/pddl_parser)."
    url: https://leelening.github.io/pddl_parser/
    btn_label: "View project"
    btn_class: "btn--primary"
  - image_path: teasers/cs-books.svg
    alt: "Two shelves of computer science textbooks grouped into algorithms, learning and control, software craft, and systems"
    title: "Computer Science Books"
    excerpt: "A curated reading shelf of computer science textbooks and reference materials, organized by topic: Knuth's *The Art of Computer Programming*, the core AI, reinforcement learning, convex optimization, and dynamic programming texts, the software-craft classics (*Clean Code*, *Design Patterns*, *Refactoring*, *The Pragmatic Programmer*), and working references for C++, Python, Git, Docker, Kubernetes, MongoDB, and YAML. Kept for personal study and reference; the books remain under their publishers' copyrights."
    url: https://github.com/leelening/computer_science_books
    btn_label: "View on GitHub"
    btn_class: "btn--primary"
excerpt: "Side projects by Lening Li: LineupIQ, MulVAL to PDDL, PDDL Parser, and a curated computer science bookshelf."
---

Side projects built outside of research and work.

{% include feature_row type="left" %}

