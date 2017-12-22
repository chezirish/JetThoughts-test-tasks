

    // make all json files as one obj
    let data = { employees: [
                            {"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},
                            {"id":2,"name":"Clifford Brown","drinks":["Latte"]},
                            {"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},
                            {"id":4,"name":"Don Parsons","drinks":["Espresso"]},
                            {"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},
                            {"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},
                            {"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},
                            {"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},
                            {"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},
                            {"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]}
                            ],

                 recipes:  {
                            "Cappuccino": {
                            "coffee": 0.01,
                            "water": 0.035,
                            "milk": 0.09
                            },
                            "Espresso": {
                            "coffee": 0.01,
                            "water": 0.035
                            },
                            "Latte": {
                            "coffee": 0.01,
                            "water": 0.035,
                            "milk": 0.135
                            },
                            "Flat White": {
                            "coffee": 0.02,
                            "water": 0.04,
                            "milk": 0.11
                            },
                            "Macchiato": {
                            "coffee": 0.01,
                            "water": 0.035,
                            "milk": 0.015
                            }
                           },

                 prices:   {
                            "coffee": 3.6,
                            "water": 1,
                            "milk": 1.5
                           }        
                }


        //choose your budget
        let budget = 0.5;
  

        function invite(budget, data){
    
            let macchiato = data.recipes.Macchiato;
            let flatWhite = data.recipes["Flat White"];
            let latte = data.recipes.Latte;
            let espresso = data.recipes.Espresso;
            let cappuccino = data.recipes.Cappuccino;


            function countPrice(coffee = 0, water = 0, milk = 0){
                let coffePrice = coffee ? parseFloat((data.prices.coffee * (coffee * 100) / 100).toFixed(7)) : 0;
                let waterPrice = water ? parseFloat((data.prices.water * (water * 100) / 100).toFixed(7)) : 0;
                let milkPrice = milk ? parseFloat((data.prices.milk * (milk * 100) / 100).toFixed(7)) : 0;
                //debug
                // console.log(coffePrice, waterPrice, milkPrice);
                let result = parseFloat((coffePrice + waterPrice + milkPrice).toFixed(7));
                //debug
                //console.log(result)
                return result;
            }


            // better loop through array of drinks instead of call function, but we have json file as an object not as an array
            macchiato.price = countPrice(macchiato.coffee, macchiato.water, macchiato.milk);
            flatWhite.price = countPrice(flatWhite.coffee, flatWhite.water, flatWhite.milk);
            latte.price = countPrice(latte.coffee, latte.water, latte.milk);
            espresso.price = countPrice(espresso.coffee, espresso.water);
            cappuccino.price = countPrice(cappuccino.coffee, cappuccino.water, cappuccino.milk);


            let invited = [];

            for(let i=0; i<data.employees.length; i++){
                employee = data.employees[i];
                let minPrice = Infinity;
                for(let i=0; i<employee.drinks.length; i++){
                    let drink = employee.drinks[i];
                    let drinkPrice = data.recipes[drink].price;
                    if(minPrice > drinkPrice){
                        minPrice = drinkPrice;
                    }
                }

                budget -= minPrice;

                if(budget >= 0){
                    invited.push(employee);
                }
            }
            //console.log(budget)
            return invited;
        }

        //show result in console
        console.dir(invite(budget, data));