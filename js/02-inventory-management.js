/*eslint-env browser*/

/*The Product Inventory Management System (55 points)
In this part of the assignment you will use multi-dimensional arrays to build a small inventory management system. Here are the specifics:
•	The primary array will be “inventory”.
•	The nested arrays (products) will each contain elements that represent sku (number), product (string), quantity (number), and cost (floating point number).
•	You should have at least 5 products in your inventory.
•	Similar to lab 9, your application should display a title in the console window along with a command menu that features commands to view all products, update stock, and exit the program. 
•	When the user select view, rather than displaying each product in a numeric list like you did in lab 9, you should display the details for each product, ordered by sku number. Here’s an example of what the user should see if they choose the view command:

2233 Hat (12) $14.99
3223 Socks (36) $9.99
4824 Shirt (10) $15.99
6343 Jeans (22) $39.99
9382 Jacket (5) $49.99

•	If the user selects the update command, a prompt should appear that allows the user to enter a sku number. Once the user enters a correct sku number a second prompt should appear that allows the user to enter a new stock quantity. The quantity should then update the product of the sku number entered.
•	If the user selects the exit command, the program should be terminated.
•	All data should be persisted using Web Storage. If the user closes the browser and then reopens it, all of the data should be retained from the previous session.
•	Make sure to validate all inputs. If the user enters a command that’s not valid, the application should be able to handle that. Similarly, if the user enters a bad sku number, or text instead of a number when updating stock, the application should be able to handle that too.*/

//PRODUCTS
/*
var inventory = [];
inventory[0] = {sku:2233, name:"Hat", quantity:12, cost:parseFloat(14.99)};
inventory[1] = {sku:3223, name:"Socks", quantity:36, cost:parseFloat(9.99)};
inventory[2] = {sku:4824, name:"Shirt", quantity:10, cost:parseFloat(15.99)};
inventory[3] = {sku:6343, name:"Jeans", quantity:22, cost:parseFloat(39.99)};
inventory[4] = {sku:9382, name:"Jacket", quantity:5, cost:parseFloat(49.99)}
*/

//DISPLAY MENU

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("add - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {

// PRODUCT LIST
    
//1    
window.console.log(inventory[0]["sku"] + " " +  inventory[0]["name"] + " " + inventory[0]["quantity"]+ " " + "$" + inventory[0]["cost"]);
//2
window.console.log(inventory[1]["sku"] + " " +  inventory[1]["name"] + " " + inventory[1]["quantity"]+ " " + "$" + inventory[1]["cost"]);
//3
window.console.log(inventory[2]["sku"] + " " +  inventory[2]["name"] + " " + inventory[2]["quantity"]+ " " + "$" + inventory[2]["cost"]);
//4
window.console.log(inventory[3]["sku"] + " " +  inventory[3]["name"] + " " + inventory[3]["quantity"]+ " " + "$" + inventory[3]["cost"]);
//5
window.console.log(inventory[4]["sku"] + " " +  inventory[4]["name"] + " " + inventory[4]["quantity"]+ " " + "$" + inventory[4]["cost"]);

    window.console.log("");
}

function add(inventory) {
    "user strict";
    var sku = parseInt(window.prompt("Enter a Sku"),10);
    var quantity = window.prompt("Enter a quantity");
    var i;
    for (i = 0; i <= inventory.length; i += 1) {
        if (sku === (inventory[i][1])) {
            inventory[i][2] = (quantity);
        break;
        }
    }
    
    localStorage.setItem("sku", sku);
    localStorage.setItem("quantity", quantity);
    add(inventory);
    window.console.log(" ");
}








/*function add() {
    var name= new Array(3); 
var y=0; 
for (y=0; y<3; y++) 
{ 
name[y]=prompt('Enter a name!',' '); 
} 
var x=0; 
for (x=0; x<3; x++) 
{ 
window.console.log(name[x] + "<br>"); 
} 
    
}
inventory.push(name);*/



function main() {
    "use strict";
    var inventory, command; 
    
    display_menu();
    
    var inventory = [];
inventory[0] = {sku:2233, name:"Hat", quantity:12, cost:parseFloat(14.99)};
inventory[1] = {sku:3223, name:"Socks", quantity:36, cost:parseFloat(9.99)};
inventory[2] = {sku:4824, name:"Shirt", quantity:10, cost:parseFloat(15.99)};
inventory[3] = {sku:6343, name:"Jeans", quantity:22, cost:parseFloat(39.99)};
inventory[4] = {sku:9382, name:"Jacket", quantity:5, cost:parseFloat(49.99)}
    

/*
// PRODUCT LIST
//1    
window.console.log(inventory[0]["sku"] + " " +  inventory[0]["name"] + " " + inventory[0]["quantity"]+ " " + "$" + inventory[0]["cost"]);
//2
window.console.log(inventory[1]["sku"] + " " +  inventory[1]["name"] + " " + inventory[1]["quantity"]+ " " + "$" + inventory[1]["cost"]);
//3
window.console.log(inventory[2]["sku"] + " " +  inventory[2]["name"] + " " + inventory[2]["quantity"]+ " " + "$" + inventory[2]["cost"]);
//4
window.console.log(inventory[3]["sku"] + " " +  inventory[3]["name"] + " " + inventory[3]["quantity"]+ " " + "$" + inventory[3]["cost"]);
//5
window.console.log(inventory[4]["sku"] + " " +  inventory[4]["name"] + " " + inventory[4]["quantity"]+ " " + "$" + inventory[4]["cost"]);
*/

    
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "add") {
                add(inventory);
            } else if (command === "del") {
                del(list);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
/*window.console.log("$" + inventory[0]["cost"]);*/