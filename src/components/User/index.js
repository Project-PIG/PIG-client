import React from "react";
import * as S from "./style";
const User = () => {
  return (
    <S.Wrap>
      <S.ProfilePicture />
      <S.Name_wrap>
        <S.Name>곽희상</S.Name>
        <h3>2기</h3>
      </S.Name_wrap>
      <S.Description>프론트엔드입니다.</S.Description>
      <S.Bottom_wrap>
        <S.Tag>#FE</S.Tag>
        <S.Chat>채팅</S.Chat>
      </S.Bottom_wrap>
    </S.Wrap>
  );
};

export default User;
