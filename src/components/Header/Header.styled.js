import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 90px;
  background-color: ${colors.secondaryFontColor};
`;

export const PageLogo = styled.img`
  width: 100%;
  max-height: 100%;
`;

export const NavList = styled.ul`
  display: flex;

  @media screen and (min-width: 768px) {
    gap: 25px;;
  }
  
`;

export const NavigationLink = styled(NavLink)`
  display: block;
  padding: 10px;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition: color ${transition.duration}, border-color ${transition.duration},
  background-color ${transition.duration};
  border-bottom: 4px solid transparent;

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }

  &.active {
    color: ${colors.accentColor};
    border-bottom: 4px solid ${colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
  }

`;
