import { readJsonFile, writeJsonFile } from "../day5/readAndWriteServices.js";

const FILE = "../day_05/students.json";

const deleteData = async (id) => {
  const students = await readJsonFile(FILE);

  if (!students || students.length === 0) {
    console.log("No students found");
    return;
  }

  const userExists = students.some((student) => student.id === id);

  if (!userExists) {
    console.log("Student not found");
    return;
  }

  const updatedStudents = students.filter((student) => student.id !== id);

  await writeJsonFile(FILE, updatedStudents);

  console.log("Student deleted successfully");
  console.log(updatedStudents);
};

deleteData(1);
