import React from 'react'
import Container from './Components/Container/Container'
import './App.css'

const App = () => {


  const userFields = {orientation:"VERTICAL", isTabed: false, fields: [{
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'Enter your first name',

  
  
    }, {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    placeholder: 'Enter your last name',
    
    }, {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
   
    }, {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    
    }, {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm your password',
  
    }, {
    label: 'Phone Number',
    name: 'phoneNumber',
    type: 'tel',
    placeholder: 'Enter your phone number',
    
    }, {
    label: 'Date of Birth',
    name: 'dob',
    type: 'date',
    placeholder: 'Enter your date of birth',
    
   },{
    label: 'Gender',
    name: 'gender',
    type: 'select',
    placeholder: 'Select gender',
    selectType:"GEN"
  },{
    label: 'Marriage status',
    name: 'stat',
    type: 'select',
    placeholder: 'Select Status',
    selectType:"STATUS"
  },

  {
    label: 'Textarea',
    name: 'textarea',
    type: 'textarea',
    placeholder: 'textarea',
    selectType:"TEXTAREA"
  }




]}

  return (
    <div  className='app '>
    <h2  className='mb-6 text-center text-primary'>USER INPUT FORM</h2>
      <Container userFields={userFields}/>

       
    </div>
  )
}

export default App
