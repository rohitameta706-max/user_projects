let obj={
    user:"Rohit_Ameta",
    id:"rohit67",
    email:"rohitameta666gmail.com",
    user_password:3478,
    address:"Udaipur",
    locality:"Indian",
    job_profile:"Developer"
}

let userinput=prompt("Enter the user id");
let passwordnew=prompt("Enter the user Password");

if(
    (obj.id == userinput) &&
    (obj.user_password == passwordnew)){
        console.log(" User Confirmed: Logging in():)");
        console.log("User Details::");
        for (const value in obj) {
            console.log(obj[value]);
    }
}
    else{
        console.log("Invalid User");
    }