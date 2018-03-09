/*eslint-env browser*/

//STEP 1
/*
Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
*/

/*
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story"];
window.console.log(movies[1]);
*/

//STEP 2
/*
Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
*/
/*var movies = new Array(5);
movies[0] = "El Infierno";
movies[1] = "Batman Returns";
movies[2] = "Training Day";
movies[3] = "El Dia de los Albaniles";
movies[4] = "Toy Story";

window.console.log(movies[0]);*/


//STEP 3
/*Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.*/

/*
var movies = new Array(5);
movies[0] = "El Infierno";
movies[1] = "Batman Returns";
movies[2] = "Training Day";
movies[3] = "El Dia de los Albaniles";
movies[4] = "Toy Story";
movies[movies.length] = 6;
movies[3] = "Mil usos";

window.console.log(movies.length);
*/


//STEP 4
/*Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.*/

/*var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story"];
delete movies[0];
window.console.log(movies);*/

//STEP 5
/*Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.*/

/*var i;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
for (i = 0; i < movies.length; i +=1) {
    window.console.log(movies[i]);
}*/

//STEP 6
/*Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.*/

/*
var index;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
for (index in movies) {
    window.console.log(movies[index]);
}
*/


//STEP 7
/*Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.*/

/*var i;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
for (i = 0; i <= 0; i += 1) {
    window.console.log(movies.sort());
}*/



//STEP 8
/*
Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
…

*/

/*var i;
var x = "";
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
window.console.log("Movies I like:");
window.console.log(x);
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("...");
window.console.log(x);
var i;
var leastFavMovies = ["Batman & Robin", "Jack and Jill", "Things"];
window.console.log("Movies I regret watching:");
window.console.log(x);
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log(leastFavMovies[i]);   
}
window.console.log("...");*/


//STEP 9
/*
Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
*/


/*var x;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
var leastFavMovies = ["Batman & Robin", "Jack and Jill", "Things"];
x = movies.concat(leastFavMovies);
window.console.log(x);*/



//STEP 10

/*Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.*/

/*var z;
var x;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
var leastFavMovies = ["Batman & Robin", "Jack and Jill", "Things"];
x = movies.concat(leastFavMovies);
z = x.pop();
window.console.log(z);*/

//STEP 11
/*Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.*/

/*var z;
var x;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
var leastFavMovies = ["Batman & Robin", "Jack and Jill", "Things"];
x = movies.concat(leastFavMovies);
z = x.shift();
window.console.log(z);*/


//STEP 12
/*Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. */

/*
var x;
var movies = ["El Infierno", "Batman Returns", "Training Day", "Los Albaniles", "Toy Story", "Batman", "Coco"];
var leastFavMovies = ["Batman & Robin", "Jack and Jill", "Things"];
x = movies.concat(leastFavMovies);
x.splice(7, 8, "Transformers", "Santo vs Los Vampiros")

window.console.log(x);
*/

//STEP 13

/*Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window.*/


/*var employee1 = [];
employee1["id"] = 3456;
employee1["name"] = "Martin";
employee1["title"] = "Graphic Desinger";
employee1["department"] = "Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 36656;
employee2["name"] = "Monse";
employee2["title"] = "La Jefa";
employee2["department"] = "Marketing";
employee2["isCurrent"] = true;

var employee;
employee = [[employee1],[employee2]];

window.console.log(employee2["name"]);*/

//STEP 14
/*Copy the code from step 13. Modify the code slightly so that you’re using a loop to iterate through the array and print out the names of both employees.*/


/*
var employee1 = [];
employee1["id"] = 3456;
employee1["name"] = "Martin";
employee1["title"] = "Graphic Desinger";
employee1["department"] = "Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 36656;
employee2["name"] = "Monse";
employee2["title"] = "La Jefa";
employee2["department"] = "Marketing";
employee2["isCurrent"] = true;
var i;
var employees = [[employee1["name"]],[employee2["name"]]];
    for (i = 0; i < employees.length; i +=1) {
         window.console.log(employees[i][0] + " " + employees[i][1]);
    }
*/


//STEP 15
/*Copy the code from step 14. Now add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.*/


/*
var employee1 = [];
employee1["id"] = 3456;
employee1["name"] = "Martin";
employee1["title"] = "Graphic Desinger";
employee1["department"] = "Marketing";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 36656;
employee2["name"] = "Monse";
employee2["title"] = "La Jefa";
employee2["department"] = "Marketing";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 36656;
employee3["name"] = "America";
employee3["title"] = "La Jefa";
employee3["department"] = "Marketing";
employee3["isCurrent"] = false;


var employees = [[employee1],[employee2,9],["Fred",15],["Mike",5]];
employees.forEach(function (item) {
    window.document.write(items[0] + " " + item[1]);
});
*/


//STEP 16
/*Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];*/

/*var movies;
movies = [["Training Day", 1], ["Coco", 2], ["Batman", 3], ["Batman Returns", 4], ["El Infierno", 5]];

window.console.log(movies[1]);*/


//STEP 17
/*Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY*/

/*var i;
var x = "";
var employees = ["Zack", "Jessica","Mark","Fred","Sally"];
    window.console.log("Employees:");
    window.console.log(x);
for (i = 0; i < employees.length; i += 1) {
    window.console.log(employees[i]);   

};*/


//STEP 18
/*Write a JavaScript function to filter false, null, 0 and blank values from an array.
Test Data: window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
Expected Result: [58, "abcd", true]*/

/*function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));*/


//STEP 19
/*Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.*/

/*function random_item(items)
{ 
return items[Math.floor(Math.random()*items.length)];   
}
var items = [666, 55, 333, 365, 69];
console.log(random_item(items));*/


//STEP 20
/*
Write a JavaScript function to get the largest number from a numeric array.*/
