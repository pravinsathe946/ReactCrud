import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Header from './pages/Header';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Footer from './pages/footer';
import Update from './pages/update';
import './pages/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import ReadRecord from './pages/ReadRecord';


export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="ReadRecord" element={<ReadRecord />} />
          <Route path="update" element={<Update />} />
          <Route path="confirm" element={<confirm />} />
          <Route path="*" element={<NoPage />} />
        
        </Route>
       
      </Routes>
    <Footer />
      
   
    </BrowserRouter>
   
  
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
