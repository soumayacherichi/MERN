'use strict'
//Constructor function
//Card Class
class Card {
    constructor(name,cost){
        this.name = name;//this.attribut=value attribut najjim njammih elli n7eb
        this.cost = cost;
    }
}
//Unit Class
class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    //Attack Another Unit instance method
    attack(target){
        if (target instanceof Unit){
            target.res -= this.power
        }
        else{
            throw new Error("Target must be a Unit instance");
        }
    }
}
//Effect Class
class Effect extends Card {
    constructor(name,cost,text,stat, magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
       }
       // Play method
       play(target){
        if (target instanceof Unit){
            if(this.stat==='resilience'){
                target.res += this.magnitud;
                console.log(this.text);
            }else if (this.res==='power'){
                this.power += this.magnitud;
                console.log(this.text);
            }else {
                console.log("Invalid Stat", + this.stat); // ou console.log("Invalid Stat", `$this.stat)`; //
            }
        }
        else {
            throw new Error("Target must be a unit");
        }


    }
}

