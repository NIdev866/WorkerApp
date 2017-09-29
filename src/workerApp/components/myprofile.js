import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form';
import styles from './form_material_styles'
import renderField from '../renderField'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TextField from 'material-ui/TextField'
import {blue500, grey400} from 'material-ui/styles/colors'

import AvatarCropper from "react-avatar-cropper";
import ReactDom from "react-dom";



var FileUpload = React.createClass({

  handleFile: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if (!file) return;

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
});



class Myprofile extends Component{
  constructor(props){
    super(props)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleCrop = this.handleCrop.bind(this)
    this.handleRequestHide = this.handleRequestHide.bind(this)
    this.state = {
      cropperOpen: false,
      img: null,
      croppedImg: "http://www.fillmurray.com/400/400"
    }
  }



  handleFileChange(dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    });
  }

  handleCrop(dataURI) {
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  }
  handleRequestHide() {
    this.setState({
      cropperOpen: false
    });
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




          <FileUpload handleFileChange={this.handleFileChange} />


        {this.state.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={this.state.cropperOpen}
            onCrop={this.handleCrop}
            image={this.state.img}
            width={400}
            height={400}
          />
        }


















































EXAMPLEEE
import React from "react";
import ReactDom from "react-dom";
import AvatarCropper from "../../lib";

var App = React.createClass({
  getInitialState: function() {
    return {
      cropperOpen: false,
      img: null,
      croppedImg: "http://www.fillmurray.com/400/400"
    };
  },
  handleFileChange: function(dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    });
  },
  handleCrop: function(dataURI) {
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  },
  handleRequestHide: function() {
    this.setState({
      cropperOpen: false
    });
  },
  render () {
    return (
      <div>
        <div className="avatar-photo">
          <FileUpload handleFileChange={this.handleFileChange} />
          <div className="avatar-edit">
            <span>Click to Pick Avatar</span>
            <i className="fa fa-camera"></i>
          </div>
          <img src={this.state.croppedImg} />
        </div>
        {this.state.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={this.state.cropperOpen}
            onCrop={this.handleCrop}
            image={this.state.img}
            width={400}
            height={400}
          />
        }
      </div>
    );
  }
});

var FileUpload = React.createClass({

  handleFile: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if (!file) return;

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
});

ReactDom.render(<App />, document.getElementById("content"));
EXAMPLEE



































{/*https://github.com/blueimp/JavaScript-Canvas-to-Blob
https://blueimp.github.io/JavaScript-Canvas-to-Blob/test/
https://www.npmjs.com/package/react-cropperjs
https://www.kurzor.co.uk/blog/28-uploading-and-resizing-images-with-reactjs
https://github.com/DropsOfSerenity/react-avatar-cropper*/}


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