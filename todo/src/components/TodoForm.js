import React from "react";
import { addTodo } from "../actions/index.js";
import { connect } from "react-redux";
import styled from "styled-components";

const FormStyle = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 100px;
  background: lightblue;
  border: 1px solid black;
  h2 {
    font-size: 20px;
  }
`;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  inputHandler = event => {
    this.setState({ input: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <FormStyle>
        <h2>Todos List:</h2>
        <form onSubmit={this.submitHandler}>
          <input
            placeholder="Add something to do..."
            name="input"
            value={this.state.input}
            onChange={this.inputHandler}
          />
          <button>Add task</button>
        </form>
      </FormStyle>
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
  { addTodo }
)(TodoForm);
