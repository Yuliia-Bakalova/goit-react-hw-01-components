import styled from "styled-components";

export const FriendsLi = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
   border: 2px solid #032a18;
  width: 400px;
  padding: 15px 0 15px 0;
  background-color: #a7f5a4;
`;

export const Item = styled.li`
  text-align: center;
  width: 75px;
  position: relative;
`;
export const Stat = styled.span`
  position: absolute;
  left: 0;
  top: 30%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
    background-color: ${props => {
    if (props.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;
export const Name = styled.p`
  font-size: 15px;
  font-weight: 600;
`;