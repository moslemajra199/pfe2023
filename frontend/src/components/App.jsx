import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LandingScreen from './screens/LandingScreen';
import AdminBoardScreen from './screens/AdminBoardScreen';
import AddProduct from './screens/AddProduct';
import Footer from './Footer';
const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/admin" element={<AdminBoardScreen />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
