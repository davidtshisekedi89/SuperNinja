class Ninja {
    constructor(name, speed, strength, health){
        
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.health = health;
        // console.log("Making a new ninja");
    }
    drinkSake() {
        this.health +=10
        console.log(`the new health: ${this.health}`);

    }
}
// const Nedzuku = new Ninja('Nedzuku',195,9,8);
// Nedzuku.drinkSake()
// console.log(Nedzuku)


module.exports = Ninja;

