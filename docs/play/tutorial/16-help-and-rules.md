---
title: "In-Game Help System & Rules"
description: "Search in-game help documentation and review player rules."
teach:
  - command: "help newbie"
    desc: "access the fundamental newcomer help guide in-game"
  - command: "rules"
    desc: "view the index of player regulations and conduct rules"
steps:
  - ask: "help newbie"
    note: "MUME features an extensive internal documentation library. Type `help newbie` for quick reference topics."
    accept:
      - "help newbie"
      - "help new"
    hint: "Type: help newbie"
    example: "> help newbie\nHELP NEWBIE ON MUME\nWelcome to MUME! Type 'help index' or 'help topics' for full documentation."
  - ask: "rules"
    note: "To maintain fair play and atmosphere, consult `rules` to read about player killing, single accounts, and communication guidelines."
    accept:
      - "rules"
      - "rule"
    hint: "Type: rules"
    example: "> rules\nINDEX OF MUME RULES:\nRULES CHARACTER, RULES COMMUNICATION, RULES PLAYERKILLING, RULES AINUR."
responses:
  help newbie: "HELP NEWBIE ON MUME\n===================\nWelcome to MUME! Type 'help index' or 'help topics' for full documentation.\nKey topics:\n  help basics      - Fundamental MUD concepts\n  help advanced    - For experienced MUD players\n  help commands    - Index of player commands"
  help new: "HELP NEWBIE ON MUME\n==================="
  rules: "INDEX OF MUME RULES\n===================\nRULES CHARACTER      - Single account policy & character separation\nRULES COMMUNICATION  - Communication guidelines\nRULES PLAYERKILLING  - Player vs player combat rules\nRULES AINUR          - Immortal interactions"
  rule: "INDEX OF MUME RULES"
---

<TutorialPlayer>

# Consulting Help & World Rules

Whenever you encounter unfamiliar terms, mechanics, or spell names, MUME offers built-in documentation:

- **`help <topic>`**: Displays help entries for commands, spells, skills, or locations.
- **`rules`**: Displays essential guidelines ensuring fair play, roleplay etiquette, and account compliance.

</TutorialPlayer>
