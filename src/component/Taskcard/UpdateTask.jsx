import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateTask = ({ task }) => {
    const { _id } = task



    const handleUpdate = (presentId, task) => {
        console.log(item)
        fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Data updated Successfully!',
                        icon: 'success'
                    })

                }
            })
    }


    const onSubmit = async (data) => {
        const Task = {
          task_name: data.Task_name,
          task_description: data.Task_description,
          task_deadline:data.deadline,
          task_priority:data.priority,
          task_status: "ongoing",
          email: user?.email,
        };
    
        const Task_res = await axiosSecure.put("/tasks", Task);
        if (Task_res.data._id) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.Task_name} is added as Task.`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          setLoading(true);
        } else {
          console.log("not uploaded");
        }
      };

    return (
        <div>
            <div className='py-5 font-bold'>Product Form</div>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="  w-full md:max-w-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  px-3 md:mb-2 mb-0">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-bold md:mb-2 mb-0"
              htmlFor="grid-first-name"
            >
              Task Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-red-500 rounded py-3 px-4 md:mb-3 mb-0 leading-tight focus:outline-none focus:bg-white"
              id="Task_name"
              type="text"
              {...register("Task_name", { required: true })}
              placeholder="Task Name"
            />
          </div>

          <div className="w-full  px-3 md:mb-2 mb-0">
            <label
              className="block uppercase tracking-wide text-dark-content text-xs font-bold md:mb-2 mb-0"
              htmlFor="grid-first-name"
            >
              Description
            </label>
            <textarea
              className="appearance-none textarea textarea-bordered block w-full bg-gray-200 text-dark border border-red-500 rounded py-3 px-4 md:mb-3 mb-0 leading-tight focus:outline-none focus:bg-white"
              id="Task_description"
              type="text"
              {...register("Task_description", { required: true })}
              placeholder="Task description"
            />
          </div>
          <div className="w-full px-3 md:mb-2 mb-0">
            <label
              className="block uppercase tracking-wide text-dark-content text-xs font-bold md:mb-2 mb-0"
              htmlFor="grid-first-name"
            >
              Deadline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-red-500 rounded py-3 px-4 md:mb-3 mb-0 leading-tight focus:outline-none focus:bg-white"
              id="deadline"
              type="date"
              {...register("deadline", { required: true })}
              placeholder="Deadline"
            />
          </div>
          <div className="w-full px-3 md:mb-2 mb-0">
            <label
              className="block uppercase tracking-wide text-dark-content text-xs font-bold md:mb-2 mb-0"
              htmlFor="grid-first-name"
            >
              Priority
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-dark border border-red-500 rounded py-3 px-4 md:mb-3 mb-0 leading-tight focus:outline-none focus:bg-white"
              id="priority"
              {...register("priority", { required: true })}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mt-3 w-full btn btn-outline  hover:bg-primary-700 focus:ring-4"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateTask;