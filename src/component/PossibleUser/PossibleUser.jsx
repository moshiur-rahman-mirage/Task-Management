import React from "react";
import Usercard from "../Usercard/Usercard";
import developer from "../../../public/developer.jpg";
import doctor from "../../../public/doctor.jpg";
import educator from "../../../public/educator.jpg";
import engineer from "../../../public/engineer.jpg";
const PossibleUser = () => {
  return (
    <div>
      <div className="text-center py-10 text-4xl uppercase">
        Users Who Will Benefit from this
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Usercard user_type="Doctor" user_img={doctor} />
          <Usercard user_type="Engineer" user_img={engineer} />
          <Usercard user_type="Educator" user_img={educator} />
          <Usercard user_type="Developer" user_img={developer} />
        </div>
      </div>
    </div>
  );
};

export default PossibleUser;
