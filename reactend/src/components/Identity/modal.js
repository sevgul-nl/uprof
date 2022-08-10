import React from 'react';
//import ReactDom from 'react-dom';
const MODAL_STYLES = {
  position: 'center',
  backgroundColor: 'rgb(165, 189, 238)',
  padding: '15px',
  zIndex: '1001',
  width: '100%',
  //borderRadius: '.5em',
};
const OVERLAY_STYLE = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0, .8)',
  zIndex: '1001',
  overflowY: 'auto',
};
const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div style={OVERLAY_STYLE}>
            <div style={MODAL_STYLES}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
