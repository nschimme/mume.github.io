---
title: "CS Lab 1: Command-Line Interfaces & Parameter Aliases | Educator Portal"
description: Complete 45-minute CS lab teaching command-line interface fundamentals, procedural abstraction, and variable parameter passing using native MUME aliases.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/playmume@2x.png" alt="MUME CLI Terminal Interface" />
</div>

# 💻 CS Lab 1: Command-Line Interfaces & Parameter Aliases

<div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1rem 0;">
  <span style="border: 1px solid rgba(215, 166, 63, 0.4); background: rgba(215, 166, 63, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: var(--vp-c-brand-1);">
    🏷️ AP CSP: AAP-1 (Variables), AAP-2 (Procedural Abstraction)
  </span>
  <span style="border: 1px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #60a5fa;">
    🏷️ CSTA: 3A-AP-16, 3A-AP-17
  </span>
  <span style="border: 1px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.1); padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: 600; font-size: 0.82rem; color: #34d399;">
    🏷️ College CS: CS101 / Intro to Programming
  </span>
</div>

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | AP CS Principles, High School CS, Intro College Programming (CS101) |
| **Duration** | 45-Minute Single Period (or Day 1 of 1-Week Unit) |
| **Prerequisites** | None (Runs in web browser) |
| **MUME Documentation** | <a href="https://mume.org/help/alias" target="_self" rel="external">MUME Alias Help File</a> |

---

## 🎯 1. Lab Overview & Objectives

In modern computer systems, Command-Line Interfaces (CLIs) remain essential tools for system administrators, software developers, and cloud engineers. This lab introduces students to CLI command structure, **procedural abstraction**, and **positional parameter passing** using native MUME character macros.

### Learning Outcomes
By the end of this lab, students will be able to:
1. Explain how CLI shells tokenize command verbs and parameter arguments.
2. Construct native MUME aliases using positional wildcard parameter substitution (`*`).
3. Create composite multi-command macro pipelines to automate repetitive terminal workflows.

---

## 💡 2. Concept Walkthrough: Abstraction & Parameter Passing

In MUME, every typed line is sent to a command line parser. Standard commands require explicit full inputs:

```text
examine sword
examine leather-backpack
examine ancient-fountain
```

Typing `examine` repeatedly is inefficient. MUME allows players to define **aliases**—shortcut mappings that accept dynamic parameters:

```text
syntax: alias <shortcut> <expanded commands>
```

When an asterisk (`*`) is included in an alias definition, MUME substitutes whatever argument the user types after the shortcut into the place of the asterisk.

```text
alias x examine *
```

Executing `x sword` is expanded by MUME's pre-processor into `examine sword`.

<MumeSession>
<pre class="session" v-pre>
> <span class="command">alias x examine *</span>
<span class="say">Alias 'x' defined as 'examine *'.</span>

> <span class="command">x leather-backpack</span>
<span class="look">You examine the leather-backpack carefully...</span>
<span class="look">It is a thick leather backpack bound with brass buckles.</span>
</pre>
</MumeSession>

---

## 🧪 3. Guided Hands-On Activity (15 Minutes)

::: info 🏰 Classroom Sandbox Note
Advise students to remain inside **Black Hill Village** or **Bree** (safe starter towns) while practicing aliases. This ensures a safe, non-combat sandbox environment free from aggressive mobs.
:::

### Task 1: Your First Alias
1. Connect to the <a href="https://mume.org/play" target="_self" rel="external">MUME Web Client</a>.
2. In the command prompt, type the following alias definition:
   ```text
   alias x examine *
   ```
3. Test your new macro by inspecting room objects:
   ```text
   x backpack
   x sign
   ```
4. Verify that MUME executes the full `examine` action.

### Task 2: Multi-Command Pipeline Abstraction
Aliases can chain multiple commands using semicolons `;`:

```text
alias prep get sword backpack;wield sword;look
```

Executing `prep` automatically executes all three commands sequentially!

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Challenge Requirement:**
Create a single alias named `loot` that accepts an item name parameter (`*`) and performs the following 3-step sequence:
1. Takes the specified item from a defeated mob or container (`get * corpse`).
2. Inspects the item (`examine *`).
3. Stores the item inside your backpack (`put * backpack`).

::: tip Hint
Remember to use `*` wherever the dynamic item name should appear! Refer to <a href="https://mume.org/help/alias" target="_self" rel="external">https://mume.org/help/alias</a> for advanced parameter rules.
:::

---

## 📝 5. Verification & Submission Requirements

To receive full credit for this lab, copy your terminal session showing:
1. The creation of your `alias x examine *` and `alias loot ...` definitions.
2. The output from typing `alias` (which lists all currently configured aliases).
3. The successful execution of your `loot` command on a target object.


---

::: details 🔑 Teacher Answer Key & Assessment Rubric (Click to Expand)

### Answer Key
* **Task 1 Alias:** `alias x examine *`
* **Task 2 Challenge Solution:** `alias loot get * corpse;examine *;put * backpack`

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Syntax Correctness** | 4 pts | Correct use of `alias` keywords and parameter wildcards (`*`). |
| **Multi-Command Chaining** | 3 pts | Proper semicolon `;` separation of sequential actions. |
| **Verification Log** | 3 pts | Complete terminal output captured and submitted cleanly. |

:::
