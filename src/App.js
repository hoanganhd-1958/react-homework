import React from 'react';
import './App.scss';
import SignUp from './components/sign-up'
import LogIn from './components/log-in'
import Tab from './components/tabs'

class App extends React.Component {
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      isSignUp: true,
      currentTab: "signup"
    };
  }
  // This method will be sent to the child component
  handler(tab) {
    if (tab === "#login") {
      this.setState({
        isSignUp: false,
        currentTab: "login"
      });
    } else {
      this.setState({
        isSignUp: true,
        currentTab: "signup"
      });
    }
  }
  render() {
    return (
      <div className="form">
        
        <ul className="tab-group">
          <Tab
            tab="#signup"
            tab_name="Sign Up"
            action={this.handler}
            active={this.state.currentTab === "signup"}
          />
          <Tab 
            tab="#login"
            tab_name="Log In"
            action={this.handler}
            active={this.state.currentTab === "login"}
          />
        </ul>
        
        <div className="tab-content">
          {
            this.state.isSignUp ? <SignUp /> : <LogIn />
          }
        </div>
      </div>
    );
  }
}

export default App;
