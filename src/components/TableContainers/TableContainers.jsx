import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const TableContainers = ({
  paginatedData,
  handleDeleteTask,
  handleEditTask,
  page,
  pageSize,
}) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} >
                №
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell >
                  {(page - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.email}</TableCell>
                <TableCell style={{ whiteSpace: "nowrap" }}>
                  {task.phone}
                </TableCell>
                <TableCell align="center" style={{ whiteSpace: "nowrap" }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditTask(task.id)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(TableContainers);
