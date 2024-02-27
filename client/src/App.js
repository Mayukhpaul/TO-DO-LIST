import HomeLayout from "./Layouts/HomeLayout";
import TaskLayout from "./Layouts/TaskLayout";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.params = {};

const App = () => {
  return (
    <>
      <div className="flex bg-basic-50 h-screen min-h-full gap-8 lg:gap-80">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/taskpage" element={<TaskLayout />} />
          <Route path="/taskpage/:title" element={<TaskLayout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
