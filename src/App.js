import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { CustomModalDialog } from './components/CustomModalDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1>React Modal Component Example</h1>
      <Button onClick={handleDialogOpen} variant='outlined' color='primary'>
        Click to Dialog
      </Button>
      <CustomModalDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title='Modal Title'
        subtitle='Some subtitle text'
      >
        <p>Hi, children are here!</p>
        <p>You can insert here any Additional Component </p>
      </CustomModalDialog>
    </div>
  );
}

export default App;
