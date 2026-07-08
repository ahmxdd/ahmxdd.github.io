---
layout: post
title: Toward Unified Intelligence Systems with Amit Jain (Luma)
date: 2026-07-07 15:30:00-0400
description: Amit Jain discusses Luma's path from 3D capture to unified multimodal intelligence systems.
categories: frontierSystems
giscus_comments: false
related_posts: false
---

Cofounder of Luma, Amit Jain, gives his lecture. we talk in detail about the idea and necessity of a unified model.

# Origin story

Amit saw that if you combined language model scaling with differentiable 3D learning, you could create a training loop capable of optimizng EVERY observation in the universe.

The goal is move away from traditional 3D reconstruction and use generative models to make 3D representations (like point clouds and meshes).

Amit's point: if a system can learn about the universe, it can generate it.

## Luma's beginning by capturing 3D Data

Luma released the Luma 3D Capture app, which quickly became popular by being the first to productionize NeRF (Neural Radiance Fields) and Gaussian Splats for everyday users.

But it can't keep up with exisiting data growth

## Pivot to generative video

Following Nvidia's Hopper architecture, Luma shifts to video generation.

Amit sees video as a 3D medium (2 spatial dimensions and 1 time dimension).

Released Dream Machine, a video gen model.

# how to achieve unified intelligence

By 2025, we realized pure video models are just pixel generators.

To create more understanding, we need UNIFIED intelligence.

In the future we use a single transformer backbone where all multimodal data are encoded in the same space.

# differentiable world learning

for deep learning to exist, a funciton must be differentiable so it works with gradient descent
- transformers use gradient descent really well


# the luma factory
also humans are very picky in what they like
- Luma monitors what users likes, CONSTANTLY, and uses this to update their model

The pipelien is also standard: pre, mid, and post training.
- it is trained on visual and audio simulataneously, on 30 petabytes.

what we do differently:
- instead of scaling parameters (other companies), we operate on subscale compute and data infra
- they dont focus on heavy domains like code.

# the understanding and generation chasm 
- VLM can understand image, but not generate
- image gen models can create visuals but can't reason about it
- LLMs cant understand visual

the answer is clear, we need to stuff all modalities on transformer backbone.

BUT is extremely capital intensive.
- Whoever pays the massive upfront premium to build a unified physical world model will completely bypass text-only systems and own the foundational tech for both media creation and robotics

# random advice
People do their best work when they are unconstrained
    - Real creators produce so much work and you can’t measure the value of it
    - If you measure everything you produce, you’ll never be a creator

# if your arch can't scale with compute + data it dies

thats why theres a graveyard of visual architectures (GANs)

    - GANs are dead because they are rigid: GANs are like two networks aggressively fighting each other. They rely on old convolution-based layers that break when you try to make them bigger. They don't scale.  

    - Diffusion models are hitting a wall: Even though diffusion powers today's popular image models, Amit claims its physics don't scale well. Diffusion has "bad habits" when generating long video or complex timelines, meaning pure diffusion is also on its way out

THE ONLY REPLACEMENT for issue is a UNIFIED MODEL.

# random, but whats a possible industry for unified world models?

Hollywood is dead. They act like private equity firms—spending $500 million to produce 5 sequels because they are scared of new ideas.  

Netflix won by taking smaller budgets and launching 800 productions a year to see what sticks.  

Amit: Physical movie production is insanely expensive and slow. Luma's unified world model allows a director to test 500 different physical scenes, explosions, or alternative story timelines unconstrained by costs.