import React from 'react';

// import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      borderBottom: "1px dotted black",
      padding: "5px 0",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <React.Fragment>
        <div className="todo-item" style={this.getStyle()}>
          <span className="todo-item__checkbox">
            <input type="checkbox" defaultChecked={completed} onChange={this.props.markComplete.bind(this, id)}></input>
          </span>
          <span className="todo-item__label">
            {title}
          </span>
          <span className="todo-item__remove-btn">
          </span>
        </div>
      </React.Fragment>
    )
  }
}

export default TodoItem;