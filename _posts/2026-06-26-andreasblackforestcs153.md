---
layout: post
title: "From Academia to Black Forest Labs: Building Visual Intelligence"
date: 2026-06-26 15:30:00-0400
description: Andreas shares his path from research to startup execution in visual AI systems.
categories: frontierSystems
giscus_comments: false
related_posts: false
---

Andreas is a cofounder of frontier AI lab - Black forest labs. Black forest labs has a lot of open models, and also does some consulting, where they provide specialized visual AI models to companies.

# Andreas origin story

Andreas did an undergrad in mechanical engineering, and wanted to focus on AI for his PhD. He joined a small lab and studies visual model representation learning in visual modes.

Back in this day, it was all about who could write the paper.  Andreas' lab competed with companies like Google and OpenAI. His lab was quite small so they had to be strategic on what they compete on with big wigs who had much more resources.

His lab focused on finding representations that are equivalent to the pixel space, but much more efficient than tokens (make compute more efficient). This lead to latent generative models, which gave rise to stable diffusion, outdoing competitors. 

After this success, his labs next goal was purely focusing on building an image model that is 10 times better than current options. In fact his team spent 3 months just on Flux 1.

Now, he mentions that we need models that learn and interact like us, from natural representations (talking, visual, etc.). He advocates for multimodal models that will outdo everything and it (in theory) can provide a deeper natural understanding of physics as the model can use ANYTHING in the real world as an training example.

# The Best Image Model: Creation of Flux

Flux's training has pre, mid, and post-training.

Pre training
- has text and images

Mid training
- adds higher resolution and more capabilities

Post training
- includes offline distillation to be more efficient and match customer needs before deployment

From systems perspective:
Feedback loop is clsoed when the tech is used to solve real problems, providing data on what users care about.
Ex. Flux improved character consistency within 60 days, when they released Flux 1 Context, a special editing model.

# Next wave of models

Andreas says the purpose of shifting toward multimodal models is to move beyond content creation towards physical AI, robotics, and world simulation.

Historically, it has been difficult to get models to understand semantics.
Ex. when using a representation learning pretrained model, they were restricted with trying to match the transformer backbone to another model.
This technique was limited to a single modality (unimodal), such as just images
Because it relied on these specific pre-trained "anchors," the system was restricted to that specific domain and could not easily scale to understand how different types of data (like audio and video) relate to each other


Self Flow was discussed as a way of solving multimodal reasoning.

## Self Flow
While previous alignment techniques were restricted to a single modality, Self Flow allows a model to align its internal representations across multiple modalities.

This is done during pre-training to build a general representation of the world before adding specific tasks like "action prediction" (e.g., predicting a keystroke or robot movement) during mid-training.

Andreas reccomends this data labeling strategy:
- Pretraining (quantity): use lots of noisy data. Labels handled automatically
- Post-training (quality): shift to high quality data and human signals.

# Iterative denoising and model differences
Both diffusion and language models are iterative but:

Diffusion: iterative in an artificial time dimension that moves from noise to image.
- This is data inefficient - each example generate infinite potential losses across noise to data trajectory (you can distil from any time point)
    - But we can distil diffusion models better than language
    - BFL use latent adversarial distillation to reduce steps to generate image from 50 to 4 steps (we generate image extremely fast)

Language: iterative in direction of data, generating one token at a time. Tokens can be parallized so its data efficient
    - Con: Inference takes lots of time

# (Future) How do we build spatial intelligence in 3D world
Andreas believes that all a model needs to understand space is the ability to observe natural representations (video) and interact with objects. 3D representations are notoriously difficult
    - Existing 3D representations are narrow, inflexible, and static (point clouds)
    - while a model might develop an implicit 3D structure within its neural weights to understand the world, the interface for learning and interaction should remain natural (video/audio) rather than being forced through explicit 3D priors

# Overall thoughts

It is a common sentiment, but its clear Andreas agrees with the idea that a multimodal model should have a single transformer backbone rather than hack a bunch of good LLMs, VLMs, together.

On the 3D debate, Andreas mentions the importance of focusing on working with EXISTING training data over trying to make your own data sets. (this point interests me: i feel like there many companies focused on making datasets, which are doing quite well.) I guess his point his to make a foundation model it needs to be able generalize. Then at that point specialized datasets become valuable. Cool.

the trend with andreas: he says with frontier AI you optomize inference via architectural distillation, sicne image models used to be really data inefficeitn and slow at inference times.