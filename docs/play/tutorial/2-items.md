---
title: "Picking Up Starting Items"
description: "Learn to pick up torches, food, and supplies from room floors."
teach:
  - command: "get torch"
    desc: "pick up the torch lying on the ground"
  - command: "get cheese"
    desc: "pick up food for your journey"
steps:
  - ask: "get torch"
    note: "Light is vital in Middle-earth when exploring dark caverns, dungeons, or night-time forests. Lying in the dust is a large wooden torch."
    accept:
      - "get torch"
      - "take torch"
    hint: "Type: get torch"
    example: "> get torch\nYou get a torch."
  - ask: "get cheese"
    note: "Adventuring causes hunger and thirst. Hungry adventurers recover hit points and movement far more slowly, so keeping rations like cheese is essential."
    accept:
      - "get cheese"
      - "take cheese"
    hint: "Type: get cheese"
    example: "> get cheese\nYou get some cheese."
responses:
  get torch: "You get a torch."
  get cheese: "You get some cheese."
---

<TutorialPlayer>

# Gathering Initial Supplies

When exploring rooms in Middle-earth, you will frequently see loose items lying on the ground—torches, dropped coins, rations, maps, or fallen equipment.

Commands in MUME follow natural verb-noun phrasing. To take an item from the room floor, use `get <item>` or `take <item>`. Collecting supplies before setting out on your journey ensures you are prepared for darker roads and long travels.

</TutorialPlayer>
