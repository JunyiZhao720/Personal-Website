import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    let initializeNews = [];
    for(let i=0; i<3; i++) {
      initializeNews.push(
        {
          id: i,
          title:"null" ,
          description: "null",
          imageSrc: "https://6.viki.io/image/d4d793d461a44437a8c96bfd6e7f00b3.jpeg?s=900x600&e=t",
          newsSrc: "http://www.google.com"
        }
      );
    }
    const [news, setNews] = useState(initializeNews);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    // const addOrUpdateNews = (id, title, description, imageSrc, newsSrc) => {
    //   setNews([
    //     ...news,
    //     { id, title, description, imageSrc, newsSrc }
    //   ]);
    // }

    //ComponentDidMount()
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await axios.get("/api/news");
        // ...
        // setNews(response.data);
      }
      fetchData();
      // ajax('https://localhost:8080/api/news',{},'Get')

    }, []);


    return (
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
        { news.map(n => 
                  <Carousel.Item key={n.id} onClick={()=> window.open( n.newsSrc , "_blank")}>
                    <img
                      className="d-block w-100"
                      src = { n.imageSrc }
                      alt={ n.title }
                    />
                    <Carousel.Caption>
                      <h3>{ n.title }</h3>
                      <p>{ n.description }</p>
                    </Carousel.Caption>
                  </Carousel.Item>
          ) }

         {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.kpopmap.com/2019/05/Girls-Generation-Taeyeon.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.kpopmap.com/2019/05/Girls-Generation-Taeyeon.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
  }
  
export default ControlledCarousel;