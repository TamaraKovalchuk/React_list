import React, { Component } from 'react';
import Edit from './Edit';
import { RIEInput } from 'riek'
import Pagination from "react-js-pagination";
import { Router, Route, Switch } from 'react-router';
var Router = require('react-router').Router
var Route = require('react-router').Route
var Switch = require('react-router').Switch


class List extends Component {

  constructor(props) {
    super(props);
    this.getDataChangedHandler = this.getDataChangedHandler.bind(this);
    this.state = {
      itemsPerPage: 3,
      activePage: 1,
      renderedUsers: this.props.todos,
      totalItemsCount: 0
    };
  }

  handlePageChange = (pageNumber) => {
    const renderedUsers = this.props.todos
      .slice((pageNumber - 1) * this.state.itemsPerPage,
        pageNumber * this.state.itemsPerPage);
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber, renderedUsers: renderedUsers});
  }

  getDataChangedHandler(student) {
    return (data) => {
      console.log(data);
      student.nameStudent = data.inputValue;
      this.props.editStudentCallback(student);
    }
  }

  static getDerivedStateFromProps(props, state) {
    state.renderedUsers = props.todos
      .slice((state.activePage - 1) * state.itemsPerPage,
        state.activePage * state.itemsPerPage);
    state.totalItemsCount = props.todos.length;
  }

  render() {
      return (
                <div>
                  <h1>Lv-330.Node.js</h1>
                  <ol>
                    {this.state.renderedUsers.map(stud =>(<li key={stud.id}>

                      <RIEInput
                        value={stud.nameStudent}
                        propName='inputValue'
                        change={this.getDataChangedHandler(stud)}
                        classEditing = "classEditing"
                      />
                    <div className="button">
                    <i className="material-icons">edit</i>
                    <Edit editStudent={stud}
                          editStudentCallback={this.props.editStudentCallback}/>
                    <i className="material-icons">delete</i>
                    <input
                      type="button"
                      onClick={this.getDeleteHandler(stud)}
                      value="Delete"
                      className="del-btn"
                    />
                    </div>
                      </li>))}
                  </ol>
                  <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                      style = "display: flex"
                    />
                </div>

              );
           }

      getDeleteHandler(item) {
        return () => {
          this.props.deleteStudentCallback(item);
        };
      }
}
export default List;

