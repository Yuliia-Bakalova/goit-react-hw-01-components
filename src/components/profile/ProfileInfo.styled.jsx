import styled from 'styled-components';


export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 50%;
  border: 0.5px solid #032a18;
`;

export const Text = styled.p`
  margin: 0;

  font-size: 17px;
  margin-bottom: 5px;
  /* &:not(:last-child) {
    margin-bottom: 7px;
  } */
`;