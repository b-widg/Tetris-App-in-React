import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100wh;
  background-image: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const styledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-with: 900px;

  aside {
    width: 100px;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
