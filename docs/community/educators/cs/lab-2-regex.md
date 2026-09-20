---
title: "CS Lab 2: Regular Expressions & Pattern Capture Groups | Educator Portal"
description: Complete 45-minute CS lab teaching regular expressions, pattern matching, anchors, wildcards, and numerical capture groups using MUME prompt streams.
---

<div class="page-banner">
  <img class="banner-img" src="/assets/images/mudlet@2x.png" alt="Mudlet RegEx Pattern Engine" />
</div>

# 💻 CS Lab 2: Regular Expressions & Pattern Capture Groups

| Attribute | Details |
| :--- | :--- |
| **Target Audience** | AP CS Principles, High School CS, Intro College Programming (CS101/CS201) |
| **Duration** | 45-Minute Single Period (or Day 2 of 1-Week Unit) |
| **Prerequisites** | CS Lab 1 or basic CLI familiarity |
| **MUME Scripting Resources** | Community scripting resources at `/wiki/pages/Script` |

---

## 🎯 1. Lab Overview & Objectives

**Regular Expressions (RegEx)** are foundational tools across computer science, data processing, cybersecurity, and computational biology. In text-based online games like MUME, client software uses RegEx to parse real-time text streams coming from the server.

In this lab, students will learn RegEx token syntax, write pattern matchers for dynamic game prompts, and extract numerical variables using **capture groups**.

### Learning Outcomes
1. Identify regular expression anchors (`^`, `$`), quantifiers (`+`, `*`), and character classes (`\d+`, `\w+`).
2. Construct RegEx expressions that match variable MUME prompt text strings.
3. Extract numeric health (`HP`), mana (`Mana`), and movement (`MV`) integers into capture group variables.

---

## 💡 2. Concept Walkthrough: Parsing MUME Prompt Lines

In MUME, your character status is streamed in the prompt bar:

```text
< 120/120hp 45/50m 100/100mv >
```

Because HP, Mana, and MV fluctuate constantly during gameplay, fixed-string matching will fail. We need a pattern that matches *any* numeric values in those positions.

### RegEx Building Blocks

| Pattern Token | Description | Example Match |
| :---: | :--- | :--- |
| `^` | Start of line anchor | Matches the beginning of the prompt string |
| `$` | End of line anchor | Matches the end of the prompt string |
| `\d+` | Matches one or more digits | `120`, `45`, `0` |
| `(\d+)` | **Capture Group:** Extracts matched digits into a variable | Captures `120` as Group 1 |
| `\s*` | Matches zero or more whitespace spaces | Matches spacing gaps |

### Constructing the Prompt RegEx Pattern

```regex
^<\s*(\d+)hp\s+(\d+)m\s+(\d+)mv\s*>$
```

* `^<` ➔ Starts with literal `<`
* `\s*(\d+)hp` ➔ Captures current HP digits before `hp`
* `\s+(\d+)m` ➔ Captures Mana digits before `m`
* `\s+(\d+)mv` ➔ Captures Movement digits before `mv`
* `>$` ➔ Ends with literal `>`

---

## 🧪 3. Guided Hands-On Activity (15 Minutes)

### Task 1: Testing RegEx Patterns
1. Open a regex testing environment (or Mudlet / MUSHclient trigger editor).
2. Input the sample prompt text string:
   ```text
   < 95hp 30m 85mv >
   ```
3. Test the regular expression pattern:
   ```regex
   ^<\s*(\d+)hp\s+(\d+)m\s+(\d+)mv\s*>$
   ```
4. Confirm that the pattern successfully matches and outputs:
   * **Capture Group 1:** `95`
   * **Capture Group 2:** `30`
   * **Capture Group 3:** `85`

---

## 🚀 4. Independent Student Challenge ("The Quest")

**Challenge Requirement:**
In MUME combat, opponent damage status is reported in textual descriptions:

```text
An enraged orc is in awful condition.
A dark elf warrior is slightly wounded.
A mountain troll is in perfect health.
```

Write a single Regular Expression pattern that captures:
1. The opponent name (`An enraged orc`, `A dark elf warrior`, `A mountain troll`).
2. The health status descriptor (`awful condition`, `slightly wounded`, `perfect health`).

::: tip Hint
Use `^(.+)\s+is\s+(.+)\.$` where `.+` matches any sequence of characters!
:::

---

## 📝 5. Verification & Submission Requirements

Submit your answers to the following worksheet:

1. **Question 1:** Write a RegEx pattern to capture the target name and gold coin count from this line:
   `You steal 450 gold coins from a sleeping smuggler.`
2. **Question 2:** Explain the difference between `\d+` and `\d*` in regular expressions.
3. **Question 3:** Provide screenshot or text output proof showing your combat condition RegEx successfully capturing both group 1 and group 2.

---

::: details 🔑 Teacher Answer Key & Assessment Rubric (Click to Expand)

### Answer Key
* **Challenge RegEx:** `^(.+)\s+is\s+(.+)\.$`
  * Group 1: Opponent Name
  * Group 2: Health Status
* **Question 1 Solution:** `^You steal (\d+) gold coins from (.+)\.$`
* **Question 2 Solution:** `\d+` requires at least 1 digit; `\d*` matches 0 or more digits (optional).

### 10-Point Grading Rubric

| Criterion | Points | Description |
| :--- | :---: | :--- |
| **Prompt RegEx Construction** | 4 pts | Correct syntax, anchors, and numeric capture groups. |
| **Challenge Pattern** | 3 pts | Correct string capture groups matching variable MUME mob descriptions. |
| **Short Answer Questions** | 3 pts | Accurate explanation of regex tokens and quantifiers. |
