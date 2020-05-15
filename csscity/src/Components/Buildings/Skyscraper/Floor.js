import React, { useState } from 'react';

import Window01 from './Window01';
import Window02 from './Window02';

const Floor = ({
    style = {},
    windows = 10,
    variation = 1,
    windowWidth = 3,
    floorHeight = 4,
    windowSpacing = 1,
    floorSideGutter = windowSpacing,
}) => {

    function GridTemplateColumns (amount) {
        let output = (floorSideGutter - windowSpacing) + "rem";
        let i = 0;
        while (i < amount) {
            output = output + " " + windowWidth + "rem";
            i++;
        }
        output = output + " " + (floorSideGutter - windowSpacing) + "rem";
        return output;
    }

    const floorStyles = {
        display: "grid",
        gridTemplateColumns: GridTemplateColumns(windows),
        gridTemplateRows: floorHeight/2 + "rem " + floorHeight/2 + "rem",
        gridColumnGap: windowSpacing + "rem",
        height: floorHeight + "rem"
    };

    const combinedStyles = {...style, ...floorStyles };

    let windowsArray = [];
    let windowsNumber = 1;

    while (windowsNumber <= windows) {
        windowsNumber++;
        const colStart = windowsNumber;
        const colEnd = windowsNumber+1;
        if (variation === 1) {
            windowsArray.push(<Window01 style={{gridArea: "1 / " + colStart + " / 2 / " + colEnd }} />);
        }
        if (variation === 2) {
            windowsArray.push(<Window02 style={{gridArea: "1 / " + colStart + " / 2 / " + colEnd }} />);
        }
    }

    return (
        <div style={combinedStyles}>
            <div style={{gridArea: "1 / 1 / 2 / 2"}} />
            {windowsArray}}
        </div>
    );
}

export default Floor;