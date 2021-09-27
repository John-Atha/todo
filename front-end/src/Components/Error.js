import React, { useState, useEffect } from 'react';
import './styles.css';

function Error(props) { 
    const [message, setMessage] = useState(props.message);
    
    useEffect(() => {
        setMessage(props.message)
    }, [props.message])

    return (
        <div className='error-message margin center-content'>
            {message}
        </div>
    )
}

export default Error;