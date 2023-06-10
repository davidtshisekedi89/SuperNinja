const Ninja = require("./superNinja");

class Sensei extends Ninja{
    constructor(name, speed,strength ,health, wisdom) {
        super(name,speed=10,strength=10,health=200,wisdom);
        // this.speed = 10;
        // this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");

    }
   

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
console.log(superSensei);