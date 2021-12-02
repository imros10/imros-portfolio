import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hero from '../../../image/imros.png'
import './About.css'
const About = () => {
    return (
        <div id='about' className='section-container'>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="about-hero">
                            <img src={hero} alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="about-text">
                        <h2>Imros Arefen</h2>
                        <h4>I am Passonaite <span style={{color: '#E54B4B'}}>Web Developer</span></h4>
                        <p>Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.
                    <br/>
                    <br/>
                        he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className='my-button'>View Portfolio</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;