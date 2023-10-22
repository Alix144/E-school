import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import {authActions, roleActions } from '../store/index.js';


const Login = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!email && !password){
            return setError("Please Fill In All The Fields!")
        }else if(!email){
            return setError("Username Field is Empty!")
        }else if(!password){
            return setError("Password Field is Empty!")
        }

        try {
            const res = await axios.post("http://localhost:4000/user/login", {
                email,
                password
            })

            const data = await res.data
            
            localStorage.setItem("userId", data.user._id)
            dispatch(authActions.login())

            if(data.user.role === "admin"){
                dispatch(roleActions.admin())
            }else if(data.user.role === "teacher"){
                dispatch(roleActions.teacher())
            }else if(data.user.role === "student"){
                dispatch(roleActions.student())
            }

            localStorage.setItem("role", data.user.role)

            navigate("/body")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }

    }

    return ( 
        <form action="" className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            {error && <p style={{color: "#ff5e71"}}>{error}</p>}

            <button type='submit'>Login</button>
        </form>
     );
}
 
export default Login;