import { createNewStudent } from "../services/students.js";

export async function handleCreateNewStudent(req, res) {
  const data = req.body;
  const student = await createNewStudent(data);
  res.status(201).send(student);
}