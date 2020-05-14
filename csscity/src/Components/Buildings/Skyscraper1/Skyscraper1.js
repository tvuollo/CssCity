import React from 'react';

import Wall from './Wall';

const Skyscraper1 = (props) => {

    const defaultStyles = {
        backgroundColor: "rgba(0,0,0,.5)",
        height: "41rem",
        position: "absolute",
        width: "41rem"        
    };

    const combinedStyles = {...props.style, ...defaultStyles };

    return (
        <div style={combinedStyles}>
            <Wall
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-90rem)",
                    transformOrigin: "top left"
                }}
            />           
            <Wall
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(-90deg) translateY(-90rem)",
                    transformOrigin: "top left"
                }}
            />
            <Wall
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(90deg) translateY(-90rem)",
                    transformOrigin: "top right"
                }}
            />
            <Wall
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-90rem) translateZ(41rem)",
                    transformOrigin: "top left"
                }}
            />
        </div>
    );
}

export default Skyscraper1;