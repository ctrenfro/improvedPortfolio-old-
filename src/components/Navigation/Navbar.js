import React from "react";

function Navbar(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href={props.href1}>{props.link1}</a>
        </li>
        <li>
          <a href={props.href2}>{props.link2}</a>
        </li>
        <li>
          <a href={props.href3}>{props.link3}</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
