'use client'
import React, { useState, useContext } from "react";
import { Modal, Backdrop, Fade, Box, Typography, Button } from "@mui/material";
import { GlobalContext } from "./context/globalcontext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.default",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  p: 4,
  outline: "none",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

const cancelButtonStyle = {
  color: "text.primary",
  borderColor: "text.primary",
};

const deleteButtonStyle = {
  backgroundColor: "error.main",
  color: "#fff",
};

interface DeleteProps {
  itemId: string;
}

const Delete: React.FC<DeleteProps> = ({ itemId }) => {
  const [open, setOpen] = useState(false);
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Delete must be used within a GlobalProvider");
  }

  const { dlt } = context;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <svg
        onClick={handleOpen}
        className="deletebox ml-[615px] mt-1 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        fill="gray"
        viewBox="0 0 24 24"
      >
        <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
      </svg>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "text.primary", fontWeight: "bold", textAlign: "center" }}
            >
              Are you sure you want to delete this post?
            </Typography>
            
            <div style={buttonContainerStyle}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={cancelButtonStyle}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  dlt(itemId);
                  handleClose();
                }}
                sx={deleteButtonStyle}
              >
                Yes, Delete
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Delete;
