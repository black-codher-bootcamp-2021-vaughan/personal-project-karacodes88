import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';


export const Success =()=> {
  const [open, setOpen] =useState(true)

  
    return (
    
        <>
          <Dialog
            open={open}
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            <button onClick={()=> setOpen(false)}>
              close me
            </button>
          </Dialog>
        </>
    
    );
  }


export default Success;