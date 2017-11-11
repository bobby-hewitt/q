import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'
import Register from './containers/Authentication/Register'
import RegistrationComplete from './containers/Authentication/RegistrationComplete'
import Login from './containers/Authentication/Login'
import PasswordResetRequest from './containers/Authentication/PasswordResetRequest'
import ConfirmNewPassword from './containers/Authentication/ConfirmNewPassword'
import Admin from './containers/Admin'
import Investments from './containers/Investments'
import Home from './containers/Unauthenticated/Home'
import About from './containers/Unauthenticated/About'
import Contact from './containers/Unauthenticated/Contact'
import Team from './containers/Unauthenticated/Team'
import Portfolio from './containers/Unauthenticated/Portfolio'
import { setAuthToken } from './actions/user'

class Routes extends Component{

  componentWillMount(){
    if (window.localStorage && window.localStorage.qVenturesAuth){
      console.log('setting auth')
      this.props.setAuthToken(window.localStorage.qVenturesAuth)
    }
  }

  render(){
    return(
     <div>
        <header>
        </header>

        <main>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/investments" component={Investments} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/password-reset-request" component={PasswordResetRequest} />
          <Route exact path="/registration-complete" component={RegistrationComplete} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset/:token" component={ConfirmNewPassword} />
          <Route path="/admin" component={Admin} />
        </main>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => bindActionCreators({
  setAuthToken
}, dispatch)

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Routes))