import { useDraggable } from "@dnd-kit/core";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { NavLink } from "react-router-dom";
import UpdateTask from "./UpdateTask";
import 'react-responsive-modal/styles.css';
const SingleTaskCard = ({ color, task, onDragStart }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
console.log(open)
  const { task_name, task_description, task_status, _id, task_priority } = task;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: _id,
    onDragStart: () => onDragStart(task),
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;



    const handleDelete = (_id) => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result) => {
          if (result.isConfirmed) {

              axiosSecure.delete(`/task/${id}`)
                  .then(res => {
                      if (res.data.deletedCount > 0) {
                          refetch();
                          Swal.fire({
                              title: "Deleted!",
                              // text: `${name} has been deleted.`,
                              icon: "success"
                          });
                      }
                  })
          }
      });
  }








  return (
    <div
      className="mt-2 rounded-lg bg-white"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className={`rounded-lg overflow-hidden shadow-lg`}>
        {/* ${color}  */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{task_name}</div>
          <p className="text-gray-700 text-base">{task_description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 gap-10 flex flex-row justify-center items-center">
          <div className="flex items-center flex-row justify-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {task_status}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {task_priority}
            </span>
          </div>

          <div className="card-actions">
                       
                        <button onClick={onOpenModal} className="btn btn-ghost">Update</button>
                    </div>
          <button onClick={()=>handleDelete(_id)} className="btn btn-secondary">Delete</button>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <UpdateTask task={task} />
        </Modal>
      </div>
    </div>
  );
};

export default SingleTaskCard;
