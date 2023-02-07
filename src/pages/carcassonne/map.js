import React, { useEffect } from 'react';

const Map = (props) => {
    useEffect(() => {
        const mapEle = document.getElementById('map')
        const canvas = document.getElementById('carcassonne')
        if(canvas && mapEle) {
            const c = canvas.getContext('2d')
            canvas.width = mapEle.offsetWidth
            canvas.height = innerHeight
        }
    }, [])

    return (
        <div id="map">
            <canvas id="carcassonne">
                Your browser does not support the HTML5 Canvas.
            </canvas>
        </div>
    );
};

export default Map;
