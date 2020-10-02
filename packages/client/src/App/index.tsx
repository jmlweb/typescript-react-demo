import React, { FC } from 'react';

import AppStyles from './AppStyles';
import Intro from '../components/Intro';

const App: FC = () => (
  <AppStyles>
    <Intro
      title="Geekshub TypeScript project"
      imageSrc="https://media.giphy.com/media/3vAa3t5Df4tmspUNtT/giphy.gif"
    />
  </AppStyles>
);

export default App;
