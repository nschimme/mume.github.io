---
title: A Sample MUME Session
description: A complete walkthrough sample session of playing MUME from account creation to adventuring.
---

<a id="contents"></a><h1>Welcome to a sample MUME session!</h1>

Throughout this text, the default MUME colours are used, with the exception of commands that you would type as an user that are displayed in <span class="command">this colour</span>.<br/>

<header>
<p class="header">Contents</p>

<ul class="list-link">
<li><a href="#account">Creating an account</a>.</li>
<li><a href="#character">Creating a character</a>.</li>
<li><a href="#starting">Starting your journey</a>.</li>
<li><a href="#moving">Movement and your environment</a>.</li>
<li><a href="#equip">Equipping your character</a>.</li>
<li><a href="#spam">Changing the look and feel of MUME</a>.</li>
<li><a href="#skills">Practicing skills</a>.</li>
<li><a href="#outside">Adventuring outside the city</a>.</li>
<li><a href="#mood">Battle tactics</a>.</li>
<li><a href="#map">Maps and scouting</a>.</li>
<li><a href="#resting">Regaining health and mobility</a>.</li>
<li><a href="#level">Gaining levels</a>.</li>
<li><a href="#renting">Renting at an inn</a>.</li>
<li><a href="#interacting">Interacting with players</a>.</li>
</ul>
</header>


<div class="separator"></div>
<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="account"></a><span class="header">Creating an account</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

When you first log in to MUME, you will see this screen:

<pre class="session" v-pre>
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
</pre>


MUME uses a system called "accounts" to keep track of which players belong
to which person.  So, if you don't have an account, you'll have to create one
to play MUME.  Entering the new of a player that doesn't exist will tell you
this:

<pre class="session" v-pre>
By what name do you wish to be known? Fuor
No character or account by that name.
Type NEW if you have no other characters on MUME.
</pre>

So, let's create a new account.

<pre class="session" v-pre>
By what name do you wish to be known? NEW


Welcome to MUME!

Your first step here is to create an ACCOUNT.

MUME characters are organized into accounts. You can have ONLY ONE ACCOUNT,
and different players may not share the same account. There is no limit on the
number of characters you may own, but they must all belong to the same account.
Violators of this rule will lose ALL of their characters.

Do you have another account on MUME [Y/N/?]? n
</pre>

MUME only allows one account per person.  So, if you already have an
account registered to you, you would want to type <span class="command">Y</span>
here instead, and log in to your already existing account.

We'll assume that you don't have an account already and continue to create
a new one.

<pre class="session" v-pre>
Enter new account name: exampleaccount

Now it's time to pick your account pass phrase. For your own protection, pick
a pass phrase that is not easy to guess.
Remember this pass phrase well, you will need it every time you log in.

Account pass phrase: Enter your password here.
Verify: Enter your password again.
OK.

Congratulations! You have now created your account on MUME. You will now be
sent directly to create your first character.
</pre>

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="character"></a><span class="header">Creating a character</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>
Next, we'll choose some attributes for our new character.
The choices made by experienced players are different than those available to
non-experienced players.

<pre class="session" v-pre>
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

Your choice (? for help) &gt; w

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


Your choice (? for help) &gt; b

Character definition complete.
</pre>

The choices that you make in this section can't be taken back, so take a
couple of minutes and think about what you want the character to do.  If you
want a warrior that's big and strong, you might sacrifice some speed.  If you
want a warrior that's fast, you might not be able to use certain types of
weapons.

As with most games, these choices will become easier as you gain more
experience in the world of MUME.  Different character combinations can bring
out different aspects of the game.

<pre class="session" v-pre>
Select the character encoding that best displays "Ea" with two dots over the a:
  L) Latin-1  E&auml;
  U) UTF-8    E&#195;&curren;
  A) ASCII    Ea  (pick this if the above look bad)
Character encoding? l
</pre>

Text is encoded in different ways on computers and incorrectly encoded text often results in
funny looking mojibake.   Pick the option that displays "E&auml;" correctly.

<pre class="session" v-pre>
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
</pre>

Names are important on MUME.  They identify not only who you are, but help
to contribute to the general Tolkien-ish feeling of MUME as a whole.  So, pick
a good name!  Hit return if you want to see more name suggestions or type in a name of your own
choosing..

<pre class="session" v-pre>
Character name (or enter for more, or ?): Fuor
New character Fuor created (7-bit ascii name is fuor).

