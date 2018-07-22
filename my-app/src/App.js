import React, { Component } from "react";
import List from "./List";
import Add from "./Add";
import "./css/App.css";

class App extends Component {
  state = {
    inputValue: "initial input",
    todos: [
      { id: 1, nameStudent: "Tamara Kovalchuk" },
      { id: 2, nameStudent: "Anna Dron" },
      { id: 3, nameStudent: "Maksym Javir" },
      { id: 4, nameStudent: "Andrii Korin" },
      { id: 5, nameStudent: "Iurii Besidka" },
      { id: 6, nameStudent: "Vitalii Dvorian" },
      { id: 7, nameStudent: "Volodja Pitchuk" },
      { id: 8, nameStudent: "Artur Khomenko" }
    ]
  };

  addNewStudent = studentName => {
    this.state.todos.push({
      id: this.state.todos.length + 1,
      nameStudent: studentName
    });
    this.setState({
      todos: this.state.todos
    });
  };

  deleteStudent = student => {
    var delStudent = this.state.todos.indexOf(student);
    this.state.todos.splice(delStudent, 1);
    this.setState({
      todos: this.state.todos
    });
  };

  editStudent = student => {
    var editStudent = this.state.todos.indexOf(student);
    this.state.todos[editStudent].nameStudent = student.nameStudent;
    this.setState({
      todos: this.state.todos
    });
  };

  render() {
    return (
      <React.Fragment>
        <List
          todos={this.state.todos}
          deleteStudentCallback={this.deleteStudent}
          editStudentCallback={this.editStudent}
        />
        <Add addNewStudent={this.addNewStudent} />
      </React.Fragment>
    );
  }
}

export default App;
