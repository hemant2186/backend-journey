require("dotenv").config();

const connectDB = require("./config/db");

const Department = require("./models/Department");
const Employee = require("./models/Employee");

const run = async () => {
  await connectDB();

  // Create Department
  const department = await Department.create({
    name: "Computer Science",
    building: "Block A",
  });

  console.log("Department Created");
  console.log(department);

  // Create Employees
  await Employee.create([
    {
      name: "Rahul",
      salary: 50000,
      department: department._id,
    },
    {
      name: "Priya",
      salary: 60000,
      department: department._id,
    },
  ]);

  console.log("Employees Created");

  // Populate all department details
  const employees = await Employee.find().populate("department");

  console.log("\nEmployees with Department");
  console.log(employees);

  // Populate only department name
  const employeeNames = await Employee.find().populate(
    "department",
    "name"
  );

  console.log("\nDepartment Name Only");
  console.log(employeeNames);

  process.exit();
};

run();