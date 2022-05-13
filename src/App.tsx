import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { RoutesData } from "./views/RoutesData";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <div className="appBody">
          <BrowserRouter>
            <Routes>
              {RoutesData.map((e) => (
                <Route path={e.path} element={e.view} />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer">
          <span>Footer</span>
        </div>
      </div>
    </div>
  );
};

export default App;
