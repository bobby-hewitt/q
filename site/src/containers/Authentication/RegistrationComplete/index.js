
import './style.css'
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const RegistrationComplete = props => (
  <div>
    <h1>Thank you for your interest</h1>
    <p>We will contact you once we have processed your application</p>
    <p>
      <button onClick={props.changePage}>Return to homepage</button>
    </p>
  </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComplete)