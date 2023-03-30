import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {

    const [time, setTime] = useState(watchTime);
    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
    }, [watchTime])


    return (
        <div className='card'>
            <h1>My Cart</h1>

            <div className='mt-5 text-center mb-4'>
                <p>Total Watch Time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5>Add Break Time</h5>
            <button className='w-25 bt-circle m-1 btn btn-info'>15</button>
            <button className='w-25 bt-circle m-1 btn btn-warning'>20</button>
            <button className='w-25 bt-circle m-1 btn btn-danger'>25</button>
            <input type="text" value={0} disabled />
            <button className='w- bt-circle m-1 btn btn-info'>Complete</button>
        </div>
    );
};

export default SideCart;