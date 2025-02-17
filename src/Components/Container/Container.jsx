import React from 'react'
import './Container.css'
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import { useState } from 'react'


const Container = () => {
    
   const [form, setForm] = useState({
    label: "",
    Name : "",
    Placeholder: "",
    Type : "",
    Required: "",
    size : "",


   });
    const [formList, setFormList] = useState([]);

    const AddFormList = (e) => {
      e.preventDefault();
      setFormList ([...formList,  form])
      console.log(form)
      setForm("")
    }

 

  



  return (
     <div className='w-100 p-4'>
      <h2  className='mb-20 text-center'>USER INPUT FORM</h2>
      <div className="d-flex p-3 w-100" >
      <LeftContainer form={form} setForm={setForm}  formList={formList} setFormList={setFormList}  AddFormList={AddFormList}  />

      <RightContainer form={form} setForm={setForm}  formList={formList} setFormList={setFormList}/>   
      </div>
      
    </div>

    
   
  )
}

export default Container
