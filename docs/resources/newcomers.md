---
title: Step-by-Step Guide for Newcomers
description: Step-by-step onboarding funnel, essential command cheat sheet, text control settings, survival tips, FAQs, and video tutorials for MUME newcomers.
---

# Newcomer Onboarding Guide

<MumeQuote>
Oh yeah, have fun running around at night with no torch not being able to see a loving thing. … hardcore … Enjoy that. … Amazing game.
<template #cite>TotalBiscuit, <a href="https://forums.somethingawful.com/showthread.php?threadid=3238046#post369417316" target="_blank" rel="noopener">SA Forum Post</a></template>
</MumeQuote>

Welcome to Multi-Users in Middle-earth (MUME)! MUME is a deep, immersive text-based world with a rich history and a rewarding learning curve. Follow this 4-step onboarding guide to select your client, master essential commands, control text velocity, and connect with community mentors.

---

## Onboarding Steps Overview

<div class="about-grid" style="margin: 2rem 0;">

<div class="card" style="border-top: 3px solid darkgoldenrod;">
<h3>Step 1: Client Setup</h3>
<p>Choose between instant in-browser play with built-in real-time mapping or downloading MMapper Desktop.</p>
<a href="#step-1-client-setup" class="read-more">Step 1 Details &darr;</a>
</div>

<div class="card" style="border-top: 3px solid darkgoldenrod;">
<h3>Step 2: Core Commands</h3>
<p>Master character creation, movement, gear, combat, food/water, and interaction commands.</p>
<a href="#step-2-character-creation--essential-command-cheat-sheet" class="read-more">Step 2 Details &darr;</a>
</div>

<div class="card" style="border-top: 3px solid darkgoldenrod;">
<h3>Step 3: Text Control & Survival</h3>
<p>Learn `change spam` settings, navigate Gandalf's tutorial, handle torches, and recover from death.</p>
<a href="#step-3-managing-text-density--first-hour-survival" class="read-more">Step 3 Details &darr;</a>
</div>

<div class="card" style="border-top: 3px solid darkgoldenrod;">
<h3>Step 4: Discord Mentors</h3>
<p>Join the active Discord community to get real-time answers, advice, and party up with mentors.</p>
<a href="#step-4-community-tutorials--mentoring" class="read-more">Step 4 Details &darr;</a>
</div>

</div>

---

## Step 1: Client Setup

To begin your adventure in Middle-earth, you need a MUD client. We recommend starting with **MMapper Web**:

