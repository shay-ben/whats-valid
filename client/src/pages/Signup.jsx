import React, { useState } from 'react';

const [errorMsgs, setErrorMsgs] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);


// THIS WILL ALLOW ERROR MESSAGE TO GENERATE 
const renderErrorMsg = (name) => name === errorMsgs.name && (
    <div className='error'>{errorMsgs.message}</div>
);

