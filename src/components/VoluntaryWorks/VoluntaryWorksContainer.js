import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import VolunteerSectorsData from "../../fakeData/VolunteerSectorsData";
import VoluntaryWorks from "./VoluntaryWorks";

const VoluntaryWorksContainer = () => {
    const [voluntaryWorks,setVoluntaryWorks] = useState(VolunteerSectorsData)
  return (
    <Container>
        <div className="row">
        
            {
               voluntaryWorks.map(work =><VoluntaryWorks data={work}></VoluntaryWorks>) 
            }

        </div>
      
    </Container>
  );
};

export default VoluntaryWorksContainer;
