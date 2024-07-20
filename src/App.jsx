import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import TodoList from './components/ToDoList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;