import React from "react";
import { connect } from "react-redux";
import { toggleCompleted } from "../actions/index.js";
import styled from "styled-components";

const completedTrue = styled.h2`
  text-decoration: line-through;
`;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleCompleted = () => {
    this.props.toggleCompleted(this.props.index);
  };

  render() {
    return (
      <h2
        onClick={this.toggleCompleted}
        style={
          this.props.todo.completed ? { textDecoration: "line-through" } : null
        }
      >
        {this.props.todo.value}
      </h2>
    );
  }
}

export default connect(
  null,
  { toggleCompleted }
)(TodoItem);
