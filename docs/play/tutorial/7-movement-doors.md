---
title: "City Gates & Calling the Guards"
description: "Navigate to the gates of Fornost, interact with Dúnadan gateguards, and request city gate openings."
teach:
  - command: "call"
    desc: "call for gateguards to open secured city gates"
  - command: "say open"
    desc: "request gateguards to unlock and open specific gates"
steps:
  - ask: "call"
    note: "Fuor marches south to the heavy iron gates of Fornost. Call out to the gateguards."
    accept:
      - "call"
    hint: "Type: call"
    example: "> call\nYou call for the gate to be opened."
  - ask: "say open"
    note: "Speak directly to the Dúnadan gateguards to open both iron gate and portcullis."
    accept:
      - "say open"
      - "say open gate"
      - "say open portcullis"
    hint: "Type: say open"
    example: "> say open\nAn experienced Dúnadan officer opens the Portcullis and Irongate."
responses:
  call: "You call for the gate to be opened.\nYou have the uneasy impression that a pair of unseen eyes are scrutinizing you from the closed gate.\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
  say open: "An experienced Dúnadan officer looks you over.\nAn experienced Dúnadan officer opens the Portcullis.\nAn experienced Dúnadan officer unlocks the Irongate.\nAn experienced Dúnadan officer opens the Irongate."
  say open gate: "An experienced Dúnadan officer opens the Irongate."
  say open portcullis: "An experienced Dúnadan officer opens the Portcullis."
---

<TutorialPlayer>

# City Gates & Calling the Guards

Fornost is protected by fortified iron gates and heavy portcullises to keep dark forces at bay.

Practice calling gateguards (`CALL`) and requesting city gates to be opened (`SAY OPEN`) so Fuor can step into the wilderness!

</TutorialPlayer>
