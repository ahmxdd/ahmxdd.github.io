---
layout: post
title: Jensen Huang Nvidia (Compute behind intelligence) (CS153 S2026)
date: 2026-07-08 15:30:00-0400
description: Jensen joins us today to discuss compute in detail
categories: 
giscus_comments: false
related_posts: false
---

Watching Jensen's lecture was cool. Some things i noticed: Jensen talks for 99% of the lecture, in past lectures Anjey usually steered the conversation. He insisted on saying what he wanted to say over taking questions. 

# The old days

Computer Design stayed the same for 64 years
- but now computers respond + take initiative

So in the past you had people working on specialized topics.

## New: Codesigning
But now to make good chips, people must work together
- Ex. you need microprocessor engineers and compiler engineers working together

You can even outperform Moores Law with codesign

## are the old days useless?
- Although the first principles you learn are exhausted in processor deisng, they are still IMPORTANT

# how can open source models improve MFU
When asked how the open-source ecosystem can improve Model Flops Utilization (MFU) without being a vertically integrated giant that controls the entire hardware and software stack, Jensen flipped the premise of the question entirely.

HIGH MFU IS NOT THE GOAL (MFU is % of GPU USAGE)
- Id prefer a model that does better in less compute

Overprovisioning to fight Amdahl's Law
- Large data centers handle shifting bottlenecks across raw flops, memory bandwidth, memory capacity, and network capacity.
- To avoid being stalled by a single bottleneck (Amdahl's Law), you want to overprovision your compute. Flops are functionally cheap; what you are actually paying for is bandwidth and architecture

Instead, focus on real-world evaluations—such as maximizing intelligence delivered per watt—and build architectures that balance multi-domain capability without over-fitting to a single problem
- So having good ‘taste’ is valuable - enjoyment , trial and error, what should we not do , etc. ITS AN ART

# the evolutionary line of NVIDIA's chips
each generation of NVIDIA solves a bottleneck from first princples
Hopper ->      Blackwell->      Vera Rubin->    Feynman
(Pre-training) (LLM Inference) (AI Agents)  (Swarm of Agents)

Hopper is built for training massive foundation models
- told it was a bad idea to build a system nobody could afford
- but it paid off

Blackwell
- LLM decoding required massive bandwidth, so they put 72 chips (NVLink 72) to act as a GPU together

Vera Rubin
- AI agents rely on context + memory, but copying over the network is too slow.
- Rubin connect storage directly to the processor. when traditional GPU invokes an AI agent, it is stuck sitting idle, waiting for that CPU to respond.  

- Vera CPU: Instead of hundreds of slow parallel cores, it focuses on providing ultra-low-latency, high-performance single-threaded execution per core so tools return results to the GPU instantly

Feynman
- we transition to swarms of agents, controlled by Feynman

# Jensens' intuition Framework

Observe the Shift: Watch real-world deviations (e.g., AlexNet crushing traditional computer vision)

Deconstruct to First Principles: Strip away legacy assumptions (e.g., "CPUs must be built for traditional cloud servers")

Identify the Computing Pattern: Map out how the new software behaves—does it need raw computing power, extreme memory bandwidth, or hyper-low single-threaded latency?

Build the Mental Model:
    - What am i observing? Reason back to first principle
    - Whats going to happen next? What else can it solve? What does it mean to computers
    - Keep iteration until first principles until you get a mental model on computing for a domain !


Work Backwards to System Design: Build the specialized chips, fabrics, and software stacks to support that future completely.

# college advice
What should students focus on?
- don't focus on your passion
- If you have a passion sure, but finding a passion is too high a bar
- Just do whatever you're good at

Condition yourself to always look to get somewhere better no matter how hard
- Ie. suffering teaches u resilience
- Ur family, and job needs u to be resilient , u need to work that muscle 
- Dont seek for just joy but suffering and pain
- 90% of my job is hard, and i do not enjoy (Jensen)

# importance of democratizing Chips

Everyone already has NVIDIA chips, there is nothing wrong with selling globally

people who say we don't know how AI works is a liar

Shouldn't people in US get first access to CHIPS? - NO
- but if the dean of Stanford orders a bunch of chips, I'll deliver

If someone orders chips we DELIVER 100%.
BUT THE ISSUE IS: THE SYSTEM IS NOT READY TO DELIVER COMPUTE

For example, at universities everyone gets fundings but gets compute only for themselves.
- We should aggregate compute and have a supercomputer that everyone shares by the cloud. It takes a large investment which nobody is willing to make.