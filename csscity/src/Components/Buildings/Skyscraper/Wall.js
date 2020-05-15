import React, { useState } from 'react';

import Sprite from './Variation01Wall.gif';
import Floor from './Floor';

const Wall = ({
    style = {},
    floors = 20,
    windows = 10,
    windowWidth = 3,
    floorHeight= 4,
    windowSpacing = 1,
    topFloorHeight = 2,
    floorSideGutter = windowSpacing,
    variation = 1
}) => {

    const width = (windows-1) * windowSpacing + windows * windowWidth + floorSideGutter*2 + "rem";
    const wallBgColor= "#001942";

    function GridTemplateRows (amount) {
        let output = topFloorHeight + "rem";
        let i = 1;
        while (i < amount) {
            output = output + " " + floorHeight + "rem";
            i++;
        }
        return output;
    }

    const wallStyles = {
        background: wallBgColor + " url(" + Sprite + ") center bottom no-repeat",
        backgroundSize: "100% auto",
        display: "grid",
        gridColumnGap: 0,
        gridRowGap: 0,
        gridTemplateColumns: width,
        gridTemplateRows: GridTemplateRows(floors),
        width: width
    };

    const combinedStyles = {...style, ...wallStyles };

    let floorsArray = [];
    let floorNumber = 1;

    while (floorNumber <= floors) {
        floorNumber++;
        const rowStart = floorNumber;
        const rowEnd = floorNumber+1;
        floorsArray.push(<Floor
            variation={variation}
            windowWidth={windowWidth}
            floorHeight={floorHeight}
            windowSpacing={windowSpacing}
            windows={windows}
            floorSideGutter={floorSideGutter}
            style={{gridArea: rowStart + " / 1 / " + rowEnd + " / 2"}}
            />);
    }

    return (
        <div
            style={combinedStyles}
        >
            <div style={{gridArea: "1 / 1 / 2 / 2"}} />
            {floorsArray}
        </div>
    );
}

export default Wall;