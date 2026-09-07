---
title: A Guide to Mudlle Events
description: Mudlle's On-Line Manual for Events in MUME.
---

# Mudlle's On-Line Manual: Events

## 1. Introduction

Most of the special behaviour in MUME are coded as reactions to events received. When an action occurs in MUME, the appropriate event is generated and sent to a number of entities. If an entity has a reaction to that particular event, that reaction is executed. If more than one reaction is found, all reactions are executed.

Event recipients can be:
- **room**: the room where the action occurs
- **obj**: an instance of an object class
- **mob**: an instance of a mobile class
- **global**: the global event handler

The global event handler is a special case - its associated mudlle file is not attached to any class, and is accessible only at imp-level. Note also that players cannot receive events, since no mudlle files are attached to players.

Events can be broadly classified as:
- **immediate**: sent at the time the action occurs
- **delayed**: sent after completion of the action causing the event

Actions which send immediate events have a chance of being aborted.

The generic syntax for a reaction procedure is:
```lisp
react_event(fn (me, arg1, arg2 .. argn) [ ... ],
            "short explanation of reaction",
            )
```
where `me` is the event recipient.

Code example:
```lisp
[
| master, greet_master |

master = "Vivriel";

greet_master = fn (who)
[
    if (!string_icmp(get_char_name(who), master))
        send_char(who, "Welcome home, Master!\n\r");
];

react_event(fn (me, who)
    [
        greet_master(who);
    ], "greet master on entrance", EVENT_ENTER);
]
```

## 2. Predefined Events

For all events, the first argument `me` (the event recipient) is always sent and is assumed. Only additional arguments are listed. Where `p` is used, it means either a player or a mobile.

### Immediate events:
If any of the event recipients has a reaction procedure which calls `override()`, the action is aborted.
- `EVENT_COMMAND`: sent when `p` types a command
- `EVENT_GOD_COMMAND`: sent when `p` types a god command `/xxx`
- `EVENT_HIDE`: sent when `p` tries to hide an object

### Delayed events:
- `EVENT_CREATE`: sent when room/mob/obj is created
- `EVENT_EQUIPPED`: sent when `p` equips an obj
- `EVENT_ENTER`: sent when player enters a room
- `EVENT_ENTER_GAME`: sent when player enters the game
- `EVENT_EXIT`: sent when player exits a room
- `EVENT_I_MOVED`: sent when a mob moves
- `EVENT_DOOR`: sent when `p` does an action on a door
- `EVENT_GIVE`: sent when `p1` gives `p2` an obj
- `EVENT_TAKE`: sent when `p` takes an obj
- `EVENT_DROP`: sent when `p` drops an obj
- `EVENT_SPELL`: sent when `p` casts a spell successfully
- `EVENT_ATTACK`: sent when `p1` attacks `p2`
- `EVENT_DEATH`: sent when `p` dies
- `EVENT_WEATHER`: sent at weather changes

## 3. Special Events

In rare cases, you may need to trigger reactions to special actions not covered by the pre-defined events. An example is the Harlond-Forlond ferry in Grey Havens; the ferry needs to notify the boarding room of its arrival and departure.

```lisp
allocate_event("EVENT_FERRY");
FERRY_ARRIVE = 1;

cause_event(EVENT_FERRY, vector(FERRY_ARRIVE, ferry), FALSE,
            EVENT_ROOM, shore);
```

*Created: April 3rd, 1997 by Vengeance. Last Modified: May 30th, 1997*
