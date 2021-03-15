import Input from '../input'
import React from "react"

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div id="signup">   
        <h1>Sign Up for Free</h1>
        
        <form action="/" method="post">
        
        <div className="top-row">
          <div className="field-wrap">
            <label>
              First Name<span className="req">*</span>
            </label>
            <Input type="text"/>
          </div>
      
          <div className="field-wrap">
            <label>
              Last Name<span className="req">*</span>
            </label>
            <Input type="text"/>
          </div>
        </div>

        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <Input type="email"/>
        </div>
        
        <div className="field-wrap">
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <Input type="password"/>
        </div>
        
        <button type="submit" className="button button-block">Get Started</button>
      
        </form>
      </div>
    );
  }
}

export default SignUp