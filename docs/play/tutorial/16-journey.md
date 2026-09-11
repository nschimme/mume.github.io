---
title: "Your Journey Begins"
description: "You are ready to enter Middle-earth! Choose your client and start your adventure."
teach:
  - command: "help client"
    desc: "view web and desktop client options"
  - command: "who"
    desc: "see adventurers currently online in Middle-earth"
steps:
  - ask: "help client"
    accept:
      - "help client"
      - "help web"
    hint: "Type: help client"
    example: "> help client\nRECOMMENDED CLIENTS: MMapper Web (browser) or Mudlet / MMapper Desktop."
  - ask: "who"
    accept:
      - "who"
    hint: "Type: who"
    example: "> who\nPlayers online in Middle-earth: Ermin, Fuor, Theowen..."
responses:
  help client: "RECOMMENDED CLIENTS:\n- MMapper Web (Browser-based with live mapping)\n- Mudlet & MMapper Desktop (Native desktop client setup)\nType 'HELP WEB' or visit docs.mume.org/play for download links."
  who: "Players online in Middle-earth:\n- Fuor the Man Apprentice\n- Ermin the Elf Scout\n- Theowen the Dunadan Warrior"
---

<TutorialPlayer>

# Step Into Middle-earth!

Congratulations! You have completed the fundamentals of MUME: navigation, equipment, stats, combat tactics, guild training, and safely renting at the inn.

Now, your true journey begins. Click below to launch the **MMapper Web Client** directly in your browser or explore client options on the Play page!

<div style="margin-top: 1.5rem; text-align: center;">
  <a href="https://docs.mume.org/MMapper/demo" target="_blank" class="playnow" style="font-size: 1.1rem; padding: 0.75rem 1.5rem; display: inline-block;">
    Launch MMapper Web Client &rarr;
  </a>
</div>

</TutorialPlayer>
