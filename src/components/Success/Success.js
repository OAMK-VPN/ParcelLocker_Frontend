import React, { useState } from 'react';
import './Success.css'
// import '.../assets/Success.png'

const Success = () => {
  const [message, setMessage] = useState('');

  return (
    <div className='Success'>

      <h2>Success</h2>
    </div>
  );
};

export default Success;
