---
title: "CS Lab 3: Event Triggers & Finite State Machines | Educator Portal"
description: Complete 45-minute CS lab teaching event-driven trigger actions, state variables, and Finite State Machine (FSM) automata using MUME client scripts.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/mmapper-wasm@2x.webp" alt="MUME State Automata & Mapping Interface" />
</div>

# 💻 CS Lab 3: Event Triggers & Finite State Machines

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | AP CS Principles, CS101, CS201 (Data Structures / Automata) |
| **Duration** | 45-Minute Single Period (or Days 3-4 of 1-Week Unit) |
| **Prerequisites** | CS Lab 1 & Lab 2 |
| **Scripting References** | Community scripting resources at `/wiki/pages/Script` |

---

## 🎯 1. Lab Overview & Objectives

In software engineering, **Finite State Machines (FSMs)** and **Event-Driven Architectures** govern complex software behaviors—from web client UI state management to game AI and robotics.

In this lab, students combine RegEx pattern capture groups (from Lab 2) with conditional logic and state variables to build a complete Finite State Machine that automates tactical combat safety responses in MUME.

### Learning Outcomes
1. Define states, events, and state transitions in a Finite State Machine model.
2. Construct Mudlet Lua trigger scripts that fire actions based on RegEx capture values.
3. Implement state guard conditions to prevent infinite execution loops.

---

## 💡 2. Concept Walkthrough: Tactical Combat FSM

A player character in MUME transitions between distinct operational states based on incoming game events:

```text
       [ Event: HP < 25% ]
  +---------------------------+
  |                           v
[IDLE] ──(In Combat)──> [COMBAT] ──(Flee Success)──> [RESTING]
  ^                                                      |
  +─────────────────────(Restored HP)────────────────────+
```

### The 4 States:
1. **`IDLE`**: Exploring or standing in a safe room.
2. **`COMBAT`**: Actively engaged in combat with an enemy.
3. **`FLEEING`**: Emergency disengagement triggered when HP drops below 25%.
4. **`RESTING`**: Sitting or resting in a safe location to recover hit points and mana.

---

## 🧪 3. Guided Hands-On Activity: Building the Lua FSM Trigger (20 Minutes)

Using the Mudlet Lua client scripting engine (referencing `/wiki/pages/Script`), students implement the state machine using a global state variable `currentState`.

### Step 1: Initialize State Variables
```lua
-- Global FSM State Initialization
currentState = "IDLE"
hpThreshold = 30
```

### Step 2: RegEx Trigger & State Machine Event Handler
* **Trigger RegEx:** `^<\s*(\d+)hp\s+(\d+)m\s+(\d+)mv\s*>$`

```lua
-- Lua Action Script attached to Prompt Trigger
local currentHP = tonumber(matches[2])

if currentState == "COMBAT" and currentHP < hpThreshold then
    -- State Transition: COMBAT -> FLEEING
    currentState = "FLEEING"
    echo("\n[ALERT] Low HP Detected! Executing Tactical Flee!\n")
    send("flee")
elseif currentState == "FLEEING" then
    -- State Transition: FLEEING -> RESTING
    currentState = "RESTING"
    send("rest")
    echo("\n[FSM] Safe disengagement confirmed. Resting to recover.\n")
end
```

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Challenge Requirement:**
Extend the FSM to add an automatic state transition from `RESTING` back to `IDLE`:
1. When HP recovers above 90% (`currentHP > 90`), transition `currentState` from `"RESTING"` to `"IDLE"`.
2. Send the command `"stand"` to MUME so your character stands up ready for action.
3. Print an alert: `"[FSM] Character fully recovered! Standing up."`

---

## 📝 5. Verification & Submission Requirements

Submit your completed Lua script and State Transition Table:

### State Transition Table
| Current State | Input Event / Condition | Next State | Action Executed |
| :---: | :---: | :---: | :---: |
| `IDLE` | Engaged in combat | `COMBAT` | Set stance / Mood |
| `COMBAT` | `HP < 30` | `FLEEING` | `send("flee")` |
| `FLEEING` | Flee successful | `RESTING` | `send("rest")` |
| `RESTING` | `HP > 90%` | `IDLE` | `send("stand")` |

---

::: details 🔑 Teacher Answer Key & Assessment Rubric (Click to Expand)

### Complete Capstone FSM Script (Lua)
```lua
currentState = currentState or "IDLE"

local currentHP = tonumber(matches[2])

if currentState == "COMBAT" and currentHP < 30 then
    currentState = "FLEEING"
    send("flee")
elseif currentState == "FLEEING" then
    currentState = "RESTING"
    send("rest")
elseif currentState == "RESTING" and currentHP > 90 then
    currentState = "IDLE"
    send("stand")
    echo("\n[FSM] Full recovery complete! Returning to IDLE state.\n")
end
```

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **State Machine Table** | 3 pts | Complete transition table covering all 4 states and events. |
| **Lua FSM Logic** | 4 pts | Correct state variables, guard conditions, and transition assignments. |
| **Challenge Extension** | 3 pts | Successful implementation of `RESTING -> IDLE` recovery logic. |

:::
