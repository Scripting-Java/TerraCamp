# Terra Camp

A cozy exploration game with procedural resource generation, campsite upgrades, and exploration.

## Overview

TerraCamp is a browser-based game where you develop a campsite, accumulate resources over time, and explore the surrounding wilderness. Exploration unlocks new locations, rare materials, and opportunities to improve your campsite, creating a progression loop between passive production and active adventure.

## In a Nutshell
You start in the center tile (3x3 size compared to other tiles). In the center you have your campfire. In the corners, you have firewood, gas, animal fur and mineral storage. You have to manage your firewood as you lose 1 every 30 seconds/ 2 minute. In the corner edges on the 4x4 grid, you have slots for 4 special gems which you'll discover. These will change the properties and nature around your world. There's a shop menu for upgrades and new things. Settings menu for resetting your game, volume, brightness, etc. Inventory menu to temporarily hold your resources, but you want to put them in the infinite containers at your camp.

## Map:
It's a 101 x 101 cell map(odd number so we have an exact center). Each cell can be one of 3 things:
- It can be a valley cell -> produces wood and animal fur.
- It can be a earth cell -> produces gas(for upgrading campfire)
- It can be a gem cell -> gives you minerals for upgrading your camp.
Procedurally generated once and then persisted.
Cells are acquired with the resources described below. An undiscovered cell will be dark or have clouds over it, impossible to tell which type it'll be. Unless you're at a corner or diagonal where it has to be an obelisk/gem.

Additionally, halfway markers at 25 units and 50 units from the center at each direction will be obelisks with the color gem on them. These are visual decortations that serve as progress indicators nothing more. At the diagonals, however, these obelisks will grant you more resource production in that quadrant.

## Upgrades:
Firewood increases fire size, but it mainly serves as your surivival requirement. Minerals affect your production rates. Animal fur and wood are area unlock requirements. Gas can only be used in the shop to buy more things. There's decor, resources, fire freezes(streak freezes), and tile unlocks.

## Gem:
Green Gem - Nature - Improves earth cell as a bonus perk.
Red Gem - Fire - Improves campfire as a bonus perk
Blue Gem - Water(River/Lake) - Improves earth cell and adds a rain visual animation cycle to your map(30 seconds rain, 5 minutes day, 3 minutes night)
Yellow Gem - Sunlight - Improves Everything with an emphasis placed on gas production as this is the only way to ugprade it. - Increases Sun animation to 8 minutes

## To Win:
Get all 4 gems. Each gem is in a corner of the map. Once you put the gem in a gem slot, that quarter of the map will light up. Once you get all 4 gems, your fire will become a beacon.

## Core Stuff:

1. **Gather resources:** Cells generate resources over time. Explore more cells to get more resources.
2. **Prepare:** Collect supplies, purchase upgrades, and move towards the gems.
3. **Explore:** Visit new locations and discover new resources and landmarks.
4. **Camp:** Bring your resources back to camp. Be careful, night burns one piece of wood every 30 seconds while day time does so at once every 2 minutes. Each cell can only produce one wood per minute(before the upgrades/obelisks).
*Note:* This is not as much of an idle game in the sense where the values stack rapidly. Even when you have the whole map discovered, you wouldn't have thousands and thousands of wood. You could only have 1000 max(upgradeable with gas) and bigger campfires will burn more wood to light up the whole area.
5. **Upgrade:** Use gas for more upgrades.
6. **Relax:** Relax and admire the nature around your camp.

## Visuals:
- Valley cells will likely be a small deer or other animal animated eating grass with a tree in the background. The color of tree changes depending on quadrant, and the animal changes entirely depending on quadrant.
- I'll draw simple backgrounds in vectorpea, nothing too animated or cool unfortunately :*(*.
### Animals:
Green Gem Quad - Deer
Red Gem Quad - Mole
Blue Gem Quad - Bear
Yellow Gem Quad - Fox

## Start:
You start with 10 wood, however, you can't take it out of that pile as it's only for your campfire. 10 wood will always be locked(if available) for your campfire. You have 3x3 grid from the camp and such. You also get the grids that have a radius of 4 away because you need some way to start production. So you get 12 units of land. You don't get the corners, but you can unlock that next if you want.

