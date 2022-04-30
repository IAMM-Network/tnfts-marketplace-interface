import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Container } from './components/Layout';
import { NervosIcon } from './components/Svg';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <div className="appBody">
          <Container>
            <div style={{ display: "flex" }}>
              <Button margin="8px">BUTTON SAMPLE</Button>
              <Button variant="secondary" margin="8px">BUTTON SAMPLE</Button>
              <Button variant="cta" margin="8px" startIcon={<NervosIcon />}>
                BUTTON SAMPLE
              </Button>
            </div>
          </Container>
        </div>
        <div className="footer">
          <span>Footer</span>
        </div>
      </div>
    </div>
  );
}

export default App;
