---
layout: single
permalink: /research/rl/
permalink_name: /rl
title: Learning-based Planning with Temporal Logic Constraints
description: Model-free reinforcement learning for stochastic planning under temporal logic constraints, using PCTL chance constraints and topological approximate dynamic programming.
header:
  teaser: teasers/rl.svg
gallery:
  - url: rl/value_surf.png
    image_path: rl/value_surf.png
    alt: "Approximate value function surface"
    title: "Approximate value function"
  - url: rl/automaton.png
    image_path: rl/automaton.png
    alt: "Task automaton translated from an scLTL formula"
    title: "Task automaton"
  - url: rl/traj.png
    image_path: rl/traj.png
    alt: "Robot trajectory satisfying the specification"
    title: "Resulting trajectory"
  - url: rl/errors.png
    image_path: rl/errors.png
    alt: "Convergence of approximation error"
    title: "Approximation error"
---

The goal is a **model-free reinforcement learning method for stochastic planning under temporal logic constraints** — so that a robot can be given a high-level task and return a policy that provably satisfies it.

{% include figure image_path="/assets/diagrams/tl-planning-pipeline.svg" alt="Pipeline from temporal-logic specification to feedback policy with satisfaction guarantee" caption="From specification to policy: the task formula is translated into an automaton, composed with the stochastic system, and solved with topological approximate dynamic programming." %}

**Chance-constrained planning.** We translate specifications expressed in a subclass of Probabilistic Computational Tree Logic (PCTL) into chance constraints, and devise a variant of approximate dynamic programming — approximate value iteration — that solves for the optimal policy while guaranteeing satisfaction of the PCTL formula.

**Topological approximate dynamic programming.** For syntactically co-safe LTL tasks, we maximize the probability of satisfaction while addressing the sparse-reward problem in two steps: decompose the planning problem into a sequence of sub-problems using the topological structure of the task automaton, then solve one value function per automaton state in reverse causal order. The run time does not grow exponentially with the size of the specification.

{% include gallery layout="half" caption="Value function approximation, the task automaton, the resulting trajectory, and convergence of the approximation error." %}

{% include video id="MJRgdngLjbw" provider="youtube" %}

### Related work

1. {% reference li2019topological %}
2. {% reference li2019approximate %}
