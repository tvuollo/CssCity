import React, { useState } from 'react';

import Window from './Window';

const Floor = ({
    style = {},
    windows,
    adjWinAmount = windows*2
}) => {

    function GridTemplateColumns (amount) {
        let output = "1rem";
        let i = 1;
        while (i < amount) {
            output = output + " 3rem 1rem";
            i++;
        }
        return output;
    }

    const floorStyles = {
        display: "grid",
        gridTemplateColumns: GridTemplateColumns(adjWinAmount),
        gridTemplateRows: "2rem 2rem",
        height: "4rem"
    };

    const combinedStyles = {...style, ...floorStyles };

    let windowsArray = [];
    let windowsNumber = 1;

    while (windowsNumber <= adjWinAmount) {
        windowsNumber++;
        const colStart = windowsNumber;
        const colEnd = windowsNumber+2;
        windowsArray.push(<Window style={{gridArea: "1 / " + colStart + " / 2 / " + colEnd }} />);
        windowsNumber++;
    }

    return (
        <div style={combinedStyles}>
            <div style={{gridArea: "1 / 1 / 2 / 2"}} />
            {windowsArray}}
        </div>
    );
}

export default Floor;