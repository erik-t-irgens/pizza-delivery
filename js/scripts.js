// Business Logic
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


Pizza.prototype.itemize = function(){
    var itemizedArray = [];   
    
    if (this.size === 1){
        itemizedArray.push("Size: Small");
    } else if (this.size === 2){
        itemizedArray.push("Size: Medium");
    }  else if (this.size === 3){
        itemizedArray.push("Size: Large");
    }  else if (this.size === 4){
        itemizedArray.push("Size: Xtra-Large");
    }
// cheese
    if (this.cheese === 1){
        itemizedArray.push("Cheese: None");
    } else if (this.cheese === 2){
        itemizedArray.push("Cheese: Regular");
    }  else if (this.cheese === 3){
        itemizedArray.push("Cheese: Extra");
    } 
// pepperoni
    if (this.pepperoni === 1){
        itemizedArray.push("");
    } else if (this.pepperoni === 2){
        itemizedArray.push("Pepperoni: Regular");
    }  else if (this.pepperoni === 3){
        itemizedArray.push("Pepperoni: Xtra");
    } 
// sausage
    if (this.sausage === 1){
        itemizedArray.push("");
    } else if (this.sausage === 2){
        itemizedArray.push("Sausage: Regular");
    }  else if (this.sausage === 3){
        itemizedArray.push("Sausage: Xtra");
    } 
// canadian bacon

    if (this.canadianBacon === 1){
        itemizedArray.push("");
    } else if (this.canadianBacon === 2){
        itemizedArray.push("Canadian Bacon: Regular");
    }  else if (this.canadianBacon === 3){
        itemizedArray.push("Canadian Bacon: Xtra");
    } 

    // bacon

    if (this.bacon === 1){
        itemizedArray.push("");
    } else if (this.bacon === 2){
        itemizedArray.push("Bacon: Regular");
    }  else if (this.bacon === 3){
        itemizedArray.push("Bacon: Xtra");
    } 
    // chicken

    if (this.chicken === 1){
        itemizedArray.push("");
    } else if (this.chicken === 2){
        itemizedArray.push("Chicken: Regular");
    }  else if (this.chicken === 3){
        itemizedArray.push("Chicken: Xtra");
    } 

    // pineapple

    if (this.pineapple === 1){
        itemizedArray.push("");
    } else if (this.pineapple === 2){
        itemizedArray.push("Pineapple: Regular");
    }  else if (this.pineapple === 3){
        itemizedArray.push("Pineapple: Xtra");
    } 

    // mushrooms

    if (this.mushrooms === 1){
        itemizedArray.push("");
    } else if (this.mushrooms === 2){
        itemizedArray.push("Mushrooms: Regular");
    }  else if (this.mushrooms === 3){
        itemizedArray.push("Mushrooms: Xtra");
    } 

    // onions

    if (this.onions === 1){
        itemizedArray.push("");
    } else if (this.onions === 2){
        itemizedArray.push("Onios: Regular");
    }  else if (this.onions === 3){
        itemizedArray.push("Onios: Xtra");
    } 
    // peppers

    if (this.peppers === 1){
        itemizedArray.push("");
    } else if (this.peppers === 2){
        itemizedArray.push("Peppers: Regular");
    }  else if (this.peppers === 3){
        itemizedArray.push("Peppers: Xtra");
    } 

    // olives

    if (this.olives === 1){
        itemizedArray.push("");
    } else if (this.olives === 2){
        itemizedArray.push("Olives: Regular");
    }  else if (this.olives === 3){
        itemizedArray.push("Olives: Xtra");
    } 
    // jalapenos

    if (this.jalapenos === 1){
        itemizedArray.push("");
    } else if (this.jalapenos === 2){
        itemizedArray.push("Jalapenos: Regular");
    }  else if (this.jalapenos === 3){
        itemizedArray.push("Jalapenos: Xtra");
    } 
    return itemizedArray;
}



// Front End
$(document).ready(function(){
    $("#pizzaForm").submit(function(event){
        
        var userPizza = new Pizza ($("#nameField").val(), $("#addressField").val(), parseInt($("input:radio[name=size]:checked").val()), parseInt($("input:radio[name=cheese]:checked").val()), parseInt($("input:radio[name=pepperoni]:checked").val()), parseInt($("input:radio[name=sausage]:checked").val()), parseInt($("input:radio[name=canadianBacon]:checked").val()), parseInt($("input:radio[name=bacon]:checked").val()), parseInt($("input:radio[name=chicken]:checked").val()), parseInt($("input:radio[name=pineapple]:checked").val()), parseInt($("input:radio[name=mushrooms]:checked").val()), parseInt($("input:radio[name=onions]:checked").val()), parseInt($("input:radio[name=peppers]:checked").val()), parseInt($("input:radio[name=olives]:checked").val()), parseInt($("input:radio[name=jalapenos]:checked").val()));
        debugger;
        var userPizzaPrice = userPizza.pricing();
        var userPizzaArray = userPizza.itemize();

        $("#receiptPopulate").html("<h4>Hey there, " + userPizza.forName + "!</h4><br><h5>Your order is on the way to " + userPizza.forAddress + ".</h5><br><br><h3>Here is your receipt:</h3><br><h5>Your total today is $" + userPizzaPrice + ".00.</h5><br><h3>Items:</h3><br><h5> " + userPizzaArray[0] + "</h5><br><h5>" + userPizzaArray[1] + "</h5><br><h5>" + userPizzaArray[2] + "</h5><br><h5>" + userPizzaArray[3] + "</h5><br><h5>" + userPizzaArray[4] + "</h5><br><h5>" + userPizzaArray[5] + "</h5><br><h5>" + userPizzaArray[6] + "</h5><br><h5>" + userPizzaArray[7] + "</h5><br><h5>" + userPizzaArray[8] + "</h5><br><h5>" + userPizzaArray[9] + "</h5><br><h5>" + userPizzaArray[10] + "</h5><br><h5>" + userPizzaArray[11] + "</h5><br><h5>" + userPizzaArray[12] + "</h5>")
        
        $("#receiptDescriptor").slideUp(100);
        $("#receiptCard").slideDown(500);
        event.preventDefault();
        
    });
    
    // Button logic for non-submit buttons
    $("#continueButton").click(function(){
        $("#chooseOptionCard").slideDown(500);
        $("#continueButton").slideUp(500);
    });
    $("#constructButton").click(function(){
        $("#hiddenPizzaForm").slideDown(500);
        $("#startPage").slideUp(500);
    });
    
});

