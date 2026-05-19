# Mudlle's On-Line Manual: Events

## 1. Introduction

Most of the special behaviour in MUME are coded as reactions to events received. When an action occurs in MUME, the appropriate event is generated and sent to a number of entities. If an entity has a reaction to that particular event, that reaction is executed. If more than one reaction is found, all reactions are executed.

Event recipients can be:

| Recipient | Description |
| :--- | :--- |
| room | the room where the action occurs |
| obj | an instance of an object class |
| mob | an instance of a mobile class |
| global | the global event handler |

The global event handler is a special case - its associated mudlle file is reloaded when MUME starts, and when it is modified and MUME receives a signal to reload its mudlle files. It is primarily used for world-wide events such as weather changes, or to monitor actions occurring in any room.

## 2. Pre-defined Events

Most actions in MUME generate a pre-defined event. These events are divided into two categories: immediate and delayed. Immediate events are sent before the action is executed, and allow for the action to be aborted. Delayed events are sent after the action has been successfully completed.

### Immediate events:

If any of the event recipients has a reaction procedure which calls 'override()', the action is aborted. Otherwise it is executed normally after all reactions have been processed.

| Event | Description |
| :--- | :--- |
| **EVENT_COMMAND** | sent when p types a command to objs equipped by p, room, mobs in room, objs in room (but not to objs in inventories)<br>args: p, command, command_args |
| | **p**: is the player or mobile issuing the command |
| | **command**: is an integer usually represented by a global constant CMD_??? God commands are represented by GODCMD_???, with values < 0. |
| | **command_args**: is the string passed as argument to the command. |
| | For example, when Vivriel types "say hello world", the event is sent with the arguments ({player Vivriel}, CMD_SAY, " hello world"). Note that special abbreviations of commands have their own numbers, e.g. the "say" abbreviation ' is number 169. If your reaction traps CMD_SAY, it must also test for command 169. |
| **EVENT_GOD_COMMAND** | sent when p types a god command /xxx to objs equipped by p, room, mobs in room, objs in room<br>args: p, arg_list |
| **EVENT_HIDE** | sent when p tries to hide obj to obj, room, all mobs in room<br>args: p, obj, room |
| | Destroying the object or moving the person hiding it, also aborts the hide. |

### Delayed events:

