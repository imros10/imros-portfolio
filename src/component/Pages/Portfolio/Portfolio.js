import React from 'react';
import { Badge, Card, Col, Container, Row, Tab,Tabs,Button } from 'react-bootstrap';
import img1 from '../../../image/mockup-to-use.png'
import img2 from '../../../image/imros.png'
import project2 from '../../../image/project-2.png'
import project3 from '../../../image/project-3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Portfolio.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import './Portfolio.css'
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
const Portfolio = () => {
    return (
        <div id='portfolio' className='section-container'>
            <Container>
                <h1 className='section-title'>Portfolio</h1>
                <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 2}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card style={{ width: '' }}>
        <Card.Img variant="top" src={img1} />
        <div style={{marginTop: '20px'}}>
  <Badge pill bg="primary">
    React
  </Badge>{' '}
  <Badge pill bg="secondary">
    Bootstrap
  </Badge>{' '}
  <Badge pill bg="success">
    Javascript
  </Badge>{' '}
  <Badge pill bg="danger">
    NodeJs
  </Badge>{' '}
  <Badge pill bg="warning" text="dark">
    MongoDB
  </Badge>{' '}
  <Badge pill bg="info">
    Firebase
  </Badge>{' '}
</div>
        <Card.Body>
            <Card.Title style={{fontWeight: '700',color: '#E54B4B',fontSize: '25px'}}>Instance Real Estate</Card.Title>
            <Card.Text>
          This is a full stuck Real estate listing website.Admin Dashboard functionality to add products or delete products, Rating, Cancel order, Can make a user Admin.
            </Card.Text>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://instance-realestate.web.app/">Live Site</a></Button>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://github.com/imros10/instance-real-estate">Client Side Code</a> </Button>
            <Button variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://github.com/imros10/instance-real-estate-server">Server Side Code</a></Button>
        </Card.Body>
</Card>
        </SwiperSlide>
        {/* card number 2 */}
        <SwiperSlide>
        <Card style={{ width: '' }}>
        <Card.Img variant="top" src={project2} />
        <div style={{marginTop: '20px'}}>
  <Badge pill bg="primary">
    React
  </Badge>{' '}
  <Badge pill bg="secondary">
    Bootstrap
  </Badge>{' '}
  <Badge pill bg="success">
    Javascript
  </Badge>{' '}
  <Badge pill bg="danger">
    NodeJs
  </Badge>{' '}
  <Badge pill bg="warning" text="dark">
    MongoDB
  </Badge>{' '}
  <Badge pill bg="info">
    Firebase
  </Badge>{' '}
</div>
        <Card.Body>
            <Card.Title style={{fontWeight: '700',color: '#E54B4B',fontSize: '25px'}}>Five Star</Card.Title>
            <Card.Text>
          This is a full stuck Hotel Booking website.Admin Dashboard functionality to add products or delete products, Rating, Cancel order, Can make a user Admin.
            </Card.Text>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://five-star-663bc.web.app/home">Live Site</a></Button>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://github.com/imros10/five-star-booking">Client Side Code</a></Button>
            <Button variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://github.com/imros10/five-star-booking-serverside">Server Side Code</a></Button>
        </Card.Body>
</Card>
        </SwiperSlide>
        {/* card number 3 */}
        <SwiperSlide>
        <Card style={{ width: '' }}>
        <Card.Img variant="top" src={project3} />
        <div style={{marginTop: '20px'}}>
  <Badge pill bg="primary">
    React
  </Badge>{' '}
  <Badge pill bg="secondary">
    Bootstrap
  </Badge>{' '}
  <Badge pill bg="success">
    Javascript
  </Badge>{' '}
  <Badge pill bg="info">
    Firebase
  </Badge>{' '}
</div>
        <Card.Body>
            <Card.Title style={{fontWeight: '700',color: '#E54B4B',fontSize: '25px'}}>Counseling</Card.Title>
            <Card.Text>
            Firebase Login System with private Route. React router with private route functionality. Fully responsive build using bootstrap, ReactJs, Firebase
            </Card.Text>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://counseling-b75a4.web.app/">Live Site</a></Button>
            <Button style={{marginRight: '5px'}} variant="primary"><a style={{color: 'white',textDecoration: 'none'}} href="https://github.com/imros10/Counseling">Client Side Code</a></Button>
        </Card.Body>
</Card>
        </SwiperSlide>
      </Swiper>
                        </Container>
                      </div>
                        

    );
};

export default Portfolio;