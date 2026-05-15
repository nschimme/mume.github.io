# Sample MUME Session

Throughout this text, the default MUME colours are used, with the exception of commands that you would type as a user that are displayed in `this colour`.

## Creating an account

When you first log in to MUME, you will see this screen:

```text
                              ***  Mume IX  ***

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

MUME uses a system called "accounts" to keep track of which players belong to which person. Entering the name of a player that doesn't exist will tell you this:

```text
By what name do you wish to be known? Fuor
No character or account by that name.
Type NEW if you have no other characters on MUME.
```

So, let's create a new account.

```text
By what name do you wish to be known? NEW

Welcome to MUME!

Your first step here is to create an ACCOUNT.

MUME characters are organized into accounts. You can have ONLY ONE ACCOUNT,
and different players may not share the same account. There is no limit on the
number of characters you may own, but they must all belong to the same account.
Violators of this rule will lose ALL of their characters.

Do you have another account on MUME [Y/N/?]? n
```

MUME only allows one account per person. We'll assume that you don't have an account already and continue to create a new one.

```text
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

## Creating a character

Next, we'll choose some attributes for our new character.

```text
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

Your choice (? for help) > b

Character definition complete.
```

The choices that you make in this section can't be taken back. As with most games, these choices will become easier as you gain more experience in the world of MUME.

```text
Select the character encoding that best displays "Ea" with two dots over the a:
  L) Latin-1  Eä
  U) UTF-8    EÃ¤
  A) ASCII    Ea  (pick this if the above look bad)
Character encoding? l
```

Pick the option that displays "Eä" correctly.

```text
What name do you want for your character?

Character name (or enter for more, or ?): Fuor
New character Fuor created (7-bit ascii name is fuor).

Fuor the Man, is that correct [Y/N]? y
```

Names are important on MUME. They identify not only who you are, but help to contribute to the general Tolkien-ish feeling of MUME as a whole.

```text
                MUME: Multi Users in Middle Earth, Version IX.

Welcome to the land of Middle Earth. May your visit here be... interesting.
Never forget! Try to role-play...

Halls of Mandos
A large torch lies here among the dust.
A large piece of cheese has been placed here.
A Warning Sign for new players is here.
A large bulletin board is mounted on a wall here.
A large fountain, made from grey stone, pours water from its centre.
Exits:None.
*>
```

## Starting your journey

This is the first room that players start in, called the Halls of Mandos. Let's look around.

```text
*>look
Halls of Mandos
...
A large torch lies here among the dust.
A large piece of cheese has been placed here.
A Warning Sign for new players is here.
A large bulletin board is mounted on a wall here.
A large fountain, made from grey stone, pours water from its centre.
```

You can use `l` instead of `look`. Most commands can be abbreviated. Now, let's find out some information about ourselves using `stat`, `score`, and `info`.

```text
*>info
You are a male Eriadorian.
You are 18 years old.
...
You have 24/24 hit, 76/76 mana, and 114/114 movement points.
...
You need 999 exp. points and 0 travel points to reach the next level.
```

Bulletin boards often contain useful information. To read a message, type `read <number>`.

```text
*>look board
Starter's board - 7 messages (out of 7)
...
55 : TEN COMMANDMENTS (Petrel)

*>read 55
Message 55 : TEN COMMANDMENTS (Petrel)
...
1.  You may have only ONE ACCOUNT.
...
```

When you see objects in a room, you can pick them up. Let's pick up the torch and cheese, and then enter the game by praying to Fornost.

```text
*>get torch
You get a torch.

*>get cheese
You get some cheese.

*>pray fornost
...
Suddenly an explosion of ancient rhymes makes the space collapse around you!
You blink, you vanish! And you are in Fornost!
```

## Movement and your environment

In order to get around in MUME, there are six directional commands: `north`, `south`, `east`, `west`, `up` and `down` (or `n`, `s`, `e`, `w`, `u`, `d`).

```text
*>west
Market Square
Exits: North East South West.

*>w
Western End of Market Square
Exits: North East South West.
```

You can check which exits go where by typing `exits`. Type `where` to see which rooms other players in the same area are in.

## Equipping your character

New characters can ask the Ainur for some basic equipment.

```text
*>pray May I have a kit, please?
You send your prayer to the Ainur.

*>
Someone smiles at you as you receive some basic equipment.

*>inv
You are carrying:
a thick, soft leather jerkin (brand new)
a pair of trousers (brand new)
...
a backsword (brand new)
a small wooden shield (brand new)
...
```

You can `wear <item>` or `wear all`. To remove, use `remove <item>`.

```text
*>wear jerkin
You wear a thick, soft leather jerkin on your body.

*>wield backsword
You stop using a torch.
You awkwardly wield a backsword, ready to fight evil.

*>wear shield
You fasten a small wooden shield on your arm.
```

You can put items into containers like sacks to keep your inventory organized.

```text
*>put all sack
You put a piece of raw meat in a large sack.
...
```

## Changing the look and feel of MUME

The commands `brief` and `spam` allow you to trim the amount of descriptive text sent when you move.

```text
*>spam
Spam mode off.

*>brief
Brief mode on.
```

## Practicing skills

Before heading out, practice some skills at your guild. Skills are necessary for using weapons, spells, swimming, etc. Your character starts with practice sessions and gains more as you level up.

```text
*>practice
You have 13 practice sessions left.
...

*>look map
... (Shows map of Fornost) ...

*>s
The Guild of Warriors
Huor of Dor-lómin is standing here, ready to teach his arts.

*>practice slashing
You took 1 out of 29 sessions in this skill. Your knowledge is now 30%.
```

## Adventuring outside the city

Now, let's head outside the gates.

```text
*>s
Before the Gates of Fornost
A colourful butterfly is fluttering around here.

*>hit butterfly
You slash a butterfly's leg extremely hard and shatter it.
A butterfly is dead! R.I.P.

*>trophy
                *** TROPHY *** (Number Killed, Knowledge, Mobile)
|   1,  1%,  A butterfly               |
```

## Battle tactics

The "mood" setting controls how offensive or defensive you are.

```text
*>change mood aggressive
Ok.

*>stat
OB: 26%, DB: 26%, PB: 16%, Armour: 17%. Mood: aggressive.
```

Some enemies can be too difficult. It's best to `flee` when outmatched.

```text
*>
A boar strongly hits your left arm and shatters it.
That really HURT!

*>flee
You flee head over heels.
```

## Regaining health and mobility

Cities are safe places to heal up by `rest`ing or `sleep`ing.

```text
*>rest
You sit down and rest your tired bones.

*>sleep
You go to sleep.
```

Make sure you have food and drink, as being hungry or thirsty slows down recovery.

```text
*>drink cup
You drink the water.
```

## Gaining levels

By killing creatures and exploring, you gain experience and levels.

```text
*>
You gain a level!
...
*>info
... This ranks you as Fuor the Man Apprentice (level 2).
```

## Renting at an inn

To leave the game and keep your items, you must `rent` at an inn. **DO NOT type `quit`** or your items will fall to the ground.

```text
*>offer
The innkeeper tells you 'It will cost you 62 copper pennies per day.'
You have enough money for 2 months.

*>rent
The innkeeper stores your stuff in the safe, and helps you into your chamber.
```

## Interacting with players

MUME is a social game. You can `say`, `tell`, and `follow` other players to form groups.

```text
*>say hello
Ermin says 'Hello!'

*>follow ermin
You now follow Ermin.

*>group
Your group consists of:
     Ermin (Head of group)
     Fuor
```

And the adventure continues...
