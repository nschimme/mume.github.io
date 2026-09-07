---
title: Sample MUME Session
description: A complete walkthrough sample session of playing MUME from account creation to adventuring.
---

# Welcome to a sample MUME session!

Throughout this text, the default MUME colours are used, with the exception of commands that you would type as a user that are displayed in code blocks.

### Contents
- [Creating an account](#creating-an-account)
- [Creating a character](#creating-a-character)
- [Starting your journey](#starting-your-journey)
- [Movement and your environment](#movement-and-your-environment)
- [Equipping your character](#equipping-your-character)
- [Changing the look and feel of MUME](#changing-the-look-and-feel-of-mume)
- [Practicing skills](#practicing-skills)
- [Adventuring outside the city](#adventuring-outside-the-city)
- [Battle tactics](#battle-tactics)
- [Maps and scouting](#maps-and-scouting)
- [Regaining health and mobility](#regaining-health-and-mobility)
- [Gaining levels](#gaining-levels)
- [Renting at an inn](#renting-at-an-inn)
- [Interacting with players](#interacting-with-players)

---

## Creating an account

When you first log in to MUME, you will see this screen:

```
                            ***  Mume VIII  ***

                            In progress at FIRE
                   (Free Internet Roleplay Experiences)
           Adapted from J.R.R. Tolkien's Middle Earth World and
                  Maintained by CryHavoc, Manwe and Nada.

            Original code DikuMUD I (view credits), created by:
      S. Hammer, T. Madsen, K. Nyboe, M. Seifert and H.H. Staerfeldt.

If you have never played MUME before, type NEW to create a new character,
or ? for help. Otherwise, type your account or character name.


By what name do you wish to be known?
```

MUME uses a system called "accounts" to keep track of which players belong to which person. So, if you don't have an account, you'll have to create one to play MUME. Entering the name of a player that doesn't exist will tell you this:

```
By what name do you wish to be known? Fuor
No character or account by that name.
Type NEW if you have no other characters on MUME.
```

So, let's create a new account.

```
By what name do you wish to be known? NEW


Welcome to MUME!

Your first step here is to create an ACCOUNT.

MUME characters are organized into accounts. You can have ONLY ONE ACCOUNT,
and different players may not share the same account. There is no limit on the
number of characters you may own, but they must all belong to the same account.
Violators of this rule will lose ALL of their characters.

Do you have another account on MUME [Y/N/?]? n
```

MUME only allows one account per person. So, if you already have an account registered to you, you would want to type Y here instead, and log in to your already existing account.

We'll assume that you don't have an account already and continue to create a new one.

```
Enter new account name: exampleaccount

Now it's time to pick your account pass phrase. For your own protection, pick
a pass phrase that is not easy to guess.
Remember this pass phrase well, you will need it every time you log in.

Account pass phrase: Enter your password here.
Verify: Enter your password again.
OK.

Congratulations! You have now created your account on MUME. You will now be
sent directly to create your first character.
```

---

## Creating a character

Next, we'll choose some attributes for our new character. The choices made by experienced players are different than those available to non-experienced players.

```
Select a sex:
  m) Male       f) Female
Sex? m

Select a race (type ? for help):
  m) Man        d) Dwarf      e) Elf      a) Half-Elf      h) Hobbit
Race? m

What of the following descriptions is most appropriate for your character?

m) Master of magical arts
h) Healer
s) Stealthy scout
w) Warrior

New players are recommended to start as a warrior or scout.

Your choice (? for help) > w

What kind of warrior would you like to be ?

s) Strong-willed
t) Particularly tough
b) Balanced between the previous choices
w) Expert of the wilderness (ranger)

As an alternative, you might want to specialize on a particular kind of weapon:
you might be...

c) A master of heavy weapons (morningstars, two-handed swords)
x) An axe-master
l) A sword-wielder who relies on agility


Your choice (? for help) > b

Character definition complete.
```

The choices that you make in this section can't be taken back, so take a couple of minutes and think about what you want the character to do. If you want a warrior that's big and strong, you might sacrifice some speed. If you want a warrior that's fast, you might not be able to use certain types of weapons.

As with most games, these choices will become easier as you gain more experience in the world of MUME. Different character combinations can bring out different aspects of the game.

```
Select the character encoding that best displays "Ea" with two dots over the a:
  L) Latin-1  Eä
  U) UTF-8    Eä
  A) ASCII    Ea  (pick this if the above look bad)
Character encoding? l
```

Text is encoded in different ways on computers and incorrectly encoded text often results in funny looking mojibake. Pick the option that displays "Eä" correctly.

```
What name do you want for your character?

Here are some suggestions:
  Auretor
  Cogundir
  Andol

Character name (or enter for more, or ?): ?

MUME's management strongly encourages in-game role-play, although we do not
require it. Therefore, in order to preserve the necessary atmosphere for
those who wish to role-play, we ask that players choose names for their
characters which fit reasonably with the race and subrace of the character
they are playing.

Players who choose inappropriate names will be asked to select another.
Some examples of inappropriate names include:
- Very Bad:    Myorc, Manwesucks, Turdhead, Blah, Helpme
- Bad:         Dragontroll, Elfmage, Skullcrusher the Hobbit
- Poor:        Elrohirr the Dwarf, Griznak the Elf, Snowyfire the Man
- Unwise:      Oldmanwillow, Arwenevenstar, Samwize the Dúnadan
- Distracting: Cuddlebunny, Lovergirl, Sleepyboy the Bear
- Ridiculous:  Seeukakauipipa, Seeukakiuipipa, Seeukikiuipipa
  (Intentionally difficult to distinguish or type, or spelled with repeating
  patterns of consonants or vowels.)

Names which are offensive or ridiculous in foreign languages are also
unacceptable.

Note that anyone creating characters with really bad names just to be
annoying will find themselves dealt with in the harshest manner.
```

Names are important on MUME. They identify not only who you are, but help to contribute to the general Tolkien-ish feeling of MUME as a whole. So, pick a good name! Hit return if you want to see more name suggestions or type in a name of your own choosing.

```
Character name (or enter for more, or ?): Fuor
New character Fuor created (7-bit ascii name is fuor).

Fuor the Man, is that correct [Y/N]? y


            ~~~
           ~~         _----|        _ _ __ _ _
                       ----|_----|  ]-I-II-I-[                 __ _ __ _ __
   _ _ _/\_ _ _ _---|      | ----|   \ `  ' /                  ]I-I-II-I-I[
   ]-I-I--I-I-[  ---|      |     |    |. ` |        ~~~         \_`   '__/
    \_`   '__/      |     / \    |    | /^\|         ~~~         |~_ [],|
     [&] `__|       ^    / ^ \   ^    | |&||                    _|______|_
     |__   ,|      / \  / ^ ^`\ / \   | ===|                   <=-=-==-=-=>
  ___| ___ ,|__   / ^  /=_=_=_=\ ^ \  |, `_|     ~~             \__   _'_/
  I_I__I_I__I_I  (====(_________)_^___| ___|___    ~~            |.   _ |
  \-\--|-|--/-/  | .   I  [&]__I   I_I|_I I|I_I                  |   _  |
   |[] `    '|_  |_   _|`___ ._[  _\ \  | | / /                  |`    '|
  / \  [] ` .| |-| |-| |_| |_| |_| | []   [] |                   | '    |
 <===>      .|-=-=-=-=-=-=-=-=-=-=-|        / \                  |[]    |
 | []|` ` [] |.      _______ .     |-  `   <===>                 |'   __|
 <===>  `  ' | /|\  |       |  /|\ |  []   <===>-T-T-T-T-T-T-T-T-| '  I-|-T-
  \T/    1-- | ||| /|Welcome|\ ||| | .  '   \T/    .  |   ..     |     _|
__/|' v .   .|\|||//|_______|\\|||/|. . Y . .|\_________________/ -  .. .\__
      ..   .                       . .   .                       . ..

                MUME: Multi Users in Middle Earth, Version VII.

                 Type 'news next' for the latest information.


Welcome to the land of Middle Earth. May your visit here be... interesting.
Never forget! Try to role-play...


Welcome! Your new character in Mume is ready for many adventures
in the wonderful world of Middle-Earth...
Never forget that this mud is for role-playing, and is not part of
the experience rat-race. We hope you'll enjoy your new life!

Halls of Mandos
You are in the Halls of Mandos which are larger than any mortal can grasp.
All mortal spirits are summoned here after their death yet the Halls never
fill since they expand with time. The cavern walls are clad with tapestries
woven by Vairë the Weaver which depict every event of the past and of the
future. A bowl containing a few drops of the pale dew of Telperion is the only
light source. The throne of Mandos can be seen in the largest cavern.
A large torch lies here among the dust.
A large piece of cheese has been placed here.
A Warning Sign for new players is here.
A large bulletin board is mounted on a wall here.
A large fountain, made from grey stone, pours water from its centre.
Exits:None.

Your default tongue is the Westron
Free rent.

News board                - 74 unread messages
FAQ board                 - 15 unread messages

*>
```

---

## Starting your journey

A lot of information at once! This is the first room that players start in, called the Halls of Mandos. This is a starting point for all of the "Free Peoples", both when they are new characters, and when they die in the game. Let's take a look around again using `l` (abbreviation for `look`).

```
*>l
Halls of Mandos
You are in the Halls of Mandos which are larger than any mortal can grasp.
All mortal spirits are summoned here after their death yet the Halls never
fill since they expand with time. The cavern walls are clad with tapestries
woven by Vairë the Weaver which depict every event of the past and of the
future. A bowl containing a few drops of the pale dew of Telperion is the only
light source. The throne of Mandos can be seen in the largest cavern.
A large torch lies here among the dust.
A large piece of cheese has been placed here.
A Warning Sign for new players is here.
A large bulletin board is mounted on a wall here.
A large fountain, made from grey stone, pours water from its centre.
```

Now that we've looked at the room, let's find out some information about ourselves. There are three main commands used for finding information about your own character: `stat`, `score`, and `info`.

```
*>stat
OB: 8%, DB: 24%, PB: 0%, Armour: 0%. Wimpy: 0. Mood: wimpy.
Needed: 999 xp, 0 tp. Gold: 0. Alert: normal.

*>score
24/24 hit, 76/76 mana, and 114/114 moves.

*>info
You are a male Eriadorian.
You are 18 years old. It's your birthday today!
You have played no time (real time).
This ranks you as Fuor the Man Apprentice (level 1).
You are five feet seven and weigh eleven stone and five pounds.
Perception: vision 40, hearing -10, smell -25. Alertness: normal.
You are a well-meaning person, always glad to help your friends.
You are carrying 0 pounds of equipment. Peanuts.
Your base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 8%, Dodging Bonus: 24%, Parrying Bonus: 0%.
You are not wearing any armour.
You have 24/24 hit, 76/76 mana, and 114/114 movement points.
Your mood is wimpy. You will fight to the death.
You have scored 1 experience points and you have 0 travel points.
You are not known for any acts of war.
You need 999 exp. points and 0 travel points to reach the next level.
You have 0 copper.
You are speaking Westron.
```

Let's pick up the torch and cheese, and pray to Fornost to begin our journey:

```
*>get torch
You get a torch.

*>get cheese
You get some cheese.

*>pray fornost
You kneel down and try to hear the Ainulindalë.

*>
In response to your request strange harmonies come from nowhere...
Listening to them, you have the strange sensation to fade away...

*>
Suddenly an explosion of ancient rhymes makes the space collapse around you!
You blink, you vanish! And you are in Fornost!
At the Well
You stand at an old well, which apparently still serves its purpose, as people
arrive to fill their barrels, pots or waterskins.
```

---

## Movement and your environment

In order to get around in MUME, there are six simple directional commands: `north`, `south`, `east`, `west`, `up` and `down` (abbreviated `n`, `s`, `e`, `w`, `u`, `d`).

---

## Equipping your character

New characters can ask for a basic equipment kit. Once received:
- Use `wear` to wear armor and clothing
- Use `wield` to hold weapons
- Use `wear shield` to wear a shield

---

## Practicing skills

Visit your character's class guild (such as the Warrior Guild in Fornost) and use `practice` to learn skills like slashing weapons, parry, bash, and endurance.

---

## Adventuring outside the city

Explore Eriador, slay creatures, track your kills with `trophy`, and watch your experience and travel points (`tps`) increase as you level up!
