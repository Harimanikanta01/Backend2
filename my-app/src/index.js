import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import Home from './home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mobile1 from './mobiles';
import Retr from './mobilesret';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <BrowserRouter>
   <Routes>
    <Route path=''element={<Home/>}/>
    <Route path='circle/1'element={<Mobile1/>}/>
    <Route path='/retr/1'element={<Retr/>}/>
   </Routes>
   </BrowserRouter>


    
    
   
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
