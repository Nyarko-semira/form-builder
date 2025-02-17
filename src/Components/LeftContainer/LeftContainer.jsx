import React, { useState } from "react";
import "./LeftContainer.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const LeftContainer = ({form, setForm, formList , setFormList, AddFormList}) => {

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };


  return (
   <div className="w-50  p-3 rounded left-container">
      {/* <Form.Group controlId="formFile" className="mb-3 fromgroup">
    <Form.Label>Label </Form.Label>
        <Form.Control type="text" />
        </Form.Group> */}

    <Form >
      <Row className="mb-4">
        <Col>
      <Form.Group   controlId="formFile">
       
        <Form.Label >
          Label
        </Form.Label>
        <Col sm="12">
          <Form.Control
            type="text"
            value={form.label}
            onChange={onChangehandler}
            name="label"
            size="sm"
          />
        </Col>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group as={Row} className="mb-3" controlId="formFile">
        <Form.Label>
          Name
        </Form.Label>
        <Col sm="12">
          <Form.Control
            type="text"
            value={form.Name}
             name="Name"
             size="sm"
            onChange={onChangehandler}
          />
        </Col>
      </Form.Group>
      </Col>
   </Row>

   <Row className="mb-4">
    <Col>
      <Form.Group as={Row} className="mb-3" controlId="formFile">
        <Form.Label >
          PlaceHolder
        </Form.Label>
        <Col sm="12">
          <Form.Control
            type="text"
            name="Placeholder"
            value={form.Placeholder}
            size="sm"
            onChange={onChangehandler}
          />
        </Col>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group as={Row} className="mb-3" controlId="formFile">
        <Form.Label >
          Type
        </Form.Label>
        <Col sm="12">
          <Form.Select
            value={form.Type}
            name="Type"
            type="select"
            size="sm"
            onChange={onChangehandler}
          >
            <option>Select Input Type</option>
            <option>Text</option>
            <option>Email</option>
            <option>Password</option>
            <option>Checkbox</option>
            <option>Radio Button</option>
            <option>Number</option>
            <option>Date</option>

          </Form.Select>
        </Col>
      </Form.Group>
      </Col>
      </Row>


     <Row  className="mb-4">
      <Col>
      <Form.Group as={Row} className="mb-5" controlId="formFile">
        <Form.Label>
          Required
        </Form.Label>
        <Col sm="12">
          <Form.Select
          value={form.Required}
          name="Required"
          type="select"
          size="sm"
          onChange={onChangehandler}
          >
            <option>Select Required Type</option>
            <option>False</option>
            <option>True</option>
          </Form.Select>
        </Col>
      </Form.Group>

      </Col>
      <Col>
      <Form.Group as={Row} className="mb-5" controlId="formFile">
        <Form.Label >
          Size
        </Form.Label>
        <Col sm="12">
          <Form.Select
          value={form.size}
          name="size"
          type="select"
         size="sm"
          onChange={onChangehandler}
          >
            <option>Select Size</option>
            <option>Sm</option>
            <option>md</option>
            <option>lg</option>
            <option>lx</option>
          </Form.Select>
        </Col>
      </Form.Group>
     </Col>
     </Row>
      <div className="text-center ">
       <Button type="button" size="lg" onClick={AddFormList}>Submit</Button>
      </div>
      
      </Form>

    </div>
  );
};

export default LeftContainer;
