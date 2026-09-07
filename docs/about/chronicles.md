---
title: MUME Chronicles
description: Detailed summaries of changes in MUME VII, MUME VIII, and MUME IX.
---

# MUME Chronicles

## MUME IX

During the many years since MUME VIII, a great number of additions were made to MUME.

### Areas
With the launch of MUME IX, two new areas were opened. The first of these was the rebuild of the Bree-land, from Bree-hill to Fornost, including the town of Bree itself. The other new area was rebuild of the southern half of the Ancient Broken Road, which added not only the road itself, but dangerous goblin hideouts, monstrous snow giants, and hidden treasures deep beneath the Misty Mountains.

The game world has increased in size by 40% during the last twenty years from roughly 20k rooms in 2002 to 28k rooms in 2022. Simply put, a staggering number of areas have been opened for exploration since MUME VIII:
- South Downs where a shaman named Brolg has raised his banner
- Forest of Fangorn where even the trees speak
- Borderlands along the Anduin where the One Ring was lost
- Vision of the Witch-king within Galadriel’s mirror
- Spider- and Orc-infested mountains of Mirkwood
- Deep warrens under the Ettenmoors where trolls live
- Plains of Dunland, to find a roaming Dunlending chieftain
- Tower of Elostirion within the Tower Hills
- Tomb of the Chieftain of Belegost near the Grey Havens
- Growing shadow in Southern Mirkwood before Dol Guldur

### Subraces
The Dwarves were given the choice to join one of the Dwarven Houses: the Longbeards, Firebeards, or Broadbeams. The Firebeards and Broadbeams built the two Dwarven cities in the Blue Mountains, Nogrod and Belegost. Durin’s Folk, also known as the Longbeards, built Khazad-dûm, later known as Moria.

On the other side of the war, the Uruk-Tarkhnarb were joined by fierce Uruk-Morruhk tribe and brought their own set of features to Sauron’s minions.
Additionally, a number of new features were added to existing subraces to make the characters more powerful:
- **Men**: Beornings, Rohirrim, Eriadorians, Black Númenóreans, Dúnedain
- **Hobbits**: Stoors, Fallohides, Harfoots
- **Elves**: Sindar, Silvan
- **Trolls**: Hill Trolls, Mountain Trolls, Cave Trolls
- **Orcs**: Tarkhnarb

Subraces have also been made more differentiated across the races in a more superficial manner. Characters have been rescaled to match lore with many becoming much taller.

### Skills and Spells
A new healing spell was added to Orc Shamans, Energy Drain. A very mana-efficient healing spell which requires the death of an unfortunate victim to drain healing energy from.

In the year before, Dark Oath was introduced as a unique skill for Black Númenóreans. Other spells and skills added were Smother, Cure Disease and Call Familiar.

### Other Features Introduced Leading up to MUME IX
- Gandalf introduces new players to MUME in a memorable event
- Climb modes were added
- The rent-cost system was overhauled
- Level power was rebalanced
- The training system was extended to include abilities (stats)
- The achievement, quest journal, and hint systems were added
- Keyword aliases were added
- Passwords stored as SHA-256 hashes, replacing MD5
- XML mode, TLS support, UTF-8 character encoding, and GMCP/Charset/MCCP 2/MNES/MSSP protocols added
- Game data files versioned using git

---

## MUME VIII

In addition to recent additions, this version of MUME introduces a new side to the war and two new races.

### Zaugurz Orcs
A fierce tribe of Orcs from the frozen North, the Zaugurz used to be allies of the Uruk-Tarkhnarb. Not long ago, the Tarkhnarb expelled the Zaugurz from Goblin Gate; the Zaugurz retaliated with a surprise attack on the western portion of the Tarkhnarb caves. Now the Zaugurz are back in force, ready to carve their place into the rich Southern lands…

Everyone wants to kill an Uruk-Zaugurz, and a Zaugurz wants to kill everyone. The minions of Sauron can tell the different orc tribes apart, but others cannot. In the same way, the Zaugurz, not knowing the politics of these lands, can’t tell the different kinds of Men apart.

### Beorning Shapeshifters
It is said that denizens of the northern Vale of Anduin have the power of changing their shape from that of a man to that of a huge bear. Whether they descend from great mountain bears, or from the first Men who lived in this part of Arda, nobody knows; however, nobody can deny their valour and their implacable hatred towards Orcs and Wargs.

In order to change to bear form, use the `metamorph` command. Bears return to human form automatically after some time. When they find themselves in the Halls of Mandos, Beornings can choose to be transported to their village of Ingrove, in the Anduin Vale.

---

## MUME VII

### Summary of Changes

What are the most important changes from MUME VI to MUME VII?

- **Chosen Statistics**: Stats are not random anymore: they are chosen while creating the character. Raising a stat from 17 to 18 costs much more than raising it from 8 to 9. Willpower and perception are much more important.
- **Inexperienced Players**: During character generation, inexperienced players answer simple questions to select an "easy to play" set of stats. `who newbie` shows characters who indicated they are not expert.
- **Dynamic Classes**: Characters do not choose a class at level one. Class efficiency is determined by what characters practice.
- **Changing Class**: At any time, players can type `change class` to see titles matching their skills, race, alignment, and history.
- **Skills & Spells**: Efficiency in a skill/spell depends on proficiency in related skills/spells. Hit points and Offensive Bonus improve with warrior skills and worsen when learning spells.
- **Legends**: Progression in levels 1–25 is linear. After level 25 (Legendhood), effective levels slowly increase at a rate of 1 effective level per 10 levels.
- **Alertness**: `change alertness` sets awareness. High alertness improves the chance of automatically detecting sneakers and backstabbers.
- **Subraces**: Introduced to differentiate language knowledge and racial traits.
- **Continuous Regeneration**: Health, concentration, and stamina recover at a steady rate every few seconds instead of fixed minute ticks.
- **Delayed Actions**: Stop automatically as soon as necessary conditions are no longer valid.
