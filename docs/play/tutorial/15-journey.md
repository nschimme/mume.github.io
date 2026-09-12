---
title: "The Hero's Journey Begins"
description: "Graduate from the interactive tutorial, check online adventurers with who, and choose your preferred MUME client."
teach:
  - command: "who"
    desc: "check list of online players currently in Middle-earth"
  - command: "help client"
    desc: "review web and desktop client options"
steps:
  - ask: "who"
    note: "Fuor is ready for true adventures! Check who is online across Middle-earth with WHO."
    accept:
      - "who"
    hint: "Type: who"
    example: "> who\nPlayers currently online: Fuor, Ermin, Ozzy, Ashura."
  - ask: "help client"
    note: "Review available web and desktop MUD clients."
    accept:
      - "help client"
      - "help clients"
    hint: "Type: help client"
    example: "> help client\nClients: MMapper Web (browser), MMapper Desktop, Mudlet."
responses:
  who: "PLAYERS ONLINE IN MIDDLE-EARTH\n==============================\nFuor the Man Warrior (Level 2)\nErmin the Elf Ranger\nOzzy the Rohirrim\nAshura the Half-Elf"
  help client: "CLIENTS FOR MUME\n================\n1. MMapper Web: Play directly in your browser with real-time mapping at /play/browser.\n2. MMapper Desktop: Native desktop client with automapping and hotkeys.\n3. Mudlet: Highly customizable open-source MUD client."
  help clients: "CLIENTS FOR MUME: MMapper Web (/play/browser), MMapper Desktop, Mudlet."
---

<TutorialPlayer>

# The Hero's Journey Begins

Congratulations! You have completed all 15 chapters of Fuor's interactive tutorial.

Check who is currently online (`WHO`), review client options (`HELP CLIENT`), and choose how you want to play:

<div class="tutorial-completion-cta" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="/play/browser" class="callout-btn" style="background: #b8860b; color: #fff; padding: 0.75rem 1.25rem; border-radius: 6px; text-decoration: none; font-weight: bold;">Launch MMapper Web (Browser) ➔</a>
  <a href="/resources/newcomers" class="callout-btn" style="background: #2a2a2a; color: #f0e6d2; border: 1px solid #b8860b; padding: 0.75rem 1.25rem; border-radius: 6px; text-decoration: none;">Return to Newcomers Hub ➔</a>
</div>

</TutorialPlayer>
