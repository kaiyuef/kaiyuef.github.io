---
layout: page
title: Research Experience
subtitle: My Research Projects and Collaborations
---

## Research Experience

### Medical Agent: New system to better guide patients on Pre-diagnosis and triage
**Supervisor:** Professor Chen Zhao  
**Institution:** NYU Shanghai  
**Date:** September 2025 – Present

This project builds a **Chinese-language, LLM-driven medical intake assistant** that combines ReAct-style reasoning with a structured medical knowledge base to conduct stepwise interviews, avoid repeated questions, and perform L1–L3 risk stratification.

**Key Contributions:**

- Developed a **full-stack medical dialogue system** with Flask backend (JWT auth, CORS, per-user persistence) and lightweight chat/admin frontends.
- Designed a **ReAct-style reasoning pipeline** grounded on structured database, enabling dynamic disease retrieval and rule-based 0→5 interview triage flow.
- Implemented an **automated question reviewer** leveraging checklist indices for intent validation, MECE option coverage, step ordering, and structured feedback parsing.
- Enforced **safety & governance controls**: database-prioritized responses, search transparency, diagnosis/medication timing limits, input sanitization, and reasoning-vs-patient output separation.

### AI4Research
**Supervisor:** Professor Arman Cohan, Yilun Zhao
**Institution:** NYU Shanghai, Yale University  
**Date:** May 2025 – Present

This project introduces an **autonomous agent** that discovers new algorithms via dual-reward (execution + peer review); achieved superhuman results on open-ended algorithmic problems and released the AlphaResearchComp benchmark.

**Key Contributions:**
- Co-designed **AlphaResearch**, an autonomous research agent capable of discovering new algorithms through dual-environment optimization (program execution + simulated peer review).
- Built the **AlphaResearch-RM-7B reward model** trained on 24K ICLR peer-review records, enabling real-world “review-style” evaluation of generated research ideas.
- Constructed **AlphaResearchComp**, a benchmark of 8 open-ended algorithmic discovery tasks with reproducible evaluation pipelines.
- Demonstrated **superhuman algorithm discovery** on 2/8 tasks (e.g., packing circles), surpassing best-known human and AlphaEvolve baselines.

### AI4Physics Research: Reasoning and Evaluation in Physics Problem Solving
**Supervisor:** Professor Chen Zhao, Professor Arman Cohan, Professor John Sous, Yilun Zhao  
**Institution:** NYU Shanghai, Yale University  
**Date:** December 2024 – Present

This collaborative project explores the application of artificial intelligence techniques to solve complex physics problems, focusing on **computational physics, scientific modeling, and reasoning capabilities** in physics problem-solving.

**Key Contributions:**
- Conceived and led the design and construction of **PHYSICS**, a benchmark of 1,297 expert-annotated PhD-level physics problems covering six subfields.
- Developed a **robust automated evaluation framework** integrating SymPy-based symbolic equivalence checking and GPT-based semantic verification.
- Conducted a **systematic large-scale evaluation** of 33 open-source and proprietary foundation models, identifying key reasoning limitations in physics problem solving.
- Proposed and tested **RAG-based knowledge augmentation** and self-reflection prompting to enhance model performance and interpretability.

---

### RAG-Augmented Reasoning for Domain-Specific Multi-Modal QA
**Supervisor:** Professor Chen Zhao  
**Institution:** NYU Shanghai  
**Date:** September 2024 – Present

This project focuses on developing **advanced Retrieval-Augmented Generation (RAG) systems** to improve question-answering capabilities across multiple modalities in domain-specific contexts.

**Key Contributions:**
- Proposed **SPORTREASON**, a benchmark of 3,000 human-verified multi-evidence QA pairs requiring reasoning across Wikipedia tables, passages, and infoboxes.
- Designed a **multi-modal retrieval corpus** (200K entries) with hybrid alignment pipeline integrating BGE-M3, FAISS, and fuzzy-matching verification.
- Developed a **two-stage LLM-human QA construction pipeline** with Gemini 2.5 Flash and expert annotators for logical and numerical soundness.
- Conducted a **comprehensive evaluation** of 9 retrievers, 5 rerankers, and 3 agentic RAG systems (Search-o1, IRCoT, R1-Searcher), identifying key retrieval bottlenecks in multi-modality reasoning.

---

### Fact Verification on Multi-Step Reasoning Questions
**Supervisor:** Professor Chen Zhao  
**Institution:** NYU Shanghai  
**Date:** September 2023 – December 2024

This project focused on developing **robust fact verification systems** for complex multi-step reasoning questions, improving the accuracy and reliability of AI systems in handling intricate logical reasoning tasks.

**Key Contributions:**
- Designed **fact verification algorithms** for multi-step reasoning.
- Improved **system accuracy** on complex logical reasoning tasks.
- Developed **evaluation frameworks** for fact verification systems.

---

## Research Interests

- **AI4Science**: Applying artificial intelligence to accelerate scientific discovery and research processes
- **Reasoning**: Developing AI systems with enhanced logical reasoning and problem-solving capabilities
- **Multimodal LLMs**: Exploring large language models that can process and understand multiple types of data simultaneously

---

## Collaborations

- **NYU Shanghai**: Working with Professor Chen Zhao on RAG and QA systems
- **Yale NLP**: Collaborating with Professor Arman Cohan and Professor John Sous on AI4Physics research
- **Interdisciplinary Research**: Bridging computer science and physics through AI applications

---

<a href="/" class="back-link">← Back to Home</a>
