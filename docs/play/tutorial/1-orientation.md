---
title: "Account Creation & Awakening in Mandos"
description: "Creating your MUME account, defining your first hero, and awakening in the Halls of Mandos."
teach:
  - command: "new"
    desc: "create a new account and character"
  - command: "look"
    desc: "examine your initial surroundings in Mandos"
  - command: "help accounts"
    desc: "review the single account rule"
steps:
  - ask: "new"
    note: "When you first connect to MUME, you register an account. Each player is permitted ONLY ONE ACCOUNT, under which all your characters live."
    accept:
      - "new"
    hint: "Type: new"
    example: "> new\nWelcome to MUME!\nYour first step here is to create an ACCOUNT."
  - ask: "look"
    note: "Now that your character awakens in the Halls of Mandos, take time to inspect the room around you."
    accept:
      - "look"
      - "l"
    hint: "Type: look (or l)"
    example: "> look\nHalls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp."
  - ask: "help accounts"
    note: "Review MUME's fundamental account policy before departing into Middle-earth."
    accept:
      - "help accounts"
      - "help account"
    hint: "Type: help accounts"
    example: "> help accounts\nEach player is permitted ONLY ONE ACCOUNT."
responses:
  new: "Welcome to MUME!\nYour first step here is to create an ACCOUNT.\nMUME characters are organized into accounts. You can have ONLY ONE ACCOUNT.\nDo you have another account on MUME [Y/N/?]? n\nEnter new account name: traveler\nAccount pass phrase: ********\nCongratulations! Account created.\nDefining character: Male Man Warrior (Balanced)\nName: Fuor\nCharacter Fuor created!"
  look: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp.\nAll mortal spirits are summoned here after their death yet the Halls never fill since they expand with time.\nThe cavern walls are clad with tapestries woven by Vairë the Weaver which depict every event of the past and of the future.\nA bowl containing a few drops of the pale dew of Telperion is the only light source.\nA large torch lies here among the dust.\nA large piece of cheese has been placed here.\nA Warning Sign for new players is here.\nA large bulletin board is mounted on a wall here.\nA large fountain, made from grey stone, pours water from its centre."
  l: "Halls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp.\nAll mortal spirits are summoned here after their death yet the Halls never fill since they expand with time.\nThe cavern walls are clad with tapestries woven by Vairë the Weaver which depict every event of the past and of the future.\nA bowl containing a few drops of the pale dew of Telperion is the only light source.\nA large torch lies here among the dust.\nA large piece of cheese has been placed here.\nA Warning Sign for new players is here.\nA large bulletin board is mounted on a wall here.\nA large fountain, made from grey stone, pours water from its centre."
  help accounts: "HELP ACCOUNTS ON MUME\n=====================\nMUME uses an ACCOUNT system. Each player is permitted ONLY ONE ACCOUNT. You may create multiple characters under your single account, but sharing accounts or multi-logging is strictly forbidden."
---

<TutorialPlayer>

# Account Creation & Awakening in Mandos

Your adventure begins at MUME's login screen. In MUME, all characters belong to a single player account.

As told in our sample session, you first create your account (`NEW`), pick your race, class, and character name (**Fuor the Man**), and awaken in the mysterious **Halls of Mandos** where mortal spirits assemble before stepping into Middle-earth.

Begin by simulating account creation and inspecting your cavernous surroundings.

</TutorialPlayer>
