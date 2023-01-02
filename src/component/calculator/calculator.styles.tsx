import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  height: 700px;
  margin: 0px auto;
  border: 5px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 36px;
  border: 1px solid black;
`;

export const Floor = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Btn = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid #bdbdbd;
  &:active {
    border: 2px solid blue;
  }
`;
