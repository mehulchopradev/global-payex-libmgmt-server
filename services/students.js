import Student from "../models/student.js";

export async function createNewStudent(data) {
  let student = new Student(data);
  student = await student.save();
  return student;
}