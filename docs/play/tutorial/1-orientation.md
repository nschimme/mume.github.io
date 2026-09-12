---
title: "Account Creation & Hero Definition"
description: "Register your MUME account, define your character Fuor the Man Warrior, and prepare to awaken."
teach:
  - command: "new"
    desc: "begin interactive account creation"
  - command: "n"
    desc: "confirm you are a new player creating your single account"
  - command: "traveler"
    desc: "choose your account username"
  - command: "m"
    desc: "select Male sex"
  - command: "man"
    desc: "select Man race"
  - command: "w"
    desc: "select Warrior class"
  - command: "b"
    desc: "select Balanced warrior archetype"
  - command: "l"
    desc: "select Latin-1 text encoding"
  - command: "Fuor"
    desc: "enter your character name"
  - command: "y"
    desc: "confirm character creation"
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
    example: "> traveler\nAccount created!\nSelect a sex:\n  m) Male       f) Female"
  - ask: "m"
    note: "Choose your character's sex (Male)."
    accept:
      - "m"
      - "male"
    hint: "Type: m"
    example: "> m\nSelect a race:\n  m) Man        d) Dwarf      e) Elf      a) Half-Elf      h) Hobbit"
  - ask: "man"
    note: "Choose your character's race (Man)."
    accept:
      - "m"
      - "man"
    hint: "Type: man"
    example: "> man\nSelect a class:\n  m) Magical arts   h) Healer   s) Scout   w) Warrior"
  - ask: "w"
    note: "Choose your character's class (Warrior)."
    accept:
      - "w"
      - "warrior"
    hint: "Type: w"
    example: "> w\nWhat kind of warrior would you like to be?"
  - ask: "b"
    note: "Select the Balanced warrior archetype."
    accept:
      - "b"
      - "balanced"
    hint: "Type: b"
    example: "> b\nSelect character encoding:\n  L) Latin-1  Eä\n  U) UTF-8    Eä\n  A) ASCII    Ea"
  - ask: "l"
    note: "Select Latin-1 encoding for character text."
    accept:
      - "l"
      - "latin-1"
      - "u"
    hint: "Type: l"
    example: "> l\nWhat name do you want for your character?"
  - ask: "Fuor"
    note: "Type your character's name: Fuor (the heroic Man of Eriador)."
    accept:
      - "Fuor"
      - "fuor"
    hint: "Type: Fuor"
    example: "> Fuor\nFuor the Man, is that correct [Y/N]?"
  - ask: "y"
    note: "Confirm character creation to awaken Fuor in the Halls of Mandos."
    accept:
      - "y"
      - "yes"
    hint: "Type: y"
    example: "> y\nWelcome to the land of Middle Earth!"
responses:
  new: "Welcome to MUME!\n\nYour first step here is to create an ACCOUNT.\n\nMUME characters are organized into accounts. You can have ONLY ONE ACCOUNT,\nand different players may not share the same account.\n\nDo you have another account on MUME [Y/N/?]?"
  n: "Enter new account name:"
  no: "Enter new account name:"
  traveler: "Account pass phrase: ********\nVerify: ********\nOK.\n\nCongratulations! You have created your account.\n\nSelect a sex:\n  m) Male       f) Female\nSex?"
  exampleaccount: "Account pass phrase: ********\nVerify: ********\nOK.\n\nCongratulations! You have created your account.\n\nSelect a sex:\n  m) Male       f) Female\nSex?"
  m: "Select a race (type ? for help):\n  m) Man        d) Dwarf      e) Elf      a) Half-Elf      h) Hobbit\nRace?"
  male: "Select a race (type ? for help):\n  m) Man        d) Dwarf      e) Elf      a) Half-Elf      h) Hobbit\nRace?"
  man: "What of the following descriptions is most appropriate for your character?\n\n  m) Master of magical arts\n  h) Healer\n  s) Stealthy scout\n  w) Warrior\n\nYour choice (?) >"
  w: "What kind of warrior would you like to be?\n\n  s) Strong-willed\n  t) Particularly tough\n  b) Balanced between the previous choices\n  w) Expert of the wilderness (ranger)\n\nYour choice (?) >"
  warrior: "What kind of warrior would you like to be?\n\n  s) Strong-willed\n  t) Particularly tough\n  b) Balanced between the previous choices\n  w) Expert of the wilderness (ranger)\n\nYour choice (?) >"
  b: "Select the character encoding that best displays \"Eä\" with two dots over the a:\n  L) Latin-1  Eä\n  U) UTF-8    Eä\n  A) ASCII    Ea\nCharacter encoding?"
  balanced: "Select the character encoding that best displays \"Eä\" with two dots over the a:\n  L) Latin-1  Eä\n  U) UTF-8    Eä\n  A) ASCII    Ea\nCharacter encoding?"
  l: "What name do you want for your character?\nCharacter name (or enter for more, or ?):"
  latin-1: "What name do you want for your character?\nCharacter name (or enter for more, or ?):"
  u: "What name do you want for your character?\nCharacter name (or enter for more, or ?):"
  Fuor: "New character Fuor created (7-bit ascii name is fuor).\n\nFuor the Man, is that correct [Y/N]?"
  fuor: "New character Fuor created (7-bit ascii name is fuor).\n\nFuor the Man, is that correct [Y/N]?"
  y: "            ~~~\n           ~~         _----|        _ _ __ _ _\n                       ----|_----|  ]-I-II-I-[\n   _ _ _/\\_ _ _ _---|      | ----|   \\ `  ' /\n   ]-I-I--I-I-[  ---|      |     |    |. ` |\n\nWelcome to the land of Middle Earth. May your visit here be... interesting.\nNever forget! Try to role-play...\n\nHalls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp."
  yes: "            ~~~\n           ~~         _----|        _ _ __ _ _\n                       ----|_----|  ]-I-II-I-[\n   _ _ _/\\_ _ _ _---|      | ----|   \\ `  ' /\n   ]-I-I--I-I-[  ---|      |     |    |. ` |\n\nWelcome to the land of Middle Earth. May your visit here be... interesting.\nNever forget! Try to role-play...\n\nHalls of Mandos\nYou are in the Halls of Mandos which are larger than any mortal can grasp."
---

<TutorialPlayer>

# Account Creation & Hero Definition

Your adventure begins at MUME's login prompt. In MUME, all characters belong to a single player account.

Follow Fuor step-by-step as he registers his account (`NEW`), selects his sex, race, class, archetype, and character name (**Fuor the Man**), and prepares to awaken.

Type `new` below to begin!

</TutorialPlayer>
