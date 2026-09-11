---
title: "Gathering Gear in Mandos"
description: "Collect essential travel items from the cavern floor before departing."
teach:
  - command: "get torch"
    desc: "pick up a torch from the ground"
  - command: "get cheese"
    desc: "pick up food supplies"
steps:
  - ask: "get torch"
    accept:
      - "get torch"
      - "take torch"
    hint: "Type: get torch"
    example: "> get torch\nYou get a torch."
  - ask: "get cheese"
    accept:
      - "get cheese"
      - "take cheese"
    hint: "Type: get cheese"
    example: "> get cheese\nYou get some cheese."
responses:
  get torch: "You get a torch."
  take torch: "You get a torch."
  get cheese: "You get some cheese."
  take cheese: "You get some cheese."
---

<TutorialPlayer>

# Preparing for Departure

Before leaving Mandos for the mortal realm of Fornost, you look upon the cavern floor. Cast among the ancient dust lie items left for travelers: a sturdy torch and a piece of cheese.

In MUME, you interact with items using commands like `get <item>` or `take <item>`. Gather these essential travel provisions before invoking the Ainulindalë to begin your journey.

</TutorialPlayer>
