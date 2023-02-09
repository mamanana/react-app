import React, { useEffect } from 'react';

const TILE_WIDTH = 150;
const TILE_HEIGHT = 150;

function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

const Map = (props) => {
    // const tiles = [
    //     new
    // ]

    useEffect(() => {
        const mapEle = document.getElementById('map');
        const canvas = document.getElementById('carcassonne');
        if (canvas && mapEle) {
            const c = canvas.getContext('2d');
            canvas.width = mapEle.offsetWidth;
            canvas.height = innerHeight;

            const startTile = createImage('/images/carcassonne/tiles/CastleWallRoad0.png');
            startTile.onload = () => {
                c.drawImage(startTile, canvas.width / 2 - 75, canvas.height / 2 - 75, TILE_WIDTH, TILE_HEIGHT);
            };
            // const startTiles = new Tiles({
            //     position: { x: 40, y: 40 },
            //     image: createImage('/images/carcassonne/tiles/CastleWallRoad0.png'),
            // });
            // startTiles.draw(c);
            // default titles
            // new Title({ x: })
        }
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
