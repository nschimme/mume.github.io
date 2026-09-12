---
title: "Grouping & Adventuring with Allies"
description: "Form adventuring parties, follow party leaders, and check group status."
teach:
  - command: "follow ermin"
    desc: "follow an ally so your character moves automatically with them"
  - command: "group"
    desc: "view current group members and party leadership"
steps:
  - ask: "follow ermin"
    note: "Adventuring in Middle-earth is safer in groups. To follow a companion across rooms, type `follow <player>`."
    accept:
      - "follow ermin"
      - "fol ermin"
    hint: "Type: follow ermin"
    example: "> follow ermin\nYou now follow Ermin.\nYou are now a member of Ermin's group."
  - ask: "group"
    note: "Inspect your current adventuring party members and group leader with `group`."
    accept:
      - "group"
      - "gr"
    hint: "Type: group (or gr)"
    example: "> group\nYour group consists of:\n     Ermin (Head of group)\n     Fuor"
responses:
  follow ermin: "You now follow Ermin.\nYou are now a member of Ermin's group."
  fol ermin: "You now follow Ermin.\nYou are now a member of Ermin's group."
  group: "Your group consists of:\n     Ermin (Head of group)\n     Fuor"
  gr: "Your group consists of:\n     Ermin (Head of group)\n     Fuor"
---

<TutorialPlayer>

# Cooperative Grouping

Forming groups with other players allows you to tackle formidable foes, share experience, and explore dangerous regions together.

- **`follow <player>`**: Links your movement to the party leader.
- **`group`**: Displays the list of members in your active group.

</TutorialPlayer>
