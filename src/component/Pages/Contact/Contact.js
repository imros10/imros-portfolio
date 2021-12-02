import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_x2axcdz', 'template_hht7ydc', form.current, 'user_23sFkBQ3YNjoMgF1H4j8T')
        .then((result) => {
            if(result.text ==='OK'){
                alert('Message Sent')
            }
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div id='contact' className='section-container'>
            <h1 className='section-title'>Contact Me</h1>
            <Container>
            <Row>
                <Col sm={12} xs={12} md={5}>
                   <div className="contact-text">
                   <h2>Are you ready to work together?</h2>
                   <p><i class="fas fa-envelope"></i>  mdimros99@gmail.com</p>
                   <p><i class="fas fa-phone"></i>  +8801782432507</p>
                   <p><i class="fas fa-map-marker-alt"></i>  Dhaka/Bangladesh</p>
                   </div>
                </Col>
                <Col md={7}>
                <div className="form-containers">
            <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="name" name='name' placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" name='user_email'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Control placeholder='Massage' name='message' as="textarea" rows={3} />
        </Form.Group>
        <button className='my-button' type='submit' value='Send'>Submit</button>
        </Form>
            </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Contact;