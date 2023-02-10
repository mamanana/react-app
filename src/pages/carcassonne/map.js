import React, { useEffect } from 'react';

const TILE_WIDTH = 150;
const TILE_HEIGHT = 150;

let c = null;
let canvas = null;

function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

function resizeMap() {
    const mapEle = document.getElementById('map');
    if (canvas && mapEle) {
        canvas.width = mapEle.offsetWidth;
        canvas.height = innerHeight;
    }
}

const Map = (props) => {
    
    useEffect(() => {
        canvas = document.getElementById('carcassonne');
        if (canvas) {
            c = canvas.getContext('2d');
        }
        resizeMap();
        window.addEventListener('resize', resizeMap);
        return () => {
            window.removeEventListener('resize', resizeMap);
        };
    }, []);

    return (
        <div id="map">
            <canvas id="carcassonne" className="bg-stone-900">
                Your browser does not support the HTML5 Canvas.
            </canvas>
        </div>
    );
};

export default Map;
