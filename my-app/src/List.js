import React, { Component } from 'react';
import Edit from './Edit';

class List extends Component {

  render() {
      return (
                <div>
                  <h1>Lv-330.Node.js</h1>
                  <ol>
                    {this.props.todos.map(stud =>(<li key={stud.id}>
                      {stud.nameStudent}
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

