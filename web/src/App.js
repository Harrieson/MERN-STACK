import { Stack } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ProductForm from './pages/form';
import Product from './pages/products';

const initialState = {
  productName: "",
  productType: "",
  productCreator: "",
  productdescription: "",
  productPrice: 0,
  productRating: "",
};

function App() {
  const [form, setForm] = useState(initialState);
  return (
    <Stack>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductForm form={form} setForm={setForm}/>} />
      <Route path='/products' element={<Product />} />
    </Routes>
    </Stack>
  );
}

export default App;
