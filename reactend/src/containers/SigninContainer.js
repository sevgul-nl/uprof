import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUser, logoutUser } from '../actions';
import { isActive } from '../reducers';
import SigninForm from '../components/SigninForm';

class SigninContainer extends Component {
  render() {
    const { getUser, logoutUser, isActive } = this.props;
    return (
      <SigninForm
        loginUser={getUser}
        logoutUser={logoutUser}
        isActive={isActive}
      />
    );
  }
}

SigninContainer.propTypes = {
  getUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isActive: isActive(state),
});

export default connect(mapStateToProps, { getUser, logoutUser })(
  SigninContainer
);
