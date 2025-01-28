import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";  
import "./App.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
