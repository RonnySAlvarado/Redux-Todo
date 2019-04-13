import React from "react";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>{this.props.todo.value}</h2>;
  }
}

export default connect(
  null,
  {}
)(TodoItem);
