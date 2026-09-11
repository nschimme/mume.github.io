---
title: "Arrival at Fornost & Observation"
description: "Pray to the Ainur to arrive at Fornost Well, and observe the bustling town square."
teach:
  - command: "pray fornost"
    desc: "travel from Mandos to your starting town"
  - command: "look"
    desc: "examine the well in Fornost"
steps:
  - ask: "pray fornost"
    accept:
      - "pray fornost"
      - "pray"
    hint: "Type: pray fornost"
    example: "> pray fornost\nYou kneel down and try to hear the Ainulindalë...\nSuddenly an explosion of ancient rhymes makes space collapse... You are in Fornost!"
  - ask: "look"
    accept:
      - "look"
      - "l"
    hint: "Type: look"
    example: "> look\nAt the Well\nYou stand at an old well, which serves its purpose as people arrive to fill barrels."
responses:
  pray fornost: "You kneel down and try to hear the Ainulindalë.\nIn response to your request strange harmonies come from nowhere...\nListening to them, you have the strange sensation to fade away...\nSuddenly an explosion of ancient rhymes makes the space collapse around you!\nYou blink, you vanish! And you are in Fornost!\nAt the Well\nYou stand at an old well, which apparently still serves its purpose, as people\narrive to fill their barrels, pots or waterskins.\nA circular stone well has been built here.\nFardur the guide is here, leaning on his walking-stick.\nAn insolent scholar is here, pondering.\nThe Ainulindalë whispers to you 'Fornost is your hometown!'"
  pray: "You kneel down and try to hear the Ainulindalë...\nYou blink, you vanish! And you are in Fornost!"
  look: "At the Well\nYou stand at an old well, which apparently still serves its purpose, as people\narrive to fill their barrels, pots or waterskins. You hear laughter and singing\nthrough a window in a house to the south.\nA circular stone well has been built here.\nThere is an old street-lamp on the border of the street.\nFardur the guide is here, leaning on his walking-stick."
  l: "At the Well\nYou stand at an old well, which apparently still serves its purpose."
---

<TutorialPlayer>

# The Journey to Middle-earth

In Mandos, mortal spirits leave by kneeling and praying to their starting city. As a Man of Eriador, your hometown is the ancient city of **Fornost**.

Upon praying, the music of the Ainulindalë whisks you through space and time. You materialize in the center of Fornost beside an old stone well. Around you, scholars, guides, and townsfolk go about their daily lives.

</TutorialPlayer>
