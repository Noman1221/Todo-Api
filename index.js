import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const app = express();

app.use(express.json());
let TodoStore = []

app.post("/createTodo", (req, res) => {
    let { title, status } = req.body;
    const newTodo = {
        id: uuidv4(),
        title,
        status
    };
    TodoStore.push(newTodo);
    res.status(201).json({ message: "todo created", todos: TodoStore });
})

app.get("/getTodo", (req, res) => {
    res.status(200).json({ message: "get all Todos", todos: TodoStore });
})

app.put("/todos/:id", (req, res) => {
    let { id } = req.params;
    let { title, status } = req.body;
    let findTodo = TodoStore.find((todo) => {
        return todo.id === id;
    })
    if (!findTodo) {
        return res.status(404).json({ message: "Todo not found" });
    };

    if (title) findTodo.title = title;
    if (status) findTodo.status = status;
    res.status(200).json({ message: "todo update successfully", todo: findTodo });
})

app.delete("/todo/:id", (req, res) => {
    let { id } = req.params;

    const existingTodo = TodoStore.find((task) => task.id === id);
    if (!existingTodo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    TodoStore = TodoStore.filter((task) => task.id !== id);

    res.status(200).json({
        message: "Deleted successfully",
        deletedTodo: existingTodo
    });
});

let port = 3000;
app.listen(port, () => {
    console.log("database is connect");
});
