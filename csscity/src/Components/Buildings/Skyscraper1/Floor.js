import React, { useState } from 'react';

import Window from './Window';

const Floor = (props) => {

    const floorStyles = {
        display: "grid",
        gridTemplateColumns: "1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem 3rem 1rem",
        gridTemplateRows: "2rem 2rem",
        height: "4rem"
    };

    const combinedStyles = {...props.style, ...floorStyles };

    return (
        <div style={combinedStyles}>
            <div style={{gridArea: "1 / 1 / 2 / 2"}} />
            <Window style={{gridArea: "1 / 2 / 2 / 3"}} />
            <Window style={{gridArea: "1 / 4 / 2 / 5"}} />
            <Window style={{gridArea: "1 / 6 / 2 / 7"}} />
            <Window style={{gridArea: "1 / 8 / 2 / 9"}} />
            <Window style={{gridArea: "1 / 10 / 2 / 11"}} />
            <Window style={{gridArea: "1 / 12 / 2 / 13"}} />
            <Window style={{gridArea: "1 / 14 / 2 / 15"}} />
            <Window style={{gridArea: "1 / 16 / 2 / 17"}} />
            <Window style={{gridArea: "1 / 18 / 2 / 19"}} />
            <Window style={{gridArea: "1 / 20 / 2 / 21"}} />
            <div style={{gridArea: "1 / 21 / 2 / 22"}} />
        </div>
    );
}

export default Floor;