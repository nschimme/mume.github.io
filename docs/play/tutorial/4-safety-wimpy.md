---
title: "Combat Safety Setup & Wimpy"
description: "Configure automatic emergency flee thresholds and reduce screen text velocity."
teach:
  - command: "change wimpy 15"
    desc: "set automatic flee HP safety threshold"
  - command: "change spam all"
    desc: "enable NoSpam mode to filter unnecessary text velocity"
steps:
  - ask: "change wimpy 15"
    note: "Set your automatic auto-flee safety threshold to 15 HP using CHANGE WIMPY 15."
    accept:
      - "change wimpy 15"
      - "cha wimpy 15"
      - "cha w 15"
    hint: "Type: change wimpy 15"
    example: "> change wimpy 15\nWimpy set to: 15"
  - ask: "change spam all"
    note: "Reduce text velocity and spam by enabling CHANGE SPAM ALL."
    accept:
      - "change spam all"
      - "cha spam all"
    hint: "Type: change spam all"
    example: "> change spam all\nAll spam settings enabled."
responses:
  change wimpy 15: "Wimpy set to: 15\n\n*+->"
  cha wimpy 15: "Wimpy set to: 15\n\n*+->"
  cha w 15: "Wimpy set to: 15\n\n*+->"
  change spam all: "All spam settings enabled.\n\n*+->"
  cha spam all: "All spam settings enabled.\n\n*+->"
---

<TutorialPlayer>

# Combat Safety Setup & Wimpy

According to the MUME Quick Start guide, the #1 mistake new players make is forgetting to set auto-flee!

Setting `change wimpy 15` ensures your character automatically flees combat if HP drops below 15. Setting `change spam all` keeps fast-moving text clean and readable.

Type `change wimpy 15` followed by `change spam all` below!

</TutorialPlayer>
