import React from 'react'
import './RightContainer.css'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RightContainer = ({form, setForm, formList , setFormList}) => {
  return (
    <div className='w-50  border-start list-content rounded' style={{backgroundColor:"#d6d3d3e0", "boxShadow":" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>

      <h5 className='mb-10  mt-2 text-center'>Preview Pannel</h5>
      {/* <div className='d-grid  col-4'>

      
      {formList.map((forml, index) => (
        <div className='form-container  p-3'>
          <Form.Group   controlId="formFile">
          <Form.Label>{forml.label}</Form.Label>
          <Form.Control
          key={index}
            value={form.Placeholder}
          />
          </Form.Group>
        </div>
       
      ))}
</div> */}



<Row className="g-1 mt-0">
  {formList.map((forml, index) => (
    <Col md={6} sm={12} lg={4} key={index}>
      <div className="form-container p-2">
        <Form.Group controlId={`formFile-${index}`}>
          <Form.Label>{forml.label}</Form.Label>
          <Form.Control value={forml.Placeholder} size='sm'  type={forml.Type}/>
        </Form.Group>
      </div>
    </Col>
  ))}
</Row>

   
      
    </div>
  )
}

export default RightContainer
