---
title: "Safe Haven & Renting at the Inn"
description: "Check room rental rates and safely save your character and equipment at an inn using offer and rent."
teach:
  - command: "offer"
    desc: "check daily inn room rental prices and duration"
  - command: "rent"
    desc: "safely store equipment and log off at an inn"
steps:
  - ask: "offer"
    note: "Fuor returns to the Crown of Arnor Inn after a long day of adventuring. Check room costs with OFFER."
    accept:
      - "offer"
    hint: "Type: offer"
    example: "> offer\nThe innkeeper tells you 'It will cost 62 copper pennies per day.'"
  - ask: "rent"
    note: "Rent a room to safely log off and preserve all your hard-earned equipment!"
    accept:
      - "rent"
    hint: "Type: rent"
    example: "> rent\nThe innkeeper stores your stuff in the safe, and helps you into your chamber."
responses:
  offer: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months."
  rent: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months.\nThe innkeeper stores your stuff in the safe, and helps you into your chamber.\n\n[Session Saved Successfully - Free Rent]"
---

<TutorialPlayer>

# Safe Haven & Renting at the Inn

Never type `QUIT` when logging off in MUME, or your items will drop to the floor for anyone to take!

Always return to an inn, check room prices with `OFFER`, and use `RENT` to safely store your character and equipment.

</TutorialPlayer>
