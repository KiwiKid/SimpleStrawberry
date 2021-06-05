import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import images from '../public/imageMap.js';

import Router from 'next/router';


/*
{images.map((img, index) => {
    return (
        <div>
            <img src={img.path} />
            {!!img.title ? <p className="legend">{img.title}</p> : <h2>goodbye</h2> }
        </div>
    );
})}
*/
export default class MyCarousel extends Component {
    render(props){
        var selectedItem;
        if(selectedItem == null && props != null){
            selectedItem = props.selectedIndex;
        }

        return (
            <Carousel selectedItem={selectedItem} showThumbs={false}>
            {images.map((img, index) => {
                return (
                    <div>
                        <img src={img.path} />
                        {!!img.title ? <p className="legend">{img.title}</p> : null }
                    </div>
                );
            })}
            </Carousel>
        )
    }
}