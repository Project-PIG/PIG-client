import React from "react";
import * as H from "./style";
const Header = () => {
  return (
    <H.Wrap>
      <div>
        <img src="images/Logo.png" className="logo" />
        <section>
          <img src="images/Chatting_icon.png" className="chat" />
          <div className="profile"></div>
        </section>
      </div>
    </H.Wrap>
  );
};

export default Header;
