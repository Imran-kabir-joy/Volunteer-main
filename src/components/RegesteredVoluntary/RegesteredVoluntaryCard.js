import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import VolunteerSectorsData from "../../fakeData/VolunteerSectorsData";

const RegesteredVoluntaryCard = (props) => {

  const { work, date,_id} = props.data;
  const {cancelVoluntary} = props.removeItem;
  const [currentVoluntary, setCurrentVoluntary] = useState({});
  // const { img } = currentVoluntary;
  const { value, value2, value3 } = useContext(UserContext);
  const [voluntaryActivity, setVoluntaryActivity] = value3;
  useEffect(() => {
    const voluntary = VolunteerSectorsData.find(
      (place) => place.name.toLocaleLowerCase() === work.toLowerCase()
    );
    setCurrentVoluntary(voluntary);
  }, []);
  console.log(props.data)

  return (
    <div class="card col-md-6">
      <div class="row no-gutters">
        <div class="col-md-4">
          {/* <img src={img} class="card-img" alt="..." /> */}
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{work}</h5>
            <p class="card-text">{date}</p>
            <button class="btn btn-primary" onClick={()=>props.removeItem(_id)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegesteredVoluntaryCard;
