import React from "react";

const Mytask = () => {
  return (
    <div className="bg-red-300 min-h-screen ">
      <div className="text-black text-4xl">Add New Task</div>
      <div className="grid grid-cols-4">
        <div className="border min-h-screen">Create One</div>
        <div className="border min-h-screen">Open</div>
        <div className="border min-h-screen">Pending</div>
        <div className="border min-h-screen">Closed</div>
      </div>
    </div>
  );
};

export default Mytask;
