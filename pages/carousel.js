import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import images from '../public/imageMap.js';

export default class MyCarousel extends Component {

    render(props){
        var selectedItem;
        if(selectedItem == null && props != null){
            selectedItem = props.selectedIndex;
        }

        return (
            <Carousel renderIndicator={() => {
                return null;
            }}
             selectedItem={selectedItem}>
            {images.map((img, index) => {
                return (
                    <div key={index}>
                        <img src={img.path} />
                        {!!img.title ? <p className="legend">{img.title}</p> : null }
                    </div>
                );
            })}
            </Carousel>
        )
    }
}