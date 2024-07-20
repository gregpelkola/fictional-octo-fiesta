import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(), // Unique identifier for each todo
            text: input,
        };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="appContainer">
            <div className="todoListContainer">
                <h2 className="listTitle">The List, all praise the List</h2>
                <form onSubmit={addTodo} className="todoForm">
                    <div className="inputButtonContainer">
                        <input
                            className="todoInput" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)} 
                        />
                        <button type="submit" className="addTodoButton">Add it to the List brother</button>
                    </div>
                </form>
                <ul className="todoItemsContainer">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todoItem">
                            {todo.text}
                            <button className="deleteTaskButton" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;