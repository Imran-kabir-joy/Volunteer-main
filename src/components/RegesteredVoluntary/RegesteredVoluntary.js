 import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../App";
import RegesteredVoluntaryCard from "./RegesteredVoluntaryCard";



const RegesteredVoluntary = () => {
  const { value, value2, value3 } = useContext(UserContext);
  const [voluntaryActivity, setVoluntaryActivity] =useState() ;
  const [loggedInUser, setLoggedInUser] = value;
  useEffect(() => {
    // fetch('https://stark-eyrie-03460.herokuapp.com/regesteredVoluntary?email='+loggedInUser.email)
    fetch(`https://stark-eyrie-03460.herokuapp.com/regesteredVoluntary?email=${loggedInUser.email}`)
      .then((response) => response.json())
      .then((data) => setVoluntaryActivity(data));
  }, []);

  const cancelVoluntary = (id) => {
    console.log(id)
    fetch(`https://stark-eyrie-03460.herokuapp.com/delete/${id}`,{
        method:'DELETE'
    }).then(response => response.json())
    .then(data =>{
        if(data){
            const activity = voluntaryActivity.filter(work=>work._id !== id);
            setVoluntaryActivity(activity)
        }
    })
    
  }

 console.log(voluntaryActivity);
  return (
    <Container>
      <div className="row">
        {voluntaryActivity &&  voluntaryActivity.map((voluntary) => (
          <RegesteredVoluntaryCard data={voluntary} removeItem={cancelVoluntary}></RegesteredVoluntaryCard>
        ))}
      </div>

    </Container>
  );
};

export default RegesteredVoluntary;
