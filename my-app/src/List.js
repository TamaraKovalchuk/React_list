import React, { Component } from 'react';
import Edit from './Edit';
import { RIEInput } from 'riek'


class List extends Component {

  constructor(props) {
    super(props);
    this.getDataChangedHandler = this.getDataChangedHandler.bind(this);
  }

  getDataChangedHandler(student) {
    return (data) => {
      console.log(data);
      student.nameStudent = data.inputValue;
      this.props.editStudentCallback(student);
    }
  }

  render() {
      return (
                <div>
                  <h1>Lv-330.Node.js</h1>
                  <ol>
                    {this.props.todos.map(stud =>(<li key={stud.id}>

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

