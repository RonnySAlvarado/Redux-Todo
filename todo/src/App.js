import React, { Component } from "react";
import "./App.css";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