Fuor the Man, is that correct [Y/N]? y


            ~~~
           ~~         _----|        _ _ __ _ _
                       ----|_----|  ]-I-II-I-[                 __ _ __ _ __
   _ _ _/\_ _ _ _---|      | ----|   \ `  ' /                  ]I-I-II-I-I[
   ]-I-I--I-I-[  ---|      |     |    |. ` |        ~~~         \_`   '__/
    \_`   '__/      |     / \    |    | /^\|         ~~~         |~_ [],|
     [&amp;] `__|       ^    / ^ \   ^    | |&amp;||                    _|______|_
     |__   ,|      / \  / ^ ^`\ / \   | ===|                   &lt;=-=-==-=-=&gt;
  ___| ___ ,|__   / ^  /=_=_=_=\ ^ \  |, `_|     ~~             \__   _'_/
  I_I__I_I__I_I  (====(_________)_^___| ___|___    ~~            |.   _ |
  \-\--|-|--/-/  | .   I  [&amp;]__I   I_I|_I I|I_I                  |   _  |
   |[] `    '|_  |_   _|`___ ._[  _\ \  | | / /                  |`    '|
  / \  [] ` .| |-| |-| |_| |_| |_| | []   [] |                   | '    |
 &lt;===&gt;      .|-=-=-=-=-=-=-=-=-=-=-|        / \                  |[]    |
 | []|` ` [] |.      _______ .     |-  `   &lt;===&gt;                 |'   __|
 &lt;===&gt;  `  ' | /|\  |       |  /|\ |  []   &lt;===&gt;-T-T-T-T-T-T-T-T-| '  I-|-T-
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

<span class="look">Halls of Mandos</span>
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

# Friendly reminder: You can only have one account and it cannot be shared.
#                    See HELP ACCOUNTS and RULES ACCOUNTS for more information.

News board                - 74 unread messages
FAQ board                 - 15 unread messages

*&gt;
</pre>

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="starting"></a><span class="header">Starting your journey</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

A lot of information at once!  This is the first room that players start
in, called the Halls of Mandos.  This is a starting point for all of the "Free
Peoples", both when they are new characters, and when they die in the game.
There are several things of importance in this room.  Let's take a look around
again.

<pre class="session" v-pre>
*&gt;look
<span class="look">Halls of Mandos</span>
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
</pre>

So, in this room, we can see a torch, a piece of cheese, a warning sign,
a bulletin board and a fountain.  But, wouldn't it be somewhat painful to have
to type 'look' every time?  Instead, you can simply use 'l'.  Most commands
can be abbreviated for ease of typing.

<pre class="session" v-pre>
*&gt;l
<span class="look">Halls of Mandos</span>
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
</pre>

Now that we've looked at the room, let's find out some information about
ourselves.  There are three main commands used for finding our information
about your own character; <span class="command">stat</span>, <span class="command">
score</span>, and <span class="command">info</span>.

<pre class="session" v-pre>
*&gt;stat
OB: 8%, DB: 24%, PB: 0%, Armour: 0%. Wimpy: 0. Mood: wimpy.
Needed: 999 xp, 0 tp. Gold: 0. Alert: normal.

*&gt;score
24/24 hit, 76/76 mana, and 114/114 moves.

*&gt;info
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
</pre>

The <span class="command">info</span> and
<span class="command">score</span> commands can be abbreviated
<span class="command">inf</span> and <span class="command">sc</span>,
respectively.  You probably noticed that all of the information in
<span class="command">stat</span> and <span class="command">score</span> also
appears in <span class="command">info</span>.  Sometimes, in a hurried
situation, it's easier to use a command with less text, so
<span class="command">score</span> and <span class="command">stat</span> come in
handy.

Most of the time, bulletin boards will contain some useful information.
Let's take a look at the bulletin board in the Halls of Mandos, called the
Starter's board.  To read a message on a board, type <span class="command">read
&lt;number&gt;</span>.

<pre class="session" v-pre>
*&gt;look board
Starter's board - 7 messages (out of 7)
49 : Helpful Hints to New Players (Frór)
50 : Arda (Frór)
51 : Some more advice (Frór)
52 : For more information... (Frór)
53 : About the Towns of Middle-Earth (Petrel)
54 : About the Towns of Middle-Earth II (Petrel)
55 : TEN COMMANDMENTS (Petrel)

*&gt;read 55
Message 55 : TEN COMMANDMENTS (Petrel)
Written on Fri Feb 23 08:22:49 2001

1.  You may have only ONE ACCOUNT.  All characters you create must be in
    this account.

2.  You may not share your characters with anyone, trade them, give them
    away, or let other people log on to your account.

3.  You can play only ONE character at a time.  Before you log on character
    B, character A must have left the game with 'RENT' or 'QUIT'.

4.  You cannot transfer money or equipment from one character to another
    BY ANY MEANS - directly, indirectly, via other players, by hiding it,
    or any other way.

5.  You cannot keep money or equipment 'safe' so that you can recover it
    easily if you die.  This includes hiding it, giving it to mobiles,
    giving it to other players, and any other method.  The only way to
    get your equipment back is if you or your friends take it from your
    corpse.

6.  You cannot give any help or information to anyone on the other side
    of the war between the good and evil races.

7.  You cannot intentionally drop link to avoid death in any situation.

8.  Racial or sexual harassment of other players, and use of the communications
    channels for such purposes, is completely forbidden.

9.  You cannot use 'ACTIONS' in combat with other players.  Actions are
    client functions which automatically do anything based on your
    output from MUME, such as looting coins or equipment from corpses,
    fleeing, hitting, tracking, changing your aliases, changing key
    bindings, or anything else.

10. You may not use 'spam' techniques in combat with other players.  This
    is deliberately flooding your opponent's terminal with useless output
    for the purpose of creating confusion; for example, by dropping 100
    separate copper coins in the room, repeated utterances, emotes,
    etc.

Wait, here's an eleventh one:

11. You may not use a title, a whois, a description, or emotes to simulate
    game output from combat, commands, movement, or any other meaningful
    activity.

These are among the MOST IMPORTANT rules for MUME mortals.  If you break
them, you can be severely punished.  Your character might lose ALL his
levels.  You might lose ALL the characters in your account.

This post is a simplified SUMMARY of some of the rules, but you are
responsible for obeying ALL the rules in their full and original form.
Type RULES for an index to the rules.

So you know, Gods in MUME are also subject to very strict rules.  They
may not harass mortals, interfere in their affairs without cause, help

*** Return: continue, b: back one page, r: redisplay, q:quit (84%) ***
their own characters with money, equipment, or otherwise, or harm their
characters' enemies.  Any god who violates these rules is subject
to serious punishment.  One of our strengths over the years has been
 our readiness to enforce the integrity and impartiality of our immortals, and
we want it to stay that way.

We believe these rules are reasonable and encourage roleplay and fair
competition.  We are very serious about enforcing them.

Petrel
for the management
</pre>

Sometimes, during the display of a long bit of text, you will see a line
like this (there is one in the text above):

<pre class="session" v-pre>
*** Return: continue, b: back one page, r: redisplay, q:quit (84%) ***
</pre>

This is the MUME pager.  It allows you to finish reading what's on your
screen before you continue to the next screen.  Press "return" or "enter"
to get to the next screen of information.

The text tells you to type <span class="command">rules</span> for an index to the rules of MUME.
Let's try it.

<pre class="session" v-pre>
*&gt;rules
INDEX

   /--------------------------------------------------------------------\
  |  These are the rules concerning the players of MUME. If you have     |
  |  problems finding relevant rules, return to this index or ask an     |
  |  Ainu for help.                                                      |
  |                                                                      |
  |  "RULES CHARACTER",     Important rules for newcomers, regulates     |
  |                         character separation among other things.     |
  |  "RULES COMMUNICATION", Rules for communication, whoises, titles etc.|
  |  "RULES PLAYERKILLING", Regulates battles between player characters. |
  |  "RULES AINUR",         These are the rules for immortals and any    |
  |                         interactions between mortals and Ainur.      |
  |  "RULES MISC",          A few misc rules.                            |
  |  "RULES SUBJECTS",      List of all rules.                           |
  |                                                                      |
   \--------------------------------------------------------------------/
</pre>

Remember the warning sign that was in the room?  Let's look at it.

<pre class="session" v-pre>
*&gt;l warning sign
This is a complex world!  If you learn the commands and features, your
life may be fulfilling and rewarding.  If you do not, it may be frustrating
and short!

Please type 'HELP NEWBIE' for an introduction to MUME's most important aspects.
'HELP BASICS' if you have never played a MUD before; 'HELP ADVANCED' if you
have played other MUDs but this is your first visit to MUME. 'HELP NEW' gives
a list of other suggested readings.

THEN, please read the messages on the BULLETIN BOARD here.  Type
'READ NEXT' until you are finished with them.  These messages give
important information on MUME's commands, rules, features, and starting
points.

When you are DONE reading these messages (and any other help files you
want to read), leave these halls by praying to the town where you wish
to begin your journeys.
Elves and Half-elven may begin in the Grey Havens, Fornost, or Rivendell.
Men and women may begin in Fornost.
Dwarves may begin in the Blue Mountains or in Fornost.
Hobbits may begin in the Shire or in Fornost.
Hobbits, Men, and Dwarves who shun the ways of good may also begin their
lives in the dangerous city of Tharbad - if they dare.
</pre>

When you see objects in a room, you can usually pick them up.  Let's pick
up the torch and cheese, and then we'll enter the game by praying to Fornost,
since our character is a Man.

<pre class="session" v-pre>
*&gt;get torch
You get a torch.

*&gt;get cheese
You get some cheese.

*&gt;pray fornost
You kneel down and try to hear the Ainulindalë.

*&gt;
In response to your request strange harmonies come from nowhere...
Listening to them, you have the strange sensation to fade away...

*&gt;
Suddenly an explosion of ancient rhymes makes the space collapse around you!
You blink, you vanish! And you are in Fornost!
<span class="look">At the Well</span>
You stand at an old well, which apparently still serves its purpose, as people
arrive to fill their barrels, pots or waterskins. You hear laughter and singing
through a window in house to the south, but you cannot see a thing, for the
curtains are closed, and the entrance is a bit west, under a bright red sign.
A map has been dropped here.
A circular stone well has been built here.
There is an old street-lamp on the border of the street.
Fardur the guide is here, leaning on his walking-stick.
An insolent scholar is here, pondering.
A woman is here, looking for someone to chat with.

*&gt;
<span class="say">The Ainulindalë whispers to you 'Fornost is your hometown!'</span>

*&gt;
<span class="narrate">Dian narrates '2 bns ford'</span>
</pre>

Now, we're in Fornost.  Since we're in the real world now, we'll hear other
players communicating with each other (and you), using methods like
<span class="command">narrate</span>, <span class="command">sing</span> and
<span class="command">tell</span>.  Much of what they say will be confusing at
first.  If you're having trouble with some of the abbreviations people are
using, try typing "HELP ABBREVIATIONS".

Often, you will see non-player characters (NPCs)
wandering around.  These are also referred to as "mobs", or "mobiles".
Sometimes they're just around for atmosphere; sometimes they serve specific
purposes, like shopkeepers and innkeepers.

<pre class="session" v-pre>
*&gt;
A scholar leaves west.

*&gt;
A woman leaves north.

*&gt;
A merchant has arrived from the west.

*&gt;
A scholar has arrived from the west.
</pre>

While we were still in the Halls of Mandos, we picked up a torch and some
cheese.  Typing <span class="command">inventory</span>  (or <span class="command">
inv</span> for short) will show you what you're carrying.  So, let's hold the
torch, and eat the cheese.

<pre class="session" v-pre>
*&gt;inv
You are carrying:
some cheese
a torch

*&gt;hold torch
You hold a torch.
You light a torch.

*&gt;eat cheese
You eat the cheese.
You are full.

*&gt;inv
You are carrying:
Nothing.

*&gt;equipment
You are using:
&lt;held&gt;               a torch; it is lit
</pre>

Notice that after we hold the torch and eat the cheese, Fuor's inventory is
now empty.  However, he has the torch equipped in his hand.  The
<span class="command">equipment</span> command can be abbreviated as
<span class="command">eq</span>.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><span class="header"><a id="moving"></a>Movement and your environment</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

In order to get around in MUME, there are six simple directional commands.
These are <span class="command">north</span>, <span class="command">south</span>,
<span class="command">east</span>, <span class="command">west</span>,
<span class="command">up</span> and <span class="command">down</span>.  They can
be typed as a whole word, or can be abbreviated as <span class="command">n</span>
, <span class="command">s</span>, <span class="command">e</span>,
<span class="command">w</span>, <span class="command">u</span> or
<span class="command">d</span>.

<pre class="session" v-pre>
*&gt;
<span class="narrate">Norgin narrates '...what whitie took pack with all my eq from top of steeply?'</span>

*&gt;
A scholar leaves west.

*&gt;
<span class="narrate">Lilmar narrates 'any spare ws or mattock or enchant etc?'</span>

*&gt;
<span class="narrate">Garok narrates 'on keril ford'</span>
A scholar has arrived from the east.

*&gt;
<span class="narrate">Istafel narrates 'lightning storm around mewlip inn'</span>

*&gt;
A Dúnadan soldier has arrived from the east.

*&gt;west
<span class="look">Market Square</span>
You stand under a big red sign which proclaims that you are at the entrance to
the well-known inn called 'The Crown of Arnor', or as people say around these
parts, just 'The Crown'. Some oxcarts have been parked here, and presumably
their drivers are inside enjoying a nice, hot meal.
A timetable for the coach to Tharbad has been nailed on to a wall.
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;
A Dúnadan soldier has arrived from the south.
An experienced Dúnadan officer has arrived from the south.

*&gt;
An experienced Dúnadan officer puts a lantern on his belt.
An experienced Dúnadan officer lights a lantern.
A Dúnadan soldier puts a lantern on his belt.
A Dúnadan soldier lights a lantern.

*&gt;w
<span class="look">Western End of Market Square</span>
This is the centre of the new, rebuilt Fornost. A few short years ago this
place was abandoned and deserted like the rest of this ancient city, but it has
already developed a thriving trade. The inhabitants are all doing well it
seems, and hoping to do better still. Trays of fish and fruit indicate that
the shop west of here is a grocery of some sort. A street leading south plunges
a hole in the otherwise massive front of stores and houses that border the
square.
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;
A merchant has arrived from the north.
</pre>

Sometimes, it's a good idea to check which exits go where
from the room you're currently in.  You can do this by typing
<span class="command">exits</span>.  Also, if another player asks you to meet
them somewhere in the area, you can type <span class="command">where</span> to
see which rooms people in the same area as you are in.

<pre class="session" v-pre>
*&gt;exits
North - Western End of Market Square
East  - Market Square
South - Craftsmen's Alley
West  - The Grocery

*&gt;where
Players in your zone
--------------------
Fuor                 - Western End of Market Square
Theowen              - City Council's Meeting Room

*&gt;
Theowen has arrived from the north.

*&gt;
Theowen leaves south.
</pre>

As it happens, Theowen is just a few rooms away from where Fuor is, and
walks by right after the command is typed.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="equip"></a><span class="header">Equipping your character</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

New characters can ask the Ainur, or Gods, for some basic equipment to
start them off on their journeys.  This is typically referred to as a "newbie
kit" or just "kit".  The best way to get a newbie kit is to ask politely.
There are usually Ainur on at all times of the day.  Sometimes the Ainur are
visible; at other times, they will appear only as "Someone".

<pre class="session" v-pre>
*&gt;pray May I have a kit, please?
You send your prayer to the Ainur.

*&gt;
A scholar leaves north.

*&gt;
<span class="say">Someone smiles at you as you receive some basic equipment.</span>

*&gt;
A little dog has arrived from the east.

*&gt;inv
You are carrying:
a thick, soft leather jerkin (brand new)
a pair of trousers (brand new)
a thin pair of rigid leather boots (brand new)
a small wooden shield (brand new)
a backsword (brand new)
a map of Fornost
a plain leather belt
a hunting knife (brand new)
a large biscuit
a large biscuit
a loaf of bread
a loaf of bread
a lantern
a map of Bree
a quiver
a shortbow
a fortune-cookie
a cup
a large sack
a piece of raw meat
</pre>

Now, Fuor has a whole set of basic equipment, including
a basic sword, shield, and bow.  This is good to start off with.  Let's wear
some of this equipment; this can be accomplished by typing <span class="command">
wear &lt;item&gt;</span>, or <span class="command">wear all</span> to wear
everything in the inventory.  Removing an item is the same; type
<span class="command">remove &lt;item&gt;</span> or
<span class="command">remove all</span>.  First, we'll go to a room that has a
bit less activity, then we'll wear our equipment.

<pre class="session" v-pre>
*&gt;
A Dúnadan soldier has arrived from the east.

*&gt;
A little dog leaves east.

*&gt;e
<span class="look">Market Square</span>
You stand under a big red sign which proclaims that you are at the entrance to
the well-known inn called 'The Crown of Arnor', or as people say around these
parts, just 'The Crown'. Some oxcarts have been parked here, and presumably
their drivers are inside enjoying a nice, hot meal.
A timetable for the coach to Tharbad has been nailed on to a wall.
The coach to Bree and Tharbad is here.
There is an old street-lamp on the border of the street.
A little dog is here.
Exits: North East South West.

*&gt;s
<span class="look">The Crown of Arnor Inn</span>
As you enter this large rectangular room, you remember hearing good words about
'The Crown' on your travels, and the first impressions are not disappointing.
The room extends further east, where food and drinks are being served. In the
middle of the room's southern wall a fire is sparkling on a hearth. A flight of
stairs leads up to the customer's private chambers. It is clear however that
the arrangements would be made down here, should you want to rent a room.
An old innkeeper stands here, talking to some guests.
A domesticated pony, beast of burden to many, stands here.
A sturdy pack horse is standing here.
A domesticated pony, beast of burden to many, stands here.
A rugged-looking man is standing here.
Exits: North East.

*&gt;
A little dog has arrived from the north.

*&gt;
Light gradually filters in, proclaiming a new sunrise outside.

*&gt;e
<span class="look">Dining Hall of The Crown</span>
This is a loud place! You hear harsh voices, shrill laughter and the high sound
of glasses clinking. An endless stream of beer finds its way into the bellies
of the rough men who frequent this room. The swords are removed, however, and
it's usually very peaceful here. A sign hangs on one of the walls.
A large bulletin board is mounted on a wall here.
A fine marble chessboard with ivory and ebony pieces is set here.
A large stone fireplace with a roaring fire warms the room.
A barman watches you calmly, while skillfully mixing a drink.
A domesticated pony, beast of burden to many, stands here.
Tundur the Lamplighter is resting here.
A man passes by, intent on his business.
Exits: West.

*&gt;
Tundur the Lamplighter stops resting, and clambers on his feet.
Tundur the Lamplighter leaves west.

*&gt;inv
You are carrying:
a thick, soft leather jerkin (brand new)
a pair of trousers (brand new)
a thin pair of rigid leather boots (brand new)
a small wooden shield (brand new)
a backsword (brand new)
a map of Fornost
a plain leather belt
a hunting knife (brand new)
a large biscuit
a large biscuit
a loaf of bread
a loaf of bread
a lantern
a map of Bree
a fortune-cookie
a cup
a large sack
a piece of raw meat

*&gt;
<span class="narrate">Fabian narrates 'any1 cure crit shire fast!!?'</span>

*&gt;
A townsman leaves west.

*&gt;
A townsman has arrived from the west.

*&gt;wear jerkin
You wear a thick, soft leather jerkin on your body.

*&gt;wear trousers
You wear a pair of trousers on your legs.

*&gt;wear all
You hold a large sack.
You put a shortbow on your back.
You put a quiver over your shoulder.
You are not wearing a belt.
You are not wearing a belt.
You wear a plain leather belt about your waist.
You are already holding too much.
You are already holding too much.
You wear a thin pair of rigid leather boots on your feet.

*&gt;inv
You are carrying:
a small wooden shield (brand new)
a backsword (brand new)
a map of Fornost
a hunting knife (brand new)
a large biscuit
a large biscuit
a loaf of bread
a loaf of bread
a lantern
a map of Bree
a fortune-cookie
a cup
a piece of raw meat
</pre>

Obviously, <span class="command">wear all</span> didn't
work quite the way we wanted it to.  Fuor didn't wield his sword or hold his
shield!  Remember that <span class="command">wear all</span> works
by going through your equipment one piece at a time, so if you hold something
in both hands, you will not be able to wield your weapon or hold your shield.

<pre class="session" v-pre>
*&gt;
<span class="narrate">Norgin narrates 'someone hold fizz's eq...I have no gold to rent :('</span>

*&gt;wield backsword
You stop using a torch.
You awkwardly wield a backsword, ready to fight evil.

*&gt;wear shield
You are already holding too much.

*&gt;eq
A man has arrived from the west.
You are using:
&lt;wielded&gt;            a backsword (brand new)
&lt;held&gt;               a large sack
&lt;worn on body&gt;       a thick, soft leather jerkin (brand new)
&lt;worn on legs&gt;       a pair of trousers (brand new)
&lt;worn on feet&gt;       a thin pair of rigid leather boots (brand new)
&lt;worn on back&gt;       a shortbow
&lt;worn across back&gt;   a quiver
&lt;worn as belt&gt;       a plain leather belt

*&gt;remove sack
You stop using a large sack.

*&gt;wear shield
You fasten a small wooden shield on your arm, becoming very impressive.

*&gt;inv
You are carrying:
a large sack
a torch
a map of Fornost
a hunting knife (brand new)
a large biscuit
a large biscuit
a loaf of bread
a loaf of bread
a lantern
a map of Bree
a fortune-cookie
a cup
a piece of raw meat
</pre>

Sometimes, you'll want to specify where on the body you want to wear some
items, such as a lantern or a knife.  Both of these objects can be worn on a
belt.  There are a couple of ways of typing this command;
<span class="command">wear &lt;thing&gt; &lt;place&gt;</span>
works just as well as <span class="command">wear the &lt;thing&gt; on
&lt;place&gt;</span>.
Once Fuor is done wearing the rest of his equipment, he's going to put
everything in that large sack that he's carrying.  Sacks, backpacks and
pouches can be used to sort your inventory so that it is more organized.

<pre class="session" v-pre>
*&gt;wear the lantern on belt
You fasten a lantern on your belt.
You light a lantern.

*&gt;wear knife belt
You fasten a hunting knife on your belt.

*&gt;put all sack
You put a piece of raw meat in a large sack.
You put a cup in a large sack.
You put a fortune-cookie in a large sack.
You put a map of Bree in a large sack.
You put a loaf of bread in a large sack.
You put a loaf of bread in a large sack.
You put a large biscuit in a large sack.
You put a large biscuit in a large sack.
You put a map of Fornost in a large sack.
You put a torch in a large sack.
That would be an interesting topological experiment.

*&gt;inv
You are carrying:
a large sack
</pre>

When he tried to put everything in the sack, Fuor got the
message "That would be an interesting topological experiment".  This happened
because Fuor tried to put the sack into itself.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="spam"></a><span class="header">Changing the look and feel of MUME</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

Let's move around a bit.  You'll notice that there can be a large amount of
text when you move between rooms.  In order to help with this, there are two
commands that allow you to trim the amount of descriptive text that is sent.
These are <span class="command">brief</span> and <span class="command">spam</span>.


<pre class="session" v-pre>
*&gt;w
<span class="look">The Crown of Arnor Inn</span>
As you enter this large rectangular room, you remember hearing good words about
'The Crown' on your travels, and the first impressions are not disappointing.
The room extends further east, where food and drinks are being served. In the
middle of the room's southern wall a fire is sparkling on a hearth. A flight of
stairs leads up to the customer's private chambers. It is clear however that
the arrangements would be made down here, should you want to rent a room.
An old innkeeper stands here, talking to some guests.
A domesticated pony, beast of burden to many, stands here.
A sturdy pack horse is standing here.
A domesticated pony, beast of burden to many, stands here.
Ozzy the Rohirrim, wielding a broadsword, is standing here.
Ashura the Half-Elf, wielding a broadsword, is standing here.
A stocky mountain mule is here, waiting to serve.
A rugged-looking man is standing here.
Exits: North East.

*&gt;n
<span class="look">Market Square</span>
You stand under a big red sign which proclaims that you are at the entrance to
the well-known inn called 'The Crown of Arnor', or as people say around these
parts, just 'The Crown'. Some oxcarts have been parked here, and presumably
their drivers are inside enjoying a nice, hot meal.
A timetable for the coach to Tharbad has been nailed on to a wall.
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;
A man has arrived from the west.

*&gt;spam
Spam mode off.

*&gt;brief
Brief mode on.

*&gt;
Tundur the Lamplighter has arrived from the east.

*&gt;s
<span class="look">The Crown of Arnor Inn</span>
An old innkeeper stands here, talking to some guests.
A domesticated pony, beast of burden to many, stands here.
A sturdy pack horse is standing here.
A domesticated pony, beast of burden to many, stands here.
Ozzy the Rohirrim is standing here.
Ashura the Half-Elf is standing here.
A stocky mountain mule is here, waiting to serve.
A rugged-looking man is standing here.
A man passes by, intent on his business.
Exits: North East.
</pre>

As you can see, there is a good amount of difference when these commands are
used.  However, when these modes are turned on, you may miss important
information that is given in the descriptions of rooms!  Keep this in mind when
you're travelling in lands that you haven't become familiar with yet.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="skills"></a><span class="header">Practicing skills</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

Before we head outside of the city, it would be a good idea to practice some
skills.  Skills are necessary to know how to use weapons, how to cast spells,
and how to do basic things like swim, climb and ride a horse/pony/mule.  Your
character starts with a number of practice session, or "points", and gains
more as you gain levels.

<pre class="session" v-pre>
*&gt;n
<span class="look">Market Square</span>
There is an old street-lamp on the border of the street.
A rugged-looking man is standing here.
Tundur the lamplighter is walking around here with a lantern in his hand.
Exits: North East South West.

*&gt;w
<span class="look">Western End of Market Square</span>
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;practice
You have 13 practice sessions left.
Skill / Spell          Knowledge  Difficulty Class      Mana Casting time

*&gt;n
<span class="look">Western End of Market Square</span>
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;n
<span class="look">Western End of Market Square</span>
There is an old street-lamp on the border of the street.
Exits: North East South West.

*&gt;n
<span class="look">Narrow Alley</span>
There is an old street-lamp on the border of the street.
A woman is here, looking for someone to chat with.
A cute little girl is here.
A citizen-mercenary is here, waiting for a job.
Exits: North South.

*&gt;n
<span class="look">Arnor Square</span>
There is an old street-lamp on the border of the street.
A well-crafted white fountain is here, water pouring forth from it.
An insolent scholar is here, pondering.
A man passes by, intent on his business.
An old man is walking around, cleaning up.
Exits: [North] East South West.
</pre>

Sometimes, it's helpful to look at the city maps that you're given in the
newbie kit.  Cities can be a bit large and specific places hard to find unless
you already know your way around.

<pre class="session" v-pre>
*&gt;look map
You don't see a map.

*&gt;inv
You are carrying:
a large sack

*&gt;look in sack
sack (carried) :
a cup
a fortune-cookie
two large biscuits
two loaves of bread
a map of Bree
a map of Fornost
a piece of raw meat
a torch

*&gt;get map sack
You get a map of Fornost from a large sack.

*&gt;look map
--  East Fornost  --

            _______________________________________________________
           |      |                               _  |      |      |
           |Aband |       GUILD  STREET          |_| Garden  Temple|
           |Bldg  |                             Well        |      |
     ______|__  __|__  _____  ____________  __       |______|______|______
    #             |House |      |      |      |      |      |      |      |
    Gate by       | of   |Warr  |Writin       |      | City | Post |Bakery|
    Palisade      |Merch |Guild | Room Library|      |Councl|Office|      |
    #__  __       |______|______|______|______|      |__  __|__  __|__  __|
    |      |                    |      |      |                           |
    |Guard |                    | The  |Travel|                           |
    |House |                    | Pool | Shop             MARKET          |
    |______|__  _________       |_    _|______|           SQUARE          |
           |      |      |      |Therm.|      |                  _        |
           |Poor  |Olly's    K  | Bath |Grocer|                 |_|       |
           |House |Tavern|   I  |Entran|                       Well       |
           |______|______|   N  |__  __|______|       _    ________       |
                  |      |   G                       |      |      |      |
                  |Ranger    '   SHORT STREET        | Inn   Dining|      |
                  |Guild |   S                       |        Area |      |
                  |______|       _____________       |______|______|      |
                  |      |   R  |      |      |      |      |      |      |
                  |Fights|   O  |Market| Shop        |Armour|Weapon|      |
                  |      |   A  |      |      |      |      |      |      |
            ______|_    _|   D  |__  __|______|      |__  __|__  __|      |
           |             |             |      |                           |
           | Pond   Park         Animal Stable|    CRAFTSMAN'S ALLEY      |
           |                     Court |      |                           |
           |     _|_    _|       __  __|______|___________________________|
           |      |      |      |      |      |      |      |      |
           | Park   Park        |Exer. | Entr.   Corridor    Comm. |
           |                    | Yard   Hall               |Office|
           |______________#Gate#|______|______|______|______|______|

                            ||
                           _||_
                           \  /  Road to Bree.
                            \/


     --  The map was made by Ticar of Norbury, Sorcerer of Arthedain  --
</pre>

From the map, we can see that we need to go a few rooms west and one south
in order to get to the Warrior guild.

<pre class="session" v-pre>
*&gt;w
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
A little dog is here.
A woman is here, looking for someone to chat with.
A little boy is here, running around.
Exits: East [South] West.

*&gt;w
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
An old man is walking around, cleaning up.
Exits: East West.

*&gt;w
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
Exits: East South West.

*&gt;s
<span class="look">The Guild of Warriors</span>
A weapons rack stands against the wall.
Huor of Dor-lómin is standing here, ready to teach his arts.
Exits: North [West] Up.
</pre>

Ah, we've found the guild.  Huor is the Fornost warrior guildmaster.  To see
what he can teach, type <span class="command">practice</span> in this room.

<pre class="session" v-pre>
*&gt;practice
You have 13 practice sessions left.
Huor can teach you any of these skills:
                   Sessions Knowledge Difficulty  Advice
bash                  0/43      0%    Hard        I can't teach you enough
cleaving weapons      0/29      0%    Normal      You could learn easily
concussion weapons    0/29      0%    Normal      You could learn easily
endurance             0/58      0%    Very hard   I can't teach you enough
kick                  0/29      0%    Normal      You could learn easily
parry                 0/29      0%    Normal      You could learn easily
rescue                0/21      0%    Easy        You could learn easily
slashing weapons      0/29      0%    Normal      You could learn easily
stabbing weapons      0/29      0%    Normal      You could learn easily
</pre>

Fuor uses a backsword, a slashing weapon, so let's practice some slashing.
Note that as your character becomes more developed, you will figure out the
pros and cons that are associated with each weapon skill.
The command <span class="command">practice</span> can be abbreviated as <span class="command">prac</span>.

<pre class="session" v-pre>
*&gt;eq
You are using:
&lt;wielded&gt;            a backsword (brand new)
&lt;worn as shield&gt;     a small wooden shield (brand new)
&lt;worn on body&gt;       a thick, soft leather jerkin (brand new)
&lt;worn on legs&gt;       a pair of trousers (brand new)
&lt;worn on feet&gt;       a thin pair of rigid leather boots (brand new)
&lt;worn on back&gt;       a shortbow
&lt;worn across back&gt;   a quiver
&lt;worn as belt&gt;       a plain leather belt
&lt;worn on belt&gt;       a lantern; it is lit
&lt;worn on belt&gt;       a hunting knife (brand new)

*&gt;practice slashing
You took 1 out of 29 sessions in this skill. Your knowledge is now 30%.

* HP:Fine&gt;prac slashing
You took 2 out of 29 sessions in this skill. Your knowledge is now 41%.

* HP:Fine&gt;prac slashing
You took 3 out of 29 sessions in this skill. Your knowledge is now 49%.

* HP:Fine&gt;prac slashing
You took 4 out of 29 sessions in this skill. Your knowledge is now 56%.

* HP:Fine&gt;prac slashing
You need to be more experienced before practicing this skill further.

* HP:Fine&gt;prac
You have 9 practice sessions left.
Huor can teach you any of these skills:
                   Sessions Knowledge Difficulty  Advice
bash                  0/43      0%    Hard        Takes a long time to learn
cleaving weapons      0/29      0%    Normal      You could learn easily
concussion weapons    0/29      0%    Normal      You could learn easily
endurance             0/58      0%    Very hard   I can't teach you enough
kick                  0/29      0%    Normal      You could learn easily
parry                 0/29      0%    Normal      You could learn easily
rescue                0/21      0%    Easy        You could learn easily
slashing weapons      4/29     56%    Normal      You reached your current limit
stabbing weapons      0/29      0%    Normal      You could learn easily
</pre>

As your character gains levels, you will be able to practice more slashing.
Since we have 9 practice sessions left, let's practice some other skills.
Endurance, parry and bash are important skills for a warrior, so let's get some
of each.

<pre class="session" v-pre>
* HP:Fine&gt;prac endurance
You took 1 out of 58 sessions in this skill. Your knowledge is now 17%.

* HP:Fine&gt;prac endurance
You took 2 out of 58 sessions in this skill. Your knowledge is now 24%.

* HP:Fine&gt;prac endurance
You need to be more experienced before practicing this skill further.

* HP:Fine&gt;prac endurance
You need to be more experienced before practicing this skill further.

* HP:Fine&gt;prac parry
You took 1 out of 29 sessions in this skill. Your knowledge is now 28%.

*&gt;prac parry
You took 2 out of 29 sessions in this skill. Your knowledge is now 39%.

*&gt;prac parry
You took 3 out of 29 sessions in this skill. Your knowledge is now 46%.

*&gt;prac parry
You took 4 out of 29 sessions in this skill. Your knowledge is now 52%.

*&gt;prac parry
You need to be more experienced before practicing this skill further.

*&gt;prac bash
You took 1 out of 43 sessions in this skill. Your knowledge is now 24%.

*&gt;prac bash
You took 2 out of 43 sessions in this skill. Your knowledge is now 33%.

*&gt;prac bash
You need to be more experienced before practicing this skill further.

*&gt;prac
You have 1 practice sessions left.
Huor can teach you any of these skills:
                   Sessions Knowledge Difficulty  Advice
bash                  2/43     33%    Hard        You reached your current limit
cleaving weapons      0/29      0%    Normal      You could learn easily
concussion weapons    0/29      0%    Normal      You could learn easily
endurance             2/58     24%    Very hard   You reached your current limit
kick                  0/29      0%    Normal      You could learn easily
parry                 4/29     52%    Normal      You reached your current limit
rescue                0/21      0%    Easy        You could learn easily
slashing weapons      4/29     56%    Normal      You reached your current limit
stabbing weapons      0/29      0%    Normal      You could learn easily

*&gt;thank huor
You thank Huor heartily.

*&gt;bow huor
You bow before him.
</pre>

We have one practice session left, but don't really want any of the other
skills here.  Don't waste this one session on something you don't need; rather,
keep it until your character gains a level, when you will be able to practice
the above skills to a greater degree, or perhaps practice new skills that your
character cannot use yet.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="outside"></a><span class="header">Adventuring outside the city</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

Now that we've practiced some skills, let's go to the gate and head
outside.

<pre class="session" v-pre>
*&gt;n
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
Exits: East South West.

*&gt;e
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
A rugged-looking man is standing here.
Exits: East West.

*&gt;e
<span class="look">Guild Street</span>
There is an old street-lamp on the border of the street.
A woman is here, looking for someone to chat with.
A cute little girl is here.
A woman is here, looking for someone to chat with.
A little boy is here, running around.
Exits: East [South] West.

*&gt;e
<span class="look">Arnor Square</span>
There is an old street-lamp on the border of the street.
A well-crafted white fountain is here, water pouring forth from it.
Exits: [North] East South West.

*&gt;s
<span class="look">Narrow Alley</span>
There is an old street-lamp on the border of the street.
Exits: North South.

*&gt;s
<span class="look">Western End of Market Square</span>
There is an old street-lamp on the border of the street.
A man passes by, intent on his business.
A woman is here, looking for someone to chat with.
Exits: North East South West.

*&gt;s
<span class="look">Western End of Market Square</span>
There is an old street-lamp on the border of the street.
An insolent scholar is here, pondering.
Exits: North East South West.

*&gt;s
<span class="look">Craftsmen's Alley</span>
There is an old street-lamp on the border of the street.
Exits: North South West.

*&gt;w
<span class="look">Short Street</span>
There is an old street-lamp on the border of the street.
A rugged-looking man is standing here.
A wealthy merchant is slowly strolling around here.
A Dúnadan soldier is here busily performing his duties.
Exits: East West.

*&gt;w
<span class="look">Short Street</span>
There is an old street-lamp on the border of the street.
Exits: North East West.

*&gt;w
<span class="look">Junction on the King's Road</span>
There is an old street-lamp on the border of the street.
An old man is walking around, cleaning up.
Exits: North East South West.

*&gt;s
<span class="look">The King's Road</span>
There is an old street-lamp on the border of the street.
A Dúnadan soldier is here busily performing his duties.
A Dúnadan soldier is here busily performing his duties.
Exits: North South West.

*&gt;s
<span class="look">The King's Road</span>
There is an old street-lamp on the border of the street.
A Dúnadan soldier is here busily performing his duties.
A rugged-looking man is standing here.
A little boy is here, running around.
Exits: North East South West.

*&gt;s
<span class="look">By the Gate</span>
There is an old street-lamp on the border of the street.
A hardened ranger is walking around, looking for tracks.
A hardened ranger is walking around, looking for tracks.
A Dúnadan soldier is here busily performing his duties.
Exits: North South West.

*&gt;s
<span class="look">Under the Wall, Between the Gates</span>
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
Exits: North South.

*&gt;bow
You bow deeply.

*&gt;s
<span class="look">Before the Gates of Fornost</span>
A colourful butterfly is fluttering around here.
Exits: North East =South= West.
</pre>

We're now outside the city.  There can be dangerous creatures lurking
outside, so one needs to be careful.  Most of the creatures around Fornost,
Bree, the Grey Havens and the Blue Mountains are not incredibly difficult, but
as a new character, it is still best to be on your guard.

<pre class="session" v-pre>
*&gt;
A butterfly leaves east.

*&gt;e
<span class="look">Outside the Walls of Fornost</span>
A colourful butterfly is fluttering around here.
Exits: East South West.

*&gt;l butterfly
It is, on closer inspection, not really an animal, but a variable
number of brightly-coloured, translucent planes of breathtaking beauty
and delicacy. The planes pulse, waver, sometimes disappear, but are
always replaced by another. None of the planes move, but through
continuous replacement, the butterfly does, in random sweeps.
A butterfly is in an excellent condition.

*&gt;hit butterfly
<span class="hit">You slash a butterfly's leg extremely hard and shatter it.</span>
You receive your share of experience.
Congratulations! This is the first time you've killed it!
A butterfly is dead! R.I.P.

*&gt;trophy
		*** TROPHY *** (Number Killed, Knowledge, Mobile)

|   1,  1%,  A butterfly               |                                      |
</pre>

The butterfly is a passive creature (instead of an aggressive one).  It
won't hit you until you try to hit it.  Fortunately, it's also very weak, so
it never had the chance to hit you before you killed it.

By using the <span class="command">trophy</span> command,
you can see what you've killed during your
travels.  The first number lists the number of times you've killed that mobile,
and the second is a percentage of "knowledge", which affects the amount of
experience you will gain by killing the same thing again.

<pre class="session" v-pre>
*&gt;e
<span class="look">Outside the Walls of Fornost</span>
Exits: North East South West.

*&gt;n
<span class="look">Small Grove of Trees</span>
A white wolf is here.
Exits: North East South.

*&gt;s
<span class="look">Outside the Walls of Fornost</span>
The garden snake slithers harmlessly here.
Exits: North East South West.

*&gt;w
<span class="look">Outside the Walls of Fornost</span>
The corpse of a butterfly is lying here.
Exits: East South West.

*&gt;stat
OB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.
Needed: 831 xp, 0 tp. Gold: 0. Alert: normal.
Affected by:
- noquit
</pre>

By typing <span class="command">stat</span>, not only can
you see your vital bonuses, but you can see
how much experience, and how many travel points, you need to get to the next
level.  In this case, you don't need any travel points, and you need 831 more
experience points.

Your bonuses are:  OB (Offensive Bonus), DB (Dodge Bonus) and PB (Parry
Bonus).  These are directly affected by a few things; namely, your level, the
equipment you're wearing, and the skills that you've practiced.  If you
practice the "dodge" and "parry" skills, your DB and PB will go up,
respectively.  If you practice a weapon skill (such as slashing), your OB will
increase when you wield a weapon of the appropriate type.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="mood"></a><span class="header">Battle tactics</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

There is also a setting known as "mood".  This controls how offensive or
defensive you will be during a battle.  You can change your mood by using the
<span class="command">change mood</span> command (abbreviated
<span class="command">cha m</span>).

<pre class="session" v-pre>
*&gt;change mood aggressive
Ok.

*&gt;stat
OB: 26%, DB: 26%, PB: 16%, Armour: 17%. Wimpy: 0. Mood: aggressive.
Needed: 831 xp, 0 tp. Gold: 0. Alert: normal.
Affected by:
- noquit

*&gt;change mood wimpy
Ok.

*&gt;change mood
   _
  | |   berserk
  | |   aggressive
  | |   brave
  | |   normal
  | |   prudent
  |~|&lt;- wimpy
  / \
  \_/
</pre>

Notice that the OB and PB numbers are affected by what mood you are in.  If
you are in an aggressive mood, you will be more offensive (higher OB), but
less defensive (lower PB).  DB is not affected by moods.  By typing
<span class="command">change mood</span> with no arguments, you'll get a list
of the moods, showing which mood you are set to.

Some enemies can be too difficult to face, depending on your level and what
kind of equipment you have.  It's best to <span class="command">flee</span> when
faced with an opponent that outmatches you.

<pre class="session" v-pre>
*&gt;e
<span class="look">Outside the Walls of Fornost</span>
The corpse of a garden snake is lying here.
A fierce boar is here, grunting at you.
Exits: North East South West.

*&gt;
<span class="damage">A boar strongly hits your left arm and shatters it.
That really HURT!</span>

* HP:Hurt a boar:Healthy&gt;flee
You flee head over heels.
<span class="look">Light Forest</span>
Exits: North East South West.

* HP:Hurt&gt;w
<span class="look">Small Path</span>
Exits: North East West.

* HP:Hurt&gt;w
<span class="look">Road to Fornost</span>
Exits: =North= East =South= West.

* HP:Hurt&gt;s
<span class="look">Bend in the Road</span>
Exits: =North= South =West=.

* HP:Hurt&gt;inf
You are a male Eriadorian.
You are 18 years old. It's your birthday today!
You have played no time (real time).
This ranks you as Fuor the Man Apprentice (level 1).
You are five feet seven and weigh eleven stone and five pounds.
Perception: vision 40, hearing 4, smell -15. Alertness: normal.
You are a well-meaning person, always glad to help your friends.
You are welcome in Fornost.
You are carrying forty-three pounds of equipment. A tad uncomfortable, but no
problem.
Your base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 15%, Dodging Bonus: 26%, Parrying Bonus: 23%.
Your armour provides an average protection of 17%.
You have 19/27 hit, 74/74 mana, and 104/114 movement points.
Your mood is wimpy. You will fight to the death.
You have scored 169 experience points and you have 0 travel points.
You are not known for any acts of war.
You need 831 exp. points and 0 travel points to reach the next level.
You have 5 silver pennies and 46 copper pennies.
You are speaking Westron.

You are subjected to the following temporary effects:
- panic
- noquit
</pre>

The boar did just under 10 damage to you.  Normally, this isn't a lot for a
seasoned adventurer; but Fuor only has 27 hit points, so this is a considerable
amount of damage for him to take in one hit.

When you're badly hurt by an opponent, it's often a good idea to put a bit
of distance between the two of you.  This lessens the chance of the opponent
walking into the room when you're recovering.

However, the message "That really HURT!" can be misleading.  Take the next
fight, for example:

<pre class="session" v-pre>
* HP:Fine&gt;s
<span class="look">Shaded Path</span>
The corpse of a fallow deer is lying here.
The corpse of a brown fox is lying here.
A boar cub is playing here, and exploring the wide world.
Exits: North East South West.

* HP:Fine&gt;
<span class="narrate">Gianon narrates 'anyone seen my sapphire ring lately?'</span>

* HP:Fine&gt;hit cub
<span class="hit">You slash a boar cub's body hard and shatter it.</span>

* HP:Fine a boar cub:Fine&gt;
<span class="narrate">Endrasil narrates 'crossing'</span>

* HP:Fine a boar cub:Fine&gt;
<span class="hit">You strongly slash a boar cub's left foreleg and shatter it.</span>

* HP:Fine a boar cub:Hurt&gt;
<span class="damage">A boar cub hits your left leg and shatters it.
That really HURT!</span>

* HP:Hurt a boar cub:Hurt&gt;
Gianon narrates 'ew'

* HP:Hurt a boar cub:Hurt&gt;
<span class="hit">You strongly slash a boar cub's right hindleg and shatter it.</span>

* HP:Hurt a boar cub:Bad&gt;
A sparrow has arrived from the south.

* HP:Hurt a boar cub:Bad&gt;
<span class="damage">A boar cub lightly hits your left arm and shatters it.</span>

* HP:Wounded a boar cub:Bad&gt;
A sparrow leaves east.

* HP:Wounded a boar cub:Bad&gt;stat
OB: 15%, DB: 26%, PB: 23%, Armour: 17%. Wimpy: 0. Mood: wimpy.
Needed: 765 xp, 0 tp. Gold: 0. Alert: normal.
Affected by:
- panic
- noquit

* HP:Wounded a boar cub:Bad&gt;
Theowen has arrived from the north.

* HP:Wounded a boar cub:Bad&gt;
Theowen leaves east.

* HP:Wounded a boar cub:Bad&gt;score
You can't do that while fighting.

* HP:Wounded a boar cub:Bad&gt;
A tall stag has arrived from the south.

* HP:Wounded a boar cub:Bad&gt;
<span class="hit">You strongly slash a boar cub's left hindleg and shatter it.</span>
A boar cub is incapacitated and will slowly die, if not aided.

* HP:Wounded a boar cub:Dying&gt;
<span class="hit">You slash a boar cub's body extremely hard and shatter it.</span>
You receive your share of experience.
Congratulations! This is the first time you've killed it!
Your blood freezes as you hear a boar cub's death cry.
A boar cub is dead! R.I.P.

* HP:Wounded&gt;inf
You are a male Eriadorian.
You are 18 years old. It's your birthday today!
You have played no time (real time).
This ranks you as Fuor the Man Apprentice (level 1).
You are five feet seven and weigh eleven stone and five pounds.
Perception: vision 10, hearing 1, smell -20. Alertness: normal.
You are a well-meaning person, always glad to help your friends.
You are welcome in Fornost.
You are carrying forty-three pounds of equipment. A tad uncomfortable, but no
problem.
Your base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 15%, Dodging Bonus: 26%, Parrying Bonus: 23%.
Your armour provides an average protection of 17%.
You have 12/27 hit, 74/74 mana, and 114/114 movement points.
Your mood is wimpy. You will fight to the death.
You have scored 621 experience points and you have 0 travel points.
You are not known for any acts of war.
You need 379 exp. points and 0 travel points to reach the next level.
You have 5 silver pennies and 46 copper pennies.
You are speaking Westron.

You are subjected to the following temporary effects:
- panic
- noquit
</pre>

The boar cub did a fair amount of damage to you, but you were able to kill
it.  Usually, when the opponent's hit points are falling faster than yours,
that is a good indication that you have a chance to win the fight.

Something to note:  When you type
<span class="command">score</span> or <span class="command">info</span> during a
battle, you cannot see the exact number of hit points, mana or move points
that you have. You must be out of battle to see the numbers.

<pre class="session" v-pre>
* HP:Wounded&gt;
You feel bolder.

* HP:Wounded&gt;
A tall stag leaves north.

* HP:Wounded&gt;
You suddenly notice a ruffian.
<span class="damage">A ruffian cleaves your left arm and shatters it.
That really HURT!</span>
<span class="hit">You slash a ruffian's right foot very hard.</span>

* HP:Bad a ruffian:Fine&gt;f
You flee head over heels.
<span class="look">Bend in the Road</span>
Exits: =North= South =West=.
</pre>

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="map"></a><span class="header">Maps and scouting</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

Ouch! That ruffian surprised Fuor, causing him to flee.
Since fleeing is attempted in a random direction, Fuor should ensure that
he knows where he is and where the ruffian is...

<pre class="session" v-pre>
* HP:Bad&gt;<span class="command">map</span>
           Map of Nearby Zones
      -----------------------------
     |              X              |
     |              *              |
     |              :              |
     |              :             W|
     |*         ~~ :*%%:         **|
     |~~      :::=**B::: ~:::::=:~**|
     | ~~~~~::*:::*~:              |
     |              :              |
     |             ::              |
     |             *               |
     |             *               |
     |             :               |
     |             ::             ~|
     |              *~:          *^|
     |                ::%::    ~~~ |
      -----------------------------

* HP:Bad&gt;map room
+-----+
|#   #|
|* +.*|
|.+X**|
|.+***|
|#+**#|
+-----+

* HP:Bad&gt;scout south
You quietly scout southwards...

<span class="look">Shaded Path</span>
A ruffian is here.

You stop scouting.

* HP:Bad&gt;
The coach from Tharbad rolls noisily northwards.
</pre>

In the above maps, Fuor's location is displayed as an 'X'
(Note: how the first map corresponds to the whole of Middle-Earth is displayed
<a href="../about/">here</a>). As he is in bad shape, Fuor moves away from the
ruffian and wisely heads back to the city of Fornost.

<pre class="session" v-pre>
* HP:Bad&gt;n
<span class="look">Road to Fornost</span>
A tall stag is here, grazing peacefully.
Exits: =North= East =South= West.

* HP:Bad&gt;n
<span class="look">Before the Gates of Fornost</span>
A hardened ranger is walking around, looking for tracks.
A hardened ranger is walking around, looking for tracks.
A colourful butterfly is fluttering around here.
Exits: North East =South= West.

* HP:Bad&gt;n
<span class="look">Under the Wall, Between the Gates</span>
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
Exits: North South.

* HP:Bad&gt;n
<span class="look">By the Gate</span>
There is an old street-lamp on the border of the street.
A hardened ranger is walking around, looking for tracks.
A hardened ranger is walking around, looking for tracks.
A little boy is here, running around.
Exits: North South West.
</pre>

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="resting"></a><span class="header">Regaining health and mobility</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>


Cities are almost always completely safe, and very good places to heal up (by
<span class="command">rest</span>ing or <span class="command">sleep</span>ing)
after a battle. Even if there isn't a city close to where you're fighting, it's
always a good idea to know where you are, and where the nearest safe place
is.

<pre class="session" v-pre>
* HP:Bad&gt;rest
You sit down and rest your tired bones.

* HP:Bad&gt;sc
7/27 hit, 74/74 mana, and 114/114 moves.

* HP:Wounded&gt;
The Irongate closes quietly.
You hear a *click* in a lock.
You begin to feel thirsty.

* HP:Hurt&gt;
You feel bolder.
You are thirsty.

* HP:Hurt&gt;sc
16/27 hit, 74/74 mana, and 114/114 moves.

* HP:Hurt&gt;sleep
You go to sleep.

* HP:Hurt&gt;score
18/27 hit, 74/74 mana, and 114/114 moves.

* HP:Hurt&gt;
You are thirsty.
</pre>

When you're hungry or thirsty, you don't regain your hit points, mana or
move points as quickly.  So, it's good to make sure that you've eaten and drank
at all times, or that you have food and drink on you.

<pre class="session" v-pre>
* HP:Hurt&gt;wake
You wake, and sit up.

* HP:Hurt&gt;inv
You are carrying:
a map of Fornost
a large sack

* HP:Hurt&gt;l i sack
sack (carried) :
a cup
a fortune-cookie
two large biscuits
two loaves of bread
a map of Bree
a piece of raw meat
a torch

* HP:Hurt&gt;get cup sack
You get a cup from a large sack.

* HP:Hurt&gt;drink cup
You drink the water.
A cup is now empty.

* HP:Hurt&gt;sleep
You go to sleep.
</pre>

Some time passes...

<pre class="session" v-pre>
* HP:Fine&gt;score
27/27 hit, 74/74 mana, and 114/114 moves.

*&gt;wake
You wake, and sit up.

*&gt;st
You stand up.

*&gt;
Ozzy begins some strange incantations...

*&gt;l
<span class="look">By the Gate</span>
There is an old street-lamp on the border of the street.
A hardened ranger is walking around, looking for tracks.
A hardened ranger is walking around, looking for tracks.
A Dúnadan soldier is here busily performing his duties.
Ari the Hobbit is standing here.
Ashura the Half-Elf is standing here.
Ozzy the Rohirrim is standing here trying to concentrate.
A Dúnadan soldier is here busily performing his duties.
A singing, happy drunk is staggering about here.

*&gt;
Ozzy utters the words 'judicandus gzfuajg'

*&gt;
Ari calls for the gate to be opened.

*&gt;
You hear a *click* in a lock.
The Irongate is opened from the other side.

*&gt;
Ari leaves south.
Ashura leaves south.
Ozzy leaves south.
The Irongate closes quietly.
You hear a *click* in a lock.
</pre>

In some cities, the gates are left open during the day.
Until now, we haven't had to ask for the gates to be opened.  You do this one
of two ways; if you are in the room with the gateguards, you
<span class="command">say open</span>.  If you are in the
room behind the gate, you type <span class="command">call</span>.

In Fornost's case, the city is protected at the southern
entrance by two gates.  This means that when you
<span class="command">say open</span>, the  gateguards will open both gates.
If you want a gateguard to open a specific  gate, you can say
<span class="command">open &lt;gatename&gt;</span>.
For example, in the text below, <span class="command">say open portcullis</span>
would have worked as well.

<pre class="session" v-pre>
*&gt;call
You call for the gate to be opened.

*&gt;
You have the uneasy impression that a pair of unseen eyes are scrutinizing you
from the closed gate.
You hear a *click* in a lock.
The Irongate is opened from the other side.

*&gt;s
<span class="look">Under the Wall, Between the Gates</span>
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
An experienced Dúnadan officer is standing here, keeping things under control.
A Dúnadan gateguard is standing here.
Ari the Hobbit is standing here.
Ashura the Half-Elf is standing here.
Ozzy the Rohirrim is standing here.
Exits: North [South].
An experienced Dúnadan officer closes the Irongate.
An experienced Dúnadan officer locks the Irongate.

*&gt;say open
Ok.

*&gt;
An experienced Dúnadan officer looks you over.
An experienced Dúnadan officer opens the Portcullis.
An experienced Dúnadan officer looks you over.
An experienced Dúnadan officer unlocks the Irongate.
An experienced Dúnadan officer opens the Irongate.

*&gt;s
<span class="look">Before the Gates of Fornost</span>
A colourful butterfly is fluttering around here.
Exits: North East =South= West.
The Portcullis closes quietly.

*&gt;w
<span class="look">Outside the Walls of Fornost</span>
Exits: East South.

*&gt;s
<span class="look">In a Field</span>
Exits: North East South.

*&gt;s
<span class="look">Bend in the Road</span>
Exits: North =East= =South= West.

*&gt;w
<span class="look">A Peaceful Field</span>
A fat rabbit sits here, chewing on some grass.
Exits: North East South.

*&gt;hit rabbit

A fat rabbit panics, and attempts to flee.
A fat rabbit leaves south.
</pre>

Some mobiles will flee immediately when you try to hit them.  These are
usually low-level creatures; chasing them is usually not worth it.

If you want to figure out your chances against a certain
creature, try using the <span class="command">consider</span> command
(abbreviation is <span class="command">con</span>).  This command suggests
how easy or hard an opponent might be to you.

<pre class="session" v-pre>
*&gt;n
<span class="look">Edge of the Forest</span>
A woodpecker is here, tapping on a tree.
Exits: South West.

*&gt;w
<span class="look">Green Forest</span>
Exits: North East South West.

*&gt;s
<span class="look">Dense Grove</span>
A small animal, all covered in spines, snuffles amongst the undergrowth.
Exits: North South West.

*&gt;consider animal
You would need some luck!

*&gt;hit animal
Your attempt to slash a small fat hedgehog fails.

* a small fat hedgehog:Healthy&gt;
<span class="hit">You strongly slash a small fat hedgehog's right hindleg and shatter it.</span>

* a small fat hedgehog:Fine&gt;
<span class="hit">You slash a small fat hedgehog's right hindleg hard and shatter it.</span>
<span class="damage">A small fat hedgehog barely hits your head.</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="narrate">Gianon narrates 'oh boy!'</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="narrate">Aramoor narrates 'left gulf at one point  I'll try to pick up track again'</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
A boar cub has arrived from the north.

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="narrate">Panser narrates 'why do some directions have = like =East= ?'</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="narrate">Tiergon narrates 'Wielding a fang'</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="narrate">Tholbar narrates 'road'</span>

* HP:Fine a small fat hedgehog:Hurt&gt;
<span class="hit">You slash a small fat hedgehog's left foreleg extremely hard and shatter it.</span>
Your victim is shocked by your hit!
A small fat hedgehog is incapacitated and will slowly die, if not aided.

* HP:Fine a small fat hedgehog:Dying&gt;
You gain a level!
<span class="hit">You slash a small fat hedgehog's body extremely hard and shatter it.</span>
You receive your share of experience.
Congratulations! This is the first time you've killed it!
A small fat hedgehog is dead! R.I.P.
</pre>

Obviously, the consider command is not always perfect.  Fuor had little
trouble with that hedgehog, even though it said he might need some luck.
Remember to be ready to flee if necessary, if things start to get out of
hand.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="level"></a><span class="header">Gaining levels</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

During the last battle, Fuor gained his first level.  He is now a level
2 character.  With this level, he gained some more practice points, as well
as more hit points.  It is by gaining levels that your character will advance
in the game and become more powerful.

<pre class="session" v-pre>
* HP:Fine&gt;info
You are a male Eriadorian.
You are 18 years and 1 day old.
You have played no time (real time).
This ranks you as Fuor the Man Apprentice (level 2).
You are five feet seven and weigh eleven stone and five pounds.
Perception: vision 10, hearing 1, smell -20. Alertness: normal.
You are a well-meaning person, always glad to help your friends.
You are welcome in Fornost.
You are carrying forty-two pounds of equipment. A tad uncomfortable, but no
problem.
Your base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 19%, Dodging Bonus: 26%, Parrying Bonus: 25%.
Your armour provides an average protection of 17%.
You have 30/38 hit, 74/74 mana, and 114/114 movement points.
Your mood is wimpy. You will fight to the death.
You have scored 1,229 experience points and you have 0 travel points.
You are not known for any acts of war.
You need 1,771 exp. points and 5 travel points to reach the next level.
You have 5 silver pennies and 46 copper pennies.
You are speaking Westron.

You are subjected to the following temporary effects:
- noquit
</pre>

At this point, Fuor walks around for a while...

<pre class="session" v-pre>
* HP:Fine Move:Slow&gt;inf
You are a male Eriadorian.
You are 18 years and 1 day old.
You have played no time (real time).
This ranks you as Fuor the Man Apprentice (level 2).
You are five feet seven and weigh eleven stone and five pounds.
Perception: vision 30, hearing 1, smell -20. Alertness: normal.
You are a well-meaning person, always glad to help your friends.
You are welcome in Fornost.
You are carrying forty-two pounds of equipment. A tad uncomfortable, but no
problem.
Your base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 18%, Dodging Bonus: 26%, Parrying Bonus: 24%.
Your armour provides an average protection of 17%.
You have 33/38 hit, 74/74 mana, and 16/114 movement points.
Your mood is wimpy. You will fight to the death.
You have scored 1,229 experience points and you have 69 travel points.
You are not known for any acts of war.
You need 1,771 exp. points and 0 travel points to reach the next level.
You have 5 silver pennies and 46 copper pennies.
You are speaking Westron.
You are hungry.

You are subjected to the following temporary effects:
- panic
- noquit
</pre>

Note that Fuor's move points are low, as he has been walking around a lot.
As your move points get lower, the danger of not being able to get away from
a bad situation becomes greater.  If your move points fall to 0, you will see
"Exhausted" in the prompt, and will not be able to move until you have
regained some move points.  Because Fuor is hungry in the above information,
it will take him a while to regain move points if he doesn't eat.

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="renting"></a><span class="header">Renting at an inn</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

After a long day of adventure, Fuor returns to Fornost and the Crown of
Arnor Inn, to leave the game for now.  In order to keep your possessions, you
have to either rent at an inn, or quit the game by "dropping link".  DO NOT
type <span class="command">quit</span>!  If you do, all of your items will fall
to the ground, and others will be able to take them.

Renting at an inn for a period of time will help your
character heal, as well as remove spells and other effects (both beneficial
and harmful).

When you are at an inn, there are two commands that can
be of help.  The first is the <span class="command">offer</span> command.
It will tell you how much the innkeeper is going
to charge you for rent, and approximately how long you'll be able to rent
there.  This is important!  If you stay in rent longer than this time, your
equipment will be confiscated to cover your rent costs (because you didn't have
enough money).  The second is the <span class="command">rent</span> command;
this will actually close your session to the game.

<pre class="session" v-pre>
*&gt;s
<span class="look">The Crown of Arnor Inn</span>
An old innkeeper stands here, talking to some guests.
A Dúnadan soldier is here busily performing his duties.
Exits: North East.

*&gt;offer
<span class="tell">The innkeeper tells you 'It will cost you 62 copper pennies per day.'</span>
You have enough money for 2 months.

*&gt;rent
<span class="tell">The innkeeper tells you 'It will cost you 62 copper pennies per day.'</span>
You have enough money for 2 months.
The innkeeper stores your stuff in the safe, and helps you into your chamber.
</pre>

<table CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BORDER="0"><tr><td><a id="interacting"></a><span class="header">Interacting with players</span></td>
<td VALIGN="BOTTOM" ALIGN="RIGHT">[<a href="#contents">contents</a>]</td></tr></table>

Coming back to the game, Fuor meets a friendly player and chats with him.

<pre class="session" v-pre>
*&gt;<span class="command">l</span>
<span class="look">The Crown of Arnor Inn</span>
An old innkeeper stands here, talking to some guests.
Ermin the Elf is standing here.
An old man is walking around, cleaning up.

*&gt;<span class="command">say hello</span>
Ok.

*&gt;
<span class="say">Ermin says 'Hello!'</span>

*&gt;<span class="command">bow ermin</span>
You bow before him.

* HP:Fine&gt;
Ermin smiles happily.

*&gt;<span class="command">tell ermin do you wish to adventure?</span>
Ok.

<span class="tell">Ermin tells you 'sure'</span>

*&gt;
<span class="tell">Ermin tells you 'follow me?'</span>

*&gt;<span class="command">follow ermin</span>
You now follow Ermin.

*&gt;
You are now a member of Ermin's group.

*&gt;<span class="command">group</span>
Your group consists of:
     Ermin (Head of group)
     Fuor

*&gt;
Ermin leaves north.
<span class="look">Market Square</span>
There is an old street-lamp on the border of the street.
A wealthy merchant is slowly strolling around here.
A simple servant quietly walks around, performing his duties.
A rugged-looking man is standing here.
A woman is here, looking for someone to chat with.
</pre>

And the adventure continues...

<div class="separator"></div>

<a href="./newcomers">Back to Newcomers Guide</a>


Session example made by Alkar and Manw&euml;. Last updated on January 2022.