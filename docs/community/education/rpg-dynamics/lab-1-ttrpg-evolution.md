---
title: "RPG Dynamics Lab 1: From Tabletop to Digital - Armor, Realism & IT Evolution | Educator Portal"
description: Complete 45-minute Game Design lab analyzing the evolution from Fighting Fantasy gamebooks and classic D&D (BECMI/AD&D) to text MUDs and VTTs, focusing on Armor Class Evasion vs Damage Absorption.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/boromir-horn@2x.png" alt="Boromir Horn - TTRPG Heroic Archetypes" />
</div>

# 🎲 RPG Dynamics Lab 1: From Tabletop to Digital - Armor, Realism & IT Evolution

<div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0;">
  <span style="border: 1px solid rgba(215, 166, 63, 0.4); background: rgba(215, 166, 63, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: var(--vp-c-brand-1);">
    🏷️ Interdisciplinary RPG Design (e.g., JINS350 Framework)
  </span>
  <span style="border: 1px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #60a5fa;">
    🏷️ TTRPG History: Fighting Fantasy, BECMI, AD&D, MUDs & VTTs
  </span>
</div>

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | Game Design, Interdisciplinary Ludology, Interactive Media, TTRPG History |
| **Duration** | 45-Minute Single Period (or Week 1 Exploration of Term Paper Unit) |
| **Prerequisites** | None |
| **Primary References** | MUME Game Engine, Old-School D&D Rulesets (BECMI, AD&D 1e/2e), Puffin Fighting Fantasy Books, VTT Systems (FoundryVTT, QuestlineVTT) |

---

## 🎯 1. Lab Overview & Objectives

Roleplaying games evolved through distinct media formats—from single-player **Choose-Your-Own-Adventure** and **Puffin Fighting Fantasy** gamebooks, to tabletop systems (**Old-School D&D BECMI, AD&D 1e/2e**), real-time text-based MUDs (**MUME**), and modern **Virtual Tabletops (VTTs like QuestlineVTT, FoundryVTT, D&D Beyond Maps)**.

A central design friction in RPG history is **Realism vs. Playability**: balancing realistic real-world physics and military history against the cognitive burden placed on players and human Dungeon Masters (DMs).

In this lab, students evaluate the mechanical shift from **Armor Class Evasion** (D&D's abstract "harder to hit" model) to **Armor Damage Absorption** (MUME's material physics model where plate armor absorbs damage upon contact), examining how IT software automates complex physical formulas that human DMs cannot calculate in real time.

---

## 💡 2. The Evolution of RPG Systems & IT Automation

### A. Media Timeline: Gamebooks to VTTs
1. **Interactive Gamebooks (1980s):** Steve Jackson & Ian Livingstone's *Puffin Fighting Fantasy* books used dice, stat sheets, and branched paragraph choices for single-player automation.
2. **Tabletop RPGs (BECMI / AD&D 1e/2e):** Human DMs managed rulesets using paper, polyhedral dice, and spreadsheets to calculate THAC0, initiative, and encumbrance.
3. **Text MUDs (1990s–Present):** Servers like **MUME** introduced real-time multi-threaded game loops, managing thousands of simultaneous variable states (stamina decay, line-of-sight fog-of-war, weight, and armor mitigation).
4. **Modern VTTs (2020s):** Platforms like FoundryVTT and QuestlineVTT re-apply MUD-style automated line-of-sight lighting and database math back onto 2D/3D graphical tabletop grids.

```mermaid
graph LR
    A["📖 Puffin Fighting Fantasy<br/>Single-Player Branching Prose"] --> B["🎲 Old-School D&D (BECMI / AD&D)<br/>Human DM Turn-Based Tables"]
    B --> C["🏰 Real-Time Text MUDs (MUME)<br/>Automated Server C++ Loop"]
    C --> D["🖥️ Virtual Tabletops (FoundryVTT)<br/>Graphical Dynamic Lighting & Math"]
```

### B. Mechanics Focus: Armor as Evasion vs. Damage Absorption

| RPG System | Armor Model | Mechanics Math | Realism vs. Playability Trade-off |
| :--- | :--- | :--- | :--- |
| **Classic D&D (AD&D / 5e)** | **Evasion (Armor Class)** | Armor makes you "harder to hit" ($D20 \ge AC$). | **High Playability / Low Realism:** Fast tabletop resolution, but unscientific (heavy plate does not make a target invisible to weapon contact; it absorbs kinetic impact). |
| **MUME (Text MUD Engine)** | **Damage Absorption (%)** | Weapon hits contact body; armor reduces damage based on material type (Chain vs. Plate vs. Leather). | **High Realism / Automated Playability:** Server calculates kinetic mitigation per strike instantly, eliminating DM table calculation burden. |

---

## 🧪 3. Guided Gameplay & Spreadsheet Data Logging (20 Minutes)

::: info 🏰 Classroom Sandbox Note
Students do not need complex combat setups. You can log armor mitigation statistics by examining equipment stats and conducting peaceful practice combat or dummy sparring in **Black Hill Village** or **Bree**.
:::

1. Launch the <a href="https://mume.org/play" target="_self" rel="external">MUME Web Client</a>.
2. Open a spreadsheet application (Google Sheets / Excel) to log data.
3. Execute the following inspection commands in-game:

### Task 1: Inspect Armor Mitigation Values
* Type `equipment` and `examine armor` (or examine specific gear like a steel breastplate, leather jacket, or chainmail).
* Note the weight, material type, and protective absorption stats in your spreadsheet.

<MumeSession>
<pre class="session" v-pre>
> <span class="command">equipment</span>
<span class="stat">You are wearing:
  &lt;worn on body&gt;       a sturdy metal breastplate
  &lt;worn on arms&gt;       a pair of chainmail sleeves
  &lt;worn on legs&gt;       a pair of heavy leather greaves</span>

> <span class="command">examine breastplate</span>
<span class="look">It is a heavy plate armor forged from tempered steel.
Material: Metal. Weight: 18 lbs. Condition: Pristine.
Absorbs heavy slashing and thrusting impact.</span>
</pre>
</MumeSession>

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Analysis & Writing Assignment: Realism vs. Playability Analysis**
Write a 300-word interdisciplinary analysis comparing D&D's Armor Class Evasion against MUME's Damage Absorption model.

Address the following key points:
1. **Suspension of Disbelief (Realism):** Why does modeling armor as damage absorption better reflect real-world physics and military history than armor as dodge evasion?
2. **IT Automation (Playability):** Why would calculating percentage absorption for every body part and weapon material type ruin tabletop pacing without server/spreadsheet automation?

---

## 📝 5. Verification & Submission Requirements

Submit your completed analysis along with:
1. **Spreadsheet Log:** A screenshot or table from your spreadsheet showing gear weights and armor material types logged from MUME.
2. **Comparative Essay:** (300+ words).

---

::: details 🔑 Teacher Assessment Rubric (Click to Expand)

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Data Logging Verification** | 3 pts | Submitted spreadsheet table accurately capturing gear weight and armor materials from MUME. |
| **Interdisciplinary Analysis** | 4 pts | Clear evaluation of physics/military history realism vs. tabletop playability. |
| **IT Automation Reflection** | 3 pts | Insightful explanation of how software (MUDs/VTTs) resolves complex physical calculations seamlessly. |

:::
