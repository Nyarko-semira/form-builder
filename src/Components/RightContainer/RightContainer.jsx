import React from 'react'
import './RightContainer.css'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const RightContainer = ({ form, setForm, formList, setFormList, postData }) => {
  const renderByType = (forml, index) => {

    console.log({ forml: forml?.col })
    switch (forml?.type) {
      case "text":
      case "password":
        return <Form.Control value={forml.placeholder} size={forml.size} type={forml.type} />

        case "select": return  <Form.Select value={forml.placeholder} size={forml.size} type={forml.type}  >
        <option> Option one</option>
      </Form.Select>
    
      case "checkbox": return   <Form.Check value={forml.placeholder} size={forml.size} type={forml.type} />

      default: return  <Form.Control value={forml.placeholder} size={forml.size} type={forml.type} />
      
    }
  }
  return (
    <div className='w-50  pb-3 border-start list-content rounded' style={{ backgroundColor: "#f1f1f1", "boxShadow": " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

      <h5 className='mb-4  mt-2 text-center text-decoration-underline'>{postData.formTitle}</h5>
      <Row className="px-3 mt-0" >

        {formList.map((forml, index) => (

        <Col sm={forml?.col?.sm} md={forml?.col?.md} lg={forml?.col?.lg} xl={forml?.col?.xl} xxl={forml?.col?.xxl} key={index}>

        <Form.Group controlId={`formFile-${index}`}>
        <Form.Label>{forml.label} {forml?.required ? <span style={{color:"red"}}>*</span>:""}</Form.Label>
        {renderByType(forml, index)}
        </Form.Group></Col>
        ))}

      </Row>

     



    </div>
  )
}

export default RightContainer
