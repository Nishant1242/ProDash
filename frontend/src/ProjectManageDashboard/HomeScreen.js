import React, { Component } from "react";
import "./assests/HomeScreen.css";
import img from "./assests/4380.jpg";
class HomeScreen extends Component {
  render() {
    return (
      <div style={{ marginTop: "3%" }}>
        <h1 className="text-center">Welcome To ProDash</h1>
        <div className="bodydiv">
          <p className="text-center"> Your Project Management App </p>
          <img
            className="taskimage"
            src={img}
            style={{ marginTop: "1%" }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
