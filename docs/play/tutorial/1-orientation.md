---
title: "Account Creation & Hero Definition"
description: "Register your MUME account, define your character Fuor the Man Warrior, and prepare to awaken."
teach:
  - command: "new"
    desc: "begin interactive account creation"
  - command: "n"
    desc: "confirm you are creating a new account"
  - command: "traveler"
    desc: "choose your account username"
  - command: "1"
    desc: "choose Free Peoples of the West allegiance"
  - command: "1"
    desc: "choose Man race"
  - command: "1"
    desc: "choose Eriadorian subrace"
  - command: "1"
    desc: "confirm Eriadorian subrace details"
  - command: "2"
    desc: "choose Fornost as your hometown"
  - command: "1"
    desc: "choose Male sex"
  - command: "1"
    desc: "choose Warrior archetype"
  - command: "3"
    desc: "choose Balanced warrior specialization"
  - command: "1"
    desc: "accept generated character attributes"
  - command: "1"
    desc: "accept height and weight physique"
  - command: "1"
    desc: "select Latin-1 text encoding"
  - command: "Fuor"
    desc: "enter your character name"
  - command: "1"
    desc: "create character and awaken in Middle-earth"
steps:
  - ask: "new"
    note: "When you first connect to MUME, type NEW to begin account registration."
    accept:
      - "new"
    hint: "Type: new"
    example: "> new\nWelcome to MUME!\nYour first step here is to create an ACCOUNT."
  - ask: "n"
    note: "Each player is permitted ONLY ONE ACCOUNT. Confirm you do not have another account."
    accept:
      - "n"
      - "no"
    hint: "Type: n"
    example: "> n\nEnter new account name:"
  - ask: "traveler"
    note: "Pick an account name to manage all your characters."
    accept:
      - "traveler"
      - "exampleaccount"
    hint: "Type: traveler"
    example: "> traveler\nNow it's time to pick your account password."
  - ask: "1"
    note: "Choose your Allegiance: (1) Free Peoples of the West."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Race:\n (1) Man\n (2) Dwarf\n (3) Elf"
  - ask: "1"
    note: "Choose your Race: (1) Man."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Subrace:\n (1) Eriadorian\n (2) Dunadan"
  - ask: "1"
    note: "Choose your Subrace: (1) Eriadorian."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nEriadorian description...\n (1) Continue\n (2) Back"
  - ask: "1"
    note: "Select (1) Continue to confirm Eriadorian subrace."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Hometown:\n (1) Bree\n (2) Fornost"
  - ask: "2"
    note: "Choose your Hometown: (2) Fornost."
    accept:
      - "2"
    hint: "Type: 2"
    example: "> 2\nChoose Your Sex:\n (1) Male\n (2) Female"
  - ask: "1"
    note: "Choose your Sex: (1) Male."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Archetype:\n (1) Warrior\n (2) Stealthy scout"
  - ask: "1"
    note: "Choose your Archetype: (1) Warrior."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nWhat kind of warrior would you like to be?"
  - ask: "3"
    note: "Select (3) Balanced warrior specialization."
    accept:
      - "3"
    hint: "Type: 3"
    example: "> 3\nChoose Your Stats:\nStr:18 Int:11 Wis:12 Dex:16 Con:16 Wil:12 Per:14"
  - ask: "1"
    note: "Select (1) Continue to accept your warrior attributes."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Physique..."
  - ask: "1"
    note: "Select (1) Continue to accept your height and weight."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Text Encoding:\n (1) Latin-1  Eä"
  - ask: "1"
    note: "Select (1) Latin-1 text encoding."
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nChoose Your Name..."
  - ask: "Fuor"
    note: "Type your character's name: Fuor (the heroic Man of Eriador)."
    accept:
      - "Fuor"
      - "fuor"
    hint: "Type: Fuor"
    example: "> Fuor\nYour Character:\nName: Fuor\nHometown: Fornost..."
  - ask: "1"
    note: "Select (1) Create Fuor the Man to enter Middle-earth!"
    accept:
      - "1"
    hint: "Type: 1"
    example: "> 1\nWelcome to the land of Middle-earth."
responses:
  new: "Welcome to MUME!\n\nYour first step here is to create an ACCOUNT.\n\nMUME characters are organized into accounts. You can only have one account, and\nit cannot be shared with other players. You can create as many characters as\nyou like, but they must all belong to this account.\n\nDo you have another account on MUME [Y/N/?]?"
  n: "Enter new account name:"
  no: "Enter new account name:"
  traveler: "Now it's time to pick your account password. For your own protection, pick a\npassword that is not easy to guess.\nRemember this password well, you will need it every time you log in.\n\nAccount password:"
  exampleaccount: "Now it's time to pick your account password. For your own protection, pick a\npassword that is not easy to guess.\nRemember this password well, you will need it every time you log in.\n\nAccount password:"
  "1": "Choose Your Allegiance\nMUME takes place in the late Third Age, before the events described in The\nHobbit and after the loss of the One Ring by Sauron. A three-way war is\nescalating throughout the lands between three powerful forces.\n\n (1) Free Peoples of the West\n (2) Minions of Sauron\n (3) Renegade Zaugurz Orcs\n\nWhich side will you fight for? New players are recommended to start as the Free\nPeoples.\n\nPick a number, \"back\", \"?\">"
  "2": "Choose Your Sex\nYou can choose for your own character to be a male or female. Your choice will\nhave no impact on gameplay.\n\n (1) Male\n (2) Female\n\nWhat is your sex?, \"back\", \"?\">"
  "3": "Choose Your Stats\nPlease review the following statistics that were selected from your answers to\nresemble how you intend to play your character.\n\nStr:18 Int:11 Wis:12 Dex:16 Con:16 Wil:12 Per:14\n\n (1) Continue\n (2) Edit\n (3) Back\n\nWill you use these stats?, \"back\", \"?\">"
  Fuor: "Your Character\n--------------------------------------------------------------------------------\nName:           Fuor\nSex:            Male\nPhysique:       Average\nHometown:       Fornost\nAlignment:      Benevolent\nAllegiance:     Free Peoples\nRace:           Eriadorian Man\nDifficulty:     Normal\n--------------------------------------------------------------------------------\n\nAre you happy with your character? Once created, these choices are permanent.\n\n (1) Create Fuor the Man\n (2) Back\n\nCreate character, \"back\", \"?\">"
  fuor: "Your Character\n--------------------------------------------------------------------------------\nName:           Fuor\nSex:            Male\nPhysique:       Average\nHometown:       Fornost\nAlignment:      Benevolent\nAllegiance:     Free Peoples\nRace:           Eriadorian Man\nDifficulty:     Normal\n--------------------------------------------------------------------------------\n\nAre you happy with your character? Once created, these choices are permanent.\n\n (1) Create Fuor the Man\n (2) Back\n\nCreate character, \"back\", \"?\">"
---

<TutorialPlayer>

# Account Creation & Hero Definition

Your adventure begins at MUME's login prompt. In MUME, all characters belong to a single player account.

Follow Fuor step-by-step through MUME's modern character creation wizard: create your account (`NEW`), select your allegiance (**Free Peoples**), race (**Eriadorian Man**), hometown (**Fornost**), class (**Warrior**), and character name (**Fuor**).

Type `new` below to begin!

</TutorialPlayer>
