import React, { Component } from "react"
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styles from '../form_material_styles'
import renderField from '../../renderField'
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {change, submit} from 'redux-form'
import validate from '../validate'
import TextField from 'material-ui/TextField'
import AvatarCropper from "react-avatar-cropper";
import ReactDom from "react-dom";


import addresssubmit from "./submitActions/addressSubmit"


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

const renderError = ({ input, meta: { error } }) => (
  <div style={{color: "red", fontSize: '14px', marginBottom: '25px'}}>
    {error ? <span>{error}</span> : ""}
  </div>
)




class AddressComponent extends Component{
  constructor(props){
    super(props)
    this.postal_codeOnChange = this.postal_codeOnChange.bind(this)
    this.houseOrFlatChosen = this.houseOrFlatChosen.bind(this)
    this.state = {
      'postal_code21':'',
      'postal_code22':'',
    }
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
      this.props.dispatch(change('addressDetails', 'postal_code', allPostal_codeBoxesJoined))
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
      <div style={{position: 'absolute', width: '100%', height: '100%', padding: 0}}>
        <div style={{height: '30px', margin: 0}}>
        <h3 style={{margin: 0, padding: 0, paddingTop: '10px'}}><u>Address</u></h3>
        </div>
        <div style={{position: 'relative', display: 'inline-block', width: '100%', height: 'calc(100% - 30px)'}}>
          <form>
            <div style={{float: 'left', width: '50%', height: '100%', }}>
              <div>
                <div style={{marginTop: '10px'}}>Road name</div>
                <Field
                  onBlur={() => this.props.dispatch(submit('addressDetails'))}
                  name="road_name"
                  type="text"
                  component={RoadCourtBuildingCountyNameComponent}
                />
              </div>
              <Field name="road_name" component={renderError} />
              <div>
                <div style={{marginTop: '10px'}}>Court name</div>
                <Field
                  onBlur={() => this.props.dispatch(submit('addressDetails'))}
                  name="court_name"
                  type="text"
                  component={RoadCourtBuildingCountyNameComponent}
                />
              </div>
              <Field name="court_name" component={renderError} />
              <div>
                <div style={{marginTop: '10px'}}>Building name</div>
                <Field
                  onBlur={() => this.props.dispatch(submit('addressDetails'))}
                  name="building_name"
                  type="text"
                  component={RoadCourtBuildingCountyNameComponent}
                />
              </div>
              <Field name="building_name" component={renderError} />
            </div>
            <div style={{float: 'right', width: '50%', height: '100%'}}>
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
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AddressComponent = reduxForm({
  form: 'addressDetails',
  validate,
  onSubmit: addresssubmit
})(AddressComponent)

const selector = formValueSelector('addressDetails') // <-- same as form name
AddressComponent = connect(
  state => {
    const house_or_flat = selector(state, 'house_or_flat')
    return {
      house_or_flat
    }
  }
)(AddressComponent)

export default AddressComponent



















