import {Link, useNavigate} from "react-router-dom";
import school from "../images/school.png"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useState, useEffect } from "react";

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const nameR = useSelector(state => state.name.name);
    const dispatch = useDispatch();
    // const [name, setName] = useState(useSelector(state => state.name.name));
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


    // const sendRequest = async() => {
    //   const id = localStorage.getItem("userId");

    //   try {
    //     setName("")
    //     if(id){
    //     const res = await axios.get(`http://localhost:4000/user/${id}`)
    //     // console.log(res.data.users.name)
    //     // data = await res.data;
    //     const data = res.data.users.name;
    //     setName(data)
    //     // return data;
    //     }
    //   } catch (err) {
    //     console.log(err)
    //     setError("There was an error connecting to the Database!")
    //   }
    // }

    // sendRequest()

    // useEffect(() => {
    //     {isLoggedIn && sendRequest().then(data=>setName(data))}
    //     // sendRequest().then(data=>setName(data)).then(data=>console.log(data))
    //     {!isLoggedIn && setName("")}
    //     console.log(name)
    // },[])

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //         const sendRequest = async () => {
  //             try {
  //                 const id = localStorage.getItem("userId");
  //                 if (id) {
  //                     const res = await axios.get(`http://localhost:4000/user/${id}`);
  //                     const data = res.data.users.name;
  //                     dispatch(nameActions.setName(data)); // Assuming you have a setName action
  //                 }
  //             } catch (err) {
  //                 console.log(err);
  //                 setError("There was an error connecting to the Database!");
  //             }
  //         }
  //         sendRequest();
  //     }
  // }, [isLoggedIn, dispatch]);

    return ( 
        <header>
            <img src={school} alt="" onClick={toLandingPage}/>
            <nav>

            {isLoggedIn && 
            <>
                <h4>{}</h4>
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