- **[Play via Web Client (Recommended)](/play/#browser)**: Play directly in your browser with zero installation. Features a built-in real-time graphical map.
- **[Download MMapper Desktop](/play/#mapper)**: Powerful open-source standalone client used by 95% of active players.
- **[Third-party MUD Clients](/play/#client)**: Connect via Mudlet, TinTin++, or telnet to `mume.org` port `4242`.

---

## Step 2: Character Creation & Essential Command Cheat Sheet

When you connect, you will create your character by choosing a name, race (e.g. Man, Elf, Dwarf, Hobbit, Orc, Troll), and background.

### Comprehensive Command Cheat Sheet

#### Movement & Room Exploration
| Command | Abbreviation | Purpose & Description |
| :--- | :--- | :--- |
| `look` | `l` | Describe your current location, visible exits, items, and present characters. |
| `exits` | `ex` | Display all visible direction exits from your current room. |
| `north`, `south`, `east`, `west`, `up`, `down` | `n`, `s`, `e`, `w`, `u`, `d` | Move your character in the given direction. |
| `examine <object>` | `exa <object>` | Take a closer look at a specific object, door, or feature in the room. |

#### Character Status & Equipment
| Command | Abbreviation | Purpose & Description |
| :--- | :--- | :--- |
| `score` | `sc` | Display your stats, level, health (HP), stamina (move), and alignment. |
| `inventory` | `i` | List all items currently carried in your inventory. |
| `equipment` | `eq` | Display all items currently worn or wielded on your body. |
| `wear <item>` / `remove <item>` | — | Put on a piece of armor/clothing, or take it off. |
| `wield <weapon>` / `sheathe` | — | Hold a weapon ready for combat, or place it back in its sheath/scabbard. |
| `get <item>` / `drop <item>` | — | Pick up an item from the room floor or drop an item from inventory. |

#### Food, Water & Sustenance
| Command | Abbreviation | Purpose & Description |
| :--- | :--- | :--- |
| `eat <food>` | — | Eat food from your inventory to maintain health and stamina. |
| `drink <fountain/canteen>` | — | Drink water to quench thirst and prevent dehydration penalties. |

#### Combat & Survival Tactics
| Command | Abbreviation | Purpose & Description |
| :--- | :--- | :--- |
| `kill <target>` | `k <target>` | Initiate combat with an enemy or creature. |
| `flee` | `f` | Attempt to break away from combat and run into an adjacent safe room. |
| `change mood <wimpy/prudent/normal/aggressive>` | — | Adjust your combat tactic. `wimpy` automatically flees when low on health. |
| `rest` / `sleep` / `wake` | — | Rest or sleep to rapidly regenerate health and movement points. |

#### NPC & Player Interactions
| Command | Abbreviation | Purpose & Description |
| :--- | :--- | :--- |
| `ask <npc> about <topic>` | — | Query non-player characters for quest information, directions, or lore. |
| `give <item> <target>` | — | Hand an item or gold to another player or NPC. |
| `buy <item>` / `sell <item>` | — | Purchase items from shopkeepers or sell unwanted loot for gold. |
| `say <message>` / `tell <player> <message>` | — | Speak aloud in your room or send a private tell to another player. |
| `help newcomer` | — | Access the in-game newbie help directory for detailed mechanics. |

---

## Step 3: Managing Text Density & First-Hour Survival

MUME streams rich text output in real-time. Here is how to control text velocity, navigate the initial tutorial, and survive your first hours in Middle-earth:

### Controlling Text Density with `change spam`
If combat logs or environmental text scroll too rapidly, use MUME's `change spam` commands to reduce screen chatter:
- `change spam fight`: Toggles detailed combat spam on/off.
- `change spam description`: Simplifies room descriptions during movement.
- `change spam all`: Minimizes non-essential environmental messages.
- Read full documentation via <a href="https://mume.org/help/spam" target="_self" rel="external">help spam</a>.

### Navigating Gandalf's Tutorial
When creating a character, Gandalf will guide you through an introductory sequence. Take your time reading Gandalf's instructions carefully. You can type `look` at any prompt to re-read your surroundings, and `help newcomer` for guidance if you get stuck.

### Essential First-Hour Survival Tips
1. **Light is Essential:** Darkness makes rooms invisible! Always keep a lighted torch or lantern equipped or in your inventory.
2. **Monitor Health & Stamina:** Rest (`rest`) or sleep (`sleep`) in safe rooms (like inns or town halls) to heal up.
3. **Set Wimpy Mood:** Use `change mood wimpy` so your character automatically flees when your health drops low.
4. **Death & Item Recovery:** Dying is a natural part of learning MUME! When you die, your corpse remains in the world. Do not panic—ask in Discord or in-game (`narrate` / `tell`), and veteran players will happily assist you in recovering your equipment.

### In-Game Documentation
- <a href="https://mume.org/help/newbie" target="_self" rel="external">Introduction to MUME's most important aspects (help newcomer)</a>
- <a href="https://mume.org/help/faq" target="_self" rel="external">Frequently asked questions (help faq)</a>
- <a href="https://mume.org/help/basics" target="_self" rel="external">Basic commands needed to survive (help basic)</a>
- <a href="https://mume.org/help/advanced" target="_self" rel="external">Advanced commands (help advanced)</a>
- [Unique Game Features](/about/features)
- <a href="https://mume.org/rules/" target="_self" rel="external">Rules for all players (rules)</a>

---

## Step 4: Community, Tutorials & Mentoring

You don't have to explore Middle-earth alone! Community mentors and video guides are available to support you every step of the way.

### Video Tutorials & Gameplay Sessions

- [Sample MUME Text Session](/resources/session): Read an annotated real gameplay session log.
- **YouTube Video Tutorials:** Watch step-by-step video walkthroughs covering navigation, combat, and wilderness survival:

<div class="youtube-container">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZPa6XiiZkfQZVGIw1xD7B21n51f4wLCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Connect with Mentors on Discord

Have questions or need live guidance? Our Discord community features dedicated channels for new players where veterans are happy to answer questions, explain game mechanics, or team up in-game to help you explore Middle-earth.

<div class="center-img" style="margin-top: 1.5rem;">
<a href="https://discord.gg/XkZN55am9a" target="_blank" rel="noopener" class="read-more">Join the MUME Discord Server <i class="fa fa-external-link" aria-hidden="true"></i></a>
</div>
