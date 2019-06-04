import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { deleteTodo } from "../actions/index.js";

const TodoListStyle = styled.div`
  margin: 0 auto;
  width: 600px;
  background: lightblue;
  border: 1px solid black;
  h2 {
    font-size: 20px;
  }
`;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  clearHandler = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.deleteTodo(this.props.todos);
  };

  render() {
    return (
      <TodoListStyle>
        <div>
          {this.props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={index} index={index} />;
          })}
        </div>
        <button onClick={this.clearHandler}>Clear All Completed</button>
      </TodoListStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { deleteTodo }
)(TodoList);
