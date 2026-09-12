---
title: "Hall of Arms & Guild Training"
description: "Visit Huor in the Fornost Warrior Guild to practice slashing weapons, parry, bash, and endurance."
teach:
  - command: "practice"
    desc: "view available skills and practice sessions at a guildmaster"
  - command: "prac slashing"
    desc: "train slashing weapons proficiency for backswords"
  - command: "prac parry"
    desc: "improve defensive parry bonus with weapons"
  - command: "prac bash"
    desc: "learn bash combat maneuver to knock down foes"
  - command: "prac endurance"
    desc: "train stamina and endurance recovery"
  - command: "bow huor"
    desc: "bow in gratitude to Guildmaster Huor"
steps:
  - ask: "practice"
    note: "Fuor steps into the Guild of Warriors. Type PRACTICE to view skills Huor can teach."
    accept:
      - "practice"
      - "prac"
    hint: "Type: practice"
    example: "> practice\nYou have 13 practice sessions left. Huor can teach: bash, parry, slashing..."
  - ask: "prac slashing"
    note: "Train your weapon skill for Fuor's backsword."
    accept:
      - "prac slashing"
      - "practice slashing"
    hint: "Type: prac slashing"
    example: "> prac slashing\nYou took 1 out of 29 sessions. Your knowledge is now 30%."
  - ask: "prac parry"
    note: "Train weapon parrying to increase your Parry Bonus (PB)."
    accept:
      - "prac parry"
      - "practice parry"
    hint: "Type: prac parry"
    example: "> prac parry\nYou took 1 out of 29 sessions. Your knowledge is now 28%."
  - ask: "prac bash"
    note: "Train bash to knock down opponents during battle."
    accept:
      - "prac bash"
      - "practice bash"
    hint: "Type: prac bash"
    example: "> prac bash\nYou took 1 out of 43 sessions. Your knowledge is now 24%."
  - ask: "prac endurance"
    note: "Train endurance to bolster your physical stamina."
    accept:
      - "prac endurance"
      - "practice endurance"
    hint: "Type: prac endurance"
    example: "> prac endurance\nYou took 1 out of 58 sessions. Your knowledge is now 17%."
  - ask: "bow huor"
    note: "Bow respectfully to Guildmaster Huor before departing."
    accept:
      - "bow huor"
      - "bow"
    hint: "Type: bow huor"
    example: "> bow huor\nYou bow before Huor of Dor-lómin."
responses:
  practice: "You have 13 practice sessions left.\nHuor can teach you any of these skills:\n                   Sessions Knowledge Difficulty  Advice\nbash                  0/43      0%    Hard        You could learn easily\ncleaving weapons      0/29      0%    Normal      You could learn easily\nendurance             0/58      0%    Very hard   I can't teach you enough\nparry                 0/29      0%    Normal      You could learn easily\nslashing weapons      0/29      0%    Normal      You could learn easily"
  prac: "You have 13 practice sessions left."
  prac slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
  practice slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
  prac parry: "You took 1 out of 29 sessions in this skill. Your knowledge is now 28%."
  practice parry: "You took 1 out of 29 sessions in this skill. Your knowledge is now 28%."
  prac bash: "You took 1 out of 43 sessions in this skill. Your knowledge is now 24%."
  practice bash: "You took 1 out of 43 sessions in this skill. Your knowledge is now 24%."
  prac endurance: "You took 1 out of 58 sessions in this skill. Your knowledge is now 17%."
  practice endurance: "You took 1 out of 58 sessions in this skill. Your knowledge is now 17%."
  bow huor: "You bow before Huor of Dor-lómin."
  bow: "You bow deeply."
---

<TutorialPlayer>

# Hall of Arms & Guild Training

Skills and weapon proficiencies determine your strength in battle.

Visit **Huor of Dor-lómin** at the Warrior Guild to inspect available training (`PRACTICE`), train slashing weapons (`PRAC SLASHING`), practice parrying (`PRAC PARRY`), learn bashing (`PRAC BASH`), and bolster endurance (`PRAC ENDURANCE`).

</TutorialPlayer>
