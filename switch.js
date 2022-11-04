// create an application with following roles:
// admin - full access
// subadmin - create/delete courses
// testprep - create/delete test
// user - consume content

var userType = "";

switch (userType) {
    case "admin":
        console.log("You hava the full access");
        break;
    case "subadmin":
        console.log("you can create/ delete courses");
        break;
    case "testpres":
        console.log("you can test the create/delete");
        break;
    case "user":
        console.log("You can consume the content");
        break;
    default:
        console.log("Kindly show your user ID");
        break;
}