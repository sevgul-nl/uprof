import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import './styles.css';

const Message = ({ type, message, label, handleClick, containerElement }) => {
  const styles = {
    color: '#fff',
    backgroundColor: '#099CEC',
  };
  const labelstyles = {
    textTransform: 'none',
    fontFamily: 'Open Sans',
    fontWeight: 600,
  };
  const messageClass = type === 'success' ? 'successMessage' : 'errorMessage';

  return (
    <div className="messageContainer">
      <div className="container">
        <div className="row">
          <div className={messageClass}>{message}</div>
        </div>
        <div className="row">
          <div className="successButton">
            <Button
              label={label}
              onClick={handleClick}
              containerElement={containerElement}
              style={styles}
              labelstyle={labelstyles}
            >
              {label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  containerElement: PropTypes.func,
};

export default Message;
