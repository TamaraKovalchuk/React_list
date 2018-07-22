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
class Add extends Component {
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
                  <button type='button' className = "icon-add2" onClick={this.openModal}><i className="material-icons">add_box</i>
                    <p className = "p">Add</p>
                  </button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >

                    <h2 className = "h2" ref={subtitle => this.subtitle = subtitle}>Enter Name new student</h2>
                    <form className = "form-add">
                      <input type="text" ref="itemName"/>
                        <button type="button" className = "add" onClick={this.addStudent}>Add</button>
                        <button type="button" className = "close" onClick={this.closeModal}>Close</button>
                    </form>
                  </Modal>
                  </React.Fragment>
              );
           }
            addStudent = () => {
              this.props.addNewStudent(this.refs.itemName.value);
              };
      }
export default Add;
