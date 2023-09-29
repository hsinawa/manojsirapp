import React from 'react'
import Alert from '@mui/material/Alert';

const ErrorMessage = ({i}) => {
    return(
        <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} >
            <Alert severity="error">{i}</Alert>
        </div>
    )
}

export default ErrorMessage