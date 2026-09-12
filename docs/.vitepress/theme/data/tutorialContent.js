// Tutorial content for the new-player walkthrough.
// Extracted from live MUME test server dynamic.schimmelmann.us:4242.
export const TUTORIAL = {
  "version": 3,
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
        "MUME is Middle-earth. The map is built from Tolkien, from the Shire to Bree to Fornost and Rivendell, and it has been growing since 1991.",
        "You pick a side. The Free Peoples defend the West. The forces of Mordor attack it.",
        "As a new player, you'll start on the side of men, hobbits, dwarves and elves. You will begin your journey in Fornost or Bree as a new character with basic starter gear."
      ],
      "teach": [],
      "practice": null
    },
    {
      "section": "Talking to the game",
      "title": "How to type",
      "body": [
        "You talk to MUME in short instructions. Usually a verb, then a thing.",
        "look",
        "examine book",
        "The game only understands the words it knows. If it does not understand you, it says so, and nothing bad happens. Guessing is free.",
        "Try it now. Type the word below and press Enter."
      ],
      "teach": [
        {
          "c": "look / l",
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
      "example": "> look\nCosy Room\nThis warm and cosy room is framed with dark oak and protected by whitewashed\nwalls that have been set with wattle and daub. A small glass window peeks out\nof the eastern wall and large pine planks cover the floor. The room is somewhat\ndim, but a single lantern hanging from the rafters above provides ample light.\nA sturdy leather backpack has been left here.\nA brass lantern has been set on the ground.\nA sturdy bed made from solid oak lies here, covered in warm blankets.\nOn the bed, there is a well-thumbed book.\nExits: [north]."
    },
    {
      "section": "The basics",
      "title": "Moving around",
      "body": [
        "You move by compass direction: north, south, east, west, up, down.",
        "You can type the whole word or just the first letter: n, s, e, w.",
        "Exits in brackets like [north] indicate a door or gate.",
        "Use exits to display obvious room exits."
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
          "c": "open door",
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
      "example": "> exits\n [North]  - A closed 'door'"
    },
    {
      "section": "The basics",
      "title": "Looking at things",
      "body": [
        "look on its own describes the room again. Useful when text has scrolled past you.",
        "examine a specific thing to study it closely. Most objects, people and items have detailed descriptions.",
        "It works on anything you can see: examine book, examine lantern, examine guard."
      ],
      "teach": [
        {
          "c": "look",
          "d": "describe the room again"
        },
        {
          "c": "examine book",
          "d": "study one thing closely"
        }
      ],
      "practice": {
        "ask": "examine book",
        "accept": [
          "examine book",
          "exa book",
          "examine",
          "exa"
        ],
        "hint": "Type: examine book"
      },
      "example": "> examine book\nOn the bed, there is a well-thumbed book on the history of the Second Age."
    },
    {
      "section": "The basics",
      "title": "Carrying and wearing",
      "body": [
        "inventory lists items carried in your hands and pack.",
        "equipment displays gear currently worn on your body.",
        "wield equips your primary weapon, while wear attaches armor or lanterns."
      ],
      "teach": [
        {
          "c": "inventory / inv",
          "d": "what you are carrying"
        },
        {
          "c": "equipment / eq",
          "d": "what you are wearing and wielding"
        },
        {
          "c": "wield sword",
          "d": "hold a weapon ready"
        },
        {
          "c": "wear shirt",
          "d": "put on clothing or armor"
        }
      ],
      "practice": {
        "ask": "equipment",
        "accept": [
          "equipment",
          "eq"
        ],
        "hint": "Type: equipment"
      },
      "example": "> equipment\nYou are using:\n<worn on body>       a slate blue shirt (worn)\n<worn on legs>       a pair of slate blue pants (worn)"
    },
    {
      "section": "Staying alive",
      "title": "Checking your vitals & stats",
      "body": [
        "score shows hit points, mana, and movement points.",
        "stat displays combat stats: Offensive Bonus (OB), Dodging Bonus (DB), Parrying Bonus (PB), Wimpy threshold, and experience needed to level.",
        "info shows full character details including age, race, height, weight, and travel points."
      ],
      "teach": [
        {
          "c": "score",
          "d": "check current HP, Mana, and Movement"
        },
        {
          "c": "stat",
          "d": "check OB, DB, PB, Wimpy and XP needed"
        },
        {
          "c": "info",
          "d": "display full character statistics"
        }
      ],
      "practice": {
        "ask": "score",
        "accept": [
          "score",
          "sc"
        ],
        "hint": "Type: score"
      },
      "example": "> score\n36/36 hits, 76/76 mana, and 126/126 moves."
    },
    {
      "section": "The basics",
      "title": "Talking to people",
      "body": [
        "say talks to everyone in the room.",
        "tell sends a direct message to another player.",
        "narrate broadcasts a message to players across the region."
      ],
      "teach": [
        {
          "c": "say hello",
          "d": "speak aloud to everyone in the room"
        },
        {
          "c": "tell Fuor hello",
          "d": "speak privately to a player"
        }
      ],
      "practice": {
        "ask": "say hello",
        "accept": [
          "say hello",
          "say"
        ],
        "hint": "Type: say hello"
      },
      "example": "> say hello\nYou say 'hello'"
    },
    {
      "section": "Staying alive",
      "title": "Stopping for the day",
      "body": [
        "To save your character's equipment safely when logging off, go to an inn and rent.",
        "offer checks the daily inn storage cost.",
        "rent safely stores your items and logs out."
      ],
      "teach": [
        {
          "c": "offer",
          "d": "check storage cost at an inn"
        },
        {
          "c": "rent",
          "d": "store equipment and save character"
        }
      ],
      "practice": {
        "ask": "rent",
        "accept": [
          "rent"
        ],
        "hint": "Type: rent"
      },
      "example": "> offer\nYou cannot get an offer here."
    }
  ]
}
