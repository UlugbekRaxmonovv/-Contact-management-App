import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
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
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const validateEmail = (email) => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email must contain @ and domain (e.g., example@gmail.com)");
      return false;
    }
    return true;
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 12 || !cleanPhone.startsWith("998")) {
      alert("Phone number must be in format: +998 XX XXX XX XX");
      return false;
    }
    return true;
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleAddTask = () => {
    setDialogType("add");
    setIsDialogOpen(true);
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleEditTask = (id) => {
    const taskToEdit = data.find((task) => task.id === id);
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
    if (!name || !phone || !email) {
      alert("Please fill in all fields!");
      return;
    }
    if (!validateEmail(email) || !validatePhone(phone)) {
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

  return (
    <Box p={4}>
      <AddSearch
        handleAddTask={handleAddTask}
        setSearch={setSearch}
        search={search}
      />

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
        setIsDialogOpens={setIsDialogOpen}
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

export default Tasks;
