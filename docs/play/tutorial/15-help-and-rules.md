---
title: "Rules & In-Game Reference"
description: "Review essential game rules and built-in help features."
teach:
  - command: "rules"
    desc: "view the index of MUME rules and guidelines"
  - command: "help newbie"
    desc: "access the in-game beginner guide"
steps:
  - ask: "rules"
    accept:
      - "rules"
      - "rule"
    hint: "Type: rules"
    example: "> rules\nINDEX: RULES CHARACTER, RULES COMMUNICATION, RULES PLAYERKILLING..."
  - ask: "help newbie"
    accept:
      - "help newbie"
      - "help new"
    hint: "Type: help newbie"
    example: "> help newbie\nWELCOME TO MUME! Type HELP BASICS or HELP ADVANCED for guidance."
responses:
  rules: "INDEX\n   /--------------------------------------------------------------------\n  | These are the rules concerning the players of MUME.                  |\n  | RULES CHARACTER     Important rules for newcomers.                   |\n  | RULES COMMUNICATION Rules for communication, channels, titles.       |\n  | RULES PLAYERKILLING Regulates battles between player characters.     |\n   \\--------------------------------------------------------------------/"
  help newbie: "WELCOME TO MUME!\nThis is a complex world! 'HELP BASICS' if you have never played a MUD before;\n'HELP ADVANCED' if you have played other MUDs but this is your first visit to MUME."
---

<TutorialPlayer>

# Essential Guidelines & References

To keep Middle-earth immersion enjoyable for everyone, MUME maintains clear rules regarding communication, player combat, and fair play.

You can inspect the game rulebook anytime with `rules`. For help topics on any command, item, or concept, type `help <topic>` (or `help newbie`).

</TutorialPlayer>
