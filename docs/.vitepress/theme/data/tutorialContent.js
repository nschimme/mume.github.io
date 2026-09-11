// Tutorial content for the new-player walkthrough.
// Extracted from original tutorial & enriched with concepts from session.md.
export const TUTORIAL = {
  "version": 4,
  "lessons": [
    {
      "section": "Before you start",
      "title": "What is a MUD?",
      "body": [
        "MUME is a MUD: a Multi-User Dungeon. It is a game world made of text, played by hundreds of people at the same time.",
        "There are no graphics. The game describes a room, and you type what you want to do. That is the whole loop.",
        "Nothing is on a timer while you read. Take as long as you like."
      ],
      "teach": [],
      "practice": null
    },
    {
      "section": "Before you start",
      "title": "What is MUME?",
      "body": [
        "MUME is Middle-earth. The map is built from Tolkien, from the Shire to Bree to the Misty Mountains, and it has been growing since 1991.",
        "You pick a side. The Free Peoples defend the West. The forces of Mordor attack it.",
        "As a new player, you'll start on the side of men, hobbits, dwarves and elves. You will begin your journey near the Tower Hills as a new character with only the most basic of equipment. That is normal. Everyone starts there."
      ],
      "teach": [],
      "practice": null
    },
    {
      "section": "Your Account & Name",
      "title": "Account Rules & Character Names",
      "body": [
        "MUME uses an ACCOUNT system. You are allowed ONLY ONE ACCOUNT per person, though you can create multiple characters on it.",
        "Type NEW when first connecting to register your account passphrase.",
        "Character names should fit Middle-earth (e.g. Auretor, Cogundir, Fuor). Modern, offensive, or lore-breaking names are not permitted."
      ],
      "teach": [
        {
          "c": "help accounts",
          "d": "one account per person rule"
        },
        {
          "c": "help names",
          "d": "naming conventions for Tolkien roleplay"
        }
      ],
      "practice": {
        "ask": "help names",
        "accept": [
          "help names",
          "help name"
        ],
        "hint": "Type: help names"
      },
      "example": "> help names\nNAMES ON MUME\nMUME's management strongly encourages in-game role-play. Therefore, names\nmust fit reasonably with the race and Tolkien lore of your character.\nExamples of inappropriate names: Skullcrusher, Elfmage, Blah."
    },
    {
      "section": "Talking to the game",
      "title": "How to type",
      "body": [
        "You talk to MUME in short instructions. Usually a verb, then a thing.",
        "look sign",
        "get sword",
        "The game only understands the words it knows. If it does not understand you, it says so, and nothing bad happens. Guessing is free.",
        "Try it now. Type the word below and press Enter."
      ],
      "teach": [
        {
          "c": "look",
          "d": "describe the room you are in"
        }
      ],
      "practice": {
        "ask": "look",
        "accept": [
          "look",
          "l"
        ],
        "hint": "Type: look"
      },
      "example": "> look\nEast of the Bridge\nYou are standing on the Old East Road, just east of the Brandywine bridge.\nA dusty road leads to a gate in a tall hedgerow to the south - the High Hay.\nExits: north, south, east, west."
    },
    {
      "section": "The basics",
      "title": "Moving around",
      "body": [
        "You move by compass direction, not left and right. North, south, east, west, up, down.",
        "You can type the whole word or just the first letter (n, s, e, w, u, d).",
        "Every room lists its exits. If a direction is not listed, you cannot go that way.",
        "Doors sometimes need opening first: open north."
      ],
      "teach": [
        {
          "c": "north / n",
          "d": "move north (also s, e, w, u, d)"
        },
        {
          "c": "exits",
          "d": "list the ways out of this room"
        },
        {
          "c": "open north",
          "d": "open a closed door"
        }
      ],
      "practice": {
        "ask": "exits",
        "accept": [
          "exits",
          "ex"
        ],
        "hint": "Type: exits"
      },
      "example": "> exits\nExits:\n  North   - Prancing Pony Inn\n -East-   - Cobble Street\n -South-  - Old East Road\n -West-   - Old East Road"
    },
    {
      "section": "The basics",
      "title": "Looking at things",
      "body": [
        "look on its own describes the room again. Useful when text has scrolled past you.",
        "examine a specific thing to study it closely. Most objects, people and signs have their own description, and examine shows you the detail.",
        "It works on anything you can see: examine sword, examine elf, examine sign."
      ],
      "teach": [
        {
          "c": "look",
          "d": "describe the room again"
        },
        {
          "c": "examine sword",
          "d": "study one thing closely (also: exa)"
        }
      ],
      "practice": {
        "ask": "examine elf",
        "accept": [
          "examine elf",
          "exa elf",
          "examine",
          "exa"
        ],
        "hint": "Type: examine elf"
      },
      "example": "> examine elf\nFair and graceful this child of Eru is, and with but a cursory glance in your\ndirection he continues to walk, dreaming of mysterious things.\nAn elf is in an excellent condition.\nAn elf is using:\n<worn on head>       a green hood (flawless)\n<worn on body>       a grey shirt (well-maintained)"
    },
    {
      "section": "The basics",
      "title": "Carrying and wearing",
      "body": [
        "Picking something up is not the same as using it. You get it, then you wear it or wield it.",
        "Two lists matter. inventory is what you are carrying. equipment is what you have on you and in your hands.",
        "Word order counts when you give things away: give sword to guard."
      ],
      "teach": [
        {
          "c": "inventory / i",
          "d": "what you are carrying"
        },
        {
          "c": "equipment / eq",
          "d": "what you are wearing and holding"
        },
        {
          "c": "get sword",
          "d": "pick something up"
        },
        {
          "c": "wear cloak",
          "d": "put on armour or clothing"
        },
        {
          "c": "wield sword",
          "d": "hold a weapon ready"
        },
        {
          "c": "remove cloak",
          "d": "take something off"
        }
      ],
      "practice": {
        "ask": "inventory",
        "accept": [
          "inventory",
          "inv",
          "i"
        ],
        "hint": "Type: inventory"
      },
      "example": "You are carrying:\na sturdy rope\na water skin\na coach ticket\na lantern\na dark coloured flask"
    },
    {
      "section": "Understanding Your Character",
      "title": "Character Stats & Conditions",
      "body": [
        "Three commands show your condition: score, stat, and info.",
        "score shows hits, mana, and movement points.",
        "stat shows combat bonuses: OB (Offensive Bonus), DB (Dodge Bonus), PB (Parry Bonus), and Armour %.",
        "info shows full details: age, level, base attributes (Str, Int, Wis, Dex, Con, Wil), and weight carried."
      ],
      "teach": [
        {
          "c": "stat",
          "d": "OB, DB, PB, Armour protection, and XP needed"
        },
        {
          "c": "info / inf",
          "d": "full character sheet and base attributes"
        }
      ],
      "practice": {
        "ask": "stat",
        "accept": [
          "stat",
          "st"
        ],
        "hint": "Type: stat"
      },
      "example": "> stat\nOB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 831 xp, 0 tp. Gold: 0. Alert: normal."
    },
    {
      "section": "The basics",
      "title": "Food, water and light",
      "body": [
        "Your character gets hungry and thirsty, and will tell you when. Ignore it long enough and you weaken.",
        "Buy food in towns and drink at fountains, wells and rivers. Carry a water skin so you can drink anywhere.",
        "Away from towns it gets dark, and in the dark you cannot see the room or the exits. Carry a torch or wear a lantern before you leave."
      ],
      "teach": [
        {
          "c": "eat bread",
          "d": "eat something you are carrying"
        },
        {
          "c": "drink water",
          "d": "drink from a fountain, well or river"
        },
        {
          "c": "light torch",
          "d": "make light so you can see"
        }
      ],
      "practice": {
        "ask": "drink water",
        "accept": [
          "drink water",
          "drink"
        ],
        "hint": "Type: drink water"
      },
      "example": "> drink water\nYou drink the water."
    },
    {
      "section": "The basics",
      "title": "Talking to people",
      "body": [
        "There are real people in this world, and they will help you. Rangers exist specifically to help new players.",
        "say talks to everyone in the room. tell talks to one person anywhere in the world.",
        "Characters run by the game respond to simple things. If one asks you a question, nod or say yes.",
        "If you are stuck, this is the fastest fix in the game. Find a ranger and ask."
      ],
      "teach": [
        {
          "c": "who",
          "d": "see who is playing right now"
        },
        {
          "c": "who ranger",
          "d": "find a ranger who can help you"
        },
        {
          "c": "say hello",
          "d": "speak to the room"
        },
        {
          "c": "tell relim hello",
          "d": "speak to one person by name"
        }
      ],
      "practice": {
        "ask": "who ranger",
        "accept": [
          "who ranger",
          "who rangers"
        ],
        "hint": "Type: who ranger"
      },
      "example": "> who ranger\nRangers\n-------\n      Martyrson N'Ekasrof"
    },
    {
      "section": "Adventuring & Safety",
      "title": "Scouting & Maps",
      "body": [
        "Before entering an unknown room or area, use scout <direction> (e.g. scout south) to peak quietly without moving into danger.",
        "map displays a text-based regional map around your position.",
        "map room displays an ASCII micro-map of immediate surroundings."
      ],
      "teach": [
        {
          "c": "scout south",
          "d": "peak into adjacent room without moving"
        },
        {
          "c": "map",
          "d": "display regional map"
        },
        {
          "c": "map room",
          "d": "display local ASCII room map"
        }
      ],
      "practice": {
        "ask": "scout south",
        "accept": [
          "scout south",
          "scout s",
          "scout"
        ],
        "hint": "Type: scout south"
      },
      "example": "> scout south\nYou quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
    },
    {
      "section": "Staying alive",
      "title": "Assessing Enemies",
      "body": [
        "Before swinging at an unfamiliar creature, check your chances with consider <target> (or con).",
        "The game will estimate whether the fight is easy, fair, or if you 'need some luck!'."
      ],
      "teach": [
        {
          "c": "consider boar",
          "d": "gauge difficulty of an enemy before fighting (also con)"
        }
      ],
      "practice": {
        "ask": "consider boar",
        "accept": [
          "consider boar",
          "con boar",
          "consider"
        ],
        "hint": "Type: consider boar"
      },
      "example": "> consider boar\nYou would need some luck!"
    },
    {
      "section": "Staying alive",
      "title": "Battle Tactics & Moods",
      "body": [
        "Combat is not turn-based. Once initiated with kill <target>, attacks occur automatically.",
        "change mood adjusts your combat stance: berserk, aggressive, brave, normal, prudent, or wimpy.",
        "Aggressive mood increases Offensive Bonus (OB) but lowers Parry Bonus (PB). Wimpy or prudent increases defense.",
        "flee gets you out through a random exit when health drops low!"
      ],
      "teach": [
        {
          "c": "change mood aggressive",
          "d": "increase OB at the cost of PB"
        },
        {
          "c": "flee",
          "d": "break off combat and escape!"
        }
      ],
      "practice": {
        "ask": "change mood aggressive",
        "accept": [
          "change mood aggressive",
          "cha m aggressive",
          "change mood"
        ],
        "hint": "Type: change mood aggressive"
      },
      "example": "> change mood aggressive\nOk.\nOB: 26%, DB: 26%, PB: 16%, Armour: 17%. Mood: aggressive."
    },
    {
      "section": "Staying alive",
      "title": "Stopping for the day",
      "body": [
        "If you simply close your browser window, you lose the equipment you were carrying!",
        "To keep your items, go to an inn and rent. Your gear is safely stored until you log in again.",
        "offer tells you the daily rent price.",
        "Quit leaves the game immediately—but drops all carried items!"
      ],
      "teach": [
        {
          "c": "offer",
          "d": "ask an innkeeper what rent will cost"
        },
        {
          "c": "rent",
          "d": "store equipment and log out safely"
        }
      ],
      "practice": {
        "ask": "rent",
        "accept": [
          "rent"
        ],
        "hint": "Type: rent"
      },
      "example": "> rent\nBarliman Butterbur says 'It will cost you 6 silver pennies per day.'\nNob brings you to a quiet room where your character and gear rest safely."
    },
    {
      "section": "Guilds & Levels",
      "title": "Practicing Skills at Guilds",
      "body": [
        "When you gain levels, you earn practice sessions.",
        "Visit Guildmasters across Middle-earth (Warrior, Ranger, Scout, Cleric, Mage) and type practice to see what they teach.",
        "practice <skill> spends sessions to improve your knowledge % in weapon skills (slashing, parry, bash), survival (swim, climb, ride), or spells."
      ],
      "teach": [
        {
          "c": "practice",
          "d": "list available skills at a guildmaster"
        },
        {
          "c": "practice slashing",
          "d": "spend a session to learn a skill"
        }
      ],
      "practice": {
        "ask": "practice",
        "accept": [
          "practice",
          "prac"
        ],
        "hint": "Type: practice"
      },
      "example": "> practice\nYou have 13 practice sessions left.\nHuor can teach you:\n  slashing weapons   0/29   0%   Normal\n  parry              0/29   0%   Normal"
    },
    {
      "section": "Interacting with players",
      "title": "Grouping & Following",
      "body": [
        "Adventuring in Middle-earth is safer in a team.",
        "follow <player> aligns your movement with a friend or Ranger leader.",
        "group displays your current adventuring party."
      ],
      "teach": [
        {
          "c": "follow ermin",
          "d": "follow another character automatically"
        },
        {
          "c": "group",
          "d": "display members of your adventuring party"
        }
      ],
      "practice": {
        "ask": "follow ermin",
        "accept": [
          "follow ermin",
          "follow",
          "group"
        ],
        "hint": "Type: follow ermin"
      },
      "example": "> follow ermin\nYou now follow Ermin.\n\n> group\nYour group consists of:\n  Ermin (Head of group)\n  Fuor"
    },
    {
      "section": "Getting unstuck",
      "title": "Where to find help",
      "body": [
        "help on its own lists help subjects. help basic is the full basic command list.",
        "Type commands to print your tutorial command sheet into the terminal at any time.",
        "Type tutorial to run this walkthrough again while you are new.",
        "Type who ranger and ask a ranger whenever you need guidance."
      ],
      "teach": [
        {
          "c": "help",
          "d": "list what the game can explain"
        },
        {
          "c": "help basic",
          "d": "the full basic command list"
        },
        {
          "c": "commands",
          "d": "your sheet from this tutorial"
        }
      ],
      "practice": {
        "ask": "help",
        "accept": [
          "help",
          "?"
        ],
        "hint": "Type: help"
      },
      "example": "> help\nHELP INDEX\nhelp basic - Basic command list\nhelp new   - Guide for new players"
    },
    {
      "section": "Staying alive",
      "title": "Dying is not the end",
      "body": [
        "You will die. Everybody dies, often, and it is a normal part of learning rather than a failure.",
        "When you die you wake up in the Halls of Mandos. From here you pray <city> (e.g. pray Bree) to return to one of the towns.",
        "Your equipment stays behind on your corpse and you can go back for it, or ask someone to help you recover it.",
        "You do not lose your character and you do not start again."
      ],
      "teach": [],
      "practice": null
    },
    {
      "section": "Playing the game",
      "title": "What happens next",
      "body": [
        "Once your character exists, Gandalf finds you and asks for your help.",
        "Text will scroll past faster than you can read it. That is fine. Nothing is lost, you can scroll back, and look brings the room back at any time.",
        "You know enough to start your journey!"
      ],
      "teach": [],
      "practice": null
    }
  ]
}
