import {Link, useNavigate} from "react-router-dom";
import school from "../images/school.png"

const Header = () => {

    const navigate = useNavigate()
 
    const toLandingPage = () => {
          navigate("/")
      }

    return ( 
        <header>
            <img src={school} alt="" onClick={toLandingPage}/>
            <nav>
                <Link to={"/login"}>Login</Link>
            </nav>
        </header>
     );
}
 
export default Header;