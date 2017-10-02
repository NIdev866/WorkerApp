import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Nav from "./components/nav"
import Progress from "./components/progress"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import { connect } from 'react-redux';
import * as actions from '../actions';

class Contents extends Component {
  render(){
    const worker_id = localStorage.getItem('worker_id');
    if(!this.props.authenticated){
      return <Redirect to="/login"/>
    }
    else if(this.props.url !== `/${worker_id}/jobs`){
      return <Redirect to={`/${worker_id}/jobs`}/>
    }
  }
}

function mapStateToProps(state){
  return{
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Contents);