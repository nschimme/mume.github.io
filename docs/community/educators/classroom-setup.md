---
title: Classroom & IT Setup Guide | Educator Portal
description: Technical setup guide for IT administrators and teachers to run MUME in high school and college classrooms while ensuring FERPA compliance, PII-free account setup, and network compatibility.
---

# ⚙️ Classroom & IT Setup Guide

This guide assists IT network administrators and educators in deploying **MUME (Multi-Users in Middle-earth)** for classroom instruction. Designed specifically to eliminate technical friction, MUME requires no local software installation, no administrative rights on student devices, and zero student email or personal data collection.

---

## 🔒 1. Student Privacy & FERPA Compliance (PII-Free Account Creation)

Student privacy laws (such as the Family Educational Rights and Privacy Act - **FERPA** in the US and **GDPR-K**) strictly regulate student Personally Identifiable Information (PII) on third-party platforms.

MUME natively satisfies full FERPA compliance because account creation requires **Zero Personally Identifiable Information (PII)**:

* **Zero PII Required:** MUME account creation requires **no real names, no email addresses, no phone numbers, and no birthdates**.
* **Anonymous Account Identifiers:** Students register using an account name and passphrase of their choice or classroom pseudonyms assigned by the teacher (e.g., Account: `cs101_student01`, Character: `Eldar_CS`).
* **Clean Log Exporting:** Students capture local terminal logs directly in their browser and submit answers locally through your school's LMS (Canvas, Google Classroom, Blackboard, Schoology).

::: tip Teacher Recommendation
For multi-day labs, have students record their account name, character name, and passphrase in their physical lab notebook or password manager. No institution or personal email is ever linked to MUME servers.
:::

---

## ⏱️ 2. 3-Minute Express Character Creation & Tutorial Skip

To maximize classroom teaching time during tight 45-minute lab periods, use this streamlined onboarding sequence:

### ⚡ Step-by-Step 3-Minute Express Preset:
1. Open <a href="https://mume.org/play" target="_self" rel="external">https://mume.org/play</a> (or [/play/browser](/play/browser)).
2. At the prompt, type `NEW` and press `Enter`.
3. Enter your **Account Name** (e.g., `cs101_student01`) and a secure **Passphrase**.
4. Create your character (e.g., Race: `Man`, Subrace: `Eriadorian`, Starting Location: `Black Hill Village`, Archetype: `Warrior`).

### ⏩ Fast Tutorial Skip for CS / Advanced Labs:
When a new character awakens in Mandos, type `pray` (or `pray to the tower hills`) **twice** to skip the introductory story sequence and warp immediately to **Black Hill Village** (`The Foaming Mug's Beer Garden`), where students can instantly begin active CLI, RegEx, or State Machine lab exercises.

---

## 🌐 3. Network & Firewall Configuration

Traditional MUDs operate over Telnet or custom TCP sockets on non-standard ports (such as `mume.org:4242`), which are blocked by default on school networks and modern Chromebook firewalls.

MUME provides a native web client operating entirely over standard web protocols:

| Metric | Details |
| :--- | :--- |
| **Web Client URL** | <a href="https://mume.org/play" target="_self" rel="external">https://mume.org/play</a> or [/play/browser](/play/browser) |
| **Protocols** | Standard HTTPS (`Port 443`) & WebSockets (`wss://`) |
| **Firewall Rule Requirements** | Allow outgoing HTTPS traffic to `mume.org` / `docs.mume.org` |
| **Supported Devices** | Google Chromebooks, Windows PCs, macOS, Linux, and iPads/Tablets |

::: info IT Administrator Note
Because the web client communicates via Secure WebSockets (`wss://`) over standard port 443, no special firewall exceptions or port openings (port 4242) are required on school content filters (e.g., Securly, GoGuardian, Lightspeed, Fortinet).
:::

---

## 💬 Frequently Asked Questions (FAQ)

<details>
<summary><strong>Do students need to provide an email address?</strong></summary>
<p>No. MUME account creation requires no email address or real name. Students simply choose an account name and passphrase.</p>
</details>

<details>
<summary><strong>Do students need to install software or browser extensions?</strong></summary>
<p>No. MUME runs 100% inside any standard HTML5 browser (Chrome, Firefox, Edge, Safari) without extensions or plugins.</p>
</details>

<details>
<summary><strong>Is MUME safe for high school students?</strong></summary>
<p>Yes. MUME maintains strict game rules against harassment and explicit content. Additionally, for classroom labs, students operate in isolated beginner zones or controlled offline/online exercises.</p>
</details>

<details>
<summary><strong>What if our school blocks MUD/gaming websites?</strong></summary>
<p>Request your IT department to whitelist domain <code>docs.mume.org</code> and <code>mume.org</code> under educational active-learning / computer science exceptions.</p>
</details>

---

## 📍 Next Steps

* Share the [Student Quickstart Cheatsheet](/community/educators/student) with your class.
* Explore the [STEM & CS Curriculum Track](/community/educators/cs/), [Humanities Curriculum Track](/community/educators/literature/), or [Game Design Track](/community/educators/rpg-dynamics/).
