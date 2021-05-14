import React, { useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from "../App";

const Logout = () => {
    
    const {state, dispatch} =  useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch('/Logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res) => {
            dispatch({type:"USER", payload:false})
            history.push('/Login', {replace:true});
            if(!res.status===200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });
    return (
        <>
        <h1>hello</h1>
        </>
    )
}
 export default Logout;