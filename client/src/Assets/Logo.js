import React from 'react';
const img = require('./Logo1.png');

const Logo = () => {
    return(
        <div>
            <img src={img} alt='logo' className='svg' />
        </div>
    )
}

export default Logo;