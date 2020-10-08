import React, { FC } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import AppStyles from './AppStyles';
import Intro from '../components/Intro';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL as string;

const App: FC = () => (
  <AppStyles>
    <Router>
      <Intro
        title="Geekshub TypeScript project"
        imageSrc="https://media.giphy.com/media/3vAa3t5Df4tmspUNtT/giphy.gif"
      />
    </Router>
  </AppStyles>
);

export default App;
