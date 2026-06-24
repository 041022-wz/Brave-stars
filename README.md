<p align="center">
  <img src="Banner.jpg" alt="Brave-Stars Banner" width="100%" />
</p>

# Brave-Stars

Special Education · Open Resources · AI Empowerment


## Overview

**Brave-Stars** is an online platform for special education resource sharing and AI-powered support. It addresses three critical challenges in China's special education landscape:

- **Uneven distribution of resources** – Teachers in underdeveloped areas lack access to quality training materials and professional development opportunities.
- **Delayed diagnosis** – Most schools rely on subjective teacher experience rather than data-driven assessment tools for identifying learning disabilities.
- **Lack of family support** – Parents of children with special needs receive little professional guidance on how to support their children's development at home.

The platform provides three core modules:

1. **Special Education Course Library** – Curated video courses, teaching strategies, and research papers from domestic and international sources.
2. **Community** – A space for teachers, parents, and researchers to connect, share experiences, and ask questions.
3. **AI Chat** – A prototype affective AI system for emotional support and conversation practice, designed with special education contexts in mind.


## Demo

[![Brave-Stars Demo](https://img.youtube.com/vi/PLACEHOLDER/0.jpg)](https://youtu.be/PLACEHOLDER)

*Click the image above to watch a 45-second walkthrough of the platform.*

> Replace `PLACEHOLDER` with your YouTube video ID after recording your demo.


## Background & Motivation

My mother works in special education. Through her, I have seen what it means for families to raise a child with autism or intellectual disabilities — the financial strain, the sleepless nights, the anxiety about whether their child will ever live independently. But I have also seen what early intervention can achieve: a child who could not speak at age four, after years of structured support, was able to write a sentence by age seven.

That transformation was not a miracle. It was the result of consistent, professional, and individualized attention. Yet in China, millions of children with developmental delays never receive such support — because there are simply not enough trained teachers to reach them.

This project is my first step toward using technology to close that gap:

- Build a **knowledge hub** to lower barriers to high-quality special education resources.
- Integrate **AI tools** (NLP, LLMs, recommendation systems) for screening, personalized learning, and teacher assistance.
- Create a **complete support ecosystem** — from early screening to intervention and community connection.


## Platform Features

### Special Education Course Library

The course library aggregates video lectures, case studies, and teaching strategies from both domestic and international experts. Users can browse courses by topic, watch embedded videos, and access recommended research papers. The library is designed to be a one-stop resource for teachers in under-resourced regions who lack access to professional development.

### Community

The community module includes a registration system and a discussion feed where members can share experiences, ask questions, and post updates. It simulates a real-world forum environment, demonstrating how educators and parents can connect across geographic boundaries.

### AI Chat

The AI chat module is a prototype affective computing system. It detects user intent from text input using keyword matching and generates empathetic responses. The current version demonstrates:

- Sentiment analysis (stress, anxiety, encouragement-seeking)
- Context-aware conversation simulation
- A modular architecture ready for LLM integration


## My Role

This is a solo project. I handled everything from concept to implementation:

- Needs analysis and product definition
- UI/UX design and front-end development (HTML, CSS, JavaScript, Bootstrap)
- Interactive prototyping (Modals, forms, dynamic content switching)
- Documentation and portfolio preparation

During development, I encountered challenges with LLM deployment and consulted a university professor. He recommended starting with Llama, which led to my internship at Hanyi Fonts (AI LLM department), where I gained hands-on experience in multilingual data pipelines for LLM training.


## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Frontend Framework | Bootstrap 5.3 |
| Core Languages | HTML5, CSS3, JavaScript |
| Icons | Bootstrap Icons |
| Interactivity | Vanilla JS (DOM manipulation, event handling) |
| Version Control | Git + GitHub Pages |
| Future Backend | Flask / FastAPI + Ollama / Llama.cpp |


## Technical Implementation

### Page Architecture

The platform consists of four main pages:

- **index.html** – Landing page with hero section, feature cards, and modal-based content previews.
- **special-education.html** – Course hub with sidebar menu, dynamic video switching, and research paper recommendations.
- **community.html** – Registration form with client-side validation and a simulated discussion feed.
- **aichat.html** – Interactive chat interface with intent detection and simulated AI responses.

### Key Technical Decisions

- **No external dependencies** beyond Bootstrap and Bootstrap Icons — all interactivity is implemented with vanilla JavaScript to keep the project self-contained and easy to deploy.
- **Modal-based previews** on the homepage allow users to explore content without navigating away from the main interface.
- **Dynamic video switching** in the course library uses a single iframe and JavaScript to update content based on user selection.
- **Client-side form handling** in the community module demonstrates front-end validation and dynamic content generation.


## Technical Roadmap

| Phase | Status | Description |
| :--- | :---: | :--- |
| Phase 1: Static Prototype | Done | UX validation, concept communication, portfolio showcase |
| Phase 2: Backend Integration | In Progress | Flask/FastAPI, user authentication, database (SQLite/PostgreSQL) |
| Phase 3: LLM Deployment | Planned | Ollama for local inference, fine-tuned on special education datasets |
| Phase 4: Pilot Deployment | Vision | Partner with 2-3 special education schools, collect feedback, iterate |


## 12-Month Project Timeline

| Timeline | Milestone | Key Tasks |
| :--- | :--- | :--- |
| Q3 2026 | Complete Prototype | Finish static prototype, share with special education teachers, iterate UX |
| Q4 2026 | Backend & LLM Integration | Build Flask/FastAPI backend, integrate open-source LLM via Ollama |
| Q1 2027 | Pilot with Schools | Partner with 2-3 schools, collect real-world data and feedback |
| Q2 2027+ | Scale & Open Source | Open-source the platform, expand to more schools |


## Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| LLM training resource constraints | Consulted professor → learned Llama → internship at Hanyi Fonts |
| Static page functionality limits | Planned backend integration for future versions |
| YouTube video accessibility in China | Embedded B站 videos for reliable access |
| Real-time chat simulation without a backend | Implemented client-side intent detection and response generation |


## Live Demo

<https://041022-wz.github.io/brave-stars/>


## Repository Structure
brave-stars/
├── index.html # Landing page
├── special-education.html # Course and paper hub
├── community.html # Registration and discussion feed
├── aichat.html # AI chat interface
├── style.css # Custom styles
├── script.js # Global JavaScript
├── Banner.jpg # README banner image
└── README.md # This file

## Status

- Version: v1.0 (concept prototype)
- Last Updated: June 2026
- Purpose: Graduate application portfolio

## License

MIT License © 2026 Wei Zheng
