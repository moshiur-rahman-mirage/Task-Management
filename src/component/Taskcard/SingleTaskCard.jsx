import { useDraggable } from "@dnd-kit/core";
import React from "react";

const SingleTaskCard = ({ color, task,onDragStart }) => {

  
  const { task_name,task_description,task_status,_id } = task;
 
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: _id,
    onDragStart: () => onDragStart(task),
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div className="mt-2 rounded-lg bg-white" 
    ref={setNodeRef} 
    style={style} 
    {...listeners} 
    {...attributes}>

      <div className={`rounded-lg overflow-hidden shadow-lg`} >
      {/* ${color}  */}
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
