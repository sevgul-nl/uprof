import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import IdentityModal from './identity-modal';

import './styles.css';
import { startCreatingUser } from '../../store/state-actions';

const styles = {
  color: '#fff',
  textTransform: 'none',
  fontWeight: 800,
  fontSize: 15,
};

const mapStateToProps = (storeData) => ({
  editing: storeData.stateData.editing,
  selected: storeData.modelData.user,
  user: storeData.modelData.user,
  //storeData.modelData.products.find(
  //  (item) => item.id === storeData.stateData.selectedId
  //) || {},
});

const mapDispatchToProps = {
  createProduct: startCreatingUser,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const Identity = connectFunction(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {
          id: props.user.id || '',
          username: props.user.username || '',
          password: props.user.password || '',
          confpassword: props.user.confpassword || '',
        },
      };
      this.state = {
        openIdentityModal: '',
      };
      this.setOpenIdentityModal = this.setOpenIdentityModal.bind(this);
    }

    setOpenIdentityModal(bValue) {
      this.setState({ openIdentityModal: bValue });
    }

    handleChange = (ev) => {
      ev.persist();
      this.setState(
        (state) => (state.formData[ev.target.name] = ev.target.value)
      );
    };

    handleClick = () => {
      this.props.saveCallback(this.state.formData);
    };

    render() {
      return (
        <>
          {this.state.openIdentityModal && this.state.openIdentityModal && (
            <IdentityModal
              openIdentityModal={this.state.openIdentityModal}
              setOpenIdentityModal={() => this.setOpenIdentityModal(false)}
            />
          )}
          <Button
            styles={styles}
            onClick={() => {
              this.setOpenIdentityModal(true);
            }}
            className="btn btn-primary"
            sx={styles}
          >
            Identity
          </Button>
        </>
      );
    }
  }
);
