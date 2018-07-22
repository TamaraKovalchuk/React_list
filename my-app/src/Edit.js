import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('root'));
class Edit extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#43803C';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
      return (
              <React.Fragment>
                <button className="edit-btn" type='button' onClick={this.openModal}>
                  Edit
                </button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                >

                  <h2 className = "h2" ref={subtitle => this.subtitle = subtitle}>Edit student name</h2>
                  <form className = "form-edit">
                    <input type="text" ref="itemName" defaultValue={this.props.editStudent.nameStudent}/>
                      <button type="button" className = "add" onClick={this.saveStudent}>Save</button>
                      <button type="button" className = "close" onClick={this.closeModal}>Cancel</button>
                  </form>
                </Modal>
                </React.Fragment>
            );
         }
          saveStudent = () => {
            this.props.editStudent.nameStudent = this.refs.itemName.value;
            this.props.editStudentCallback(this.props.editStudent);
            this.closeModal();
            };
      }
export default Edit;
