import styled from 'styled-components/macro';

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
  /* flex-direction: column; */
`;

