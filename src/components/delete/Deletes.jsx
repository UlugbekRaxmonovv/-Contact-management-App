import React, {memo} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
const Deletes = ({
  confirmDeleteTask,
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
}) => {
  return (
    <>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "400px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this contact?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setIsDeleteDialogOpen(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button onClick={confirmDeleteTask} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(Deletes);
