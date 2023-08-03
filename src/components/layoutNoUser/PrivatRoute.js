import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function PrivateRoute() {
    let  userid = sessionStorage.getItem("user") == null ? false : true;
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/signin" />};
        </>

    )
}