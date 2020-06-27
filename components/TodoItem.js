import React from 'react';

// import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <React.Fragment>
        <div className="todo-item">
          <span className="todo-item__checkbox">
            <input type="checkbox" defaultChecked={completed}></input>
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

  _renderLabel = () => {
    return (
      <div>label</div>
    )
  }
}

// TodoItem.PropTypes = {
//   todo: PropTypes.object.isRequired
// }

export default TodoItem;