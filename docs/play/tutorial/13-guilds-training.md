---
title: "Bulletin Boards & Laws of Middle-earth"
description: "Read town bulletin boards, handle pager prompts, and inspect MUME player rules."
teach:
  - command: "look board"
    desc: "inspect messages posted on town bulletin boards"
  - command: "read 55"
    desc: "read a specific bulletin board message"
  - command: "rules"
    desc: "query the index of MUME rules and guidelines"
steps:
  - ask: "look board"
    note: "Fuor approaches the Starter's Board at the inn. Inspect posted board topics."
    accept:
      - "look board"
      - "l board"
    hint: "Type: look board"
    example: "> look board\nStarter's board - 7 messages (Message 55: TEN COMMANDMENTS)"
  - ask: "read 55"
    note: "Read Message 55 (TEN COMMANDMENTS) posted by management."
    accept:
      - "read 55"
      - "read board 55"
    hint: "Type: read 55"
    example: "> read 55\nMessage 55: TEN COMMANDMENTS\n1. You may have only ONE ACCOUNT."
  - ask: "rules"
    note: "Type RULES to view the full index of player rules and conduct guidelines."
    accept:
      - "rules"
    hint: "Type: rules"
    example: "> rules\nRULES INDEX: RULES CHARACTER, RULES COMMUNICATION, RULES PLAYERKILLING."
responses:
  look board: "Starter's board - 7 messages (out of 7)\n49 : Helpful Hints to New Players (Frór)\n50 : Arda (Frór)\n51 : Some more advice (Frór)\n52 : For more information... (Frór)\n53 : About the Towns of Middle-Earth (Petrel)\n54 : About the Towns of Middle-Earth II (Petrel)\n55 : TEN COMMANDMENTS (Petrel)"
  l board: "Starter's board - 7 messages."
  read 55: "Message 55 : TEN COMMANDMENTS (Petrel)\nWritten on Fri Feb 23 2001\n\n1. You may have only ONE ACCOUNT. All characters you create must be in this account.\n2. You may not share your characters or trade them.\n3. You can play only ONE character at a time.\n4. You cannot transfer money or equipment between your characters.\n\n*** Return: continue ***\n\nType RULES for an index to all rules."
  read board 55: "Message 55: TEN COMMANDMENTS. Type RULES for an index."
  rules: "INDEX OF RULES\n--------------\nRULES CHARACTER    - Account separation and character rules\nRULES COMMUNICATION - Guidelines for chat channels and titles\nRULES PLAYERKILLING - Combat regulations between players\nRULES MISC          - Miscellaneous policies"
---

<TutorialPlayer>

# Bulletin Boards & Laws of Middle-earth

Community bulletin boards contain vital news, quest notices, and player guidelines.

Learn how to inspect bulletin boards (`LOOK BOARD`), read specific notices (`READ 55`), and review MUME's code of conduct (`RULES`).

</TutorialPlayer>
