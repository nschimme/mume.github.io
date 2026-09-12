---
title: "Communication & Fellowship"
description: "Communicate with fellow adventurers using say, tell, narrate, sing, follow, and group commands."
teach:
  - command: "say hello"
    desc: "speak to everyone present in your current room"
  - command: "tell ermin do you wish to adventure?"
    desc: "send a direct private message to a specific player anywhere"
  - command: "narrate greetings warriors!"
    desc: "broadcast a public message to all players on your faction side"
  - command: "sing a cheerful traveling song"
    desc: "sing a ballad audible to fellow faction adventurers"
  - command: "follow ermin"
    desc: "automatically follow a leader as they move through Middle-earth"
  - command: "group"
    desc: "display all current members in your adventuring party"
steps:
  - ask: "say hello"
    note: "Fuor encounters Ermin the Elf in Fornost. Speak aloud to everyone in the room."
    accept:
      - "say hello"
      - "say hi"
    hint: "Type: say hello"
    example: "> say hello\nOk.\nYou say 'hello'\nErmin says 'Hello!'"
  - ask: "tell ermin do you wish to adventure?"
    note: "Send a private direct message to Ermin."
    accept:
      - "tell ermin do you wish to adventure?"
      - "tell ermin hello"
      - "tell ermin"
    hint: "Type: tell ermin do you wish to adventure?"
    example: "> tell ermin do you wish to adventure?\nErmin tells you 'sure, follow me!'"
  - ask: "narrate greetings warriors!"
    note: "Broadcast a global regional message to all Free Peoples players."
    accept:
      - "narrate greetings warriors!"
      - "narrate greetings"
      - "narrate"
    hint: "Type: narrate greetings warriors!"
    example: "> narrate greetings warriors!\nYou narrate 'greetings warriors!'"
  - ask: "sing a cheerful traveling song"
    note: "Sing a ballad to entertain your companions."
    accept:
      - "sing a cheerful traveling song"
      - "sing song"
      - "sing"
    hint: "Type: sing a cheerful traveling song"
    example: "> sing a cheerful traveling song\nYou sing 'a cheerful traveling song'"
  - ask: "follow ermin"
    note: "Follow Ermin to travel together across Middle-earth."
    accept:
      - "follow ermin"
      - "follow"
    hint: "Type: follow ermin"
    example: "> follow ermin\nYou now follow Ermin."
  - ask: "group"
    note: "Check your adventuring party members with GROUP."
    accept:
      - "group"
    hint: "Type: group"
    example: "> group\nYour group consists of: Ermin (Head), Fuor."
responses:
  say hello: "Ok.\nYou say 'hello'\nErmin the Elf says 'Hello!'"
  say hi: "Ok.\nYou say 'hi'\nErmin the Elf says 'Hello!'"
  tell ermin do you wish to adventure?: "Ok.\nErmin tells you 'sure, follow me!'"
  tell ermin hello: "Ok.\nErmin tells you 'hello there!'"
  tell ermin: "Ok.\nErmin tells you 'sure!'"
  narrate greetings warriors!: "You narrate 'greetings warriors!'"
  narrate greetings: "You narrate 'greetings'"
  narrate: "You narrate 'greetings'"
  sing a cheerful traveling song: "You sing 'a cheerful traveling song'"
  sing song: "You sing 'song'"
  sing: "You sing a merry ballad."
  follow ermin: "You now follow Ermin.\nYou are now a member of Ermin's group."
  follow: "You now follow Ermin."
  group: "Your group consists of:\n     Ermin (Head of group)\n     Fuor"
---

<TutorialPlayer>

# Communication & Fellowship

MUME is a multiplayer world where forming parties and communicating with allies is essential.

Practice local speech (`SAY`), direct tells (`TELL`), regional broadcasts (`NARRATE`), singing (`SING`), joining parties (`FOLLOW`), and viewing group members (`GROUP`).

</TutorialPlayer>
