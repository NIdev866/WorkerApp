import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Nav from "./components/nav"
import Progress from "./components/progress"
import Contents from './contents'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import { connect } from 'react-redux';
import * as actions from '../actions';

class WorkerParent extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Contents url={this.props.match.url} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(WorkerParent);