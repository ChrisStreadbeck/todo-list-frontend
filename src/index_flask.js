// import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";

// import "./styles.css";
// import TodoItem from "./todoItem";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       todo: "",
//       todos: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:5000/todos")
//       .then(response => response.json())
//       .then(data => this.setState({ todos: data }));
//   }

//   renderTodos = () => {
//     return this.state.todos.map(todo => {
//       return (
//         <TodoItem
//           id={todo[0]}
//           title={todo[1]}
//           key={todo[0]}
//           done={todo[2]}
//           deleteItem={this.deleteItem}
//         />
//       );
//     });
//   };

//   handleChange = event => {
//     this.setState({
//       todo: event.target.value
//     });
//     console.log(this.state.todo);
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     axios({
//       method: "post",
//       url: "http://localhost:5000/add-todo",
//       headers: { "content-type": "application/json" },
//       data: {
//         title: this.state.todo,
//         done: false
//       }
//     })
//       .then(data => {
//         this.setState({
//           todos: [...this.state.todos, data.data],
//           todo: ""
//         });
//       })
//       .catch(error => console.log("error in handleSubmit"));
//   };

//   deleteItem = id => {
//     fetch(`http://localhost:5000/todo/${id}`, {
//       method: "DELETE"
//     }).then(
//       this.setState({
//         todos: this.state.todos.filter(item => {
//           return item[0] !== id;
//         })
//       })
//     );
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>ToDo List</h1>
//         <form onSubmit={this.handleSubmit} className="add-todo">
//           <input
//             type="text"
//             placeholder="Add Todo"
//             value={this.state.todo}
//             onChange={this.handleChange}
//           />
//           <button className="btn" type="submit">
//             Add
//           </button>
//         </form>
//         {this.renderTodos()}
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
