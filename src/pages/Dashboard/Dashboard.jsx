import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import Taskcard from "../../component/Taskcard/Taskcard";
import TaskAdd from "../../component/TaskAdd";

const SectionName = ({ name, color = "", className = "" }) => {
  return (
    <>
      <div
        className={`${className} flex rounded-es-md rounded-ee-md flex-cols md:px-5 md:pt-2 shadow-lg bg-white items-start justify-between`}
      >
        <div>{name}</div>
        <div className={`${color} text-xl`}>
          <FaCirclePlus />
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {


  const [tasks, setTasks] = useState([
    { _id: 1, task_name: "Task 1", task_status: "ongoing" },
    { _id: 2, task_name: "Task 2", task_status: "hold" },
    { _id: 3, task_name: "Task 3", task_status: "completed" },
  ]);

  const handleDropTask = (task, newStatus) => {
    console.log('c')
    const updatedTasks = tasks.map((t) =>
      t._id === task._id ? { ...t, task_status: newStatus } : t
    );

    setTasks(updatedTasks);
  };



  return (
    <div className=" pt-20">
      <div className="grid md:grid-cols-4 grid-cols-1 md:px-5 items-start justify-between bg-white-200  min-h-full gap-5">
        <div className="border-t-4 border-t-primary w-full">
          <SectionName className="" name="To Do" color="text-primary" />
          <Taskcard status="todo" color="br-primary" onDropTask={handleDropTask} />
        </div>
        <div className=" border-t-4 border-t-secondary w-full">
          <SectionName className="" name="On Going" color="text-secondary" />
          <Taskcard status="ongoing" color="bg-secondary" onDropTask={handleDropTask} />
        </div>
        <div className="w-full border-t-4 border-t-pink ">
          <SectionName className="" name="Completed" color="text-pink" />
          <Taskcard status="completed" color="bg-pink" onDropTask={handleDropTask} />
        </div>
        <div className="w-full  border-t-4 border-t-primary ">
          <SectionName className="" name="Add New Task" color="text-pink" />
          <TaskAdd/>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
