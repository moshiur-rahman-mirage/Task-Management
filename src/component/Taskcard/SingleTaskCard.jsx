import React from "react";

const SingleTaskCard = ({ task }) => {
  const { task_name,task_description,task_status } = task;

  return (
    <div className="mt-2 rounded-lg bg-white">
      <div className=" rounded-lg overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task_name}</div>
          <p className="text-gray-700 text-base">
            {task_description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {task_status}
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default SingleTaskCard;
