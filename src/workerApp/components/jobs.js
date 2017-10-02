import React, { Component } from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from "react-router-dom"
import JobCards from "./jobCards"
import { Redirect } from 'react-router'

class Jobs extends Component{  
  render(){

    const worker_id = localStorage.getItem('worker_id');

    const actions = [
    <Link to={`/${worker_id}/myprofile`}>
      <FlatButton
        label="Go to my profile"
        primary={true}
      />
    </Link>
    ]

    if(!this.props.authenticated){
      return <Redirect to="/login"/>
    }
    else if(this.props.match.url !== `/${worker_id}/jobs`){
      return <Redirect to={`/${worker_id}/jobs`}/>
    }
    else{

      //this.props.history.push(`${worker_id}/jobs`)
    
      return(
        <div style={{maxWidth: "800px", margin: "0 auto"}}>
          <Dialog
            style={{marginTop: "-120px"}}
            actions={actions}
            modal={true}
            overlayStyle={{opacity: "0.6"}}
            open={!this.props.bankDetailsSubmitted}
            onRequestClose={this.handleClose}
          >
            You have to enter your bank details and NI number first
          </Dialog>
          <JobCards />
        </div>
      )

    }
  }
}


function mapStateToProps(state){
  return{
    bankDetailsSubmitted: state.main.bankDetailsSubmitted,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Jobs);