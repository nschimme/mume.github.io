---
title: Classroom & IT Setup Guide | Educator Portal
description: Technical setup guide for IT administrators and teachers to run MUME in high school and college classrooms while ensuring FERPA compliance and network compatibility.
---

# ⚙️ Classroom & IT Setup Guide

This guide assists IT network administrators and educators in deploying **MUME (Multi-Users in Middle-earth)** for classroom instruction. Designed specifically to eliminate technical friction, MUME requires no local software installation, no administrative rights on student devices, and no student email registrations.

---

## 🔒 1. Student Privacy & FERPA Compliance

Student privacy laws (such as the Family Educational Rights and Privacy Act - **FERPA** in the US and **GDPR-K**) strictly regulate student Personally Identifiable Information (PII) on third-party platforms.

MUME supports full FERPA compliance through its **Guest Login Workflow**:

* **Zero PII Collection:** Guest logins do not request names, email addresses, phone numbers, or passwords.
* **Anonymous Identifiers:** Students connect using temporary guest accounts or custom classroom pseudonyms (e.g., `student_cs101_01`).
* **Clean Log Exporting:** Students capture local terminal logs directly in their browser and submit answers locally through your school's LMS (Canvas, Google Classroom, Blackboard, Schoology).

::: tip Teacher Recommendation
For multi-day labs, have students record their character name and passphrase in their physical lab notebook. No student personal email or institution account is ever linked to MUME servers.
:::

---

## 🌐 2. Network & Firewall Configuration

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

## ⏱️ 3. 15-Minute Classroom Onboarding Checklist

Follow this simple checklist before launching your first lab session:

### Step 1: Pre-Lab Verification (5 Minutes)
1. Open a browser window on a student Chromebook or device.
2. Navigate to <a href="https://mume.org/play" target="_self" rel="external">https://mume.org/play</a> or our [Browser Client](/play/browser).
3. Confirm that the terminal window initializes and displays the MUME welcome prompt.

### Step 2: Classroom Orientation (5 Minutes)
1. Provide students with the [Student Quickstart Cheatsheet](/community/educators/student).
2. Instruct students to select **Guest Mode** or create a designated classroom character name.
3. Review basic command execution (`look`, `exits`, `inventory`).

### Step 3: Verification & Log Submission (5 Minutes)
1. Demonstrate how to select and copy text from the MUME web client terminal.
2. Show students where to paste terminal output into their lab assignment document or Google Docs/Canvas submission portal.

---

## 💬 Frequently Asked Questions (FAQ)

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
* Explore the [STEM & CS Curriculum Track](/community/educators/cs/) or [Humanities Curriculum Track](/community/educators/literature/).
