import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styles from './form_material_styles'
import renderField from '../renderField'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {change} from 'redux-form'
import validate from './validate'
import TextField from 'material-ui/TextField'




import AvatarCropper from "react-avatar-cropper";
import ReactDom from "react-dom";




import submit from "./submit"
import { RadioButton } from 'material-ui/RadioButton'
import { RadioButtonGroup, SelectField } from "redux-form-material-ui"
import DatePicker from 'material-ui/DatePicker';





const HouseFlatNumberComponent = ({input})=>(
  <TextField inputStyle={{textAlign: 'center'}} type="text" 
    maxLength='5' style={{width: '15%', marginRight: '0px'}}
    {...input}
  />
)

const RoadCourtBuildingCountyNameComponent = ({input})=>(
  <TextField inputStyle={{textAlign: 'left'}} type="text" 
    maxLength='70' style={{width: '50%', marginRight: '0px'}}
    {...input}
  />
)

const HouseChosen = ()=>(
  <div>
    <div style={{marginTop: '15px', marginBottom: '-4px'}}>
    <div>House number</div>
    <Field
      name="house_number"
      type="text"
      component={HouseFlatNumberComponent}
    />
    </div>
    <Field name="house_number" component={renderError} />
  </div>
)

const FlatChosen = ()=>(
  <div>
    <div style={{marginTop: '15px', marginBottom: '-4px'}}>
    <div>Flat number</div>
    <Field
      name="flat_number"
      type="text"
      component={HouseFlatNumberComponent}
    />
    </div>
    <Field name="flat_number" component={renderError} />
  </div>
)

















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















const renderError = ({ input, meta: { error } }) => (
  <div style={{color: "red", fontSize: '14px', marginBottom: '25px'}}>
    {error ? <span>{error}</span> : ""}
  </div>
)

