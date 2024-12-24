import React from 'react';

import './index.css';
import App from './App';

import Circle from './circle';
import Banner from './banner';
import P1 from './product1';
import P2 from './product2';
import Discount from './discount';




    function Home(){

   return(
   


    
    <div className='all'>
    <div className='mt-2'> <App /></div>
   
   
    <div className='mt-5 w-50 mx-auto'><Circle/></div>
    <div className='mt-5 '><Banner/></div>
    <div className='mt-5 '> <P1/> </div>
    <div className='mt-5 '> <P2/> </div>
    <div className='mt-5 '> <Discount/> </div>
   
    
    </div>
    
   
   )
}
export default Home

