import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    };

    return (
        <body>
            <div className="appContainer">
                <div className="todoListContainer">
                    <h2 className="listTitle">The List, all praise the List</h2>
                    <form onSubmit={addTodo} className="todoForm">
                        <input
                            className="todoInput" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)} 
                        />
                        <button type="submit" className="addTodoButton">Add it to the List brother</button>
                    </form>
                    <ul className="todoItems">
                        {todos.map((todo, index) => (
                            <li key={index} className="todoItem">{todo}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </body>
    );
}

export default ToDoList;