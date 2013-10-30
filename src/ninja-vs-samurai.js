/*
http://www.codewars.com/dojo/katas/517b2bcf8557c200b8000015/play/javascript

Something is wrong with our Warrior class. The attack method is not working
as expected. The health value is not being properly set. The following shows
an example of this code being used:

Solution Notes:
    the usage of call() was missing the first parameter: thisArg
*/

Position = {
    high: 'h',
    low: 'l'
}

Warrior = function(name){
    this.name = name;
    this.health = 100;
}

Warrior.prototype = {
    attack: function(enemy, position){
        if (enemy.block != position){
            var damage = position == Position.high ? 10 : 5;
            // if enemy is not blocking at all then give more damage
            if (!enemy.block){
                damage += 5;
            }
//          setHealth.call(enemy.health - damage); // <-- thisArg was missing
            setHealth.call(enemy, enemy.health - damage);
        }
    }
}

// private functions
function setHealth(value){
    console.log(this);
    this.health = Math.max(0, value);
    if (this.health == 0){
        this.deceased = true;
        this.zombie = false;
    }
    else if(this.deceased){
        this.zombie = true;
    }
}

