import React from "react";

function NavResult({ messages, msgCode, currScore, maxScore }) {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a
          href="https://github.com/adriansg85/clickygame/"
          className="navbar-brand"
        >
          Adrian 's <br /> Clicky Game{" "}
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="navbar-text mr-1">
              <strong> Score: </strong> {currScore}{" "}
            </div>{" "}
          </li>{" "}
          <li className="nav-item">
            <div className="navbar-text">
              <strong> Top Score: </strong> {maxScore}{" "}
            </div>{" "}
          </li>{" "}
        </ul>

        <div className="navbar-text text-center mx-auto d-block d-sm-none">
          <h5> {messages[msgCode].msg} </h5>{" "}
        </div>
      </div>{" "}
    </nav>
  );
}

export default NavResult;
