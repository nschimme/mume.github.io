---
title: "Awakening & Praying to Black Hill Village"
description: "Inspect the Halls of Mandos, gather essential survival supplies, and pray to depart for Black Hill Village."
teach:
  - command: "look"
    desc: "examine your initial surroundings in Mandos"
  - command: "examine sign"
    desc: "inspect the welcome sign for detailed newcomer instructions"
  - command: "get torch"
    desc: "pick up the wooden torch from the throne"
  - command: "get cheese"
    desc: "gather rations for your upcoming journey"
  - command: "time"
    desc: "check current Middle-earth time and date"
  - command: "pray to the tower hills"
    desc: "pray to the Ainulindalë to depart for Black Hill Village"
steps:
  - ask: "look"
    note: "Fuor awakens in the cavernous Halls of Mandos. Inspect your surroundings."
    accept:
      - "look"
      - "l"
    hint: "Type: look (or l)"
    example: "> look\nHalls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp."
  - ask: "examine sign"
    note: "The command EXAMINE provides deeper detail than LOOK. Inspect the Welcome Sign."
    accept:
      - "examine sign"
      - "ex sign"
      - "look sign"
    hint: "Type: examine sign"
    example: "> examine sign\nWelcome to MUME! Type 'HELP NEWBIE' for an introduction."
  - ask: "get torch"
    note: "Pick up the wooden torch resting on the throne."
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
    example: "> get cheese\nYou get a piece of cheese."
  - ask: "time"
    note: "Check the current in-game Middle-earth calendar time."
    accept:
      - "time"
    hint: "Type: time"
    example: "> time\nMonday, the 10th of Afteryule, year 2852 of the Third Age."
  - ask: "pray to the tower hills"
    note: "Pray to the Ainulindalë to depart Mandos and arrive in Black Hill Village!"
    accept:
      - "pray to the tower hills"
      - "pray tower hills"
      - "pray"
    hint: "Type: pray to the tower hills"
    example: "> pray to the tower hills\nIn response to your request strange harmonies come from nowhere...\nYou blink, you vanish! And you are in Black Hill Village!"
responses:
  look: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp. All\nmortal spirits are summoned here after their death yet the Halls never fill\nsince they expand with time. The cavern walls are clad with tapestries woven by\nVaire the Weaver which depict every event of the past and of the future. A bowl\ncontaining a few drops of the pale dew of Telperion is the only light source.\nA Welcome Sign for new players is here.\nThe throne of Mandos can be seen in the largest cavern.\nOn the throne, there are a piece of cheese, a torch, a hunting knife, a pair of\nslate blue pants, and a slate blue shirt.\nA large fountain, made from grey stone, pours water from its centre.\nExits: none."
  l: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp.\nA Welcome Sign for new players is here.\nOn the throne, there are a piece of cheese, a torch, and a hunting knife."
  examine sign: "Welcome to MUME! If you learn the commands and features, your life may be fulfilling and rewarding.\nPlease type 'HELP NEWBIE' for an introduction to MUME's most important aspects.\nWhen you are ready, leave these halls by praying to the region where you wish to begin.\nType 'pray to the tower hills' to start in Black Hill Village between the realms of Dwarves, Elves, Hobbits, and Men."
  ex sign: "Welcome to MUME! Type 'HELP NEWBIE' for an introduction."
  look sign: "Welcome to MUME! Type 'HELP NEWBIE' for an introduction."
  get torch: "You get a torch."
  take torch: "You get a torch."
  get cheese: "You get a piece of cheese."
  take cheese: "You get a piece of cheese."
  time: "According to the Dunadan calendar, it is:\nMonday, the 10th of Afteryule, year 2852 of the Third Age."
  pray to the tower hills: "You kneel down and try to hear the Ainulindale.\nIn response to your request strange harmonies come from nowhere...\nListening to them, you have the strange sensation to fade away...\nSuddenly an explosion of ancient rhymes makes the space collapse around you!\nYou blink, you vanish! And you are in Black Hill Village!\n\nThe Foaming Mug's Beer Garden\nWooden tables have been set on the grass in this garden allowing those staying\nat the inn to eat and drink outdoors when the weather permits. A simple stone\nwall running around the edge of the grass keeps this area private.\nA small oaken table has been set here.\nA circular stone well has been built here.\nExits: south, west."
  pray tower hills: "In response to your request strange harmonies come from nowhere... You vanish! And you are in Black Hill Village!"
  pray: "In response to your request strange harmonies come from nowhere... You vanish! And you are in Black Hill Village!"
---

<TutorialPlayer>

# Awakening & Departure for Black Hill Village

Fuor has awakened in the ancient **Halls of Mandos**, where mortal spirits gather before entering Middle-earth.

Inspect your cavernous surroundings, gather your starting torch and provisions, check the time, and pray to the Ainulindalë to begin your journey in **Black Hill Village**.

</TutorialPlayer>
