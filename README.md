🚀 Features

Create Todo → Add a new todo with title and status

Get All Todos → Fetch all stored todos

Update Todo → Modify title or status by ID

Delete Todo → Remove a todo by ID


📡 API Endpoints
1. Create Todo

POST /createTodo
Body:

{
  "title": "Learn Node.js",
  "status": "pending"
}

2. Get All Todos

GET /getTodo

3. Update Todo

PUT /todos/:id
Body:

{
  "title": "Learn Express.js",
  "status": "completed"
}

4. Delete Todo

DELETE /todo/:id

🛠 Technologies Used

Node.js

Express

UUID
