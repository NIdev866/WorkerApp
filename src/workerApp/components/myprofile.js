import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form';
import styles from './form_material_styles'
import renderField from '../renderField'

import { connect } from 'react-redux';
import * as actions from '../../actions';




class NIfield extends Component{

    onChange(event) {
      if (event.target.value.length === 1) {
        this.refs[parseInt(event.target.id, 10) + 1].focus();
      }
    }


  render(){
    return(
      <input 

      id="1"
      type='text' 
      maxLength="1"
      ref="1"
      onChange={this.onChange}



      {...this.props.input} />
    )
  }
}







class Myprofile extends Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }

    onChange(event) {
      if (event.target.value.length === event.target.maxLength) {
        this.refs[parseInt(event.target.id, 10) + 1].focus();
      }
    }




  render(){
    const { handleSubmit } = this.props;   

    const NIstyle = {
      width: '10px'
    }

    return(
      <div style={{backgroundColor: 'red', width: '80vw', margin: '0 auto'}}>
        {
        !this.props.bankDetailsSubmitted &&

                <form onSubmit={this.props.submitBankDetails}>

                  <div style={{marginTop: '10px', marginBottom: '10px'}}>You have to enter these details first</div>

{/*                  <div>
                    <Field 
                      name='NI1' 
                      type='text'
                      component={({input})=>{return <input type='text' {...input}/>}}
                      id="1"
                      maxLength="2"
                      ref="1"
                      onChange={this.onChange}/>
                    <Field 
                      name='NI2' 
                      type='text'
                      component={({input})=>{return <input type='text' {...input}/>}}
                      id="2"
                      maxLength="2"
                      ref="2"
                      onChange={this.onChange}/>
                    <Field 
                      name='NI3' 
                      component={({input})=>{return <input type='text' {...input}/>}}
                      id="3"
                      maxLength="2"
                      ref="3"
                      onChange={this.onChange}/>
                    <Field 
                      name='NI4' 
                      component={({input})=>{return <input type='text' {...input}/>}}
                      id="4"
                      maxLength="2"
                      ref="4"
                      onChange={this.onChange}/>
                  </div>*/


/*worker app: first page - jak login do email password 2 email repeat die do backend niece she zapisuj e w reduxie. Jack 



1: login page for worker - password twice will send him token etc

2: workers details do backendu - I formularz na profile page na worker.






NI number (can be empty, then he can edit later to add),

Sort code

8 cyfr account number

adres dokladny - 1 is ‘road’ req-2 court name req, 3 building name - 4 house OR flat req number
, postal code (NOT postcode), county (not required), 
(skopiuj od jakiejs innej agencji)

data urodzenia (date picker osobne na rok etc)




al these details has to be editable after submittion
the picture has to be added here by him
*/



                }



                <div>
                  <span>Account number</span>
                  <Field
                    name="account_number"
                    type="text"
                    component={({input})=>{return <input type='text' {...input}/>}}
                    label="Account Number"
                  />
                </div>
                <div>
                  <div style={{marginTop: '10px'}}>Road name</div>
                  <Field
                    name="road_name"
                    type="text"
                    component={({input})=>{return <input type='text' {...input}/>}}
                    label="Road Name"
                  />
                </div>
                  <RaisedButton
                    type="submit"
                    label="SIGN UP"
                    primary={true}
                  />
                </form>









          /*<RaisedButton
            type="button"
            label="SUBMIT"
            primary={true}
            onClick={this.props.submitBankDetails}
            style={{...styles.raisedButtonStyle, marginTop: "20px"}}
          />*/
        }
      </div>
    )
  }
}


function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Invalid email address'
  }else if(formProps.email.length > 30) {
    errors.email = 'Input too long'
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

export default reduxForm({
  form: 'bankDetails',
  validate
})(Myprofile)