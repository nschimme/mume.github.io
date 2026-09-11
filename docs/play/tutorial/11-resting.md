---
title: "Resting & Recovery"
description: "Resting, sleeping, and standing to recover health and stamina."
teach:
  - command: "rest"
    desc: "sit down to recover health and movement"
  - command: "sleep"
    desc: "sleep for fast health and stamina recovery"
  - command: "wake / stand"
    desc: "wake up and stand back on your feet"
steps:
  - ask: "rest"
    accept:
      - "rest"
      - "sleep"
    hint: "Type: rest"
    example: "> rest\nYou sit down and rest your tired bones."
responses:
  rest: "You sit down and rest your tired bones."
  sleep: "You go to sleep."
  wake: "You wake, and sit up."
  stand: "You stand up."
---

<TutorialPlayer>

# Resting, Sleeping & Standing

After combat, recover hit points and movement points in safe areas.

`rest` sits down to recover at moderate speed. `sleep` goes to sleep for faster recovery (`wake` to wake up, `stand` to stand up).

Note: You recover points much slower if you are hungry or thirsty!

</TutorialPlayer>
