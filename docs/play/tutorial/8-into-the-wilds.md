---
title: "Into the Wilds & First Blood"
description: "Step into northern fields, evaluate enemy difficulty with consider, defeat a butterfly, and check trophy logs."
teach:
  - command: "consider butterfly"
    desc: "assess enemy difficulty before attacking"
  - command: "hit butterfly"
    desc: "engage a target in combat"
  - command: "trophy"
    desc: "view your vanquished enemy kill log"
steps:
  - ask: "consider butterfly"
    note: "Fuor steps into the fields outside Fornost. Use CONSIDER to evaluate the translucent butterfly."
    accept:
      - "consider butterfly"
      - "con butterfly"
      - "consider"
    hint: "Type: consider butterfly"
    example: "> consider butterfly\nIt looks easy indeed!"
  - ask: "hit butterfly"
    note: "Attack the butterfly with your backsword."
    accept:
      - "hit butterfly"
      - "kill butterfly"
      - "k butterfly"
    hint: "Type: hit butterfly"
    example: "> hit butterfly\nYou slash a butterfly's leg extremely hard! A butterfly is dead! R.I.P."
  - ask: "trophy"
    note: "Inspect your trophy list to see vanquished creatures."
    accept:
      - "trophy"
    hint: "Type: trophy"
    example: "> trophy\n*** TROPHY *** (1 Killed, 1% Knowledge: A butterfly)"
responses:
  consider butterfly: "It looks easy indeed!"
  con butterfly: "It looks easy indeed!"
  consider: "It looks easy indeed!"
  hit butterfly: "You slash a butterfly's leg extremely hard and shatter it.\nYou receive your share of experience.\nCongratulations! This is the first time you've killed it!\nA butterfly is dead! R.I.P."
  kill butterfly: "You slash a butterfly's leg extremely hard and shatter it. A butterfly is dead! R.I.P."
  k butterfly: "You slash a butterfly's leg extremely hard and shatter it. A butterfly is dead! R.I.P."
  trophy: "		*** TROPHY *** (Number Killed, Knowledge, Mobile)\n\n|   1,  1%,  A butterfly               |                                      |"
---

<TutorialPlayer>

# Into the Wilds & First Blood

Fuor steps past the city gates into the open fields of Eriador.

Learn how to evaluate opponents using `CONSIDER`, initiate combat (`HIT`), and check your vanquished kill log (`TROPHY`).

</TutorialPlayer>
