import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./user.json";
const user = {
  name: "Byrom Ascroft",
  email: "bascroft7@baidu.com",
  password: "uJ3}uVc5i~q",
  gender: "Male",
};
const register = async (user) => {
  const users = await readFile(FILE);
  const exitstingUser = users.find((u) => u.email === user.email);
if(exitstingUser){
    console.log("User is existing. Please try to login");
    return;
}
const updatedData = [...users,user];
const response = await writeFile(FILE,updatedData);
console.log(response.status);

}
register(user);
