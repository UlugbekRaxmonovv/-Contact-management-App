import React, { useState, memo } from "react";
import { Box, Button, Pagination } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import EditVsAdd from "../../components/EditVsAdd/EditVsAdd";
import Deletes from "../../components/delete/Deletes";
import TableContainers from "../../components/TableContainers/TableContainers";
import AddSearch from "../../components/addSearch/AddSearch";

const Tasks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tasksData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const pageSize = 4;


  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return cleanPhone.length === 12 && cleanPhone.startsWith("998");
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize);

  const handleAddTask = () => {
    setDialogType("add");
    setIsDialogOpen(true);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleEditTask = (id) => {
    const taskToEdit = data.find((task) => task.id === id);
    if (!taskToEdit) return;
    setDialogType("edit");
    setEditId(id);
    setName(taskToEdit.name);
    setPhone(taskToEdit.phone);
    setEmail(taskToEdit.email);
    setIsDialogOpen(true);
  };

  const handleDeleteTask = (id) => {
    setDeleteId(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteTask = () => {
    const newData = data.filter((task) => task.id !== deleteId);
    setData(newData);
    localStorage.setItem("tasksData", JSON.stringify(newData));
    setIsDeleteDialogOpen(false);
  };

  const handleDialogSubmit = () => {
    if (!validatePhone(phone)) {
      alert("Telefon raqami formati noto'g'ri: +998 XX XXX XX XX");
      return;
    }

    if (dialogType === "add") {
      const newTask = {
        id: uuidv4(),
        name,
        phone,
        email,
      };
      const newData = [...data, newTask];
      setData(newData);
      localStorage.setItem("tasksData", JSON.stringify(newData));
    } else {
      const newData = data.map((task) =>
        task.id === editId ? { ...task, name, phone, email } : task
      );
      setData(newData);
      localStorage.setItem("tasksData", JSON.stringify(newData));
    }
    setIsDialogOpen(false);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Box p={4}>
      <AddSearch handleAddTask={handleAddTask} setSearch={setSearch} search={search} handleSort={handleSort} sortOrder={sortOrder} />

    

      <TableContainers
        paginatedData={paginatedData}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        page={page}
        pageSize={pageSize}
      />

      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filteredData.length / pageSize)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>

      <EditVsAdd
        dialogType={dialogType}
        handleDialogSubmit={handleDialogSubmit}
        setIsDialogOpen={setIsDialogOpen}
        setEmail={setEmail}
        email={email}
        setPhone={setPhone}
        phone={phone}
        setName={setName}
        name={name}
        isDialogOpen={isDialogOpen}
      />
      <Deletes
        confirmDeleteTask={confirmDeleteTask}
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
      />
    </Box>
  );
};

export default memo(Tasks);
