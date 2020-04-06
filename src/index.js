import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './components/footer/footer.component';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
ReactDOM.render(
  <BrowserRouter>
    <Footer />
  </BrowserRouter>,
  document.getElementById('footer')
);

