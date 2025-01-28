import React from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
const AddSearch = ({handleAddTask, setSearch, search}) => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        flexWrap="wrap"
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: 40,
            textTransform: "none",
            marginBottom: { xs: 2, sm: 0 },
          }}
          onClick={handleAddTask}
        >
          Add contact
        </Button>

        <TextField
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 40,
              paddingRight: 0,
            },
            width: { xs: "100%", sm: "auto" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default AddSearch;
