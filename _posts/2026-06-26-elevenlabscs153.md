---
layout: post
title: ElevenLabs Mati Staniszewski on Audio AI (CS153 S2026)
date: 2026-06-26 16:55:00-0400
description: Mati describes the state of audio AI in 2026, his pathway, and what the company is doing in the future.
categories: frontierSystems
giscus_comments: false
related_posts: false
---

The first guest speaker is Mati Staniszewski, Cofounder of ElevenLabs. yes that same elevenlabs that seems to be at every hackathon in the GTA. it also got moderately viral, for its AI voice stuff.

ive tried it out before, its really optimized. like all you do is send an api request and you can get audio output seriously fast. although the company is really diversified (applications are endless with AI text / audio models), its not really focused one one thing. but it kinda makes sense, I think ElevenLabs is trying to get the a fat market share before finding their niche...

lets see Mati's mindset

# Mati origin story

Did PhD and worked at some big company and found a co founder somewhere (very generic)

as a polish kid:
- wanted to watch well acted dubbed movies

the next step? it is to figure out
1. research potential
2. demand

after talking to people:
- dubbing is complicated (need 3 models patched together. sound to text, translate, then text to sound)
- creators want to edit their own audio too instead of just dubbing
We decided to zero in on focusing on text to speech

our innovations:
- prompt LLM to take context, and decide its own voice characteristics
- took ideas from academic research and kept prototyping

# what is elevenlabs
purpose:
- build products and research AI foundation models for voice systems

how they got popular?
- tried to involve the community at every step. got popular by testing products via Discord bots, for free.
- they stayed problem-obsessed, focused on SOTA voice systems

# elevenlabs roadmap
2022 - research how to bring context from text
2023 - test text to speech narration for book authors
2024-25 - zero in on translating speeches in real time

### 2026 - building a SOTA approach
we have 2 approaches:
Fused approach
- 1 model handles all tasks (to text, translate, etc.)
- it is faster but not reliable or trackable

Cascaded approach
- patch multiple LLMs together
- it is more reliable, and we can keep track of the model

### 2027+ emotionality and the reliability-latency trade-off
on emotionality
- we believe tech will automatically fix the computers ability to express emotions with context
- but it is still important to consider - how can you make interaction a truly real experience

on reliabilty-latency tradeoff - lets combine the fused and cascaded approach

Lets use the example of customer service rep:
- use fused approach for the initial, informal part of a conversation (ie. the small talk, where feel is important)
- the moment the convo needs a reliable action (payment), we swap to a cascaded approach to ensure the agent is correct

# what else is next
the great shift to platform value

As model improvements plateau, the value will shift to the platform itself
This involves:
- Deep Problem Solving: Providing creators and developers with tools to solve specific problems.
- Business Integration: Becoming the infra for business-to-audience conversation
- Market Positioning: Mati envisions a future where three to five major platforms serve the world's conversational needs, similar to how a few major companies dominate cloud computing 

The ‘next big thing’ is not a platform - its blurring the line between tools and platforms
- in the future, the value is not in research, but in building the pipes around it. Think about valuable knowledge bases, communication pipelines, and constantly evaluating the AI

## random
- China has attempted distillation attacks (trying to extract the intelligence of a model to replicate it) on Western companies like ElevenLabs

# extra thoughts
Frontier systems can innovate without massive compute at the start. All you need is to obsess over a problem

Not all ai is end to end (think instead of prompt -> result, the user has more control on the AI)
- stop being limited in what AI can do, and try to have it actually assist the human. for example customer service routing, instead of handling all of the customers


# anjey trying to relate this back to systems somehow
In the systems world there are 2 types of people (they both have a collaborative point of view)
- You want to be one of the hyper scalers or legacy companies

Elevan labs has dmall teams, each have discretion to take action
- Revenue scales with deployment (systems level perspective)

Its still hard to predict if we get money though
- But if you are surrounded by capable people - you can predict they will be successful
- Always work backwards from the value you deliver to the customer. Never from the cost it takes to run
- You want to profit 1/10th of what you deliver