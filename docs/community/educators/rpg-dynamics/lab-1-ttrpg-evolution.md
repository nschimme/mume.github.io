---
title: "RPG Dynamics Lab 1: From Tabletop to Digital - Adding Dimensions | Educator Portal"
description: Complete 45-minute Game Design lab analyzing how computer code adds real-time combat, spatial fog-of-war, and automated state math that human Dungeon Masters cannot execute manually.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/boromir-horn@2x.png" alt="Boromir Horn - TTRPG Heroic Archetypes" />
</div>

# 🎲 RPG Dynamics Lab 1: From Tabletop to Digital - Adding Dimensions

<div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0;">
  <span style="border: 1px solid rgba(215, 166, 63, 0.4); background: rgba(215, 166, 63, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: var(--vp-c-brand-1);">
    🏷️ College Game Design: Ludology & Technological Dimensions
  </span>
  <span style="border: 1px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #60a5fa;">
    🏷️ TTRPG Studies: D&D Evolution to Real-Time Networks
  </span>
</div>

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | Game Design, Game Studies, Interactive Media, TTRPG History |
| **Duration** | 45-Minute Single Period (or Days 1-2 of 1-Week Unit) |
| **Prerequisites** | None |
| **Primary References** | MUME Game Mechanics, D&D / TTRPG Rulesets |

---

## 🎯 1. Lab Overview & Objectives

Early digital roleplaying games were created by tabletop enthusiasts (*Dungeons & Dragons* players) attempting to digitize pen-and-paper mechanics. However, moving from paper to computer networks allowed developers to unlock **technological dimensions** that a human Dungeon Master (DM) cannot manage manually.

In this lab, students log into MUME to observe three technological dimensions where server software surpasses physical tabletop constraints:
1. **Real-time simultaneous action execution** (replacing turn-based initiative queues).
2. **Enforced spatial fog-of-war and hidden information** (impartial line-of-sight, dynamic lighting, and weather).
3. **Automated encumbrance and multi-variable state math** (stamina, weight capacity, and spell tick calculations).

---

## 💡 2. The 3 Technological Dimensions

### Dimension A: Real-Time Simultaneous Action
In a physical TTRPG, combat requires a human DM to pause the game, collect initiative rolls, and process player turns sequentially. In MUME, time flows continuously in fractions of a second (pulse ticks). Attacks, movement, spell casting, and fleeing happen concurrently for dozens of players and NPCs simultaneously.

### Dimension B: Enforced Hidden Information & Line-of-Sight
A human DM struggles to maintain complete secrecy when displaying a physical grid map. In MUME, line-of-sight and visibility are strictly enforced by code:
* If a room is dark and a player carries no light source, description text is obscured (`It is pitch dark...`).
* Weather conditions (fog, rain, nightfall) dynamically modify movement costs and visibility radius without human memory bias.

### Dimension C: Automated State Math & Encumbrance
Calculating equipment weight down to ounces, tracking coin weight, monitoring hunger/thirst degradation, and adjusting movement speed based on terrain difficulty require thousands of calculations per minute—tasks handled invisibly in real-time by MUME's C++ server loop.

---

## 🧪 3. Guided Gameplay Observation (20 Minutes)

::: info 🏰 Classroom Sandbox Note
Students can execute these observation tests in the peaceful streets of **Black Hill Village** or **Bree Town**, adjusting torches and resting on tavern benches without combat risk.
:::

1. Launch the <a href="https://mume.org/play" target="_self" rel="external">MUME Web Client</a>.
2. Execute the following observation sequence in-game:

### Observation 1: Spatial & Lighting Test
* Inspect your inventory (`inventory`) and room (`look`).
* Extinguish or drop your light source (or walk into an unlit dark room).
* Observe how the server dynamically alters environmental feedback.

### Observation 2: Real-Time Speed & Tick Test
* Type `score` and observe your Hit Points, Mana, and Movement points.
* Initiate movement across multiple rooms (`n`, `e`, `s`, `w`). Notice how Movement points deplete dynamically in real time and regenerate when sitting or resting (`rest`).

<MumeSession>
<pre class="session" v-pre>
> <span class="command">look</span>
<span class="look">Dark Forest Path [N, S, E]</span>
<span class="narrate">The sun sets behind the Misty Mountains. Shadows engulf the forest path.</span>
<span class="look">It is pitch dark...</span>

> <span class="command">score</span>
<span class="stat">HP: 110/110, Mana: 45/45, Movement: 32/120 (Exhausted from heavy marching)</span>

> <span class="command">rest</span>
<span class="narrate">You sit down and rest your tired feet.</span>
<span class="stat">[ Tick ] You feel your energy returning... Movement: 72/120</span>
</pre>
</MumeSession>

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Analysis Assignment:**
Select ONE mechanics interaction you observed during your MUME session that would be impossible or excruciatingly slow to run in a live pen-and-paper *Dungeons & Dragons* session.

Write a 2-paragraph comparative analysis addressing:
1. How MUME automates the rule/math on the server side.
2. Why running this exact rule manually at a tabletop would destroy gameplay pacing or overburden the DM.

---

## 📝 5. Verification & Submission Requirements

Submit your comparative analysis along with:
* A pasted excerpt of your MUME terminal output demonstrating one of the 3 dimensions (real-time ticks, lighting changes, or stat math).

---

## 📥 Teacher Resource Download

<div style="border: 1px solid rgba(215, 166, 63, 0.35); border-radius: 8px; padding: 1.25rem; background: rgba(215, 166, 63, 0.05); margin: 1.5rem 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
  <div>
    <h3 style="margin: 0; font-size: 1.1rem; color: var(--vp-c-brand-1);">📄 RPG Lab 1 Teacher Resource Pack</h3>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.88rem; color: var(--vp-c-text-2);">Includes printable TTRPG vs. MUD comparison charts, slide decks, discussion prompts, and grading rubrics.</p>
  </div>
  <a href="../student" class="vp-button brand" style="padding: 0.5rem 1.2rem; font-size: 0.9rem; text-decoration: none;">Download Teacher Pack 📥</a>
</div>

---

::: details 🔑 Teacher Assessment Rubric (Click to Expand)

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Observation Verification** | 3 pts | Terminal log submitted proving active in-game observation of digital mechanics. |
| **Dimension Analysis** | 4 pts | Clear identification of real-time ticks, hidden information, or state math. |
| **Tabletop Comparison** | 3 pts | Well-articulated explanation of why pen-and-paper games cannot execute the mechanic in real time. |
