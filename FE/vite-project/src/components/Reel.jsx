import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'react-bootstrap';

const Reel = () => {
    return (
        <Carousel fade>
            
          <Carousel.Item>
            <Image className='cimage' src='meat.jpg' text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className='cimage' src='veg.jpeg' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image className='cimage' src="fish.jpeg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
  
}

export default Reel