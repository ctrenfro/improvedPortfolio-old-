import React from "react";

const Socialbar = (props) => {
  return (
    <div className="socialbar">
      <div className="socialIcon">
        <a
          href="https://www.linkedin.com/in/christopher-renfro-70a447211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in fa-2x smallIcon"></i>
        </a>
      </div>
      <div className="socialIcon">
        <a
          href="https://github.com/ctrenfro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa-2x smallIcon"></i>
        </a>
      </div>
    </div>
  );
};

export default Socialbar;
