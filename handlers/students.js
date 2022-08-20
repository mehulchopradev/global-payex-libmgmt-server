import { createNewStudent } from "../services/students.js";

export async function handleCreateNewStudent(req, res, next) {
  try {
    const data = req.body;
    const student = await createNewStudent(data);
    res.status(201).send(student);
  } catch (err) {
    next(err);
  }
}