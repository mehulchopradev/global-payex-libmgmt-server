import express from 'express';
import { handleCreateNewStudent } from '../handlers/students.js';

const studentsRouter = express.Router();
studentsRouter.post('/students', handleCreateNewStudent);

export default studentsRouter;