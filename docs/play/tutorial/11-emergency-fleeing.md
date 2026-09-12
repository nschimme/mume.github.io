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

<TutorialPlayer>

# Emergency Fleeing

Dying is a natural part of learning MUME, but running away is often the smartest tactical decision!

Typing `flee` immediately breaks combat and escapes through a random exit.

Type `flee` below to practice your emergency retreat!

</TutorialPlayer>
