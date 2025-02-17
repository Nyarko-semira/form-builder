import React from 'react'
import './Container.css'
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import { useState } from 'react'

const init ={
  label: "",
  Name : "",
  Placeholder: "",
  Type : "",
  Required: "",
  size : ""}
const Container = () => {
    
   const [form, setForm] = useState(init);
    const [formList, setFormList] = useState([]);

    const AddFormList = (e) => {
      setFormList ((prev) => ([...prev, form]))
      setForm(init)
    }



  return (
     <div className='w-80 px-5 pt-1  mx-5 mt-5 content  ' style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 10px"}}>

      <div className="d-flex  w-80" >
      <LeftContainer form={form} setForm={setForm}  formList={formList} setFormList={setFormList}  AddFormList={AddFormList}  />

      <RightContainer form={form} setForm={setForm}  formList={formList} setFormList={setFormList}/>   
      </div>
      
    </div>

    
   
  )
}

export default Container
