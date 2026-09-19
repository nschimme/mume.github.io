---
title: "Guilds & Practicing Skills"
description: "Visit character guilds and spend practice points to learn weapon skills and spells."
teach:
  - command: "prac"
    desc: "check remaining practice points and trained skills"
  - command: "prac slash"
    desc: "train weapon proficiencies or skills at a guildmaster"
steps:
  - ask: "prac"
    note: "Check your available practice points using PRAC."
    accept:
      - "prac"
      - "practice"
    hint: "Type: prac"
    example: "> prac\nYou have 10 practice sessions left."
  - ask: "prac slash"
    note: "Train your slash weapon skill with PRAC SLASH."
    accept:
      - "prac slash"
      - "practice slash"
    hint: "Type: prac slash"
    example: "> prac slash\nYou practice slash. Your skill in slash is now 45%."
responses:
  prac: "You have 10 practice sessions left.\n\nSkill       Knowledge  Difficulty  Class\n------------------------------------------\nBandage     Bad        Easy        None\nWilderness  Bad        Normal      None\nDodge       Bad        Hard        Thief\nSearch      Bad        Normal      Thief\nParry       Bad        Normal      Warrior\n\n*+->"
  practice: "You have 10 practice sessions left."
  prac slash: "You practice slash.\nYour skill in slash is now 45%!\n\n*+->"
  practice slash: "You practice slash.\nYour skill in slash is now 45%!\n\n*+->"
---

# Chapter 13: Training at the Warrior Guild

Refreshed from his rest, Fuor visits the local Warrior Guildmaster in Black Hill Village. As heroes gain experience and travel points across Middle-earth, they earn practice sessions to train weapon proficiencies and skills.

Help Fuor inspect his training sessions (`prac`) and hone his blade skill (`prac slash`) below!
