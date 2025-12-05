const details={
    id1: {
        username:"rohit ameta",
        id:"rohit67",
        password:"2028",
        phone_No:"198-252-98",
        college:"Dehli university",
        course:"HV college",
        locality:"Indian",
        Religion:"Indian"
    },
    id2: {
        username:"sharma",
        id:"sharma67",
        password:"2067",
        phone_No:"1267-252-98",
        college:"punjab university",
        course:"Guru college",
        locality:"Indian",
        Religion:"Indian",
    },
    id3:{
        username:"Virat",
        id:"virat67",
        password:"2097",
        phone_No:"1289-252-98",
        college:"Gurukripa university",
        course:"Darshan college",
        locality:"Indian",
        Religion:"Indian",
    }
}

let useridname=prompt("Enter your id: ");
let userpassword=prompt("Enter your password");

for (let key in details){
    let user=details[key];



if(user.username=== useridname && user.password===userpassword){
    console.log(user);
    console.log("Login Successfully ");
    break;
}
else { 
    console.log("Enter valid id and password");
};
}