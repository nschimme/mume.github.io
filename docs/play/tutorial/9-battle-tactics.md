---
title: "Combat Stances & Battle Tactics"
description: "Adjust offensive and defensive combat stances, battle a wild boar cub, and achieve Level 2."
teach:
  - command: "change mood aggressive"
    desc: "shift to aggressive stance for maximum Offensive Bonus (OB)"
  - command: "stat"
    desc: "verify OB increase and PB decrease in aggressive stance"
  - command: "change mood wimpy"
    desc: "return to defensive wimpy stance for safety"
  - command: "hit cub"
    desc: "engage a wild boar cub in battle"
  - command: "info"
    desc: "verify your new rank: Level 2 Man Apprentice!"
steps:
  - ask: "change mood aggressive"
    note: "Change Fuor's stance to AGGRESSIVE to maximize Offensive Bonus."
    accept:
      - "change mood aggressive"
      - "cha m aggressive"
    hint: "Type: change mood aggressive"
    example: "> change mood aggressive\nOk."
  - ask: "stat"
    note: "Check your stats to observe higher OB (26%) and lower PB (16%)."
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 26%, DB: 26%, PB: 16%. Mood: aggressive."
  - ask: "change mood wimpy"
    note: "Return to a defensive WIMPY stance."
    accept:
      - "change mood wimpy"
      - "cha m wimpy"
    hint: "Type: change mood wimpy"
    example: "> change mood wimpy\nOk."
  - ask: "hit cub"
    note: "Attack the wild boar cub!"
    accept:
      - "hit cub"
      - "kill cub"
      - "k cub"
    hint: "Type: hit cub"
    example: "> hit cub\nYou strongly slash a boar cub! You gain a level!"
  - ask: "info"
    note: "Inspect your character sheet to celebrate reaching Level 2!"
    accept:
      - "info"
      - "inf"
    hint: "Type: info"
    example: "> info\nThis ranks you as Fuor the Man Apprentice (level 2)."
responses:
  change mood aggressive: "Ok."
  cha m aggressive: "Ok."
  stat: "OB: 26%, DB: 26%, PB: 16%, Armour: 17%. Wimpy: 0. Mood: aggressive."
  st: "OB: 26%, DB: 26%, PB: 16%."
  change mood wimpy: "Ok."
  cha m wimpy: "Ok."
  hit cub: "You strongly slash a boar cub's left foreleg and shatter it.\nYou slash a boar cub's body extremely hard and shatter it.\nYou gain a level!\nYou receive your share of experience.\nCongratulations! This is the first time you've killed it!\nA boar cub is dead! R.I.P."
  kill cub: "You strongly slash a boar cub... You gain a level! A boar cub is dead! R.I.P."
  k cub: "You strongly slash a boar cub... You gain a level! A boar cub is dead! R.I.P."
  info: "You are a male Eriadorian.\nThis ranks you as Fuor the Man Apprentice (level 2).\nYou have 30/38 hit, 74/74 mana, and 114/114 movement points.\nOffensive Bonus: 19%, Dodging Bonus: 26%, Parrying Bonus: 25%."
  inf: "Fuor the Man Apprentice (level 2). Hit: 30/38, Mana: 74/74, Moves: 114/114."
---

<TutorialPlayer>

# Combat Stances & Battle Tactics

Combat in MUME allows you to adjust your tactical stance depending on the threat level.

Practice changing combat stances (`CHANGE MOOD AGGRESSIVE` / `WIMPY`), engaging a wild boar cub in battle (`HIT CUB`), and celebrating Fuor's milestone: **Gaining Level 2**!

</TutorialPlayer>
