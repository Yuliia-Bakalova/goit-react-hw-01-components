import styled from 'styled-components';

export const ProfileList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: center;
  padding: 0px;
  width: 100%;
`;
export const ProfileItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #032a03;
  width: 100%;
  height: 100px;
  background-color: #218b3c;
  font-weight: 700;
`;