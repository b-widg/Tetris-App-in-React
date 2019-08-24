import React from 'react';

import { createStage } from '../gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
