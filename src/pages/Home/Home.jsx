import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import Taskcard from "../../component/Taskcard/Taskcard";

const SectionName = ({ name, color = "", className = "" }) => {
  return (
    <>
      <div
        className={`${className} flex  flex-cols md:px-5 md:pt-2 shadow-lg bg-white items-start justify-between`}
      >
        <div>{name}</div>
        <div className={`${color} text-xl`}>
          <FaCirclePlus />
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-cols md:px-5 items-start justify-between bg-white  min-h-full gap-5">
        <div className="border-t-4 border-t-primary w-full">
          <SectionName className="" name="Ongoing" color="text-primary" />
          <Taskcard status="ongoing" />
        </div>
        <div className=" border-t-4 border-t-secondary w-full">
          <SectionName className="" name="Hold" color="text-secondary" />
          <Taskcard status="hold" />
        </div>
        <div className="w-full border-t-4 border-t-pink ">
          <SectionName className="" name="Completed" color="text-pink" />
          <Taskcard status="completed" />
        </div>
      </div>
    </div>
  );
};

export default Home;
