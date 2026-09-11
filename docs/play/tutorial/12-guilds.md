---
title: "Character Growth & Guilds"
description: "Visiting Guildmasters and spending practice points on skills."
teach:
  - command: "practice"
    desc: "list available skills at a guildmaster"
  - command: "practice slashing"
    desc: "spend a session to learn a weapon skill"
practice: "practice"
accept:
  - "practice"
  - "prac"
hint: "Type: practice"
example: "> practice\nYou have 13 practice sessions left.\nHuor can teach you:\n  slashing weapons   0/29   0%   Normal\n  parry              0/29   0%   Normal"
responses:
  practice: "You have 13 practice sessions left.\nHuor can teach you:\n  slashing weapons   0/29   0%   Normal\n  parry              0/29   0%   Normal\n  endurance          0/58   0%   Very hard\n  bash               0/43   0%   Hard"
  prac: "You have 13 practice sessions left.\nHuor can teach you:\n  slashing weapons   0/29   0%   Normal\n  parry              0/29   0%   Normal"
  practice slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
  prac slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
---

<TutorialPlayer>

# Practicing Skills at Guilds

When you gain levels, you earn practice sessions.

Visit Guildmasters across Middle-earth (Warrior, Ranger, Scout, Cleric, Mage) and type `practice` to see what skills they teach.

`practice <skill>` spends sessions to raise knowledge % in weapon skills (slashing, parry, bash), survival (swim, climb, ride), or magic.

</TutorialPlayer>
