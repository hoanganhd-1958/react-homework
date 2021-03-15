import Input from '../input'

function LogIn() {
    return (
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div className="field-wrap">
            <label>
              Email Address<span className="req">*</span>
            </label>
            <Input type="email" />
          </div>
          
          <div className="field-wrap">
            <label>
              Password<span className="req">*</span>
            </label>
            <Input type="password" />
          </div>
          
          <p className="forgot"><a href="forgot">Forgot Password?</a></p>
          
          <button className="button button-block">Log In</button>
          
          </form>

        </div>
    );
}

export default LogIn;