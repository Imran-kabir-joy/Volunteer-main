import React, { useState } from "react";
import { Container } from "react-bootstrap";
import VolunteerSectorsData from "../../fakeData/VolunteerSectorsData";

const AddEvent = () => {

    const [event,setEvent] = useState({
        name: "",
        date: "",
        description: "",

    })

    const handleAddEvents = () => {
        fetch("https://stark-eyrie-03460.herokuapp.com/voluntaryEvents",{
            method: "POST",
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(VolunteerSectorsData)
        })
    }
    const handleSubmit=()=>{
        fetch("https://stark-eyrie-03460.herokuapp.com/addEvent",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
    }
    console.log(VolunteerSectorsData)

    const handleBlur = (e) => {
        const newVoluntaryInfo = { ...event };
        newVoluntaryInfo[e.target.name] = e.target.value;
        setEvent(newVoluntaryInfo);
      };
       console.log(event)

  return (
    <Container>
        <button onClick={handleAddEvents}>ADD</button>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-md-6 mb-4">
            <input type="text" name="name" class="form-control" placeholder="Event Title" onBlur={handleBlur} />
          </div>
          <div class="col-md-6 mb-4">
            <input type="date" name="date" class="form-control" placeholder="Event Date" onBlur={handleBlur} />
          </div>
          <div class="col-md-6 mb-4">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="description"
              placeholder="Enter Description"
              onBlur={handleBlur}
              rows="4"
            ></textarea>
          </div>
          <div class="col-md-6 mb-4">
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div>
        <button class="btn btn-primary btn-lg float-right" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default AddEvent;
