---
title: "Guilds & Practicing Skills"
description: "Locate guildmasters and spend practice sessions to learn combat skills."
teach:
  - command: "practice"
    desc: "view available skills and remaining practice sessions at a guildmaster"
  - command: "practice slashing"
    desc: "train your proficiency in slashing weapon combat"
steps:
  - ask: "practice"
    note: "Guildmasters in major cities teach skills and spells. Stand before Huor, the Fornost Warrior Guildmaster, and type `practice`."
    accept:
      - "practice"
      - "prac"
    hint: "Type: practice (or prac)"
    example: "> practice\nYou have 13 practice sessions left.\nHuor can teach you: slashing weapons, parry, bash, endurance..."
  - ask: "practice slashing"
    note: "Spend practice sessions to improve your knowledge in slashing weapons, increasing your Offensive Bonus when wielding swords."
    accept:
      - "practice slashing"
      - "prac slashing"
    hint: "Type: practice slashing"
    example: "> practice slashing\nYou took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
responses:
  practice: "You have 13 practice sessions left.\nHuor can teach you any of these skills:\n                   Sessions Knowledge Difficulty  Advice\nbash                  0/43      0%    Hard        I can't teach you enough\ncleaving weapons      0/29      0%    Normal      You could learn easily\nparry                 0/29      0%    Normal      You could learn easily\nslashing weapons      0/29      0%    Normal      You could learn easily"
  prac: "You have 13 practice sessions left.\nHuor can teach you: slashing weapons, parry, bash, endurance..."
  practice slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
  prac slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
---

<TutorialPlayer>

# Guild Training & Skill Progression

In MUME, your character advances by spending **practice sessions** at guildmasters located throughout Middle-earth (Warrior Guilds, Mage Guilds, Ranger Guilds, Scout Guilds, and Cleric Guilds).

Practicing weapon skills like `slashing` increases your weapon proficiency and Offensive Bonus. Defensive skills like `parry` or `dodge` improve your survival, while special maneuvers like `bash` allow warriors to knock opponents off their feet.

</TutorialPlayer>
