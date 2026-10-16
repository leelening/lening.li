---
layout: single
permalink: /research/kinex/
title: "Kinex: One Agent for Any Robot"
description: "A robotics harness that connects coding agents to real hardware and simulators through skills, tools, and devices, including ROS 2 integration."
excerpt: "A robotics harness that connects coding agents to real hardware and simulators through skills, tools, and devices, including ROS 2 integration."
header:
  teaser: teasers/kinex.svg
---

**Kinex connects coding agents to robots.** Describe the hardware and the task in plain language; the agent can write and run code, observe the environment, and coordinate robot devices to carry out the task. It works with **real hardware**, **simulation**, and **ROS 2**.

[Project website](https://stacx-lab.github.io/kinex/){: .btn .btn--primary}
[GitHub](https://github.com/stacx-lab/kinex){: .btn}
[Documentation](https://stacx-lab.github.io/kinex/docs/){: .btn}

{% include figure image_path="/images/teasers/kinex.svg" alt="Kinex logo" width="420" %}

## From instructions to robot actions

Built on the Pi coding agent, Kinex organizes robot interaction into three layers:

- **Skills** provide task procedures and guidance that the agent can load when needed.
- **Tools** carry out perception, computation, and control, including code the agent writes for a task.
- **Devices** expose typed interfaces to robot hardware, simulators, and model services.

Arms, grippers, cameras, and mobile bases remain individually accessible. The agent combines them for each task and uses observations and execution feedback to decide what to do next. Existing ROS 2 packages can be reused through adapters, while RoboEnv exposes simulated robots through the same device interfaces.

## Demos and release

The [project gallery](https://stacx-lab.github.io/kinex/#gallery) shows real robots solving a pocket cube, transferring a test tube, collecting litter, hanging a cup, and sorting objects from text instructions.

**Kinex v1.0.0 was released on October 15, 2026.** The project is open source under the [Apache 2.0 license](https://github.com/stacx-lab/kinex/blob/main/LICENSE).
