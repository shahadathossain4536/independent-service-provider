import React from 'react';
import NotFound1 from '../../image/NotFound.jpg'



const NotFound = () => {
    return (
        <div className='mx-auto'>
            {/* 404 route img */}
            <img className='img-fluid w-75' src={NotFound1} alt="" />
        </div>
    );
};

export default NotFound;