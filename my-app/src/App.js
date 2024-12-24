import Sa from './jaya';
import { useState } from 'react';
import './App.css';




function App() {
  const [data,setData]=useState({
    search:''
  }
  )
  const change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submit=(e)=>{
e.preventDefault()
console.log(data)
  }
return (
  <>
  <div className='title'>
    <h2 >SHOPKART</h2>
    <form onSubmit={submit}>
    <input type='text'name='search'placeholder='search'onChange={change}/>
   <br></br>
    
    
   <div className='search'>
   <button class="btn btn-success">submit</button>
    </div></form>
  </div></>
)
}


export default App;
