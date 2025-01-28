import React from "react";
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
              <TableCell align="center">№</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((task, index) => (
              <TableRow key={task.id}>
                <TableCell align="center">
                  {(page - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.email}</TableCell>
                <TableCell>{task.phone}</TableCell>
                <TableCell align="center">
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

export default TableContainers;
