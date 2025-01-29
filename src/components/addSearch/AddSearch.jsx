import React, { memo } from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
const AddSearch = ({
  handleAddTask,
  setSearch,
  search,
  handleSort,
  sortOrder,
}) => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        flexWrap="wrap"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={5}>
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

          <Button
            onClick={handleSort}
            className={
              sortOrder === "asc"
                ? "bg-gray-500 rounded-full text-gray-200 font-poppins"
                : "bg-gray-500 rounded-full text-white font-poppins"
            }
          >
            {sortOrder === "asc" ? "↓ Tartiblash" : "↑ Tartiblash"}
          </Button>
        </Box>

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

export default memo(AddSearch);
