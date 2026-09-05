---
layout: single
permalink: /research/game/
permalink_name: /game
title: Formal Methods and Game Theory for Cyber-Physical Security
description: Hypergame-theoretic framework for synthesizing deceptive strategies in adversarial environments, with applications to security in cyber-physical systems.
header:
  teaser: teasers/game.svg
---

In an adversarial environment, information — and the lack of it — is decisive for strategic decision-making. We developed a class of **hypergames on graphs** to model the interaction between an intelligent robot and its adversary when the task is given in temporal logic and the two players hold asymmetric information.

{% include figure image_path="/assets/diagrams/hypergame-architecture.svg" alt="Deceptive planning loop: P2 acts on its perceived game G2, P1 plans on the true game G1 with a deceptive planner, and subgoal inference closes the loop through the game transition system" caption="Deceptive planning with a dynamic hypergame: P1 plans on the true game G₁ while P2 acts on its perceived game G₂; online monitoring detects mismatches and subgoal inference updates P1's model of P2." %}

Part of this work was carried out under the DARPA SI3-CMD program (*Serial Interactions in Imperfect Information Games for Complex Military Decision Making*) in collaboration with SSCI, where the framework was implemented in Python and shown to raise mission success probability by exploiting information asymmetry.

We study the solution concepts of these hypergames to design **deceptive strategies with provable mission guarantees**. Game theory for deception and counter-deception has applications in military operations, contested search and rescue, and the design of secured cyber networks — including industrial control systems — that use deception mechanisms.

{% include video id="J6JVcfapAcE" provider="youtube" %}

### Related work

1. {% reference li2022dynamic %}