| Event | Description |
| :--- | :--- |
| **EVENT_CREATE** | sent when room\|mob\|obj is created to room\|mob\|obj<br>args: none |
| **EVENT_CREATE_GLOBAL** | sent when room\|mob\|obj is created to global<br>args: room\|mob\|obj |
| **EVENT_EQUIPPED** | sent when p equips obj to p, all objs equipped by p including obj<br>args: p, obj |
| **EVENT_ENTER** | sent when player enters a room to room, all mobs in room<br>args: player |
| **EVENT_ENTER_GAME** | sent when player enters the game to room, global<br>args: player, room |
| **EVENT_EXIT** | sent when player exits a room to room, all mobs in room<br>args: player |
| **EVENT_I_MOVED** | sent when a mob moves to mob<br>args: none |
| **EVENT_DOOR** | sent when p does an action on a door to both rooms on the two sides of the door<br>args: p, action, room, dir |
| | Action is one of DOOR_OPENED, DOOR_CLOSED, DOOR_LOCKED, DOOR_UNLOCKED or DOOR_KNOCKED. |
| | Room is the room of the action, i.e. where p is |
| | Only the last arg differs for the two rooms: the action room gets the door direction, but the other room gets the opposite direction which may or may not be the direction of a door leading back to the action room. Make an explicit check if you need the opposite door direction. |
| **EVENT_GIVE** | sent when p1 gives p2 an obj to p2, obj<br>args: p1, p2, obj |
| **EVENT_GIVE_MONEY** | sent when p1 gives p2 money to p2<br>args: p1, p2, amount |
| **EVENT_TAKE** | sent when p takes an obj from room to room, all mobs in room<br>args: p, obj |
| **EVENT_TAKE_MONEY** | sent when p takes money from room to room, all mobs in room<br>args: p, amount |
| **EVENT_DROP** | sent when p drops an obj to p's room, obj<br>args: p, obj |
| **EVENT_REVEAL** | sent when p reveals hidden obj to obj, room, all mobs in room<br>args: p, obj, room |
| **EVENT_HEAR** | sent when p1 hears a message from p2 to p1<br>args: type, p2, message |
| | Type is one of HEAR_SAY (p2 says), HEAR_WHISPER (p2 whispers to p1), HEAR_QUESTION (p2 asks p1). The message that p1 gets is suitably encrypted according to his language knowledge. |
| **EVENT_SPELL** | sent when p casts a spell successfully on x to x and x's eq, if x is a char; to x only, if x is an obj; to room, otherwise<br>args: p, spell |
| | **spell**: is the spell number represented by SPELL_???. |
| **EVENT_ATTACK** | sent when p1 attacks p2, whether with weapons or spells to p1's room, all mobs in room<br>args: p1, p2 |
| | No event is sent when p2 responds to the attack. |
| **EVENT_DEATH** | sent when p dies to room, all mobs in room<br>args: p |
| | Note that since the event is delayed, p does not receive the event. |
| **EVENT_HELP_CRY** | sent when a citizen cries for help to complain room of town<br>args: citizen, attacker, 0 |
| | The '0' is there for historical reasons known only to the imps. |
| **EVENT_WEATHER** | sent at weather changes to global<br>args: weather_type, value |
| | Currently defined weather events are: |
| | **WEATHER_SUN**: SUN_RISE when sun rises, SUN_LIGHT when day begins, SUN_SET when sun sets, SUN_DARK when night falls, or Sauron casts his darkness |
| | **WEATHER_MOON**: MOON_RISE when moon rises, MOON_SET when moon sets |
| **EVENT_EAT** | sent when an obj of type FOOD is eaten<br>args: who, amount, eaten |
| | This event is sent by the eat & taste commands. Currently, taste doesn't eat any of the object, so amount is 0. But this might return to the old behaviour of eating 1 one day... To know if the object is still there, rely on 'eaten'. |

Other events: EVENT_TICK (msg 364), EVENT_TELL (msg 418), EVENT_QUAFF (msg 491), EVENT_SHEATHE (msg 325, but does it really exists?) + hack of the day (see msg502 board 19)

## 3. Special Events

In rare cases, you may need to trigger reactions to special actions not covered by the pre-defined events. An example is the Harlond-Forlond ferry in Grey Havens; the ferry needs to notify the boarding room of its arrival and departure.

**allocate_event (s)**: create a new event and assign its identifier to a global variable named s

**cause_event (n, v, b, dn, dx, ...)**: send event n with vector of arguments v to destination pairs (dn, dx), immediate if b is TRUE, else delayed

If the event identifier \<s\> already exists, its former value is restored. Arguments \<v\> exclude 'me' which is always sent and implied. Destination pairs can be:

| Destination | Description |
| :--- | :--- |
| EVENT_ROOM, room | send to room |
| EVENT_CHAR, mob | send to mob |
| EVENT_OBJ, obj | send to obj |
| EVENT_IN_ROOM, room | send to room, all mobs and objs in room |

You can specify several destinations for one event.

**Code example:**

```mudlle
[
| ferry, shore |

allocate_event("EVENT_FERRY");
FERRY_ARRIVE = 1;
...
cause_event(EVENT_FERRY, vector(FERRY_ARRIVE, ferry), FALSE,
            EVENT_ROOM, shore);

]
```

**Corresponding reaction procedure:**

```mudlle
react_event(fn (me, type, ferry)
    if (type == FERRY_ARRIVE)
    [
        ...
    ], "ferry arrival", EVENT_FERRY);
```

_Created: April 3rd, 1997 by Vengeance. Last Modified: May 30th, 1997_
