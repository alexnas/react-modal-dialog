import React, { Fragment } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import PropTypes from 'prop-types';

export const CustomModalDialog = ({
  isOpen,
  handleClose,
  title,
  subtitle,
  children
}) => {
  return (
    <Fragment>
      <Dialog
        fullwidth='md'
        open={isOpen}
        onClose={handleClose}
        area-lablledby='custom-dialog-title'
      >
        <DialogTitle id='custom-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

CustomModalDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired
};

CustomModalDialog.defaultProps = {
  isOpen: false,
  title: 'Default Title'
};
