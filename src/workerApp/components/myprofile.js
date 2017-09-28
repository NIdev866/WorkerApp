import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form';
import styles from './form_material_styles'
import renderField from '../renderField'
import { connect } from 'react-redux';
import * as actions from '../../actions';


import TextField from 'material-ui/TextField'
import {blue500, grey400} from 'material-ui/styles/colors'



import CropperJS from 'react-cropperjs';



class Myprofile extends Component{
  constructor(props){
    super(props)
    this._crop = this._crop.bind(this)
  }


  _crop(){
    // image in dataUrl 
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }


  render(){
    const { handleSubmit } = this.props;   
    return(
      <div style={{width: '80vw', margin: '0 auto'}}>
        {
        !this.props.bankDetailsSubmitted &&

                <form onSubmit={this.props.submitBankDetails}>

                  <div style={{marginTop: '10px', marginBottom: '10px'}}>You have to enter these details first</div>

                <div>
                  <div style={{marginTop: '10px'}}>Road name</div>
                  {/*<Field
                                      name="road_name"
                                      type="text"
                                      component={({input})=>{return <input type='text' {...input}/>}}
                                      label="Road Name"
                                    />*/}
                </div>





      <CropperJS
        ref='cropper'
        src='http://i.imgur.com/n483ZwJ.jpg'
        style={{height: 400, width: '100%'}}
        // Cropper.js options 
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)} />


https://github.com/blueimp/JavaScript-Canvas-to-Blob
https://blueimp.github.io/JavaScript-Canvas-to-Blob/test/
https://www.npmjs.com/package/react-cropperjs
https://www.kurzor.co.uk/blog/28-uploading-and-resizing-images-with-reactjs


{/*                  <RaisedButton
                    type="submit"
                    label="SIGN UP"
                    primary={true}
                  />*/}
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