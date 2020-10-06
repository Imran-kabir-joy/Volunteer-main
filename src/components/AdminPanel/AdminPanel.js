import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminPanelData from "./AdminPanelData";

const AdminPanel = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch("https://stark-eyrie-03460.herokuapp.com/adminPanel")
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, []);
  console.log(userInfo);
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-md-4">
           <Link to="/addEvent"> <h3 className="text-primary font-weight-bold">+ Add Event</h3></Link>
        </div>
        <div className="col-12 col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">EmailID</th>
                <th scope="col">Registaring date</th>
                <th scope="col">Volunteer List</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map((user) => (
                <AdminPanelData data={user}></AdminPanelData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default AdminPanel;
