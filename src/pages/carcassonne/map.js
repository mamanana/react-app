import React, { useEffect } from 'react';

class Title {
    constructor({ position, image }) {
        this.position = position;
        this.image = image
    }

    draw () {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const Map = (props) => {
    // const tiles = [
    //     new 
    // ]

    useEffect(() => {
        const mapEle = document.getElementById('map')
        const canvas = document.getElementById('carcassonne')
        if(canvas && mapEle) {
            const c = canvas.getContext('2d')
            canvas.width = mapEle.offsetWidth
            canvas.height = innerHeight
            
            // default titles
            // new Title({ x: })
        }
    }, [])

    return (
        <div id="map">
            <canvas id="carcassonne" className='bg-stone-900'>
                Your browser does not support the HTML5 Canvas.
            </canvas>
        </div>
    );
};

export default Map;
