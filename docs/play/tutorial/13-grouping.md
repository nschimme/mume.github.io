---
title: "Adventuring in Groups"
description: "Form adventuring parties with fellow players to conquer tough challenges."
teach:
  - command: "follow ermin"
    desc: "follow an adventuring companion"
  - command: "group"
    desc: "view active members of your group"
steps:
  - ask: "follow ermin"
    accept:
      - "follow ermin"
      - "fol ermin"
    hint: "Type: follow ermin"
    example: "> follow ermin\nYou now follow Ermin."
  - ask: "group"
    accept:
      - "group"
      - "gr"
    hint: "Type: group"
    example: "> group\nYour group consists of: Ermin (Head), Fuor."
responses:
  follow ermin: "You now follow Ermin.\nYou are now a member of Ermin's group."
  fol ermin: "You now follow Ermin."
  group: "Your group consists of:\n     Ermin (Head of group)\n     Fuor"
  gr: "Your group consists of:\n     Ermin (Head of group)\n     Fuor"
---

<TutorialPlayer>

# The Strength of Fellowship

Middle-earth is dangerous to walk alone. Joining forces with other Free Peoples makes adventuring safer and far more rewarding.

To join a party, type `follow <leader>`. Once accepted, you automatically walk alongside the leader when they move. Use `group` to inspect all adventurers currently in your fellowship.

</TutorialPlayer>
