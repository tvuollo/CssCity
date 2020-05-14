import React from 'react';

import Wall from './Wall';
import Roof from './Roof.gif';

const Skyscraper1 = ({
    style = {},
    floors = 20
}) => {

    const height = floors * 4 + 2 + "rem";
    const width = "41rem";

    const defaultStyles = {
        backgroundColor: "rgba(0,0,0,.5)",
        height: width,
        position: "absolute",
        width: width        
    };

    const combinedStyles = {...style, ...defaultStyles };

    return (
        <div style={combinedStyles}>
            <Wall
                floors={floors}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-" + height + ")",
                    transformOrigin: "top left"
                }}
            />           
            <Wall
                floors={floors}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(-90deg) translateY(-" + height + ")",
                    transformOrigin: "top left"
                }}
            />
            <Wall
                floors={floors}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(90deg) translateY(-" + height + ")",
                    transformOrigin: "top right"
                }}
            />
            <Wall
                floors={floors}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-" + height + ") translateZ(" + width + ")",
                    transformOrigin: "top left"
                }}
            />
            <div
                style={{
                    background: "url(" + Roof + ") 0 0 no-repeat",
                    backgroundSize: "100% 100%",
                    height: width,
                    position: "absolute",
                    transform: " translateZ(" + height + ")",
                    transformOrigin: "top left",
                    width: width
                }}
            />
        </div>
    );
}

export default Skyscraper1;