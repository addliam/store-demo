import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SamplePage} from "./pages/SamplePage";
import {ProductCategoriesPage} from "./pages/ProductCategoriesPage";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<SamplePage />} />
      <Route path="/home" element={<SamplePage />} />
      <Route path="/categories" element={<ProductCategoriesPage />} />
      {/* <Route path="*" element={<NoPage />} /> */}
  </Routes>
  </BrowserRouter>

);