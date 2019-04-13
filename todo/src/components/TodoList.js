import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";

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

  render() {
    return (
      <TodoListStyle>
        <div>
          {this.props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={index} index={index} />;
          })}
        </div>
      </TodoListStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
