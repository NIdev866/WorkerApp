const validate = values => {
  const errors = {}


/*  if (!values.NI_number) {
    errors.NI_number = 'Full NI number required'
  }
  else if(!/[A-Z]/g.test(values.NI_number.substring(0,1)) && values.NI_number.substring(0,1) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[A-Z]/g.test(values.NI_number.substring(1,2)) && values.NI_number.substring(1,2) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(2,3)) && values.NI_number.substring(2,3) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(3,4)) && values.NI_number.substring(3,4) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(4,5)) && values.NI_number.substring(4,5) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(5,6)) && values.NI_number.substring(5,6) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(6,7)) && values.NI_number.substring(6,7) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[0-9]/g.test(values.NI_number.substring(7,8)) && values.NI_number.substring(7,8) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if(!/[A-Z]/g.test(values.NI_number.substring(8,9)) && values.NI_number.substring(8,9) !== ''){
    errors.NI_number = 'Invalid NI number'
  }
  else if (values.NI_number.length !== 9) {
    errors.NI_number = 'Full NI number required'
  }*/

  if (!values.sortcode) {
    errors.sortcode = 'Full sortcode required'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(0,1)) && values.sortcode.substring(0,1) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(1,2)) && values.sortcode.substring(1,2) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(2,3)) && values.sortcode.substring(2,3) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(3,4)) && values.sortcode.substring(3,4) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(4,5)) && values.sortcode.substring(4,5) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if(!/[0-9]/g.test(values.sortcode.substring(5,6)) && values.sortcode.substring(5,6) !== ''){
    errors.sortcode = 'Invalid sortcode'
  }
  else if (values.sortcode.length !== 6) {
    errors.sortcode = 'Full sortcode required'
  }




  if (!values.house_or_flat) {
    errors.house_or_flat = 'House or flat required'
  }



  if (!values.house_number) {
    errors.house_number = 'House number required'
  }

  if (!values.flat_number) {
    errors.flat_number = 'Flat number required'
  }

  if(!values.bank_account_number){
    errors.bank_account_number = 'Bank account number required'
  }  
  else if(!/[0-9]/g.test(values.bank_account_number.substring(0,1)) && values.bank_account_number.substring(0,1) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(1,2)) && values.bank_account_number.substring(1,2) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(2,3)) && values.bank_account_number.substring(2,3) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(3,4)) && values.bank_account_number.substring(3,4) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(4,5)) && values.bank_account_number.substring(4,5) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(5,6)) && values.bank_account_number.substring(5,6) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(5,6)) && values.bank_account_number.substring(6,7) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(!/[0-9]/g.test(values.bank_account_number.substring(5,6)) && values.bank_account_number.substring(7,8) !== ''){
    errors.bank_account_number = 'Invalid bank account number'
  }
  else if(values.bank_account_number.length !== 8){
    errors.bank_account_number = 'Full bank account number required'
  }

  if (!values.road_name) {
    errors.road_name = 'Road name required'
  }
  if (!values.court_name) {
    errors.court_name = 'Court name required'
  }
  if (!values.postal_code) {
    errors.postal_code = 'Postal code required'
  }
  if (!values.birth_date) {
    errors.birth_date = 'Birth date required'
  }
  
  

  









/*  if (!formProps.email) {
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
  }*/

  return errors
}

export default validate
