// var FullName = "Ujjwal Arvind Lade"
// var age = 22;
// var email = "ujjwallade11@gmail.com"

// console.log(`My name is ${FullName}.\nMy age is ${age}. and \nMy personal email ID is ${email}.`);

// var floatNumber = 34.2;

// console.log(floatNumber);

// Eg: Tech Academy  role-based access to course content
// 	Master – view/add/delete/create/update content
// 	Admin – view/create
// 	User – view/edit

// var role = "master";

// if(role === "master"){
//     console.log("view add delete create update");
// }
// else if(role === "admin"){
//     console.log("view create")
// }else{
//     console.log("view and edit")
// }

// role = "admin"

// switch(role){
//     case "master": console.log("view add delete create update");
//     break;
    
//     case "admin": console.log("view create")
//     break;

//     case "user": console.log("view and edit")
//     break;

//     default: console.log("Role is not valid")
// }

var isEmailVerified = true;
var isloggedIn = true;
var isValidCardInfo = true;
var google = true;
var github = false;

if(isEmailVerified && isloggedIn && isValidCardInfo && (google || github)){
    console.log("you are free to make purchase");
}else{
    console.log("you cannot purchase course")
}



var pursase =(isEmailVerified && isloggedIn && isValidCardInfo && (google || github)) ? 'purchase' : 'you can not purses';

console.log(pursase);

var myName = "ujjwal lade";
var arr = ["a","e","i","o","u"]


console.log(e);