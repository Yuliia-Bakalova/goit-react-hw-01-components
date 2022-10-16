import styled from "styled-components";

export const StatsWrapper = styled.section`
  border: 2px solid black;
  background-color: azure;
  padding-top: 16px;
  width: 400px;
`;

export const StatsTitle = styled.h2`
  text-align: center;
  margin: 0;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0px;
`;

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #032a18;
  width: 70px;
  height: 60px;
  background-color: ${randomHexColor};
`;