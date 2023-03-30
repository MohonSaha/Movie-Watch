import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {

    const [time, setTime] = useState(watchTime);

    
  const [breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
        let getBreakTimeFromStorage = localStorage.getItem("breakTime");
        if(getBreakTimeFromStorage){

            setBreakTime(getBreakTimeFromStorage)
        }
        else{
            getBreakTimeFromStorage = 0;
        }
    }, [watchTime])



    const handleBreakTime = (bt) =>{
        localStorage.setItem("breakTime" ,bt);
        setBreakTime(bt);
    }

    const handleComplite = () =>{
        toast("Wow so easy!");
    }




    return (
        <div className='card'>
            <h1>My Cart</h1>

            <div className='mt-5 text-center mb-4'>
                <p>Total Watch Time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5>Add Break Time</h5>
            <button onClick={() => handleBreakTime(15)} className='w-25 bt-circle m-1 btn btn-info'>15</button>
            <button className='w-25 bt-circle m-1 btn btn-warning'>20</button>
            <button className='w-25 bt-circle m-1 btn btn-danger'>25</button>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplite} className='w- bt-circle m-1 btn btn-info'>Complete</button>
        </div>
    );
};

export default SideCart;