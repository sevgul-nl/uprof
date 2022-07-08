import React, { Component, PropTypes } from 'react';
import { Button } from '@mui/material';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import reducer from '../../reducers';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import CreateUserForm from '../CreateUserForm';
import SuccessMessage from '../SuccessMessage';
import SigninForm from '../SigninForm';
//import { createUser, loginUser } from '../../actions';
import './styles.css';
import '../globalStyles.css';

//const store = createStore(reducer);
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.27)',
    height: '100%',
    width: '100%',
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0x',
  },
};

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModalOpen: false,
      isLoginModalOpen: false,
      authenticated: null,
      loginSuccessful: false,
      createUserSuccessful: false,
    };
  }

  //render() {
  //  return (
  //    <div>
  //      <h2>Baki was here !..</h2>
  //    </div>
  //  );
  // }
  /*
  


  render1() {
    return (
      <div className="globalContainer">
        <div className="navHeader">
          <div className="navUser">{this.renderContainerId()}</div>
        </div>
      </div>
    );
  }

*/
  toggleCreateModal = () => {
    this.setState({
      isCreateModalOpen: !this.state.isCreateModalOpen,
    });
  };

  toggleLoginModal = () => {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen,
    });
  };

  renderCreateModal = () => {
    const successMessage = 'Congratulations! Your account has been created!';
    const content = this.state.createUserSuccessful ? (
      <SuccessMessage
        message={successMessage}
        label={'Continue Shopping'}
        handleClick={this.toggleCreateModal}
      />
    ) : (
      <CreateUserForm
        onSubmit={this.handleCreateUser}
        onSubmitFail={this.handleSubmitFail}
      />
    );
    return (
      <Modal
        isOpen={this.state.isCreateModalOpen}
        onRequestClose={this.toggleCreateModal}
        style={customStyles}
        contentLabel={''}
      >
        <div className="formContainer">{content}</div>
      </Modal>
    );
  };

  renderLoginModal = () => {
    return (
      <Modal
        isOpen={this.state.isLoginModalOpen}
        onRequestClose={this.toggleLoginModal}
        style={customStyles}
        contentLabel={''}
      >
        <div className="formContainer">
          <SigninForm onSubmit={this.handleLogin} />
        </div>
      </Modal>
    );
  };

  renderUnauthenticated() {
    const styles = {
      color: '#fff',
    };
    const labelStyles = {
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
    };

    return (
      <div>
        <Button
          style={styles}
          labelStyle={labelStyles}
          onClick={this.toggleCreateModal}
          label="Create User"
        >
          Create User
        </Button>
        <Button
          style={styles}
          labelStyle={labelStyles}
          onClick={this.toggleLoginModal}
        >
          Sign in
        </Button>
      </div>
    );
  }

  renderAuthenticated() {
    const styles = {
      color: '#fff',
    };
    const labelStyles = {
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
    };

    return (
      <div>
        <Button
          variant=""
          style={styles}
          labelStyle={labelStyles}
          onClick={this.removeToken}
        >
          Sign out
        </Button>
      </div>
    );
  }

  removeToken = () => {
    this.setState({
      isCreateModalOpen: false,
      isLoginModalOpen: false,
      authenticated: false,
      loginSuccessful: false,
      createUserSuccessful: false,
    });
  };

  render() {
    return (
      <div className="globalContainer">
        <div className="navHeader">
          <div className="navUser">
            <div className="buttonSection">
              {this.state.authenticated === true
                ? this.renderAuthenticated()
                : this.renderUnauthenticated()}
            </div>
            {this.renderCreateModal()}
            {this.renderLoginModal()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

//TopNav1.propTypes = {
//ip: PropTypes.string.isRequired,
//  host: PropTypes.string.isRequired,
//  createUser: PropTypes.func.isRequired,
//  loginUser: PropTypes.func.isRequired,
//};

export default connect(mapStateToProps)(TopNav);
//export default connect(mapStateToProps, { createUser, loginUser })(TopNav1);
//export default TopNav1;
