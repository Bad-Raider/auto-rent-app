import styled from '@emotion/styled';
import { colors, transition } from '../../styles/common/vars';

export const ListCar = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const BtnLoadeMore = styled.a`
  display: flex;
  justify-content: center;
  color: ${colors.accentColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; 
  text-decoration-line: underline;
  transition: color ${transition.duration};
    
    &:hover,
    &:focus {
    color: ${colors.accentHoverColor};
  }

`