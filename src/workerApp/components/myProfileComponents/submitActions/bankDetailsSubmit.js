import {SubmissionError} from 'redux-form'
import axios from 'axios'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'


function AddressSubmit(values){

  console.log(values)

  const worker_id = localStorage.getItem('worker_id');

  axios.put(`http://localhost:3000/worker/add-bankdetails/${worker_id}`, values)
}


export default AddressSubmit