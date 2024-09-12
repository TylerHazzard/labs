
import './App.css'
import Home from '../Components/Home'
import ProductDetails from '../Components/ProductDetails'
import ProductList from '../Components/ProductList'
import Header from '../Components/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Router>
  )
}

export default App
