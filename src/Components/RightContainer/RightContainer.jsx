import React from 'react'
import './RightContainer.css'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RightContainer = ({form, setForm, formList , setFormList}) => {
  return (
    <div className='w-50  border-start'>
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



<Row className="g-2">
  {formList.map((forml, index) => (
    <Col md={5} key={index}>
      <div className="form-container p-5">
        <Form.Group controlId={`formFile-${index}`}>
          <Form.Label>{forml.label}</Form.Label>
          <Form.Control value={forml.placeholder} />
        </Form.Group>
      </div>
    </Col>
  ))}
</Row>

   
      
    </div>
  )
}

export default RightContainer
