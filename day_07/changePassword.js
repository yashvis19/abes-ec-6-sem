 import { readFile,writeFile } from "./readAndWrite.js";
 const FILE = "./user.json";

 const changePassword = async(user) => {
    const users = await readFile(FILE);
    let message ="";
    if(users.length === 0){
         message = "Not existing."
    }else{
        const existingUser = users.find(u => u.email === user.email);
        if(!existingUser) message = "Not existing";
        else {
            const updatedData = users.map((u) =>
            u.email === email ?{...u,passowrd}:u);

            const response = await writeFile(FILE, updatedData);
            message = "Password has been changed succesfully"
        }
    }
    console.log(message);
    
 }