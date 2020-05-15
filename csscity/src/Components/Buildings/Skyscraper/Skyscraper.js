import React from 'react';

import Wall from './Wall';
import Roof01 from './Roof01.gif';
import Roof02 from './Roof02.gif';

const Skyscraper = ({
    style = {},
    floors = 20,
    windows = 10,
    variation = 1
}) => {
    
    let windowWidth = 3;
    let floorHeight = 4;
    let windowSpacing= 1;
    let topFloorHeight = 2;
    let floorSideGutter = windowSpacing;
    let roof = Roof01;

    if (variation === 2) {
        windowWidth = 2;
        floorHeight = 4;
        windowSpacing= 1;
        topFloorHeight = 6;
        floorSideGutter = 2;
        roof = Roof02;
    }

    const height = floors * floorHeight + topFloorHeight + "rem";
    const width = windowSpacing * (windows - 1) + windows * windowWidth + floorSideGutter*2 + "rem";

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
                floorSideGutter={floorSideGutter}
                variation={variation}
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
                floorSideGutter={floorSideGutter}
                variation={variation}
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
                floorSideGutter={floorSideGutter}
                variation={variation}
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
                floorSideGutter={floorSideGutter}
                variation={variation}
                style={{
                    position: "absolute",
                    transform: "rotateX(-90deg) translateY(-" + height + ") translateZ(" + width + ")",
                    transformOrigin: "top left"
                }}
            />
            <div
                style={{
                    background: "url(" + roof + ") 0 0 no-repeat",
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