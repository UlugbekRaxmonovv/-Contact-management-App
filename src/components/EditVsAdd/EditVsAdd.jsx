import React,{memo} from "react";
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    } from "@mui/material";
  import { PatternFormat } from 'react-number-format'

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
          {dialogType === "add" ? "Contact add" : "Contact Update"}
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
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
          </Box>
          <Box mb={2}>
              <PatternFormat
                 customInput={TextField}
              placeholder='+998 (__) ___-__-__'
              format="+998 (##) ###-##-##"
              mask="_"
              value={phone}
              onValueChange={(values) => setPhone(values.formattedValue)}
              className="w-full px-2 py-1 border rounded"
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

export default memo(EditVsAdd);
