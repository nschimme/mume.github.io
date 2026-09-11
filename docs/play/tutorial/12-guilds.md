---
title: "Guild Training & Practicing Skills"
description: "Visit the Guild of Warriors in Fornost to train weapon skills and combat techniques."
teach:
  - command: "practice"
    desc: "view available skills and remaining practice sessions"
  - command: "practice slashing"
    desc: "train weapon mastery with slashing swords"
steps:
  - ask: "practice"
    accept:
      - "practice"
      - "prac"
    hint: "Type: practice"
    example: "> practice\nYou have 13 practice sessions left.\nHuor can teach you: bash, cleaving, parry, slashing..."
  - ask: "practice slashing"
    accept:
      - "practice slashing"
      - "prac slashing"
    hint: "Type: practice slashing"
    example: "> practice slashing\nYou took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
responses:
  practice: "You have 13 practice sessions left.\nHuor of Dor-lómin can teach you any of these skills:\n  bash              0/43   0%  Hard\n  cleaving weapons  0/29   0%  Normal\n  endurance         0/58   0%  Very hard\n  parry             0/29   0%  Normal\n  slashing weapons  0/29   0%  Normal"
  prac: "You have 13 practice sessions left."
  practice slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
  prac slashing: "You took 1 out of 29 sessions in this skill. Your knowledge is now 30%."
---

<TutorialPlayer>

# The Guilds of Fornost

Returning to Fornost, wounded or victorious, you seek out your guild. The **Guild of Warriors** lies along Guild Street, overseen by guildmaster Huor of Dor-lómin.

As you gain levels, you receive practice sessions. Use `practice` to see what skills are available (e.g. `slashing weapons`, `parry`, `bash`, `endurance`). Practicing weapon skills directly boosts your Offensive Bonus!

</TutorialPlayer>
