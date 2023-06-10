import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1 className="sidebar-heading">DASHBOARD</h1>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
          <br></br>
          <br></br>
          <br></br>
            <Link to="/dashboard" className="sidebar-menu-link">
             <h4> HOME</h4> 
            </Link>
            <br></br>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/schedule" className="sidebar-menu-link">
             <h4>SCHEDULE </h4> 
            </Link>
            <br></br>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/studentinfo" className="sidebar-menu-link">
             <h4>STUDENT INFO</h4> 
              
            </Link>
            <br></br>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/exams" className="sidebar-menu-link">
             <h4> EXAMS</h4> 
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/logout" className="sidebar-menu-link">
             <h4 className="main-overview"> LOGOUT</h4> 
            </Link>
            
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1 className="main-heading"><b><center>Welcome To The School Of Engineering Sciences</center></b></h1>
        <br></br>
        <h4 className="main-overview">OVERVIEW </h4>
        <div className="information-board">
  <p className="main-text">
    "Science can amuse and fascinate us all, but it is engineering that
    changes the world." "The engineer has been, and is, a maker of history."
    "Scientists study the world as it is; engineers create the world that has
    never been." "The way to succeed is to double your failure rate."
  </p>
</div>

      </div>
    </div>
  );
}

export default DashboardPage;