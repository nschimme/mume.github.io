---
title: STEM & Computer Science Curriculum Track | Educator Portal
description: Computer Science curriculum modules for high school AP CS Principles and college CS101/CS201 using MUME text environment for CLI aliases, RegEx capture groups, and Finite State Machines.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/mudlet@2x.png" alt="CS Scripting Environment" />
</div>

# 💻 STEM & Computer Science Curriculum Track

<div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0;">
  <span style="border: 1px solid rgba(215, 166, 63, 0.4); background: rgba(215, 166, 63, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: var(--vp-c-brand-1);">
    🏷️ AP CSP: AAP-1, AAP-2, AAP-3, CRD-2
  </span>
  <span style="border: 1px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #60a5fa;">
    🏷️ CSTA: 3A-AP-16, 3B-AP-14, 3B-AP-15
  </span>
  <span style="border: 1px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #34d399;">
    🏷️ College CS: CS101 / CS201 / Data Structures
  </span>
</div>

Welcome to the **MUME Computer Science Curriculum Track**. Text-based MUDs are ideal active-learning sandboxes for teaching fundamental computing concepts—from command-line parameter parsing to regular expression pattern matching, finite state automata, and graph pathfinding algorithms.

This track maps directly to national learning standards including **AP Computer Science Principles (AP CSP)**, **CSTA K-12 Computer Science Standards**, and **Introductory College CS (CS101 / CS201)**.

---

## 📅 Curriculum Options: 45-Min Labs vs. 1-Week Unit Block

Educators can deliver these modules as standalone 45-minute lab sessions or combine them into a comprehensive 5-day unit project:

```mermaid
graph LR
    A["🖥️ MUME Stream"] --> B["🔍 RegEx Engine<br>^\d+H \d+M"]
    B --> C["📊 Capture Variables<br>hp, mana"]
    C --> D["⚙️ FSM Evaluator<br>State Transition"]
```

```mermaid
graph LR
    D1["Day 1: CLI & Aliases"] --> D2["Day 2: RegEx Captures"]
    D2 --> D3["Day 3: Triggers & Actions"]
    D3 --> D4["Day 4: State Automata"]
    D4 --> D5["Day 5: Capstone Script"]
```

### Option A: Express 45-Minute Single Period Labs
* **Lab 1 (45 min):** [Command-Line Interfaces & Variable Parameter Aliases](./lab-1-aliases)
* **Lab 2 (45 min):** [Regular Expressions & Pattern Capture Groups](./lab-2-regex)
* **Lab 3 (45 min):** [Event-Driven Triggers & Finite State Machines](./lab-3-parsing)
* **Lab 4 (45 min):** [Client Automation & Graph Pathfinding](./lab-4-graph-pathfinding)

### Option B: 1-Week Integrated Unit Blueprint

| Day | Topic & Activity | Student Output |
| :--- | :--- | :--- |
| **Day 1** | **CLI & Macro Abstraction:** Master command input, positional parameters, and wildcard substitution in native aliases. | Executable alias library script. |
| **Day 2** | **Pattern Matching & Regular Expressions:** Write regex patterns to capture dynamic game stream parameters (`HP`, `Mana`, `Movement`). | Verified RegEx test suite. |
| **Day 3** | **Finite State Automata:** Connect RegEx capture groups to conditional state variables and automated FSM safety loops. | Mudlet Lua event trigger plugin. |
| **Day 4** | **Graph Theory & Pathfinding:** Analyze spatial room grids as directed graphs using BFS / Dijkstra automapper algorithms. | Graph traversal calculation worksheet. |
| **Day 5** | **Capstone Project & Code Review:** Combine aliases, regex, state machines, and pathfinding into an automated Middle-earth Assistant. | Submitted script & peer code review. |

---

## 🎯 Standards Mapping Matrix

| MUME CS Lab Module | AP CS Principles Concepts | CSTA Standards | CS101 / CS201 Core Topics |
| :--- | :--- | :--- | :--- |
| **Lab 1: Aliases & CLI** | AAP-1 (Variables & Assignments), AAP-2 (Procedural Abstraction) | 3A-AP-16, 3A-AP-17 | Command-Line Interfaces, Parameter Passing, String Substitution |
| **Lab 2: RegEx Captures** | AAP-3 (String Manipulation), DAT-1 (Data Representation) | 3B-AP-14, 3B-AP-21 | Regular Expressions, Lexical Analysis, Capture Groups |
| **Lab 3: State Automata** | CRD-2 (Event-Driven Programming), AAP-4 (State Control) | 3B-AP-15, 3B-AP-19 | Event Triggers, Finite State Machines (FSM), Automata Theory |
| **Lab 4: Graph Pathfinding** | AAP-3 (Algorithms), DAT-2 (Graph Structures) | 3B-AP-16, 3B-AP-20 | Graph Theory, BFS/Dijkstra Pathfinding, Room Topography |

---

## 📑 CS Track Lab Index

<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">

<div style="border: 1px solid rgba(215, 166, 63, 0.3); border-radius: 8px; padding: 1.25rem; background: rgba(255,255,255,0.03);">
  <h3>Lab 1: CLI & Parameter Aliases</h3>
  <p>Teach command-line interface fundamentals, procedural abstraction, and positional wildcard parameters using native MUME aliases.</p>
  <a href="./lab-1-aliases" class="vp-button brand" style="display: inline-block; margin-top: 0.5rem;">Launch Lab 1 →</a>
</div>

<div style="border: 1px solid rgba(215, 166, 63, 0.3); border-radius: 8px; padding: 1.25rem; background: rgba(255,255,255,0.03);">
  <h3>Lab 2: RegEx & Pattern Matching</h3>
  <p>Master regular expressions, anchors, wildcards, and numerical capture groups by parsing dynamic MUME prompt streams.</p>
  <a href="./lab-2-regex" class="vp-button brand" style="display: inline-block; margin-top: 0.5rem;">Launch Lab 2 →</a>
</div>

<div style="border: 1px solid rgba(215, 166, 63, 0.3); border-radius: 8px; padding: 1.25rem; background: rgba(255,255,255,0.03);">
  <h3>Lab 3: Triggers & State Machines</h3>
  <p>Build event-driven scripts and Finite State Machine (FSM) automata to model automated gameplay state transitions.</p>
  <a href="./lab-3-parsing" class="vp-button brand" style="display: inline-block; margin-top: 0.5rem;">Launch Lab 3 →</a>
</div>

<div style="border: 1px solid rgba(215, 166, 63, 0.3); border-radius: 8px; padding: 1.25rem; background: rgba(255,255,255,0.03);">
  <h3>Lab 4: Graph Pathfinding</h3>
  <p>Model spatial rooms as nodes and exits as edges using Breadth-First Search (BFS) and Dijkstra shortest-path automapper algorithms.</p>
  <a href="./lab-4-graph-pathfinding" class="vp-button brand" style="display: inline-block; margin-top: 0.5rem;">Launch Lab 4 →</a>
</div>

</div>
