import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { CreateSingleNFT } from './views/CreateSingleNFT';


function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <div className="appBody">
          
        <BrowserRouter>
          <Routes>
            <Route path="create-single-nft" element={<CreateSingleNFT />} />
          </Routes>

        </BrowserRouter>

        </div>
        <div className="footer">
          <span>Footer</span>
        </div>
      </div>
    </div>
  );
}

export default App;
