import { IconButton, Snackbar } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";

interface IToastProps {
  msg: string;
  horizontal?: "left" | "center" | "right";
  vertical?: "bottom" | "top";
}

const Toast = forwardRef(
  ({ msg, horizontal = "left", vertical = "bottom" }: IToastProps, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setOpen(true);
      }
    }));

    const onClose = () => {
      setOpen(false);
    };

    return (
      <Snackbar
        anchorOrigin={{
          vertical,
          horizontal
        }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={msg}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onClose}
            >
              x
            </IconButton>
          </React.Fragment>
        }
      />
    );
  }
);

Toast.displayName = "Toast";
export default Toast;
