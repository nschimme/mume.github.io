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

<TutorialPlayer>

# Guilds & Practicing Skills

When Fuor levels up by earning experience (killing foes) and travel points (exploring Eriador), he gains practice points!

Guilds across Middle-earth allow you to spend practice points on weapon proficiencies, stealth, or spells.

Practice `prac` and `prac slash` below!

</TutorialPlayer>
