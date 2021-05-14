import {useHistory} from 'react-router-dom';
import React, {useState} from "react";
import frame from '../photo/frame.png';

const Signin = () => {

    const history = useHistory();

    const [user,setUser] = useState({
        fullName :"", email :"", password :"", cpassword :"", phone :""   
    });

    let name, value;
    const userInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const postData = async (e) => {
        e.preventDefault();
        const { fullName , email , password , cpassword , phone } = user;
        
        if(password===cpassword){
            const res = await fetch("/Signin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName , email , password , phone
                })
            });
    
            const data = await res.json();
    
            if(data.status === 422 || !data) {
                window.alert("Invalid Data");
            }
            else{
                window.alert("registration successfull");
    
                history.push("/Login");
            }
        }
        else{
            window.alert("Confirm password does not match");
        }
    }

    return (
        <>
            <div className="bg-primary">
                
                <div className="w-75 dashboard">
                    <div className="conatiner text-left form d-flex bg-light text-primary">
                        <form method="POST" className="d-block w-75">                    
                            <label className="font-weight-bold ml-5 mt-5">Your Name :
                            </label>
                            <input type="text" className="ml-5 w-50" name="fullName" autoComplete="off" value={user.fullName}
                                onChange={userInputs} placeholder="Enter your Name"/>
                            <br/>

                            <label className="font-weight-bold ml-5 mt-5">Email ID :
                            </label>
                            <input type="email" className="ml-5 w-50" name="email" autoComplete="off" value={user.email}
                                onChange={userInputs} placeholder="abc@xyz.com"/>
                            <br/>

                            <label className="font-weight-bold ml-5 mt-5">Password :
                            </label>
                            <input type="password" className="ml-5 w-50" name="password" autoComplete="off" value={user.password}
                                onChange={userInputs} placeholder="Enter your password"/>
                            <br/>

                            <label className="font-weight-bold ml-5 mt-5">Confirm Password :
                            </label>
                            <input type="password" className="ml-5 w-50" name="cpassword" autoComplete="off" value={user.cpassword}
                                onChange={userInputs} placeholder="Confirm your password"/>
                            <br/>

                            <label className="font-weight-bold ml-5 mt-5">Phone No. :
                            </label>
                            <input type="text" className="ml-5 w-50" name="phone" autoComplete="off" value={user.phone}
                                onChange={userInputs} placeholder="970XXXXXXX"/>
                            <br/>

                            <button className="ml-5 mt-5 btn btn-primary" onClick={postData}>Register</button>
                        </form>
                        <div className="w-50 bg-dark">
                            <img src={frame}className="w-100 h-100 bg-dark" alt="frame"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;