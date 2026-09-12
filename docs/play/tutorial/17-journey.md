---
title: "Your Journey Begins"
description: "Review your active web client setup and choose your next steps into Middle-earth."
teach:
  - command: "help client"
    desc: "learn about web and desktop client options"
  - command: "who"
    desc: "see adventurers currently online in Middle-earth"
steps:
  - ask: "help client"
    note: "Before taking your first real steps into Middle-earth, learn about web and desktop client options."
    accept:
      - "help client"
      - "help clients"
    hint: "Type: help client"
    example: "> help client\nClients for MUME: Web Client (play/browser), MMapper, Mudlet, and VIP Mud."
  - ask: "who"
    note: "See who else is currently adventuring across Middle-earth with `who`."
    accept:
      - "who"
    hint: "Type: who"
    example: "> who\nPlayers currently online: Fuor, Ermin, Ozzy, Ashura."
responses:
  help client: "CLIENTS FOR MUME\n================\nYou can play MUME directly in your web browser with MMapper integration at /play/browser, or use desktop MUD clients such as Mudlet or VIP Mud."
  help clients: "CLIENTS FOR MUME\n================"
  who: "Players currently online in Middle-earth:\n-----------------------------------------\n  Fuor the Man\n  Ermin the Elf\n  Ozzy the Rohirrim\n  Ashura the Half-Elf"
---

<TutorialPlayer>

# Your Journey Begins

Congratulations! You have completed the **MUME Interactive Tutorial**.

You are now familiar with:
1. Movement, exits, and room inspection.
2. Managing inventory, wearing armor, and wielding weapons.
3. Vitals (`score`, `stat`, `info`), hunger, thirst, and light.
4. Real-time combat, tactics, combat moods, and fleeing.
5. Wilderness scouting and overland ASCII maps.
6. Skill practices at city guildmasters.
7. Grouping with allies and safe inn renting.

Choose your next step below: launch the Web Client to start your character, explore detailed guides in the Newcomers Hub, or return to the Play Hub.

</TutorialPlayer>
