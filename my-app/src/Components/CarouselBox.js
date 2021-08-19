import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import e_1 from '../assets/1e.jpg'
import e_2 from '../assets/2e.jpg'
import e_3 from '../assets/3e.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ e_1 }
                        alt="Первый"
                    />
                    <Carousel.Caption>
                        <h3> Зимний Екатеринбург</h3>
                        <p> Красивые виды зимнего Екатеринбурга</p>
                    </Carousel.Caption>
                </Carousel.Item>                    
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ e_2 }
                        alt="Второй"
                    />
                    <Carousel.Caption>
                        <h3> Зимний Екатеринбург</h3>
                        <p> Красивые виды зимнего Екатеринбурга</p>
                    </Carousel.Caption>
                </Carousel.Item>                    
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ e_3 }
                        alt="Третий"
                    />
                    <Carousel.Caption>
                        <h3> Зимний Екатеринбург</h3>
                        <p> Красивые виды зимнего Екатеринбурга</p>
                    </Carousel.Caption>
                </Carousel.Item>                    
            </Carousel>
        )
    }
}
