import React from 'react';
import './App.css';
import { Container } from './Components/Layout';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="header">
          <span>header</span>
        </div>
        <div className="appBody">
          <Container>
            <span>Body</span>
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