class Myprofile extends Component{
  constructor(props){
    super(props)
    this.NIonChange = this.NIonChange.bind(this)
    this.sortcodeOnChange = this.sortcodeOnChange.bind(this)
    this.postal_codeOnChange = this.postal_codeOnChange.bind(this)
    this.bankAccountNumberOnChange = this.bankAccountNumberOnChange.bind(this)
    this.houseOrFlatChosen = this.houseOrFlatChosen.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleCrop = this.handleCrop.bind(this)
    this.handleRequestHide = this.handleRequestHide.bind(this)
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
      'sortcode11':'',
      'sortcode12':'',
      'sortcode13':'',
      'postal_code21':'',
      'postal_code22':'',
      'bank_account_number31':'',
      'bank_account_number32':'',
      'bank_account_number33':'',
      'bank_account_number34':'',
      'bank_account_number35':'',
      'bank_account_number36':'',
      'bank_account_number37':'',
      'bank_account_number38':'',
      birthDate: null,
      birthDateFormatted: null,




      cropperOpen: false,
      img: null,
      croppedImg: null,


    }
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this)
    this.formatDate = this.formatDate.bind(this)
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
        this.props.dispatch(change('bankDetails', 'birth_date', this.state.birthDateFormatted));
      })
    })
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
        this.props.dispatch(change('bankDetails', 'NI_number', allNInumbersJoined))
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
  sortcodeOnChange(event) {
    event.target.value = event.target.value.toUpperCase()
    if (event.target.value.length === event.target.maxLength && event.target.id !== '14') {
      if (event.target.value.length === event.target.maxLength && event.target.id !== '13') {
        this.refs[parseInt(event.target.id, 10) + 1].focus();
      }
      let stateToChange = `sortcode${event.target.id}`
      this.setState({[stateToChange]: event.target.value}, ()=>{ 
        let allSortocodeBoxes = []
        for(let i = 10; i < 13; i++){
          allSortocodeBoxes.push(this.state[`sortcode${i+1}`])
        }
        let allSortocodeBoxesJoined = allSortocodeBoxes.join('')
        this.props.dispatch(change('bankDetails', 'sortcode', allSortocodeBoxesJoined))
      })
    }
  }
  sortcodeFields(){
    let result = []
    let ref = 11
    for(let i = 10; i < 13; i++){
      let refStringified = ref.toString()
      if(i < 12){
        result.push(
          <span>
          <TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
          maxLength='2' ref={refStringified} style={{width: '12%', marginRight: '0px'}}name="" 
          onChange={this.sortcodeOnChange}/>
            &mdash;
          </span>
        )
      }
      else{
        result.push(
          <TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
          maxLength='2' ref={refStringified} style={{width: '12%', marginRight: '0px'}}name="" 
          onChange={this.sortcodeOnChange}/>
        )
      }
      ref++
    }
    return <div>{result}</div>
  }
  postal_codeOnChange(event) {
    event.target.value = event.target.value.toUpperCase()
    let stateToChange = `postal_code${event.target.id}`
    this.setState({[stateToChange]: event.target.value}, ()=>{ 
      let allPostal_codeBoxes = []
      for(let i = 20; i < 22; i++){
        allPostal_codeBoxes.push(this.state[`postal_code${i+1}`])
      }
      let allPostal_codeBoxesJoined = allPostal_codeBoxes.join('')
      this.props.dispatch(change('bankDetails', 'postal_code', allPostal_codeBoxesJoined))
    })
  }
  postal_codeFields(){
    let result = []
    let ref = 21
    for(let i = 20; i < 22; i++){
      let refStringified = ref.toString()
      if(i < 21){
        result.push(
          <span>
          <TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
          maxLength='5' ref={refStringified} style={{width: '15%', marginRight: '0px'}}name="" 
          onChange={this.postal_codeOnChange}/>
            &mdash;
          </span>
        )
      }
      else{
        result.push(
          <TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
          maxLength='5' ref={refStringified} style={{width: '15%', marginRight: '0px'}}name="" 
          onChange={this.postal_codeOnChange}/>
        )
      }
      ref++
    }
    return <div>{result}</div>
  }
  bankAccountNumberOnChange(event) {
    event.target.value = event.target.value.toUpperCase()
    if (event.target.value.length === event.target.maxLength && event.target.id !== '39') {
      if (event.target.value.length === event.target.maxLength && event.target.id !== '38') {
        this.refs[parseInt(event.target.id, 10) + 1].focus();
      }
      let stateToChange = `bank_account_number${event.target.id}`
      this.setState({[stateToChange]: event.target.value}, ()=>{ 
        let allBank_account_numbers = []
        for(let i = 30; i < 38; i++){
          allBank_account_numbers.push(this.state[`bank_account_number${i+1}`])
        }
        let allBank_account_numbersJoined = allBank_account_numbers.join('')
        this.props.dispatch(change('bankDetails', 'bank_account_number', allBank_account_numbersJoined))
      })
    }
  }
  bankAccountNumberFields(){
    let result = []
    let ref = 31
    for(let i = 30; i < 38; i++){
      let refStringified = ref.toString()
      result.push(<TextField id={refStringified} inputStyle={{textAlign: 'center'}} type="text" 
        maxLength='1' ref={refStringified} style={{width: '9%', marginRight: '8px'}}name="" 
        onChange={this.bankAccountNumberOnChange}/>)
      ref++
    }
    return <div>{result}</div>
  }

  houseOrFlatChosen(){
    if(this.props.house_or_flat === "house"){
      return <HouseChosen/>
    }
    else if(this.props.house_or_flat === "flat"){
      return <FlatChosen/>
    }
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
      <div style={{margin: '0 auto', maxWidth: '700px'}}>
        {!this.props.bankDetailsSubmitted &&
          <form onSubmit={handleSubmit}>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>You have to enter these details first</div>
              <div>
                <div>National Insurance number</div>
                  {this.NIfields()}
              </div>
            <Field name="NI_number" component={renderError} />
            <div style={{marginTop: '15px', marginBottom: '-4px'}}>
              <div>sortcode</div>
                {this.sortcodeFields()}
            </div>
            <Field name="sortcode" component={renderError} />
            <div>
              <div>Bank account number</div>
                {this.bankAccountNumberFields()}
            </div>
            <Field name="bank_account_number" component={renderError} />
            <div>
              <div style={{marginTop: '10px'}}>Road name</div>
              <Field
                name="road_name"
                type="text"
                component={RoadCourtBuildingCountyNameComponent}
              />
            </div>
            <Field name="road_name" component={renderError} />
            <div>
              <div style={{marginTop: '10px'}}>Court name</div>
              <Field
                name="court_name"
                type="text"
                component={RoadCourtBuildingCountyNameComponent}
              />
            </div>
            <Field name="court_name" component={renderError} />
            <div>
              <div style={{marginTop: '10px'}}>Building name</div>
              <Field
                name="building_name"
                type="text"
                component={RoadCourtBuildingCountyNameComponent}
              />
            </div>
            <Field name="building_name" component={renderError} />
            <div style={{marginBottom: "-30px"}}>Do you live in a house or a flat?</div>
            <div style={radiosParentDiv}>
              <Field style={houseFlatChooserStyle} name="house_or_flat" component={RadioButtonGroup}>
                <RadioButton disableTouchRipple style={houseStyle} value="house"/>
                <RadioButton disableTouchRipple style={flatStyle} value="flat"/>
              </Field>
              <div style={{...houseFlatChooserStyle, marginLeft: "-10px"}}>
                <span style={{marginRight: "72px"}}>House</span><span>Flat</span>
              </div>
              <Field name="house_or_flat" component={renderError} />
            </div>
            {this.houseOrFlatChosen()}
            <div style={{marginTop: '15px', marginBottom: '-4px'}}>
              <div>postal code</div>
                {this.postal_codeFields()}
            </div>
            <Field name="postal_code" component={renderError} />
            <div>
              <div style={{marginTop: '10px'}}>County</div>
              <Field
                name="county"
                type="text"
                component={RoadCourtBuildingCountyNameComponent}
              />
            </div>
            <Field name="county" component={renderError} />
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

        {this.state.croppedImg && 
          <div>{this.state.croppedImg}</div>

        }







        {/*console.log({CROPPEDIMGG: this.state.croppedImg})*/}
        <RaisedButton
          type="submit"
          label="SUBMIT"
          primary={true}
          onClick={this.props.submitBankDetails}
          style={{...styles.raisedButtonStyle, marginTop: "20px"}}
        />
        </form>
        }
      </div>
    )
  }
}








Myprofile = reduxForm({
  form: 'bankDetails',
  validate,
  onSubmit: submit
})(Myprofile)

const selector = formValueSelector('bankDetails') // <-- same as form name
Myprofile = connect(
  state => {
    const house_or_flat = selector(state, 'house_or_flat')
    return {
      house_or_flat
    }
  }
)(Myprofile)

export default Myprofile
