import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  padding: 0 20px;
  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
