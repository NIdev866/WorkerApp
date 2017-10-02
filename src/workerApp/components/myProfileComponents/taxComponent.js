import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styles from '../form_material_styles'
import renderField from '../../renderField'
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {change} from 'redux-form'
import validate from '../validate'
import TextField from 'material-ui/TextField'
import AvatarCropper from "react-avatar-cropper";
import ReactDom from "react-dom";
import submit from "../submit"
import { RadioButton } from 'material-ui/RadioButton'
import { RadioButtonGroup, SelectField } from "redux-form-material-ui"
import DatePicker from 'material-ui/DatePicker';




const renderError = ({ input, meta: { error } }) => (
  <div style={{color: "red", fontSize: '14px', marginBottom: '25px'}}>
    {error ? <span>{error}</span> : ""}
  </div>
)

class TaxComponent extends Component{  
  constructor(props){
    super(props)
    this.NIonChange = this.NIonChange.bind(this)
    this.state = {
      'NI1':'',
      'NI2':'',
      'NI3':'',
      'NI4':'',
      'NI5':'',
      'NI6':'',
      'NI7':'',
      'NI8':'',
      'NI9':'',
      birthDate: null,
      birthDateFormatted: null,
    }
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this)
    this.formatDate = this.formatDate.bind(this)
  }


  NIonChange(event) {
    event.target.value = event.target.value.toUpperCase()
    if (event.target.value.length === event.target.maxLength && event.target.id !== '10') {
      if (event.target.value.length === event.target.maxLength && event.target.id !== '9') {
        this.refs[parseInt(event.target.id, 10) + 1].focus();
      }
      let stateToChange = `NI${event.target.id}`
      this.setState({[stateToChange]: event.target.value}, ()=>{ 
        let allNInumbers = []
        for(let i = 0; i < 9; i++){
          allNInumbers.push(this.state[`NI${i+1}`])
        }
        let allNInumbersJoined = allNInumbers.join('')
        this.props.dispatch(change('taxDetails', 'NI_number', allNInumbersJoined))
      })
    }
  }
  NIfields(){
    let result = []
    let ref = 1
    for(let i = 0; i < 9; i++){
      let refStringified = ref.toString()
      result.push(<TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
        maxLength='1' ref={refStringified} style={{width: '8%', marginRight: '8px'}}name="" 
        onChange={this.NIonChange}/>)
      ref++
    }
    return <div>{result}</div>
  }
  formatDate(date){
    return date.getFullYear() + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + ('0' + (date.getDate()+1)).slice(-2);
  }
  handleBirthDateChange(event, date){
    this.setState({
      birthDate: date
    }, ()=>{
      this.setState({
        birthDateFormatted: this.formatDate(this.state.birthDate)
      }, ()=>{
        this.props.dispatch(change('taxDetails', 'birth_date', this.state.birthDateFormatted));
      })
    })
  }

  render(){
  	const { handleSubmit } = this.props;   
    const radiosParentDiv = {
      textAlign: "center",
      margin: "0 auto",
      width: "300px",
      marginTop: "30px",
    }
    const houseFlatChooserStyle = {
      display: "inline-block",
      width: "300px",
      position: "relative",
    }
    const houseStyle = {
      display: "inline-block",
      width: "45px",
      marginRight: "30px"
    }
    const flatStyle = {
      display: "inline-block",
      width: "45px",
      marginLeft: "30px"
    }

    return(
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>

      <h3><u>Tax</u></h3>

          <form onSubmit={handleSubmit}>
              <div>
                <div>National Insurance number</div>
                  {this.NIfields()}
              </div>
            <Field name="NI_number" component={renderError} />            
            <div>
              <div style={{marginTop: '10px'}}>Birth date</div>
                <DatePicker
                  hintText="Birth date"
                  value={this.state.birthDate}
                  onChange={this.handleBirthDateChange}
                  formatDate={this.formatDate}
                  openToYearSelection={true}
                />
            </div>
            <Field name="birth_date" component={renderError} />
        </form>

      </div>
    )
  }
}

TaxComponent = reduxForm({
  form: 'taxDetails',
  validate,
  onSubmit: submit
})(TaxComponent)

export default TaxComponent