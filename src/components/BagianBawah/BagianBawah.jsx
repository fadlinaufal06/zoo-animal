import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './BagianBawah.css'

function BagianBawah() {

  const [index, setIndex] = useState(0);
  const [photoBawah, setphotoBawah] = useState([])
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    const url = "http://zoo-animal-api.herokuapp.com/animals/rand/3";

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setphotoBawah(data)
        console.log(data);
      }catch(err){
        console.log("error",err);
      };
    }
    fetchData();
  }, [])


  return (
    <div className="container">
    <div className="container-paling-luar">
      <div className="container-baris">
        <div className="container-kolom"><img src={photoBawah[0]?.image_link} className="image-dalam" /></div>
        <div className="container-kolom">
          <div className='container-text-judul-bagian-tengah'>
            <p>OPEN NOW</p>
            <h5 className="title-tengah">LOREM IPSUM ZOO PARK</h5>
            <p className='text-grid-bawah'>EVERYDAY 6.00 AM TO 7.00 AM</p>
          </div>
        </div>
      </div>

      <div className="container-baris">
        <div className="container-kolom">
          <div className='container-text-judul-bagian-tengah'>
              <p>LET'S JOIN US</p>
              <h5 className="title-tengah">NATIONAL ZOO LOVERS DAY</h5>
              <p className='text-grid-bawah'>DISC 99% ON APRIL 8TH</p>
            </div>
        </div>
        <div className="container-kolom"><img src={photoBawah[1]?.image_link} className="image-dalam" /></div>
      </div>
      
      <div className="container-baris">
        <div className="container-kolom"><img src={photoBawah[2]?.image_link} className="image-dalam" /></div>
        <div className="container-kolom">
            <div className='container-text-judul-bagian-tengah'>
              <p>SUPPORT US</p>
              <h5 className="title-tengah">LET'S SUPPORT US</h5>
              <p className='text-grid-bawah'>BY DONATE TO OUR BELOVED ZOO</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BagianBawah;