// for(let i = 0; i < 5; i++);
// console.log(i); //Output will be i is not defined.

//the debugger helps you to see what happened each time in your code, you have to press step into to see it
// debugger
// for(let i = 0; i < 5; i++);
// console.log(i);

//Output will be 5
// for(var i = 0; i < 5; i++);
// console.log(i);

// let info = { 
//     display: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let person1 = Object.create(info)
// person1.firstName = 'Leah'; //setter
// person1.lastName = 'Basson';
// console.log(person1.display()); //accessor

/*
The two properties that an object has:
-Accessor = getter : To retrieve a value
-Modifier = setter : To update a value
*/

//Might be used on capstone project
// let personDetail = {
//     firstName : 'Leah',
//     lastName : 'Basson'
// }
// console.log(Object.keys(personDetail)); //keys are properties like firstName. To display an array of keys
// console.log(Object.values(personDetail)); //to display an array of values
// console.log(Object.entries(personDetail)); // to display an array within an array

// let propertyName = 'age' //change this to see if the property exists or not can be firstName/lastName
// if(personDetail.
//     hasOwnProperty(propertyName)){
//         console.log(personDetail.firstName);
//     }
// else{
//     console.log(`${propertyName} property was not found`);
// }

//For checkout page:
// let students = [
//     {
//         firstName: 'Leah',
//         lastName: 'Basson',
//         gender: 'Female'
//     },

//     {
//         firstName: 'Jamin',
//         lastName: 'Langeveldt',
//         gender: 'Male'
//     },

//     {
//         firstName: 'Mbalentle',
//         lastName: 'Diko',
//         gender: 'Female'
//     },

//     {
//         firstName: 'Lamla',
//         lastName: 'Nomnganga',
//         gender: 'Male'
//     }
// ]
    
// console.log(
//     Object.groupBy(students, 
//         ({gender}) => gender)); //To group all the genders

//For duplicates
let numbers = [9, 5, 6, 9, 5];
console.log(numbers.length);

let uniqueNumbers = Array.from (new Set(numbers));
console.log(uniqueNumbers);

