import styled from '@emotion/styled';

export const ListCar = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
    column-gap: 29px;

    @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
    column-gap: 29px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`