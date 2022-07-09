import React from "react";
import * as S from "./style";
const Header = () => {
  return (
    <S.Wrap>
      <div>
        <img src="images/Logo.png" className="logo" />
        <section>
          <img src="images/Chatting_icon.png" className="chat" />
          <div className="profile"></div>
        </section>
      </div>
    </S.Wrap>
  );
};

export default Header;
