const Student = require("../models/Student");

// Create
const createStudent = async (data) => {
  return await Student.create(data);
};

// Read All
const getAllStudents = async () => {
  return await Student.find();
};

// Read One
const getStudentById = async (id) => {
  return await Student.findById(id);
};

// Update
const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// Delete
const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};