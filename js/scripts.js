var Order = function(){
    pizzas = [],
    // sauces = [],
    // sides = [],
    idPizza = 0
    // idSauces = 0,
    // idSides = 0
    };

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

Pizza.prototype.pricing = function(){
    var totalPrice = 0;

    // size

    if (this.size = 1){
        totalPrice += 5;
    } else if (this.size = 2){
        totalPrice += 8;
    }  else if (this.size = 3){
        totalPrice += 10;
    }  else if (this.size = 4){
        totalPrice += 12;
    }
// cheese
    if (this.cheese = 1){
        totalPrice += 0;
    } else if (this.cheese = 2){
        totalPrice += 0;
    }  else if (this.cheese = 3){
        totalPrice += 1;
    } 
// pepperoni
    if (this.pepperoni = 1){
        totalPrice += 0;
    } else if (this.pepperoni = 2){
        totalPrice += 1;
    }  else if (this.pepperoni = 3){
        totalPrice += 2;
    } 
// sausage
    if (this.sausage = 1){
        totalPrice += 0;
    } else if (this.sausage = 2){
        totalPrice += 1;
    }  else if (this.sausage = 3){
        totalPrice += 2;
    } 
// canadian bacon

    if (this.canadianBacon = 1){
        totalPrice += 0;
    } else if (this.canadianBacon = 2){
        totalPrice += 1;
    }  else if (this.canadianBacon = 3){
        totalPrice += 2;
    } 

    // bacon

    if (this.bacon = 1){
        totalPrice += 0;
    } else if (this.bacon = 2){
        totalPrice += 1;
    }  else if (this.bacon = 3){
        totalPrice += 2;
    } 
    // chicken

    if (this.chicken = 1){
        totalPrice += 0;
    } else if (this.chicken = 2){
        totalPrice += 1;
    }  else if (this.chicken = 3){
        totalPrice += 2;
    } 

    // pineapple

    if (this.pineapple = 1){
        totalPrice += 0;
    } else if (this.pineapple = 2){
        totalPrice += 1;
    }  else if (this.pineapple = 3){
        totalPrice += 2;
    } 
}


var largePepperoni = new Pizza ("Somename", "someAddress", 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

var userPizza = new Pizza ()
