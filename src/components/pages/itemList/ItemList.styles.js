import styled from 'styled-components/macro';
import { GlobalButton } from '../../../globalStyles/GlobalStyles';

export const HeadingFour = styled.h4``;

export const Container = styled.div`
  width: 100vw;
  padding-bottom: 5rem;
  overflow-y: scroll;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const FilterButtonContainer = styled.div`
  padding: 1rem 0 3rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const Button = styled(GlobalButton)`
  border-radius: 2rem;
  font-size: 0.75rem;
  background-color: ${(props) =>
    props.active === true ? props.theme.accent3 : null};
  font-weight: 500;
  padding: 0.75rem 0.5rem;

  border: 0.2rem solid ${(props) => props.theme.accent1};
  border-color: ${props => props.active === true ? props => props.theme.accent2 : props.theme.accent3};
`;
