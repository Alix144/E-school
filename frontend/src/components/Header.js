import school from "../images/school.png"

const Header = () => {
    return ( 
        <header>
            <img src={school} alt="" />
            <nav>
                <a href="">Student</a>
                <a href="">Teacher</a>
                <a href="">Admin</a>
            </nav>
        </header>
     );
}
 
export default Header;