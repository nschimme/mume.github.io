---
title: "Combat & Tactics"
description: "Assessing enemies with consider, combat stances (moods), trophy, and fleeing."
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
responses:
  consider boar: "You would need some luck!"
  con boar: "You would need some luck!"
  consider: "You would need some luck!"
  kill snake: "You slash a garden snake's head hard and shatter it!\nYou receive your share of experience."
  change mood aggressive: "Ok.\nOB: 26%, DB: 26%, PB: 16%, Armour: 17%. Wimpy: 0. Mood: aggressive."
  cha m aggressive: "Ok.\nOB: 26%, DB: 26%, PB: 16%, Armour: 17%. Wimpy: 0. Mood: aggressive."
  change mood: "   _\n  | |   berserk\n  | |   aggressive\n  | |   brave\n  | |   normal\n  | |   prudent\n  |~|<- wimpy\n  / \\\n  \\_/"
  trophy: "		*** TROPHY *** (Number Killed, Knowledge, Mobile)\n|   1,  1%,  A butterfly               |\n|   1, 10%,  A boar cub                |"
  flee: "You panic and scramble away!\nYou flee to the East! You manage to escape safely."
---

<TutorialPlayer>

# Assessing Enemies

Never attack blindly! Always use `consider <target>` (or `con`) before swinging. The game compares your level and gear to the enemy, warning you if a creature is dangerous or if you 'need some luck!'.

# Battle Stances, Trophy & Fleeing

Combat is real-time. Initiate with `kill <target>`. Attacks occur automatically until finished.

`change mood` adjusts your stance: berserk, aggressive, brave, normal, prudent, or wimpy. Aggressive increases OB (offense) but drops PB (parry).

`trophy` lists enemies you have slain during your travels. `flee` breaks away from combat through a random exit if health gets low!

</TutorialPlayer>
