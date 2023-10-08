import {Link, useNavigate, useParams} from "react-router-dom";
import school from "../images/school.png"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useState, useEffect } from "react";

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate()
 
    const toLandingPage = () => {
        if(!isLoggedIn){
            navigate("/")
        }else if(isLoggedIn){
            navigate("/body")
        }
      }

    //   *****get users name*****

    // const id = useParams().id 
    

    const sendRequest = async() => {
        const id = localStorage.getItem("userId");
        let data;
      try {
        const res = await axios.get(`http://localhost:4000/user/${id}`)
        console.log(res.data.users.name)
        // data = await res.data;
        data = res.data.users.name
        return data;
  
      } catch (err) {
        console.log(err)
        data = "erorororo"
        return data
        setError("There was an error connecting to the Database!")
      }
    }
  
    useEffect(() => {
        setName(sendRequest())
        // sendRequest().then(data=>setName(data)).then(data=>console.log(data))
    },[])

    return ( 
        <header>
            <img src={school} alt="" onClick={toLandingPage}/>
            <nav>

            {isLoggedIn && 
            <>
                <h4>{name}</h4>
                <Link to={"/login"} onClick={()=>dispatch(authActions.logout())}>Logout</Link>
            </>
            }

            {!isLoggedIn && 
            <>
            <Link to={"/login"}>Login</Link>
            </>}
            </nav>
        </header>
     );
}
 
export default Header;