# MongoDB CRUD Practice

## Database

employeeDB

## Collection

employees

## Sample Document

```json
{
  "name": "Rahul",
  "department": "IT",
  "salary": 65000,
  "experience": 3
}
```

## CRUD Queries

### Find employees with salary > 50000

```javascript
db.employees.find({
  salary: { $gt: 50000 }
})
```

### Find employees in IT or HR

```javascript
db.employees.find({
  $or: [
    { department: "IT" },
    { department: "HR" }
  ]
})
```

### Update one employee's salary

```javascript
db.employees.updateOne(
  { name: "Rahul" },
  {
    $set: {
      salary: 70000
    }
  }
)
```

### Delete employees with experience = 0

```javascript
db.employees.deleteMany({
  experience: 0
})
```

### Sort by salary descending

```javascript
db.employees.find().sort({
  salary: -1
})
```

### Show only name and salary

```javascript
db.employees.find(
  {},
  {
    name: 1,
    salary: 1,
    _id: 0
  }
)
```

### Top 3 Highest Paid Employees

```javascript
db.employees.find()
.sort({ salary: -1 })
.limit(3)
```

## What I Learned

- How to insert documents
- How to query documents
- How to update documents
- How to delete documents
- How to sort results
- How to use projections
- How to limit query results