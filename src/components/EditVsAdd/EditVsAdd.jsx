import React from "react";
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    
  } from "@mui/material";
  import { NumericFormat } from "react-number-format";

const EditVsAdd = ({
  dialogType,
  handleDialogSubmit,
  setIsDialogOpen,
  setEmail,
  email,
  setPhone,
  phone,
  setName,
  name,
  setIsDialogOpens,
  isDialogOpen,
}) => {
  return (
    <div>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpens(false)}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "400px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle>
          {dialogType === "add" ? "Add Task" : "Edit Task"}
        </DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
          </Box>
          <Box mb={2}>
            <NumericFormat
              customInput={TextField}
              fullWidth
              format="+998 ## ### ## ##"
              mask="_"
              label="Phone"
              value={phone}
              onValueChange={(values) => setPhone(values.formattedValue)}
              margin="normal"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} color="primary">
            {dialogType === "add" ? "Add" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditVsAdd;
