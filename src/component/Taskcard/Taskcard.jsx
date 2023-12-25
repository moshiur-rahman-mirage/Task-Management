import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { AuthContext } from "../../providers/Authprovider";
import { Circles } from "react-loader-spinner";
import SingleTaskCard from "./SingleTaskCard";
import { DndContext, useDroppable } from "@dnd-kit/core";


const Taskcard = ({ status,onDropTask,color }) => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const statusUrl = `/tasks?email=${user?.email}&task_status=${status}`;
  const [cardData, setCardData] = useState(null);
  const [isDropped, setIsDropped] = useState(false);
  const [parent, setParent] = useState(null);
  //   const draggableMarkup = (
  //     <Draggable id="draggable">Drag me</Draggable>
  //   );
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get(statusUrl);
      const fetchedData = response.data;
      setCardData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosPublic]);
  //   console.log(user);
  //   console.log(cardData);

  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
  }


  const handleDrop = (task) => {
    onDropTask(task, status);
  };

  // console.log(isDropped);

  const handleDragStart = (task) => {
   console.log(task)
  };

  return (
    <>
      {loading ? (
        <>
          <div className="min-h-[400]">
            <Circles
              height="200"
              width="200"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </>
      ) : (
        <DndContext onDragEnd={handleDragEnd}>
          <div
            className="grid gap-2 grid-cols-1"
            ref={setNodeRef}
            style={style}
            onDrop={() => handleDrop()}
          >
            {cardData.map((task) => (
              <SingleTaskCard key={task._id} color={color} task={task} onDragStart={(task) => handleDragStart(task)} />
            ))}
          </div>
        </DndContext>
      )}
    </>
  );
};

export default Taskcard;
