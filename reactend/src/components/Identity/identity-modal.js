import React from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Wizard from './wizard';
import Modal from './modal';
import Styles from './styles';
//import { createUser, loginUser } from '../../actions';
import { createUser } from '../../actions';
import './styles.css';

//const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (user) => {
  //await sleep(300);
  //window.alert(JSON.stringify(values, 0, 2));
  const { username } = user;
  if (typeof username !== 'undefined') {
    //const { createUser } = props;
    return createUser(user)
      .then((response) => {
        this.handleCreateUserSuccess(user);
      })
      .catch((error) => {
        this.setState({
          hasError: true,
          error: error,
        });
      });
  }
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = (value) => (value ? undefined : 'Required');

const IdentiyModal = ({ openIdentityModal, setOpenIdentityModal, user }) => {
  const handleSubmit = (user) => {
    onSubmit(user);
  };

  return (
    <Styles>
      <Modal open={openIdentityModal}>
        <h1>Identity</h1>
        <h2>User Profile</h2>

        <Wizard
          //initialValues={{ employed: true, stooge: 'larry' }}
          onSubmit={handleSubmit}
        >
          <Wizard.Page>
            <div className="form-group mb-2 ">
              <label className="mb-2">Username</label>
              <Field
                name="username"
                component="input"
                type="text"
                placeholder="Username"
                validate={required}
              />
              <Error name="userame" />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
                validate={required}
              />
              <Error name="password" />
            </div>
            <div>
              <label>Conf.Password</label>
              <Field
                name="confpassword"
                component="input"
                type="password"
                placeholder="Confirm Password"
                validate={required}
              />
              <Error name="confirmpassword" />
            </div>

            <div>
              <label>email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="email"
              />
              <Error name="email" />
            </div>
            <div className="d-flex align-items-center">
              <label>Gender</label>
            </div>
            <div>
              <label>Female</label>
              <Field
                name="gender"
                component="input"
                type="range"
                value="50"
              ></Field>
              <label>Man</label>
              <Error name="gender" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <div>
              <label>City</label>
              <Field name="city" component="select">
                <option value="Amsterdam">Amsterdam</option>
                <option value="Almere">Almere</option>
                <option value="Utrecht">Utrecht</option>
                <option value="Rotherdam">Rotherdam</option>
                <option value="Ankara">Ankara</option>
              </Field>
              <Error name="city" />
            </div>
            <div>
              <label>Politics</label>

              <Field name="ideology" component="select">
                <option value="Democracy">Democracy</option>
                <option value="Conservative">Conservative</option>
                <option value="Environmentalism">Environmentalism</option>
                <option value="Nationalism">Nationalism</option>
                <option value="Liberalism">Liberalism</option>
              </Field>
              <Error name="ideology" />
            </div>
            <div>
              <label>Democrat</label>
              <Field
                name="politics"
                component="input"
                type="range"
                value="50"
              ></Field>
              <label>Radical</label>
            </div>
          </Wizard.Page>
        </Wizard>
      </Modal>
    </Styles>
  );
};

IdentiyModal.propTypes = {
  //ip: PropTypes.string.isRequired,
  //  host: PropTypes.string.isRequired,
  createUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

//const mapStateToProps = (state) => ({});

//export default IdentiyModal;
//export default connect(mapStateToProps, { createUser, loginUser })(
//  IdentiyModal
//);

export default IdentiyModal;
