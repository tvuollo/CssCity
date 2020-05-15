import React from 'react';

import Wall from './Wall';
import Roof from './Variation01Roof.gif';

const Skyscraper = ({
    style = {},
    floors = 20,
    windows = 10,
    variation = 1
}) => {
    
    const windowWidth = 3;
    const floorHeight = 4;
    const windowSpacing= 1;
    const topFloorHeight = 2;

    const height = floors * floorHeight + topFloorHeight + "rem";
    const width = windows + windowSpacing + windows * windowWidth + "rem";

    const defaultStyles = {
        height: width,
        position: "absolute",
        width: width        
    };

    const combinedStyles = {...style, ...defaultStyles };

    return (
        <div style={combinedStyles}>
            <Wall
                floors={floors}
                windows={windows}
                windowWidth={windowWidth}
                floorHeight={floorHeight}
                windowSpacing={windowSpacing}
                topFloorHeight={topFloorHeight}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-" + height + ")",
                    transformOrigin: "top left"
                }}
            />           
            <Wall
                floors={floors}
                windows={windows}
                windowWidth={windowWidth}
                floorHeight={floorHeight}
                windowSpacing={windowSpacing}
                topFloorHeight={topFloorHeight}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(-90deg) translateY(-" + height + ")",
                    transformOrigin: "top left"
                }}
            />
            <Wall
                floors={floors}
                windows={windows}
                windowWidth={windowWidth}
                floorHeight={floorHeight}
                windowSpacing={windowSpacing}
                topFloorHeight={topFloorHeight}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) rotateY(90deg) translateY(-" + height + ")",
                    transformOrigin: "top right"
                }}
            />
            <Wall
                floors={floors}
                windows={windows}
                windowWidth={windowWidth}
                floorHeight={floorHeight}
                windowSpacing={windowSpacing}
                topFloorHeight={topFloorHeight}
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

export default Skyscraper;