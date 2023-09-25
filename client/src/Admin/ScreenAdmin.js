import React from 'react'

const AdminScreen = () => {
    const admin = JSON.parse( localStorage.getItem('admin') )
    return(
        <div>
         <div id='studentform' style={{marginTop:'5%'}} >
            <h3 style={{textAlign:'left'}} > Professional Dashboard for {admin.name} </h3>
         </div>
        </div>
    )
}

export default AdminScreen