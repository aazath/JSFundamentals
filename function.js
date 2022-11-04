
// Define a function that answer the role of the user
// A user can be on the following role:
// admin - with all access
// subadmin - create/ delete courses
// testpre - create/delete test
// user - consume content
// other - trial user

//Input: getUserRole(name, role)

function getUserRole(name, role)
{
    switch(role)
    {
    case "admin":
        return `${name} is admin with all access`;
    case "subadmin":
        return `${name} is subadmin with create/delete courses access`;
    case "testpres":
        return `${name} is testpres with create/delete test access`;
    case "user":
        return `${name} is user with consume content access`;
    default:
        return `${name} is trial user`;
    }
}

var getRole = getUserRole("Aazath","subadmin")
console.log(`This is the variable method of printing the output ${getRole}`);

console.log(getUserRole("Aazath","user"));