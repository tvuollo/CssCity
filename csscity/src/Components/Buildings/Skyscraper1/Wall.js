import React, { useState } from 'react';

import Sprite from './Wall.gif';
import Floor from './Floor';

const Wall = ({
    style = {},
    floors = 20,
    windows = 10
}) => {

    const width = windows + 1 + windows * 3 + "rem";

    function GridTemplateRows (amount) {
        let output = "2rem";
        let i = 1;
        while (i < amount) {
            output = output + " 4rem";
            i++;
        }
        return output;
    }

    const wallStyles = {
        background: "#001942 url(" + Sprite + ") center bottom no-repeat",
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
        floorsArray.push(<Floor windows={windows} style={{gridArea: rowStart + " / 1 / " + rowEnd + " / 2"}} />);
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