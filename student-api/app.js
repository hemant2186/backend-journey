require("dotenv").config();

const connectDB = require("./config/db");

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("./services/studentService");

const run = async () => {
  await connectDB();

  // Create Student
  const student = await createStudent({
    name: "Rahul",
    email: "rahul@example.com",
    age: 22,
    course: "Node.js",
  });

  console.log("Created:");
  console.log(student);

  // Get All Students
  const students = await getAllStudents();

  console.log("\nAll Students:");
  console.log(students);

  // Get Student By ID
  const oneStudent = await getStudentById(student._id);

  console.log("\nStudent By ID:");
  console.log(oneStudent);

  // Update Student
  const updated = await updateStudent(student._id, {
    course: "MongoDB",
  });

  console.log("\nUpdated Student:");
  console.log(updated);

  // Delete Student
  const deleted = await deleteStudent(student._id);

  console.log("\nDeleted Student:");
  console.log(deleted);

  process.exit();
};

run();