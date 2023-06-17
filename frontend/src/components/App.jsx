import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LandingScreen from './screens/LandingScreen';
import AdminBoardScreen from './screens/AdminBoardScreen';
import AddProduct from './screens/AddProduct';
import Footer from './Footer';
import ProductBoard from './ProductBoard';
import MachineBoard from './MachinesBoard';
import BillOfMaterialBoard from './BillOfMaterialBoard';
import ProductsDetailsScreen from './screens/ProductsDetailsScreen';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/admin" element={<AdminBoardScreen />}>
          <Route index element={<ProductBoard />} />
          <Route path="/admin/boms" element={<BillOfMaterialBoard />} />
          <Route path="/admin/machines" element={<MachineBoard />} />
        </Route>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productDetails" element={<ProductsDetailsScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
