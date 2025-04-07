import React from 'react'
import './Container.css'
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import { useState } from 'react'

  const init = {
  label: "",
  name : "",
  placeholder: "",
  type : "Text",
  required: "",
  size : "sm",
  col: {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
    xxl: 6
  }
}

const Container = () => {
    
   const [form, setForm] = useState(init);
    const [formList, setFormList] = useState([]);
    const [postData, setPostData] = useState({formTitle:"", description:"", fields:formList})

    const AddFormList = (e) => {
      console.log("clicked")
      setFormList ((prev) => ([...prev, form]));
      setForm(init);

      
    }


   console.log({formList});
   
    



  return (
     <div className='w-80  pt-1  mx-5 mt-3 content' style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 10px"}}>

      <div className="d-flex gap-3  w-80" >
      <LeftContainer postData={postData} setPostData={setPostData} form={form}  setForm={setForm}  formList={formList} setFormList={setFormList}  AddFormList={AddFormList}/>

      <RightContainer form={form} setForm={setForm}  formList={formList} setFormList={setFormList} postData={postData}/>  

       
      </div>

     
    </div>

    
   
  )
}

export default Container
