import React from 'react';

import "./Canvas.scss";
import Wall from './../Buildings/Skyscraper1/Wall';


const Canvas = () => {

    const height = 480/4 + "rem";
    const width = 640/4 + "rem";

    return(
        <div style={{
            backgroundColor: "#d0d0d0",
            height: height,
            margin: "10rem auto",
            //overflow: "hidden",
            perspective: "300rem",
            position: "relative",
            width: width
        }}>
            <div
                className="canvas"
                style={{
                    backgroundColor: "rgba(0,175,50,.75)",
                    height: "200rem",
                    perspective: "300rem",
                    position: "absolute",
                    left: "50%",
                    margin: "-100rem 0px 0px -100rem",
                    top: "50%",
                    width: "200rem",
                    transformStyle: "preserve-3d",
                    transform: "rotateX(60deg) rotateY(0deg) rotateZ(30deg) scale(0.5)"
                }}
            >
                <Wall />
            </div>
        </div>
    );
}

export default Canvas;