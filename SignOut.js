//Show user a signout button if he is authenticated
//otherwise show him option to Login/Signup

var authenticated = false;

//tradional way of doing 
// if (authenticated) {
//     console.log("show signout button");
// }else{
//     console.log("show login/signup button");
// }

//using the ternary operator
(authenticated ? console.log("Show signout button") : console.log("Show login/signup button" ) );