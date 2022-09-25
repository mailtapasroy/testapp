import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './page/HomePage';
import ProductPage from './page/ProductPage';
import BlogPage from './page/BlogPage';
import LoginPage from './page/LoginPage';
import ProductDetailsPage from './page/ProductDetailsPage';
import AboutPage from './page/AboutPage';

function App() {
  const client = new QueryClient();
  return (
    <>
    <Header />
    <main className="py-5">  
    <QueryClientProvider client={client}>
      <Routes>
        <Route path='/' element={<HomePage />} />   
        <Route path='/about' element={<AboutPage />} />   
        <Route path='/product' element={<ProductPage />} /> 
        <Route path='/blog' element={<BlogPage />} />   
        <Route path='/login' element={<LoginPage />} />   
        <Route path='/product/:productID' element={<ProductDetailsPage />} />   
      </Routes>
      </QueryClientProvider>
    </main>
    <Footer />
    </>
  );
}

export default App;