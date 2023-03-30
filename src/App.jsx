import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import Contract from './components/Contract/Contract';


const App = () => {


  const handleWatchTime = (time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
    }
    else{
      localStorage.setItem("watchTime", time);
    }
  }


  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>



      <div className='main row mt-5'>
        <div className='home-container col-md-8'>
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className='sideCart col-md-4'>
          <SideCart></SideCart>
        </div>
      </div>



      <Contract></Contract>
    </div>
  );
};

export default App;