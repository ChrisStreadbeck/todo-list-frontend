import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";
import TodoItem from "./todoItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://agile-ravine-56408.herokuapp.com/todos")
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todoItem={todo} deleteItem={this.deleteItem} />
      );
    });
  };

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
    console.log(this.state.todo);
  };

  handleSubmit = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://agile-ravine-56408.herokuapp.com/add-todo",
      headers: { "content-type": "application/json" },
      data: {
        title: this.state.todo,
        done: false
      }
    })
      .then(data => {
        this.setState({
          todos: [...this.state.todos, data.data],
          todo: ""
        });
      })
      .catch(error => console.log("error in handleSubmit"));
  };

  deleteItem = id => {
    fetch(`https://agile-ravine-56408.herokuapp.com/todo/${id}`, {
      method: "DELETE"
    }).then(
      this.setState({
        todos: this.state.todos.filter(item => {
          return item.id !== id;
        })
      })
    );
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <form onSubmit={this.handleSubmit} className="add-todo">
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
