---
title: "Awakening in Mandos & Departure"
description: "Inspect the Halls of Mandos, gather essential survival supplies, and pray to depart for Fornost."
teach:
  - command: "look"
    desc: "examine your initial surroundings in Mandos"
  - command: "examine sign"
    desc: "inspect the warning sign for detailed newcomer instructions"
  - command: "get torch"
    desc: "pick up the wooden torch from the floor"
  - command: "get cheese"
    desc: "gather rations for your upcoming journey"
  - command: "time"
    desc: "check current Middle-earth time and date"
  - command: "pray fornost"
    desc: "pray to the Ainur to depart for your starting town"
steps:
  - ask: "look"
    note: "Fuor awakens in the legendary Halls of Mandos. Inspect your surroundings."
    accept:
      - "look"
      - "l"
    hint: "Type: look (or l)"
    example: "> look\nHalls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp."
  - ask: "examine sign"
    note: "The command EXAMINE provides deeper detail than LOOK. Inspect the Warning Sign."
    accept:
      - "examine sign"
      - "ex sign"
      - "look sign"
    hint: "Type: examine sign"
    example: "> examine sign\nThis is a complex world! Type HELP BASICS for an introduction."
  - ask: "get torch"
    note: "Pick up the wooden torch lying in the dust."
    accept:
      - "get torch"
      - "take torch"
    hint: "Type: get torch"
    example: "> get torch\nYou get a torch."
  - ask: "get cheese"
    note: "Gather the piece of cheese for rations."
    accept:
      - "get cheese"
      - "take cheese"
    hint: "Type: get cheese"
    example: "> get cheese\nYou get some cheese."
  - ask: "time"
    note: "Check the current in-game Middle-earth time."
    accept:
      - "time"
    hint: "Type: time"
    example: "> time\nIt is 8 o'clock am on Highday, the 14th of Astron."
  - ask: "pray fornost"
    note: "As a Man of Eriador, pray to the Ainur to depart Mandos for Fornost!"
    accept:
      - "pray fornost"
      - "pray"
    hint: "Type: pray fornost"
    example: "> pray fornost\nYou kneel down and try to hear the Ainulindalë... You blink, you vanish! And you are in Fornost!"
responses:
  look: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp.\nAll mortal spirits are summoned here after their death yet the Halls never fill since they expand with time.\nThe cavern walls are clad with tapestries woven by Vairë the Weaver which depict every event of the past and of the future.\nA bowl containing a few drops of the pale dew of Telperion is the only light source.\nA large torch lies here among the dust.\nA large piece of cheese has been placed here.\nA Warning Sign for new players is here.\nA large bulletin board is mounted on a wall here.\nA large fountain, made from grey stone, pours water from its centre."
  l: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp.\nA bowl containing a few drops of the pale dew of Telperion is the only light source.\nA large torch lies here among the dust.\nA large piece of cheese has been placed here.\nA Warning Sign for new players is here."
  examine sign: "This is a complex world! If you learn the commands and features, your life may be fulfilling and rewarding.\nPlease type 'HELP NEWBIE' for an introduction to MUME's most important aspects.\nWhen you are ready, leave these halls by praying to the town where you wish to begin.\nElves/Half-elven: Grey Havens, Fornost, Rivendell.\nMen/Women: Fornost.\nDwarves: Blue Mountains, Fornost.\nHobbits: Shire, Fornost."
  ex sign: "This is a complex world! Type 'HELP NEWBIE' for an introduction."
  look sign: "This is a complex world! Type 'HELP NEWBIE' for an introduction."
  get torch: "You get a torch."
  take torch: "You get a torch."
  get cheese: "You get some cheese."
  take cheese: "You get some cheese."
  time: "It is 8 o'clock am on Highday, the 14th of Astron, year 2850 of the Third Age."
  pray fornost: "You kneel down and try to hear the Ainulindalë.\nIn response to your request strange harmonies come from nowhere...\nListening to them, you have the strange sensation to fade away...\nSuddenly an explosion of ancient rhymes makes the space collapse around you!\nYou blink, you vanish! And you are in Fornost!\nAt the Well\nYou stand at an old well, which serves its purpose as people arrive to fill their barrels.\nA circular stone well has been built here.\nFardur the guide is here, leaning on his walking-stick.\nThe Ainulindalë whispers to you 'Fornost is your hometown!'"
  pray: "You kneel down and try to hear the Ainulindalë... You blink, you vanish! And you are in Fornost!"
---

<TutorialPlayer>

# Awakening in Mandos & Departure

Fuor has awakened in the ancient **Halls of Mandos**, where mortal spirits gather before entering Middle-earth.

Inspect your cavernous surroundings, gather your starting torch and food, check the time, and pray to the Ainur to begin your journey in **Fornost**.

</TutorialPlayer>
