import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import './BagianTengah.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BagianTengah() {
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState([])
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const url = "http://zoo-animal-api.herokuapp.com/animals/rand/3";

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setCard(data)
        console.log(data);
      }catch(err){
        console.log("error",err);
      };
    }
    fetchData();
  }, [])


  return (

    <div className="container">
      <div className='container-text-judul-bagian-tengah'>
      <p>WELCOME TO</p>
      <h5 className="title-tengah">Lorem Ipsum ZOO</h5>
      <p>Explore more animal information from around the world</p>
      </div>
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card className="card-mamang">
            <div className="container-image">
            <Card.Img variant="top" src={card[idx]?.image_link} className="image-card"/>
            </div>
            <Card.Body className="card-text card-text-container">
              <Card.Title>{card[idx]?.latin_name}</Card.Title>
              <Card.Text className="tempat-buat-text-card">
                {card[idx]?.name}, This is a {card[idx]?.animal_type} and a {card[idx]?.active_time} animal. Mostly live in {card[idx]?.habitat}
                and have average {card[idx]?.lifespan} years lifespan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


    </div>
 
  )
}

export default BagianTengah