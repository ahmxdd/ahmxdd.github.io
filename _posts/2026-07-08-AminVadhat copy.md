---
layout: post
title: The Discipline of Delivering Value per Gigawatt (Amin Vadhat) (CS153 S2026)
date: 2026-07-08 15:30:00-0400
description:
categories: 
giscus_comments: false
related_posts: false
---

Amin is behind the infrastructure of Google's TPU. He is described as the opposite of Jensen.

For compute, reliability/ availability matters the most, not usage.
- Again the same ideas appear: we measure in intelligence per dollar over usage.

Systems today arent perfect
- we over provice to guarantee reliability
- AI isn't standardized, so everyone has their own flavour of compute that isn't optimized

But froniet will gladly exchange reliability for more compute.
- the benchmark shifts to intelligence per dollar

# The Modern Amdahls Law
- infinite flops is not the answer, since your processors will starve. you need to balance your compute and pipelines

original: 1 MB/s of I/O for every million instructions per second. In today's hyperscale cluster, I/O is network I/O.

100% MFu is impossible because of unpredictable variations

since the industry is shifting to Sparse computation:
- modern hardware is deeply bottlenecked by memory bandwidth relative
- (in sparse computation) with flops, it requires hardware to move data for processing, CONSTANTLY. the superfast processors do their compute way too fast. this is logistically bad but in theory people think less compute = better

# supply chain never catches up
- companies commit to compute in 2/3 years in advance but always either under or over provide. you leave a lot of market on the table

# training vs serving footprints
- training needs heavy compute
- inference will eventually (as market prioritizes this) become fungible. Amin predicts the industry will activate any stranded energy sites (small) into serving.

# Googles Optical Switching

the tradiitonal way of moving data within data center:
- data breaks up into packet, and is routed by switches
- requires lots of delays and electrical power

optical circuit switching:
- a switch contains thousands of programmable mirrors
- to connect Cluster A to Cluster B, software tilts the mirrors to reflect a laser from one directly to the other.
- there is NO electrical processing delay

Advantage: dynamic fault tolerance
- if any node fails, you can instantly reroute the light beams to another available one.
- then you can patch up a healthy 'spare' rack

## End of general purpose AI chips

Previously, the industry relied on one flexible chip to handle both Training and Inference.

Because general-purpose chip improvements have slowed down, Google split its 8th-generation TPUs into two distinct, specialized hardware designs:  

TPU 8T (Training): Engineered with massive network pipes to handle heavy chip-to-chip data synchronization.  

TPU 8i (Inference): Structured with completely different memory-to-compute ratios to rapidly fetch model weights and serve individual user requests instantly.  

By tuning the physical wiring ratios (compute, memory, and networking) directly to the specific math of the software task, they achieve up to a 100× efficiency gain over generic processors.


# college advice
What should i work on?
    All problems are important . When he was in grad school, everyone said dont work in AI
Predicting future is hard
    Pick domain you are intrinsically excited about
    Passion carries you forward
    Algo, chip design, OS, model architecture, any place in Comp Sci all matters

