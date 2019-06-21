var Order = function(){
    pizzas = [],
    // sauces = [],
    // sides = [],
    idPizza = 0,
    // idSauces = 0,
    // idSides = 0
}

var Pizza = function(forName, forAddress, size, cheese, pepperoni, sausage, canadianBacon, bacon, chicken, pineapple, mushrooms, onions, peppers, olives, jalapenos){
    this.forName = forName;
    this.forAddress = forAddress;
    this.size = size;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.sausage = sausage;
    this.canadianBacon = canadianBacon;
    this.bacon = bacon;
    this.chicken = chicken;
    this.pineapple = pineapple;
    this.mushrooms = mushrooms;
    this.onions = onions;
    this.peppers = peppers;
    this.olives = olives;
    this.jalapenos = jalapenos;
    } 


var largePepperoni = new Pizza ("Somename", "someAddress", 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

var userPizza = new Pizza ()
