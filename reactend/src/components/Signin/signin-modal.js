import React from 'react';
import Modal from './modal';

const SigninModal = ({ openModal, setOpenModal }) => {
  return (
    <div>
      <Modal open={openModal}>
        <div className="form-group mb-2">
          <label htmlFor="" className="mb-2">
            Email Address <span>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="mb-2">
            Country <span>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="mb-2">
            Phone <span>*</span>
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <label htmlFor="" className="mb-2">
              Username <span>*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: '.5em' }}>Gender</div>
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group mb-2">
          <label htmlFor="" className="mb-2">
            Password <span>*</span>
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="" className="mb-2">
            Contact Info <span>*</span>
          </label>
          <div className="contact-info">
            <div className="info-items">
              <button className="remove">x</button>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="" className="mb-2">
                    Phone Number <span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="mb-2">
                    Address <span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary w-100">Create Account</button>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ fontSize: '1em' }}>
            <div className="d-flex">
              <div>Already have an account?</div>
              <div
                className="login"
                style={{ color: '#0d6efd' }}
                onClick={() => setOpenModal(false)}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SigninModal;
