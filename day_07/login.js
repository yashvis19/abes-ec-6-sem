import { readFile } from "./readAndWrite.js";
const FILE = "./user.json";
const login = async (user) => {
    const {email, password} = user;
    let message = "";

    const users = await readFile(FILE);
    if(users.length === 0) message ="user is not registerd.";
     

    const exitstingUser = users.find((u) => u.email === email);
    if(!exitstingUser) 
        {message = "user is not registerd";}
       else{
    exitstingUser.password === password ?
     message ="LOGIN successful" : message ="Incorrect passowrd";
       }
    console.log(message);
    
}
login({
    email:"gmcilraith8@skype.com",
    passowrd:"12345lW0&|Jj)Qltaa",
    id:1
});