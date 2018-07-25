import React, { Component } from "react";
import axios from "axios"
import List from "./List";
import Add from "./Add";
import "./css/App.css";

class App extends Component {

    axiosInst = axios.create({
      baseURL: 'http://localhost:4000',
      timeout: 5000
    });

  state = {
    inputValue: "initial input",
    todos: [
    ]
  };

  componentDidMount() {
    this.getTodos();
  }

  addNewStudent = studentName => {
    let _this = this;
    this.axiosInst.post('/', {
      nameStudent: studentName
    })
    .then(function(response) {
      _this.state.todos.push(response.data);
      _this.setState({
        todos: _this.state.todos
      });
    })
    .catch(function (error) {
        _this.handleError(error);
    });
  };

  deleteStudent = student => {
    let _this = this;
    var delStudent = this.state.todos.indexOf(student);
    this.axiosInst.delete('/delete/' + student.id)
    .then(function(response) {
      _this.state.todos.splice(delStudent, 1);
      _this.setState({
        todos: _this.state.todos
      });
    })
    .catch(function (error) {
        _this.handleError(error);
    });
  };

  editStudent = student => {
    let _this = this;
    var editStudent = this.state.todos.indexOf(student);

    this.axiosInst.post('/edit/' + student.id, {
      nameStudent: student.nameStudent
    })
    .then(function(response) {
      _this.state.todos[editStudent].nameStudent = student.nameStudent;
      _this.setState({
        todos: _this.state.todos
      });
    })
    .catch(function (error) {
        _this.handleError(error);
    });
  };

  getTodos = () => {
    let _this = this;
    // GET request for remote image
    this.axiosInst.get('/users')
    .then(function(response) {
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      _this.setState({
        todos: response.data.teammates
      });
    })
    .catch(function (error) {
        _this.handleError(error);
      });
    return [];
  }

  handleError = (error) => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }

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