## Tile Unlocking & Expansion
- Only tiles sharing an edge with an unlocked tile can be unlocked. Diagonal tiles will cost 1.25x the regular adjacent tiles.
- Tile unlock costs increase with distance from the center of the map.
- Most tiles unlock with wood and animal fur.
- Certain radii have additional mineral and gas requirements.
- Gem locations require a combination of all four resources.
- Undiscovered tiles aren't known, so type isn't known.

## Resource Collection & Storage

- Each resource-producing tile accumulates resources over time.
- Players can visit individual tiles to collect their resources, or can turn auto-collect on in settings. Please don't though.
- Collected resources enter their containers at camp.
- Camp containers have effectively unlimited storage. -> The main point isn't resources, it's more laid back.
- Resource production should remain small, even when a large portion of the map is unlocked. -> Specified in production

## Campfire Fuel & Survival

- The campfire consumes one wood every 2 minutes during the day and every 30 seconds at night.
- Depending on how much of the map you have, the fire can also consume gas and other resources as well.
- The starting 10 wood is reserved for the campfire and cannot be used for unlocks.
- Firewood is mainly used for unlocks and managing farms. ->Backbone of main mechanics
- Upgrading the campfire increases its size and allows it to illuminate more of the surrounding world. However, this increases resources it needs.

Reqs:
At a radius of 5, you need animal fur as well
At a radius of 25, you need gas as well
At a radius of 50, you need minerals as well.
If you don't have one of these, it will default to wood.
8 wood = 4 fur = 2 gas = 1 mineral.
It'll go down in this hierarchy and take the highest tier of material available. If you don't have anything, the fire burns out(visual mostly), grace period of 30 seconds.

## Gem Carrying & Installation

- A player can carry only one gem at a time.
- After finding a gem, the player must bring it manually to camp.
- The gem must be installed in its specific slot. -> Visual indicator or highlight
- Installing a gem illuminates its associated quadrant and activates its bonus. Bonus is seeable in the shop menu. Weather effects can be turned off in settings if needed.
- Installed gems remain at camp.
- Installing all four gems transforms the campfire into a beacon.
- After winning you can walk around :)

## World Environment
- Daytime lasts 5 minutes.
- Nighttime lasts 3 minutes.
- The Blue Gem introduces a rain animation lasting 30 seconds.
- The Yellow Gem extends the sun cycle to 8 minutes.
- Environmental background stuff will mainly be flowers, grasses, and trees. Animals when required. Simple & small animations maybe???

## Resource Roles

| Resource | Primary purpose |
|---|---|
| Wood | Campfire fuel and expansion |
| Animal fur | Expansion |
| Minerals | Production upgrades, Some expansion tiers, and gem unlocks|
| Gas | Shop purchases, special upgrades, and some unlocks |

## Victory & Post-Game

- The objective is to find and install all four special gems.
- Installing the fourth gem activates the beacon.
- Players don't need to unlock the entire map to win, but they might want those resources quicker. 

## Campfire Failure & Weather
- The campfire consumes one wood every 2 minutes during the day and every 30 seconds at night.
- If the campfire runs out of wood, it goes out.
- While the fire is out, the player cannot unlock more tiles.
- Weather becomes stormier while the campfire is extinguished. -> Simple animation and sfx
- The player can relight the campfire -> Only wood required, powered off a lump sum of 10 wood for 5 minutes, then higher tiers can switch to more resources.

## Expansion Tiers & Costs
- Expansion costs are organized into square rings around the central 3×3 campsite.
- The first ring geometrically contains 16 tiles, 12 - adjacent, price of 1x amt, and 4 diagonal - price of 1.25x amt. So on. 
- Later expansion tiers become progressively more expensive. Shallow scaling though.
- Tiles must still be connected to the unlocked territory through adjacent tiles. Diagonals don't count.

## Production Upgrades
- Production upgrades have a max of 10 levels.
- Each level increases the production rate by 1% for the specific resource. Speed only. No visual change.
- Max bonus 10%.
- Gem and obelisk scale on top of this w/ different values but max cap overall is 25% speed only.

## Gas 
- Gas is for decorations. Ex: Change color theme. You keep all color themes you've previously paid for, but now have the option to get more. Weather animations, plant deco, etc.
- Gas can also be for the production upgrades above.
- Gas is the only resource usable in store.
- Gas -> Natural Gas 
