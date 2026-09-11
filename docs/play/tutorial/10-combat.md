---
chapter: 10
totalChapters: 16
title: "Combat & Tactics"
description: "Assessing enemies with consider, combat stances (moods), trophy, and fleeing."
prev: "/play/tutorial/9-scouting"
next: "/play/tutorial/11-resting"
teach:
  - command: "consider boar"
    desc: "gauge enemy difficulty before fighting (also con)"
  - command: "kill snake"
    desc: "attack a target creature"
  - command: "change mood aggressive"
    desc: "increase OB at the cost of PB defense"
  - command: "trophy"
    desc: "view list of slain creatures and knowledge %"
  - command: "flee"
    desc: "break off combat and escape!"
practice: "change mood aggressive"
accept:
  - "change mood aggressive"
  - "cha m aggressive"
  - "change mood"
hint: "Type: change mood aggressive"
example: "> change mood aggressive\nOk.\nOB: 26%, DB: 26%, PB: 16%, Armour: 17%. Mood: aggressive."
---

<TutorialPlayer>

# Assessing Enemies

Never attack blindly! Always use `consider <target>` (or `con`) before swinging. The game compares your level and gear to the enemy, warning you if a creature is dangerous or if you 'need some luck!'.

# Battle Stances, Trophy & Fleeing

Combat is real-time. Initiate with `kill <target>`. Attacks occur automatically until finished.

`change mood` adjusts your stance: berserk, aggressive, brave, normal, prudent, or wimpy. Aggressive increases OB (offense) but drops PB (parry).

`trophy` lists enemies you have slain during your travels. `flee` breaks away from combat through a random exit if health gets low!

</TutorialPlayer>
