#Pokemon Lite

Let's try to make a simplified version of pokemon!

##Requirements:
1. You should have a `Pokemon` constructor function that creates new pokemon that have name, health , magic and a bunch of skills.
2. A pokemon has no skills when created. it has to use the method `learnAttackSkill` to learn a new skill.
3. Your pokemon should have a method called `showStatus` that console.logs its status (how much health, magic left)
4. You should have an `AttackSkill` constructor function for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks.
4. Your pokemon should have a method called `attack` which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possiblites in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack.
5. finally create a method called `getMagic` to help your pokemon get some magic back.

You should create a constructor function to create a pokemon, and then add the methods onto the `.prototype` property of the constructor function. You should then use that constructor function to create all new pokemon.

Similarly, you should have a constructor function to create an `attackSkill`

For example, the following sequence:

```javascript
//Each Pokemon should start with a certain amount of health and magic
//for example, here Pikachu starts with 120 health and 80 magic 
//These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up
pikachu = new Pokemon("pikachu", 120, 80);
bulbasaur = new Pokemon("bulbasaur", 95, 105);
//Each skill should do a certain amount of damage, and consume a certain amount of magic
//from the Pokemon that used the skill
//Again, these do not have to be real skills - you can make them up
lightning = new AttackSkill("lightning", 40, 30);
poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
```

should log out the following to the console:

```javascript
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
bulbasaur launched skill 'poison seed' successfully!
pikachu got 20 damage
-------------------
pikachu status
health: 100
magic: 50
-------------------
bulbasaur status
health: 55
magic: 85
-------------------
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
not enough magic, cannot launch attack!
-------------------
pikachu got 20 magic back
-------------------
pikachu launched skill 'lightning' successfully!
bulbasaur got 40 damage
-------------------
bulbasaur is killed!
-------------------
bulbasaur is already dead!
```

That's just one example. You can call different series of attacks to get different results!

##Bonus 1
Add some more Pokemon and attack types.

##Bonus 2

Build a simple website (using HTML, CSS, and jQuery) that lets two people battle each other. The users should be able to select their Pokemon and their attack. Health should update as the battle goes on, and eventually a winner should be declared. 