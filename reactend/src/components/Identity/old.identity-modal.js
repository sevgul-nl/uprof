import React from 'react';
import Styles from './styles';
import { Field } from 'react-final-form';
import Wizard from './wizard';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
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

const Identity = () => {
  const genderRange = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  return (
    <Styles>
      <h1>Identity</h1>
      <h2>User Profile</h2>

      <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={onSubmit}
      >
        <Wizard.Page>
          <div>
            <label>User Name</label>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="User Name"
              validate={required}
            />
            <Error name="userame" />
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
          <div>
            <label>Gender</label>
            <Field
              name="gender"
              component="input"
              type="range"
              marks={genderRange}
            ></Field>
            <Error name="gender" />
          </div>
        </Wizard.Page>

        <Wizard.Page>
          <div>
            <label>City</label>
            <Field name="city" component="select">
              <option value="Amsterdam">Amsterdam</option>
              <option value="Almere">🍄 Almere</option>
              <option value="Utrecht">🧀 Utrecht</option>
              <option value="Rotherdam">Rotherdam</option>
              <option value="Ankara">Ankara</option>
            </Field>
            <Error name="city" />
          </div>
        </Wizard.Page>
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.notes) {
              errors.notes = 'Required';
            }
            return errors;
          }}
        >
          <div>
            <label>Politics</label>
            <div>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="larry"
                />{' '}
                Larry
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="moe"
                />{' '}
                Moe
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="curly"
                />{' '}
                Curly
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
            <Error name="notes" />
          </div>
        </Wizard.Page>
      </Wizard>
    </Styles>
  );
};

export default Identity;
