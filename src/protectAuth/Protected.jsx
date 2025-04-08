import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = (props) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData?.accessToken){
        return props.children
    }else{
        return <Navigate to={"/login"}/>
    }
  
}

export default Protected