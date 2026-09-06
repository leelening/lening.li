---
layout: single
permalink: /research/anytime/
title: Anytime Planning via Function Approximation and Importance Sampling
description: Scalable anytime motion planning using function approximation and importance sampling, with support for parallel and cloud-accelerated computation.
header:
  teaser: teasers/anytime.jpg
---

Motion planning for nonlinear robotic systems is computationally intractable in general (PSPACE-hard), so approximate schemes — discretization-based (A\*) and sampling-based (RRT\*) — dominate practice. We explore a third approach: **function approximation**, which transforms planning in the state space into planning in a low-dimensional **parameter space** of policy function approximators.

{% include figure image_path="/assets/dubinstraj.jpg" alt="Sampled Dubins-car trajectories converging to the optimal policy" caption="Importance sampling for a Dubins-car robot reaching a goal while avoiding obstacles (red). Trajectories shade from light (first sample) to dark (converged)." %}

We use **importance sampling** to search efficiently for the optimal feedback policy. The algorithm supports parallel computation and anytime planning, making it a natural fit for cloud robotics and GPU-accelerated planning.

{% include video id="zIt7lSJgWpc" provider="youtube" %}

{% include video id="WkkSpqLudss" provider="youtube" %}

## Outcomes

1. {% reference li2017sampling %}
