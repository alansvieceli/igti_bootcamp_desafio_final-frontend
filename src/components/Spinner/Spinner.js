import React from 'react';
import Modal from 'react-modal';
import css from './spinner.module.css';

Modal.setAppElement('#root');

const Spinner = ({ description }) => {
  return (
    <Modal isOpen={true} style={styles}>
      <div className={css.flexRow}>
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className={css.description}>{description}</div>
      </div>
    </Modal>
  );
};

const styles = {
  content: {
    position: 'absolute',
    top: '42%',
    left: '35%',
    right: '35%',
    bottom: '43%',
  },
};

export default Spinner;
