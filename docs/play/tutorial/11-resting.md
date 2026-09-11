---
title: "Tactical Movement & Fleeing"
description: "Handle dangerous foes by changing combat mood and fleeing to safety."
teach:
  - command: "change mood aggressive"
    desc: "increase offensive bonus while lowering defense"
  - command: "flee"
    desc: "escape a dangerous battle head over heels"
steps:
  - ask: "change mood aggressive"
    accept:
      - "change mood aggressive"
      - "cha m aggressive"
      - "change mood wimpy"
    hint: "Type: change mood aggressive"
    example: "> change mood aggressive\nOk. Your Offensive Bonus increases."
  - ask: "flee"
    accept:
      - "flee"
      - "f"
    hint: "Type: flee"
    example: "> flee\nYou flee head over heels!\nLight Forest\nExits: North East South West."
responses:
  change mood aggressive: "Ok.\nStat update: OB increases from 15% to 26%, PB drops to 16%."
  cha m aggressive: "Ok."
  change mood wimpy: "Ok."
  flee: "A fierce boar strongly hits your left arm and shatters it!\nThat really HURT!\nYou flee head over heels.\nLight Forest\nExits: North East South West."
  f: "You flee head over heels.\nLight Forest\nExits: North East South West."
---

<TutorialPlayer>

# Battle Tactics & Survival

Not every fight goes as planned. MUME features **Combat Moods** (`berserk`, `aggressive`, `brave`, `normal`, `prudent`, `wimpy`). Changing mood adjusts your OB (Offensive Bonus) versus PB (Parry Bonus).

When facing a foe that hits too hard (such as a wild boar), do not fight to the death! Type `flee` (or `f`) to break away immediately and escape into a random neighboring room.

</TutorialPlayer>
