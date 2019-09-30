import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
  state = {
    text: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>todos</h1>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          // name={this.state.text}
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    );
  }
}
