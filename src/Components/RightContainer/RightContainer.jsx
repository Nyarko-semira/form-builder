import { useState } from 'react'
import './RightContainer.css'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';
import Modall from '../ModalsComponent/Modall';


const RightContainer = ({ formList, postData }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
   

  


  const renderByType = (forml, index) => {

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
    <div className='w-50  pb-3 border-start list-content rounded' style={{ backgroundColor: "#f1f1f1", "boxShadow": " rgba(0, 0, 0, 0.35) 0px 5px 15px", position: "relative" }}>

      <h5 className='mb-4  mt-2 text-center text-decoration-underline'>{postData.formTitle}</h5>
      <Row className="px-3 mt-0" >

        {formList.map((forml, index) => (
         
        
        <Col sm={forml?.col?.sm} md={forml?.col?.md} lg={forml?.col?.lg} xl={forml?.col?.xl} xxl={forml?.col?.xxl} key={index}>

        <Form.Group  className='mb-3' controlId={`formFile-${index}`}>
        <Form.Label className='mb-0' >{forml.label} {forml?.required ? <span style={{color:"red"}}>*</span>:""}</Form.Label>
        {renderByType(forml, index)}
        </Form.Group></Col>
      ))             
  
        }
      </Row>

       <div className="text-center mt-3  " style={{position:"absolute" , bottom:20 , right:15}}>
                <Button type="button" className="px-4" size="sm" onClick={handleShow}>PREVIEW CODE</Button>
      </div>
     
      <Modall setShow={setShow} show={show} formList={formList}/>

    </div>
  )
}

export default RightContainer
