---
title: "Emergency Fleeing"
description: "Master emergency tactical retreats to disengage from dangerous combat."
teach:
  - command: "flee"
    desc: "immediately disengage and run away through a random exit"
steps:
  - ask: "flee"
    note: "When a fight turns deadly, type FLEE (or F) to break combat immediately!"
    accept:
      - "flee"
      - "f"
    hint: "Type: flee"
    example: "> flee\nYou flee head over heels.\nYou flee north.\nBend in the Path"
responses:
  flee: "You flee head over heels.\nYou flee north.\n\nBend in the Path\nThe road turns here to pass between the tall homes on either side of the road.\nHigh above, a laundry line stretches across the street, the bed sheets pegged\nto it flapping in the wind.\nA little boy is here, running around.\nExits: =south=, =west=.\n\n*+->"
  f: "You flee head over heels.\nYou flee north.\n\nBend in the Path\nExits: =south=, =west=.\n\n*+->"
---

# Chapter 11: Tactical Retreat

The wolf snaps viciously, grazing Fuor's arm! Ermin shouts that knowing when to retreat is a true warrior's wisdom—`flee` instantly breaks engagement and escapes through an available exit.

Help Fuor execute a swift emergency retreat back toward the village by typing `flee` below!
