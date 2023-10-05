const Login = () => {
    return ( 
        <form action="" className="login-form" >
            <h1>Login</h1>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" />
            </div>

            <button>Login</button>
        </form>
     );
}
 
export default Login;