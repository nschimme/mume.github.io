---
title: "RPG Dynamics Lab 2: RPG Dynamics & Bartle Player Taxonomy Critique | Educator Portal"
description: Complete 45-minute Game Design lab applying Richard Bartle's 1996 Player Taxonomy (Achievers, Explorers, Socializers, Killers) to critique MUD/VTT systems and propose targeted UX redesigns.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/mume-classes@2x.png" alt="MUME Character Classes & Mechanics" />
</div>

# 🎲 RPG Dynamics Lab 2: RPG Dynamics & Bartle Player Taxonomy Critique

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | Game Design, Game Psychology, UX/UI Research, Ludology |
| **Duration** | 45-Minute Single Period (or Days 3-5 of 1-Week Unit) |
| **Prerequisites** | RPG Dynamics Lab 1 or familiarity with player types |
| **Primary Reference** | Richard Bartle (1996), *"Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs"* |

---

## 🎯 1. Lab Overview & Objectives

In 1996, game researcher **Richard Bartle** published a landmark paper categorizing multiplayer game players into four distinct personality types based on their primary motivations. Crucially, Bartle derived this framework by observing player behavior in **MUDs** (Multi-User Dungeons).

In this lab, students evaluate MUME through the lens of the **Bartle Taxonomy of Player Types**, critique how legacy MUDs and modern Virtual Tabletops (VTTs) cater to specific player desires, and draft a design proposal to improve a chosen game dimension for a different player archetype.

### Learning Outcomes
1. Define the four quadrants of the **Bartle Taxonomy of Player Types** (Achievers, Explorers, Socializers, Killers).
2. Analyze how specific game mechanics and UI choices attract or alienate specific player types.
3. Formulate a targeted Game Design / UX proposal to adapt a system dimension for an under-served player archetype.

---

## 💡 2. Analytical Framework: The Bartle Taxonomy (1996)

Bartle divides players along two axes: **Action vs. Interaction** and **Players vs. World**:

<div style="margin: 2rem 0; border: 1px solid rgba(215, 166, 63, 0.25); background: rgba(0,0,0,0.25); border-radius: 10px; padding: 1.5rem;">
  <div style="text-align: center; font-weight: bold; color: var(--vp-c-brand-1); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;">
    ▲ ACTING ON
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
    <!-- Killers -->
    <div style="border: 1px solid rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.08); padding: 1.25rem; border-radius: 8px;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #f87171; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>⚔️</span> KILLERS <span style="font-size: 0.8rem; opacity: 0.8; margin-left: auto;">(Clubs)</span>
      </div>
      <p style="font-size: 0.88rem; margin: 0; line-height: 1.4; color: var(--vp-c-text-2);">
        <strong>Acting on Players:</strong> Motivated by competition, defeating rivals, PvP dominance, and faction warfare.
      </p>
    </div>

    <!-- Achievers -->
    <div style="border: 1px solid rgba(234, 179, 8, 0.4); background: rgba(234, 179, 8, 0.08); padding: 1.25rem; border-radius: 8px;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #facc15; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>🏆</span> ACHIEVERS <span style="font-size: 0.8rem; opacity: 0.8; margin-left: auto;">(Diamonds)</span>
      </div>
      <p style="font-size: 0.88rem; margin: 0; line-height: 1.4; color: var(--vp-c-text-2);">
        <strong>Acting on World:</strong> Motivated by gaining levels, accumulating wealth, rare gear, and topping leaderboards.
      </p>
    </div>

    <!-- Socializers -->
    <div style="border: 1px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.08); padding: 1.25rem; border-radius: 8px;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #60a5fa; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>💬</span> SOCIALIZERS <span style="font-size: 0.8rem; opacity: 0.8; margin-left: auto;">(Hearts)</span>
      </div>
      <p style="font-size: 0.88rem; margin: 0; line-height: 1.4; color: var(--vp-c-text-2);">
        <strong>Interacting with Players:</strong> Motivated by roleplay, forming guilds, chatter, and community relationships.
      </p>
    </div>

    <!-- Explorers -->
    <div style="border: 1px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.08); padding: 1.25rem; border-radius: 8px;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #34d399; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>🗺️</span> EXPLORERS <span style="font-size: 0.8rem; opacity: 0.8; margin-left: auto;">(Spades)</span>
      </div>
      <p style="font-size: 0.88rem; margin: 0; line-height: 1.4; color: var(--vp-c-text-2);">
        <strong>Interacting with World:</strong> Motivated by mapping secret areas, uncovering lore, and reverse-engineering mechanics.
      </p>
    </div>
  </div>

  <div style="text-align: center; font-weight: bold; color: var(--vp-c-brand-1); margin-top: 1rem; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem;">
    ▼ INTERACTING WITH
  </div>
