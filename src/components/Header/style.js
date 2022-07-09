import styled from "styled-components";

export const Wrap = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    background-color: white;
    width: 62%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 40px;
      height: 54px;
    }

    section {
      width: 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .chat {
        width: 40px;
        height: 32px;
      }
      .profile {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #fd9898;
      }
    }
  }
`;
