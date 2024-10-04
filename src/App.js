import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home';

export const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false); // Assuming isLogin is a boolean

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes go here */}
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
