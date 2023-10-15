import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import First_Img from './First_Img';
import CardList from './CardList';
import CardList1 from './CardList1';
import Sign from './Sign.jsx';
import End from './End';
import Login from './Login';
import Signup from './Signup';

function App() {
  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <First_Img />
      <CardList />
      <CardList1 />
      <Sign />
      <End />
    </div>
  );
}

export { App, Home };
export default App;
