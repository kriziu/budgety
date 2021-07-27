import { FC } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';
import NavBar from './NavBar';
import { breakpoints } from '../constant/style/breakpoints';
import AnimatedRouter from './AnimatedRouter';

const Container = styled.div`
  width: 100vw;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.desktop}) {
    width: 75vw;
  }
`;

const App: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <NavBar />
          <main style={{ position: 'relative' }}>
            <AnimatedRouter />
          </main>
        </Router>
      </Container>
    </>
  );
};

export default App;
