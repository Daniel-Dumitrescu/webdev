import React from 'react';

const Text = ({children}) => {
    return(
        <p style = {{
            fontSize: '30px',
            color: 'white',
            textAlign: 'center'
           
        }}>
            {children}
        </p>
    )
}

export default Text 
