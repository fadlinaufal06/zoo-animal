import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CarouselComp.css';



function CarouselComp() {
  const [index, setIndex] = useState(0);
  const [zoo, setZoo] = useState([])
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const url = "http://zoo-animal-api.herokuapp.com/animals/rand/3";

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setZoo(data)
        console.log(data);
      }catch(err){
        console.log("error",err);
      };
    }
    fetchData();
  }, [])

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={600000} className="carouselItem">
        <Container className="bigContainer">
          <Row className="container1">
            <Col className="text-container">
              <Row>
                <h1 className='text-judul'>{zoo[0]?.latin_name}</h1>
              </Row>
              <Row className="text-bawah">
                Diet: {zoo[0]?.diet}
              </Row>
              <Row className="text-bawah">
                This animal found most often in {zoo[0]?.habitat} in {zoo[0]?.geo_range}
              </Row>
            </Col>
            <Col className="image-kanan"><img className="image-dalem" src={zoo[0]?.image_link}/></Col>
          </Row>
        </Container>
      </Carousel.Item >

      <Carousel.Item className="carouselItem">
        <Container className="bigContainer">
          <Row className="container1">
            <Col className="text-container">
              <Row>
                <h1 className='text-judul'>{zoo[1]?.latin_name}</h1>
              </Row>
              <Row className="text-bawah">
                Diet: {zoo[1]?.diet}
              </Row>
              <Row className="text-bawah">
                This animal found most often in {zoo[1]?.habitat} in {zoo[1]?.geo_range}
              </Row>
            </Col>
            <Col className="image-kanan"><img className="image-dalem" src={zoo[1]?.image_link} alt="iu"/></Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item className="carouselItem">
        <Container className="bigContainer">
          <Row className="container1">
            <Col className="text-container">
              <Row>
                <h1 className='text-judul'>{zoo[2]?.latin_name}</h1>
              </Row>
              <Row className="text-bawah">
                Diet: {zoo[2]?.diet}
              </Row>
              <Row className="text-bawah">
                This animal found most often in {zoo[2]?.habitat} in {zoo[2]?.geo_range}
              </Row>
            </Col>
            <Col className="image-kanan"><img className="image-dalem" src={zoo[2]?.image_link} alt="iu"/></Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
    
  );
}
export default CarouselComp