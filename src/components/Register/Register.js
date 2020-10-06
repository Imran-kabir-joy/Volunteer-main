import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Register.css";
import logo from "../../images/logos/Group 1329.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Register = () => {
  const { value, value2, value3} = useContext(UserContext);
  const [voluntary, setVoluntary] = value2;
  const [voluntaryActivity, setVoluntaryActivity] = value3;
  const [loggedInUser, setLoggedInUser] = value;
  const [submitBtn, setSubitBtn] = useState(false);
  const { name, email } = loggedInUser;
  let { voluntaryWork } = useParams();
const history=useHistory()
  const handleSubmit = (e) => {
    fetch("https://stark-eyrie-03460.herokuapp.com/addVoluntaryWork", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voluntary),
    })
    e.preventDefault();
  };

  const handleBlur = (e) => {
    const newVoluntaryInfo = { ...voluntary };
    newVoluntaryInfo.work = voluntaryWork;
    newVoluntaryInfo[e.target.name] = e.target.value;
    setVoluntary(newVoluntaryInfo);
    setVoluntaryActivity(newVoluntaryInfo)
  };
  console.log(voluntary);

  return (
    <Container>
      <div className="w-100 text-center">
        <img src={logo} alt="" className="" width="320px" />
      </div>
      <div className="form-container">
        <form className="p-md-5" onSubmit={handleSubmit} method="post">
          <h3>Register as a Voluteer</h3>
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              value={name}
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              value={email}
            />
          </div>

          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              name="date"
              onBlur={handleBlur}
            />
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              onBlur={handleBlur}
            />
          </div>

          <div class="form-group">
            <label for="work">Voluntary Work</label>
            <input
              type="text"
              class="form-control"
              id="work"
              name="work"
              value={voluntaryWork}
              onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary form-control"
            onClick={() => setSubitBtn(!submitBtn)}
          >
            {submitBtn ? "Regestered Successfully!" : "Register"}
          </button>
          {submitBtn && (
            <Link to="/registedVoluntary">
              <button class="btn btn-primary form-control">
                See your Registered Voluntary
              </button>
            </Link>
          )}
        </form>
      </div>
    </Container>
  );
};

export default Register;
