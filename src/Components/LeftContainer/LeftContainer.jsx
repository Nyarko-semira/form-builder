import React, { useState } from "react";
import "./LeftContainer.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const LeftContainer = ({ form, setForm, postData, setPostData, AddFormList }) => {

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangehandler2 = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      col: {
        ...prev.col,
        [name]: value,
      },
    }));
  };

  console.log({onchangeValues: form});
  

  return (
    <div className="w-50  p-3 rounded left-container " style={{ backgroundColor: "" }}>
      {/* <Form.Group controlId="formFile" className="mb-3 fromgroup">
    <Form.Label>Label </Form.Label>
        <Form.Control type="text" />
        </Form.Group> */}

      <Form >
        <Row >
          <Col>
            <Form.Group controlId="formFile">

              <Form.Label >
                Form-Title
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  
                  type="text"
                  value={postData?.formTitle}
                  onChange={(e) => setPostData((prev) => ({...prev,formTitle: e.target.value}))}
                  name="formTitle"
                  size="sm"
                  placeholder="Enter title"
                />
              </Col>
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Group className="my-2">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea"
                type="text"
                value={postData?.description}
                name="description"
                size="sm"
                onChange={(e) => setPostData((prev) => ({...prev,description: e.target.value}))}
                placeholder="Enter Description"
                
              />
            </Form.Group>
          </Col>
        </Row>

        <h6 className="my-1">Field</h6>
        <Row style={{ background: "#f1f1f1" }} >
          <Col>
            <Form.Group controlId="formFile">
              <Form.Label className="mt-2" >
                Label
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  value={form.label}
                  onChange={onChangehandler}
                  name="label"
                  size="sm"
                  placeholder="Enter Label"
                 
                />
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label className="mt-2">
                Name
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  value={form.name}
                  name="name"
                  size="sm"
                  placeholder="Enter Name"
                  onChange={onChangehandler}
                 
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label className="mt-2" >
                PlaceHolder
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  name="placeholder"
                  value={form.placeholder}
                  size="sm"
                  onChange={onChangehandler}
                  placeholder="Enter placeholder"
                  
                />
              </Col>
            </Form.Group>
          </Col>

        </Row>


        <Row style={{background:"#f1f1f1"}} >

          <Col>
            <Form.Group as={Row} className="my-3" controlId="formFile"> 
              <Form.Label >
                Type
              </Form.Label>
              <Col sm="12">
                <Form.Select
                 
                  value={form.type}
                  name="type"
                  type="select"
                  size="sm"
                  onChange={onChangehandler}
                >
                  <option>Select Input Type</option>
                  <option>text</option>
                  <option>email</option>
                  <option>password</option>
                  <option>checkbox</option>
                  <option>radio</option>
                  <option>number</option>
                  <option>date</option>
                  <option>select</option>
                  <option>file</option>

                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} className="my-3" controlId="formFile">
              <Form.Label>
                Required
              </Form.Label>
              <Col sm="12">
                <Form.Select
                  value={form.required}
                  name="required"
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
            <Form.Group as={Row} className="my-3" controlId="formFile">
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
                  <option>sm</option>
                  <option>md</option>
                  <option>lg</option>
                  <option>xl</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
        </Row>


        <h6 className="mt-2">Columns</h6>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label >
                sm
              </Form.Label>
              <Col sm="12">
                <Form.Select
                  value={form.col.sm}
                  name="sm"
                  type="select"
                  size="sm"
                  onChange={onChangehandler2}
                  
                >
                  <option>Select Size</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label >
                md
              </Form.Label>                                       
              <Col sm="12">
                <Form.Select
                  value={form.col.md}
                  name="md"
                  type="select"
                  size="sm"
                  onChange={onChangehandler2}
                 
                >
                  <option>Select Size</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label >
                lg
              </Form.Label>
              <Col sm="12">
                <Form.Select
                  value={form.col.lg}
                  name="lg"
                  type="select"
                  size="sm"
                  onChange={onChangehandler2}
                >
                  <option>Select Size</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label >
                xl
              </Form.Label>
              <Col sm="12">
                <Form.Select
                  value={form.col.xl}
                  name="xl"
                  type="select"
                  size="sm"
                  onChange={onChangehandler2}
                >
                  <option>Select Size</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formFile">
              <Form.Label >
                xxl
              </Form.Label>
              <Col sm="12">
                <Form.Select
                  value={form.col.xxl}
                  name="xxl"
                  type="select"
                  size="sm"
                  onChange={onChangehandler2}
                 
                >
                  <option>Select Size</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>

        </Row>



        <div className="text-end mt-3  ">
          <Button type="button" className="px-4" size="sm" onClick={AddFormList}>ADD</Button>
        </div>




      </Form>

    </div>
  );
};

export default LeftContainer;
