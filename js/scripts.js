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

    if (this.size === 1){
        totalPrice = totalPrice + 5;
    } else if (this.size === 2){
        totalPrice = totalPrice + 8;
    }  else if (this.size === 3){
        totalPrice = totalPrice + 10;
    }  else if (this.size === 4){
        totalPrice = totalPrice + 12;
    }
// cheese
    if (this.cheese === 1){
        totalPrice = totalPrice + 0;
    } else if (this.cheese === 2){
        totalPrice = totalPrice + 0;
    }  else if (this.cheese === 3){
        totalPrice = totalPrice + 1;
    } 
// pepperoni
    if (this.pepperoni === 1){
        totalPrice = totalPrice + 0;
    } else if (this.pepperoni === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.pepperoni === 3){
        totalPrice = totalPrice + 2;
    } 
// sausage
    if (this.sausage === 1){
        totalPrice = totalPrice + 0;
    } else if (this.sausage === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.sausage === 3){
        totalPrice = totalPrice + 2;
    } 
// canadian bacon

    if (this.canadianBacon === 1){
        totalPrice = totalPrice + 0;
    } else if (this.canadianBacon === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.canadianBacon === 3){
        totalPrice = totalPrice + 2;
    } 

    // bacon

    if (this.bacon === 1){
        totalPrice = totalPrice + 0;
    } else if (this.bacon === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.bacon === 3){
        totalPrice = totalPrice + 2;
    } 
    // chicken

    if (this.chicken === 1){
        totalPrice = totalPrice + 0;
    } else if (this.chicken === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.chicken === 3){
        totalPrice = totalPrice + 2;
    } 

    // pineapple

    if (this.pineapple === 1){
        totalPrice = totalPrice + 0;
    } else if (this.pineapple === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.pineapple === 3){
        totalPrice = totalPrice + 2;
    } 

    // mushrooms

    if (this.mushrooms === 1){
        totalPrice = totalPrice + 0;
    } else if (this.mushrooms === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.mushrooms === 3){
        totalPrice = totalPrice + 2;
    } 

    // onions

    if (this.onions === 1){
        totalPrice = totalPrice + 0;
    } else if (this.onions === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.onions === 3){
        totalPrice = totalPrice + 2;
    } 
    // peppers

    if (this.peppers === 1){
        totalPrice = totalPrice + 0;
    } else if (this.peppers === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.peppers === 3){
        totalPrice = totalPrice + 2;
    } 

    // olives

    if (this.olives === 1){
        totalPrice = totalPrice + 0;
    } else if (this.olives === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.olives === 3){
        totalPrice = totalPrice + 2;
    } 
    // jalapenos

    if (this.jalapenos === 1){
        totalPrice = totalPrice + 0;
    } else if (this.jalapenos === 2){
        totalPrice = totalPrice + 1;
    }  else if (this.jalapenos === 3){
        totalPrice = totalPrice + 2;
    } 

    return totalPrice;
}


var largePepperoni = new Pizza ("", "", 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
var largeCheese = new Pizza ("", "", 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
var largeMeatLovers = new Pizza ("", "", 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1)
var largeHawaiian = new Pizza ("", "" , 3, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2)
console.log(largePepperoni.pricing());
console.log(largeCheese.pricing());
console.log(largeMeatLovers.pricing());
console.log(largeHawaiian.pricing());

var userPizza = new Pizza ()