</div>

### The 4 Archetypes:
1. **Achievers (Diamonds):** Motivated by gaining levels, acquiring rare equipment, accumulating gold, and topping leaderboards.
2. **Explorers (Spades):** Motivated by mapping secret rooms, discovering hidden lore, understanding game mechanics, and uncovering easter eggs.
3. **Socializers (Hearts):** Motivated by roleplay, building relationships, communicating via chat/shout channels, and forming guilds.
4. **Killers (Clubs):** Motivated by competing against, dominating, or proving superiority over other real players (PvP / Player Killing).

---

## 🧪 3. Guided Analysis Activity (20 Minutes)

### Task 1: MUME Mechanics Audit
Log into MUME or review its feature set and identify which Bartle archetype its core mechanics primarily serve:

| MUME Game Mechanic | Primary Bartle Archetype | Supporting Evidence |
| :--- | :---: | :--- |
| **Thousands of unmapped rooms & secret doors** | **Explorer** | Encourages manual/automapping and spatial discovery. |
| **Open-world Free Peoples vs. Sauron PvP War** | **Killer** | Direct competitive conflict between rival player factions. |
| **Trophy, level progression, and rare gear** | **Achiever** | Stat optimization and high-tier equipment collection. |
| **Inns, taverns, player boards, and guilds** | **Socializer** | Community hubs for roleplay and chatter. |

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Assignment Requirement: System Critique & Targeted Redesign Proposal**

Select ONE specific "dimension" of game design (e.g., *UI/UX*, *spatial mapping*, *combat feedback*, *player onboarding*, or *quest tracking*) from **ANY** game you choose—whether it is MUME, a modern MMORPG (*World of Warcraft*, *FFXIV*), or a Virtual Tabletop (*Roll20*, *Foundry VTT*).

Write a formal 3-part Game Design Critique:

1. **Current System Audit:** Describe the chosen game dimension and identify which Bartle player type it currently caters to best.
2. **Target Archetype Identification:** Select a *different* Bartle player type that is currently neglected or alienated by this design dimension.
3. **Targeted Redesign Proposal:** Propose concrete, specific mechanics or UI/UX improvements to that dimension specifically engineered to engage your chosen target player archetype.

---

## 📝 5. Verification & Submission Requirements

Submit your completed 3-part Game Design Critique (300–500 words).

::: tip Example Submission
* **Game & Dimension Chosen:** MUME's New Player Onboarding / Web Client Terminal.
* **Current Archetype Served:** *Achiever / Explorer* (rewards players willing to memorize text syntax and explore independently).
* **Neglected Archetype:** *Socializer*.
* **Proposed Redesign:** Introduce an integrated mentor broadcast button and roleplay greeting prompts in the web client header to immediately connect new players with active community guides upon spawning in Black Hill Village.
:::

---

::: details 🔑 Teacher Assessment Rubric (Click to Expand)

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Bartle Taxonomy Accuracy** | 3 pts | Correct application and understanding of Bartle's 4 player types. |
| **System Critique Depth** | 3 pts | Accurate analysis of the chosen game dimension and its current target audience. |
| **Redesign Proposal** | 4 pts | Innovative, mechanically sound design suggestions specifically tailored to the target archetype. |
