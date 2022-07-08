import React, { PropTypes, Component } from 'react';
import { Field } from 'react-final-form';
import { Button } from '@mui/material';
import Input from '../Input';
import './styles.css';
import validate from './validate.js';

class SigninForm extends Component {
  renderSignin() {
    return (
      <div>
        <div className="signinFormHeader">Sign in to your account</div>
        <div className="signinFormRow">
          <Field
            name="username"
            component={(username) => (
              <Input field={username} hintText={'Username'} />
            )}
          />
          <Field
            name="password"
            component={(password) => (
              <Input type={'password'} field={password} hintText={'Password'} />
            )}
          />
        </div>
      </div>
    );
  }

  renderButtons() {
    const { handleSubmit } = this.props;
    const styles = {
      color: '#fff',
      backgroundColor: '#099CEC',
    };
    const labelStyles = {
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
    };

    return (
      <div className="signinFormButton">
        <Button
          label="Sign in"
          onClick={handleSubmit}
          style={styles}
          labelStyle={labelStyles}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, error } = this.props;

    const err = error ? <span className="errorMessage">{error}</span> : null;

    return (
      <div className="signinFormContent">
        <form onSubmit={handleSubmit}>
          {this.renderLogin()}
          {err}
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

//SigninForm.propTypes = {
//handleSubmit: PropTypes.func.isRequired,
//};

export default SigninForm;
//= reduxForm({
//  form: 'signinForm',
//  validate,
//})(SigninForm);
