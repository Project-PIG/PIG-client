import React from "react";
import * as S from "./style";

const Search = () => {
  return (
    <>
      <S.Font />
      <S.Search_bg>
        <S.Wrap>
          <S.Search_wrap>
            <input placeholder="어떤 분을 찾으시나요?" />
            <S.Button />
          </S.Search_wrap>
          <S.Tag_wrap>
            <p>전공분야</p>
            <section>
              <div>
                <S.Tag>Backend</S.Tag>
                <S.Tag>Frontend</S.Tag>
                <S.Tag>Game</S.Tag>
              </div>
              <div>
                <S.Tag>iOS</S.Tag>
                <S.Tag>Android</S.Tag>
                <S.Tag>Security</S.Tag>
              </div>
              <div>
                <S.Tag>AI</S.Tag>
                <S.Tag>Infra</S.Tag>
                <S.Tag>Design</S.Tag>
                <S.Tag>ETC</S.Tag>
              </div>
            </section>
          </S.Tag_wrap>
        </S.Wrap>
      </S.Search_bg>
    </>
  );
};

export default Search;
