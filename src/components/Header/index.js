import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron instructions">
      <h1 className="text-center"> Game of Thrones Clicky Game! </h1>{" "}
      <h3 className="text-center">
        {" "}
        Click on an image to earn points, If you click one twice you lose.{" "}
      </h3>{" "}
    </div>
  );
}

export default Header;
