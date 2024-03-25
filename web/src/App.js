import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ProductForm from './pages/form';
import Product from './pages/products';

function App() {
  return (
    <Stack>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductForm />} />
      <Route path='/products' element={<Product />} />
    </Routes>
    </Stack>
  );
}

export default App;
