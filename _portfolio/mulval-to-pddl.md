---
title: "MulVAL-to-PDDL"
excerpt: "Converts MulVAL network attack-graph output into PDDL so that off-the-shelf automated planners can reason about multi-step cyber attacks — the bridge between security tooling and the planning formalisms used in my sensor-placement and deception work."
collection: portfolio
permalink: /portfolio/mulval-to-pddl/
link: https://github.com/leelening/MulVAL-to-pddl
---

[MulVAL](https://people.cs.ksu.edu/~xou/mulval/) generates logical attack graphs from a network's configuration and vulnerability data. This tool translates that output into a PDDL domain and problem, so the attack graph can be handed to any classical planner — which is how the attack models in *Synthesis of Proactive Sensor Placement in Probabilistic Attack Graphs* (ACC 2023) were produced.

Source and usage: [github.com/leelening/MulVAL-to-pddl](https://github.com/leelening/MulVAL-to-pddl).
