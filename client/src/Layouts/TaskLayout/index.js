import React from "react";
import Search from "../../Components/Search";
import Card from "../../Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskLayout = () => {
  const [task, setTask] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const getAllTasks = async () => {
      if (title) {
        const allTasks = await axios.get(`/task/${title}`);
        console.log(allTasks);
        setTask(allTasks.data.task);
      } else {
        const allTasks = await axios.get("/task");
        console.log(allTasks);
        setTask(allTasks.data.tasks);
      }
    };

    getAllTasks();
  }, []);

  return (
    <>
      <div className="w-60 ml-24 md:w-full md:mx-12 md:ml-24 lg:mx-60">
        <Search />
        <div>
          <div className="flex flex-col mt-8 lg:mt-16 lg:mx-8">
            {task.map((eachTask) => (
              <Card title={eachTask.title} desc={eachTask.description} _id={eachTask._id}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskLayout;
