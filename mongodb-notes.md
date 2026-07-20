# MongoDB Notes

## 1. What is a database?
A database is a system used to store, organize, and manage data so it can be easily accessed, updated, and deleted when needed.

## 2. Why can't arrays replace databases?
Arrays can only store data while a program is running and are not suitable for handling large amounts of data. Databases store data permanently, support searching, security, backups, and allow multiple users to access the data.

## 3. What is MongoDB?
MongoDB is a NoSQL database that stores data in the form of JSON-like documents instead of rows and tables. It is flexible, fast, and easy to scale.

## 4. What is the difference between SQL and NoSQL?
SQL databases store data in tables with fixed schemas, while NoSQL databases store data in collections and documents with flexible schemas. SQL is best for structured data, whereas NoSQL is better for flexible and rapidly changing data.

## 5. What is a collection?
A collection is a group of related documents in MongoDB. It is similar to a table in an SQL database.

## 6. What is a document?
A document is a single record in MongoDB. It stores data in a JSON-like format using key-value pairs.

Example:
```json
{
  "name": "Rahul",
  "age": 21
}
```

## 7. Why is MongoDB popular in the MERN stack?
MongoDB is popular in the MERN stack because it stores data in JSON-like documents, which work well with JavaScript. This allows developers to use JavaScript for both the frontend and backend, making development faster and easier.