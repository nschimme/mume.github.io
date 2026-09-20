---
title: "RPG Dynamics Lab 1: From Tabletop to Digital - Adding Dimensions | Educator Portal"
description: Complete 45-minute Game Design lab analyzing how computer code adds real-time combat, spatial fog-of-war, and automated state math that human Dungeon Masters cannot execute manually.
---

# 🎲 RPG Dynamics Lab 1: From Tabletop to Digital - Adding Dimensions

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

1. Launch the <a href="https://mume.org/play" target="_self" rel="external">MUME Web Client</a>.
2. Execute the following observation sequence in-game:

### Observation 1: Spatial & Lighting Test
* Inspect your inventory (`inventory`) and room (`look`).
* Extinguish or drop your light source (or walk into an unlit dark room).
* Observe how the server dynamically alters environmental feedback.

### Observation 2: Real-Time Speed & Tick Test
* Type `score` and observe your Hit Points, Mana, and Movement points.
* Initiate movement across multiple rooms (`n`, `e`, `s`, `w`). Notice how Movement points deplete dynamically in real time and regenerate when sitting or resting (`rest`).

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

## 📊 6. Teacher Answer Key & Assessment Rubric

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Observation Verification** | 3 pts | Terminal log submitted proving active in-game observation of digital mechanics. |
| **Dimension Analysis** | 4 pts | Clear identification of real-time ticks, hidden information, or state math. |
| **Tabletop Comparison** | 3 pts | Well-articulated explanation of why pen-and-paper games cannot execute the mechanic in real time. |
