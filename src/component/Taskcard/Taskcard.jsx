import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { AuthContext } from "../../providers/Authprovider";
import { Circles } from "react-loader-spinner";
import SingleTaskCard from "./SingleTaskCard";

const Taskcard = ({ status }) => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const statusUrl = `/tasks?email=${user?.email}&task_status=${status}`;
  const [cardData, setCardData] = useState(null);

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
  console.log(user);
  console.log(cardData);

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
            <div className="grid  gap-2 grid-cols-1">
              {cardData.map((task) => {
                return (
                  <>
                    <SingleTaskCard
                      key={task._id}
                      task={task}
                    />
                  </>
                );
              })}
            </div>
          )}
    
    </>
  );
};

export default Taskcard;
