import React, {useState , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from "../App";
const Login = () => {

    const {state, dispatch} =  useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/Login', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        });

        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid credentials");
        }
        else{
            dispatch({type:"USER", payload:true})
            window.alert("Login Successfull");
            history.push("/")
        }
    }
    return (
        <>
            <div className="bg-primary">
                <div className="W-100 dashboard">
                    <div className="container text-center text-light">
                        <form method="POST">
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" 
                                className="form-control" id="exampleInputEmail1"
                                value={ email }
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                className="form-control" id="exampleInputPassword1" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            </div>
                            <button type="submit" onClick={loginUser} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;