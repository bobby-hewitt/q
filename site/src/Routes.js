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
import NavBar from './containers/NavBar'
import Member from './containers/Member'
import { setAuthToken, authenticateWithJWT } from './actions/user'

let authLinks = [
  {copy: 'members', path: 'member/members'},
  {copy: 'noticeboard', path: 'member/noticebaord'},
  {copy: 'investments', path: 'member/investments'},
  {copy: 'events', path: 'member/events'},
  {copy: 'logout', path: 'login'}
]

let noAuthLinks = [
{copy: 'home', path: ''},
  {copy: 'about', path: 'about'},
  {copy: 'team', path: 'team'},
  {copy: 'portfolio', path: 'portfolio'},
  {copy: 'events', path: 'events'},
  {copy: 'login', path: 'login'}
]

class Routes extends Component{

  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: false,
      links: noAuthLinks
    }
  }

  componentWillMount(){
    if (window.localStorage && window.localStorage.qVenturesAuth){
      console.log('setting auth')
      let payload = {
        url: this.props.apiHost,
        jwt: window.localStorage.qVenturesAuth

      }
      this.props.setAuthToken(payload)
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('recieving props')
    if (nextProps.user && nextProps.user.imageUrl && this.state.isAuthenticated){
      return
    }
    else if (nextProps.user && nextProps.user.imageUrl && !this.state.isAuthenticated){
      this.setState({isAuthenticated: true, links: authLinks})
      console.log('should log in')
    } 
    else if(this.state.isAuthenticated){
      console.log('should log out')
      this.setState({isAuthenticated: false, links: noAuthLinks})
    }
  }

  render(){
    return(
     <div>

        <header> 
          {this.props.location.pathname.indexOf('admin') <= 0 && 
            <NavBar links={this.state.links}/>
          }
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
          <Route path="/member" component={Member} />
        </main>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => bindActionCreators({
  setAuthToken,
  authenticateWithJWT
}, dispatch)

const mapStateToProps = state => ({
  apiHost:state.setup.apiHost,
  displayError: state.error.showError,
  user: state.user
  
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes))