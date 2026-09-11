// Tutorial content for the new-player walkthrough.
// Fully comprehensive tutorial structured into 16 easily navigable chapters.
export const TUTORIAL = {
  "version": 6,
  "chapters": [
    { "id": 1, "title": "Chapter 1: Orientation", "startStep": 1, "totalSteps": 3, "desc": "What is MUD & MUME, account rules, and Tolkien character names." },
    { "id": 2, "title": "Chapter 2: Manipulating Items", "startStep": 4, "totalSteps": 2, "desc": "Picking up, dropping, and organizing items inside sacks." },
    { "id": 3, "title": "Chapter 3: Looking & Inspecting", "startStep": 6, "totalSteps": 2, "desc": "Describing rooms with look and inspecting objects with examine." },
    { "id": 4, "title": "Chapter 4: Movement & Navigation", "startStep": 8, "totalSteps": 2, "desc": "Compass movement, checking exits, opening doors, and calling guards." },
    { "id": 5, "title": "Chapter 5: Equipment & Light Sources", "startStep": 10, "totalSteps": 2, "desc": "Wearing armor, wielding weapons, and lighting torches or lanterns." },
    { "id": 6, "title": "Chapter 6: Sustenance & Survival", "startStep": 12, "totalSteps": 1, "desc": "Eating, drinking, and refilling water skins at fountains." },
    { "id": 7, "title": "Chapter 7: Character Condition", "startStep": 13, "totalSteps": 1, "desc": "Understanding score, stat, and info (Hits, Mana, Moves, OB, DB, PB)." },
    { "id": 8, "title": "Chapter 8: Social & Communication", "startStep": 14, "totalSteps": 2, "desc": "Talking, telling, emotes, finding Rangers, and checking who is online." },
    { "id": 9, "title": "Chapter 9: Exploration & Maps", "startStep": 16, "totalSteps": 1, "desc": "Scouting ahead with scout and viewing in-game maps." },
    { "id": 10, "title": "Chapter 10: Combat & Tactics", "startStep": 17, "totalSteps": 2, "desc": "Assessing enemies with consider, combat stances (moods), trophy, and fleeing." },
    { "id": 11, "title": "Chapter 11: Resting & Recovery", "startStep": 19, "totalSteps": 1, "desc": "Resting, sleeping, and standing to recover health and stamina." },
    { "id": 12, "title": "Chapter 12: Character Growth & Guilds", "startStep": 20, "totalSteps": 1, "desc": "Visiting Guildmasters and spending practice points on skills." },
    { "id": 13, "title": "Chapter 13: Teamwork & Grouping", "startStep": 21, "totalSteps": 1, "desc": "Following party leaders and managing adventuring groups." },
    { "id": 14, "title": "Chapter 14: Inn Storage & Renting", "startStep": 22, "totalSteps": 1, "desc": "Safely storing equipment at inns with offer and rent." },
    { "id": 15, "title": "Chapter 15: Help, Rules & Death", "startStep": 23, "totalSteps": 2, "desc": "Reading help files, player rules, death, and praying in Mandos." },
    { "id": 16, "title": "Chapter 16: Beginning Your Journey", "startStep": 25, "totalSteps": 1, "desc": "Gandalf's introduction and entering the MUME Web Client." }
  ],
  "lessons": [
    {
      "chapterId": 1,
      "section": "1. Orientation",
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
      "chapterId": 1,
      "section": "1. Orientation",
      "title": "What is MUME?",
      "body": [
        "MUME is Middle-earth. The map is built from Tolkien, from the Shire to Bree to the Misty Mountains, and it has been growing since 1991.",
        "You pick a side. The Free Peoples defend the West. The forces of Mordor attack it.",
        "As a new player, you'll start on the side of men, hobbits, dwarves or elves near the Tower Hills with basic equipment."
      ],
      "teach": [],
      "practice": null
    },
    {
      "chapterId": 1,
      "section": "1. Orientation",
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
      "example": "> help names\nNAMES ON MUME\nMUME's management strongly encourages in-game roleplay. Therefore, names\nmust fit reasonably with the race and Tolkien lore of your character.\nExamples of inappropriate names: Skullcrusher, Elfmage, Blah."
    },
    {
      "chapterId": 2,
      "section": "2. Manipulating Items",
      "title": "Getting, Dropping & Inventory",
      "body": [
        "To pick up an object lying on the ground, use get <item> (or get all).",
        "To put an item down, use drop <item>.",
        "inventory (or i) lists everything currently in your hands and bags."
      ],
      "teach": [
        {
          "c": "get torch",
          "d": "pick up an item from the floor"
        },
        {
          "c": "get all",
          "d": "pick up all items in the room"
        },
        {
          "c": "drop cheese",
          "d": "put an item down on the ground"
        },
        {
          "c": "inventory / i",
          "d": "list items you are carrying"
        }
      ],
      "practice": {
        "ask": "get torch",
        "accept": [
          "get torch",
          "get all",
          "get"
        ],
        "hint": "Type: get torch"
      },
      "example": "> get torch\nYou get a torch."
    },
    {
      "chapterId": 2,
      "section": "2. Manipulating Items",
      "title": "Containers & Bags",
      "body": [
        "To keep your inventory organized, store items inside sacks, backpacks, or pouches.",
        "use put <item> <container> (e.g. put all sack) to store items.",
        "use look in <container> to see inside a bag.",
        "use get <item> <container> (e.g. get map sack) to retrieve items."
      ],
      "teach": [
        {
          "c": "look in sack",
          "d": "inspect contents of a container"
        },
        {
          "c": "put all sack",
          "d": "store carried items into a bag"
        },
        {
          "c": "get map sack",
          "d": "retrieve a specific item from a container"
        }
      ],
      "practice": {
        "ask": "look in sack",
        "accept": [
          "look in sack",
          "look sack",
          "l in sack",
          "l sack"
        ],
        "hint": "Type: look in sack"
      },
      "example": "> look in sack\nsack (carried) :\na cup\na map of Fornost\na torch"
    },
    {
      "chapterId": 3,
      "section": "3. Looking & Inspecting",
      "title": "How to Type & Look Around",
      "body": [
        "You talk to MUME in short instructions. Usually a verb, then a thing.",
        "look (or l) describes your room, occupants, objects, and compass exits.",
        "If text scrolls past quickly, look brings back the room description immediately."
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
      "example": "> look\nEast of the Bridge\nYou are standing on the Old East Road, just east of the Brandywine bridge.\nA dusty road leads to a gate in a tall hedgerow to the south - the High Hay.\nExits: north, south, east, west."
    },
    {
      "chapterId": 3,
      "section": "3. Looking & Inspecting",
      "title": "Inspecting Things Closely",
      "body": [
        "examine <target> (or exa) studies a specific person, monster, object, or sign in detail.",
        "It reveals condition, worn equipment on characters, and inscriptions on signs."
      ],
      "teach": [
        {
          "c": "examine sword",
          "d": "study one thing closely (also: exa)"
        },
        {
          "c": "examine sign",
          "d": "read inscriptions on a sign or plaque"
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
      "example": "> examine elf\nFair and graceful this child of Eru is, and with but a cursory glance in your\ndirection he continues to walk, dreaming of mysterious things.\nAn elf is in an excellent condition."
    },
    {
      "chapterId": 4,
      "section": "4. Movement & Navigation",
      "title": "Compass Travel & Exits",
      "body": [
        "You move by compass direction: north, south, east, west, up, down.",
        "You can type the whole word or just the first letter (n, s, e, w, u, d).",
        "exits lists all available exits in the room."
      ],
      "teach": [
        {
          "c": "north / n",
          "d": "move north (also s, e, w, u, d)"
        },
        {
          "c": "exits",
          "d": "list the ways out of this room"
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
      "chapterId": 4,
      "section": "4. Movement & Navigation",
      "title": "Doors & Calling Guards",
      "body": [
        "Doors sometimes need opening first: open north.",
        "At city gates, say open asks gateguards to open gates.",
        "If you are outside locked gates, call alerts gateguards inside to unlock them for you."
      ],
      "teach": [
        {
          "c": "open north",
          "d": "open a closed door or gate"
        },
        {
          "c": "say open",
          "d": "ask gateguards to open the city gates"
        },
        {
          "c": "call",
          "d": "call out to gateguards from outside closed gates"
        }
      ],
      "practice": {
        "ask": "call",
        "accept": [
          "call",
          "say open"
        ],
        "hint": "Type: call"
      },
      "example": "> call\nYou call for the gate to be opened.\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
    },
    {
      "chapterId": 5,
      "section": "5. Equipment & Light Sources",
      "title": "Equipping Armor & Weapons",
      "body": [
        "Carrying an item is not the same as using it.",
        "use wear <item> for armor/clothes, wield <weapon> for weapons, and remove <item> to take armor off.",
        "equipment (or eq) lists everything currently worn or wielded."
      ],
      "teach": [
        {
          "c": "wear jerkin",
          "d": "put on armor or clothing"
        },
        {
          "c": "wield sword",
          "d": "hold a weapon ready in your main hand"
        },
        {
          "c": "remove jerkin",
          "d": "take off armor"
        },
        {
          "c": "equipment / eq",
          "d": "list currently worn and wielded items"
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
      "example": "> equipment\nYou are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)\n<worn on legs>       a pair of trousers (brand new)"
    },
    {
      "chapterId": 5,
      "section": "5. Equipment & Light Sources",
      "title": "Light Sources & Belt Items",
      "body": [
        "Away from illuminated towns it gets dark! In the dark, you cannot see rooms, monsters, or exits.",
        "use hold torch and light torch to illuminate dark places.",
        "You can also attach utility items to belts: wear lantern belt, wear knife belt."
      ],
      "teach": [
        {
          "c": "hold torch",
          "d": "hold a torch in your hand"
        },
        {
          "c": "light torch",
          "d": "ignite a torch or lantern"
        },
        {
          "c": "wear lantern belt",
          "d": "fasten a lantern to your belt"
        }
      ],
      "practice": {
        "ask": "light torch",
        "accept": [
          "light torch",
          "light lantern",
          "light"
        ],
        "hint": "Type: light torch"
      },
      "example": "> light torch\nYou light a torch. It glows brightly, illuminating the dark cavern!"
    },
    {
      "chapterId": 6,
      "section": "6. Sustenance & Survival",
      "title": "Food, Water & Refilling",
      "body": [
        "Your character gets hungry and thirsty over time. If left untreated, your health and move points recover much slower.",
        "eat bread and drink water keep you fed and hydrated.",
        "use pour fountain skin to refill your water skin at rivers, wells, or fountains."
      ],
      "teach": [
        {
          "c": "eat bread",
          "d": "eat food from your inventory"
        },
        {
          "c": "drink water",
          "d": "drink from a water skin, well, or fountain"
        },
        {
          "c": "pour fountain skin",
          "d": "refill a water skin at a water source"
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
      "example": "> drink water\nYou take a long drink of cool water from your water skin. You feel refreshed!"
    },
    {
      "chapterId": 7,
      "section": "7. Character Condition",
      "title": "Understanding Stats: score, stat, info",
      "body": [
        "Three essential commands reveal your character status:",
        "score (sc) shows Hits (health), Mana (magic), and Moves (stamina).",
        "stat shows combat percentages: OB (Offensive Bonus), DB (Dodge Bonus), PB (Parry Bonus), and Armour protection %.",
        "info (inf) shows age, level, base attributes (Str, Int, Wis, Dex, Con, Wil), and total equipment weight."
      ],
      "teach": [
        {
          "c": "score / sc",
          "d": "hits, mana, and movement points"
        },
        {
          "c": "stat",
          "d": "OB, DB, PB, Armour protection %, and XP needed"
        },
        {
          "c": "info / inf",
          "d": "full character sheet and base attributes"
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
      "example": "> score\nScore: 354/354 hits, 114/114 mana, and 132/132 moves."
    },
    {
      "chapterId": 8,
      "section": "8. Social & Communication",
      "title": "Talking, Telling & Emotes",
      "body": [
        "say talks to everyone in your current room.",
        "tell <player> <message> sends a private message to a player anywhere in the world.",
        "use simple emotes like nod, bow, smile, or thank to interact with non-player characters (NPCs) and players."
      ],
      "teach": [
        {
          "c": "say hello",
          "d": "speak to everyone in the room"
        },
        {
          "c": "tell relim hello",
          "d": "send a private message to a player"
        },
        {
          "c": "nod / bow",
          "d": "perform a social gesture"
        }
      ],
      "practice": {
        "ask": "say hello",
        "accept": [
          "say hello",
          "say",
          "tell"
        ],
        "hint": "Type: say hello"
      },
      "example": "> say hello\nYou say 'hello'\nErmin says 'Hello friend!'"
    },
    {
      "chapterId": 8,
      "section": "8. Social & Communication",
      "title": "Finding Rangers & Players Online",
      "body": [
        "who lists players currently online in Middle-earth.",
        "who ranger lists Rangers on duty specifically dedicated to helping new players.",
        "where lists players in your local zone area."
      ],
      "teach": [
        {
          "c": "who",
          "d": "list all online players"
        },
        {
          "c": "who ranger",
          "d": "find active Rangers available for help"
        },
        {
          "c": "where",
          "d": "list players nearby in your zone"
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
      "example": "> who ranger\nRangers Online\n--------------\n  Martyrson N'Ekasrof (Type 'tell Martyrson hello' for help!)"
    },
    {
      "chapterId": 9,
      "section": "9. Exploration & Maps",
      "title": "Scouting Ahead & Maps",
      "body": [
        "Before stepping into dangerous or unfamiliar territory, use scout <direction> (e.g. scout south) to peak quietly without moving into the room.",
        "map displays a regional text map of Middle-earth.",
        "map room displays an ASCII micro-map of your room's local layout."
      ],
      "teach": [
        {
          "c": "scout south",
          "d": "peak into an adjacent room without moving"
        },
        {
          "c": "map",
          "d": "display regional text map"
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
      "chapterId": 10,
      "section": "10. Combat & Tactics",
      "title": "Assessing Enemies",
      "body": [
        "Never attack blindly! Always use consider <target> (or con) before swinging.",
        "The game compares your level and gear to the enemy, warning you if a creature is dangerous or if you 'need some luck!'."
      ],
      "teach": [
        {
          "c": "consider boar",
          "d": "gauge enemy difficulty before fighting (also con)"
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
      "chapterId": 10,
      "section": "10. Combat & Tactics",
      "title": "Battle Stances, Trophy & Fleeing",
      "body": [
        "Combat is real-time. Initiate with kill <target>. Attacks occur automatically until finished.",
        "change mood adjusts your stance: berserk, aggressive, brave, normal, prudent, or wimpy. Aggressive increases OB (offense) but drops PB (parry).",
        "trophy lists enemies you have slain during your travels.",
        "flee breaks away from combat through a random exit if health gets low!"
      ],
      "teach": [
        {
          "c": "kill snake",
          "d": "attack a target creature"
        },
        {
          "c": "change mood aggressive",
          "d": "increase OB at the cost of PB defense"
        },
        {
          "c": "trophy",
          "d": "view list of slain creatures and knowledge %"
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
      "chapterId": 11,
      "section": "11. Resting & Recovery",
      "title": "Resting, Sleeping & Standing",
      "body": [
        "After combat, recover hit points and movement points in safe areas.",
        "rest sits down to recover at moderate speed.",
        "sleep goes to sleep for faster recovery (wake to wake up, stand to stand up).",
        "Note: You recover points much slower if you are hungry or thirsty!"
      ],
      "teach": [
        {
          "c": "rest",
          "d": "sit down to recover health and movement"
        },
        {
          "c": "sleep",
          "d": "sleep for fast health and stamina recovery"
        },
        {
          "c": "wake / stand",
          "d": "wake up and stand back on your feet"
        }
      ],
      "practice": {
        "ask": "rest",
        "accept": [
          "rest",
          "sleep"
        ],
        "hint": "Type: rest"
      },
      "example": "> rest\nYou sit down and rest your tired bones."
    },
    {
      "chapterId": 12,
      "section": "12. Character Growth",
      "title": "Practicing Skills at Guilds",
      "body": [
        "When you gain levels, you earn practice sessions.",
        "Visit Guildmasters across Middle-earth (Warrior, Ranger, Scout, Cleric, Mage) and type practice to see what skills they teach.",
        "practice <skill> spends sessions to raise knowledge % in weapon skills (slashing, parry, bash), survival (swim, climb, ride), or magic."
      ],
      "teach": [
        {
          "c": "practice",
          "d": "list available skills at a guildmaster"
        },
        {
          "c": "practice slashing",
          "d": "spend a session to learn a weapon skill"
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
      "chapterId": 13,
      "section": "13. Teamwork & Grouping",
      "title": "Grouping & Following Leaders",
      "body": [
        "Adventuring in Middle-earth is much safer in a team.",
        "follow <player> aligns your movement automatically with a leader.",
        "group displays all current members of your adventuring party."
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
      "chapterId": 14,
      "section": "14. Inn Storage & Renting",
      "title": "Stopping for the Day & Renting",
      "body": [
        "DO NOT type quit or simply close your browser window while carrying gear! Your equipment will fall to the ground and be lost.",
        "To keep your items, go to an inn and rent. Your gear is stored safely until you log in again.",
        "offer tells you the daily rent cost at the inn."
      ],
      "teach": [
        {
          "c": "offer",
          "d": "ask an innkeeper what rent will cost"
        },
        {
          "c": "rent",
          "d": "store equipment in safe and log out safely"
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
      "chapterId": 15,
      "section": "15. Help & Rules",
      "title": "Where to Find Help & Rules",
      "body": [
        "help on its own lists help subjects. help basic is the full basic command list.",
        "rules displays the index of MUME player rules (rules character, rules communication, rules playerkilling).",
        "Type commands to print your tutorial command sheet into the terminal at any time."
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
          "c": "rules",
          "d": "index of MUME player rules"
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
      "chapterId": 15,
      "section": "15. Help & Rules",
      "title": "Dying, Halls of Mandos & Prayer",
      "body": [
        "Dying is a normal part of learning MUME. You do not lose your character or start again.",
        "When you die, your spirit wakes in the Halls of Mandos.",
        "From Mandos, pray <city> (e.g. pray Fornost or pray Bree) returns you to life in that town.",
        "Your equipment stays on your corpse where you died—you can return to recover it or ask friends/rangers for help."
      ],
      "teach": [
        {
          "c": "pray fornost",
          "d": "pray to return to life in a town from the Halls of Mandos"
        }
      ],
      "practice": {
        "ask": "pray fornost",
        "accept": [
          "pray fornost",
          "pray bree",
          "pray"
        ],
        "hint": "Type: pray fornost"
      },
      "example": "> pray fornost\nYou kneel down and try to hear the Ainulindalë...\nSuddenly an explosion of ancient rhymes makes space collapse around you!\nYou blink, you vanish! And you are in Fornost!"
    },
    {
      "chapterId": 16,
      "section": "16. Beginning Your Journey",
      "title": "What Happens Next",
      "body": [
        "Once your character exists, Gandalf finds you and asks for your help.",
        "Text will scroll past faster than you can read it. That is fine. Nothing is lost, you can scroll back, and look brings the room back at any time.",
        "You know everything you need to start your adventure!"
      ],
      "teach": [],
      "practice": null
    }
  ]
}
