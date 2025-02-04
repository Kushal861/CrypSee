import { Snackbar } from "@material-ui/core";
import React from "react";
import { CryptoState } from "../CryptoContext";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = () => {
  const { alert, setAlert } = CryptoState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={4000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        elevation={10}
        varient="filled"
        sevrity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
