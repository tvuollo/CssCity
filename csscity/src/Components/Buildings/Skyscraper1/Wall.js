import React, { useState } from 'react';

import Sprite from './Wall.gif';
import Floor from './Floor';

const Wall = ({
    height = 6
}) => {

    return (
        <div
            style={{
                background: "url(" + Sprite + ") 0 0 no-repeat",
                backgroundSize: "100% 100%",
                display: "grid",
                gridColumnGap: 0,
                gridRowGap: 0,
                gridTemplateColumns: "41rem",
                gridTemplateRows: "2rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem 4rem",
                width: "41rem"
            }}
        >
            <div style={{gridArea: "1 / 1 / 2 / 2"}} />
            <Floor style={{gridArea: "2 / 1 / 3 / 2"}} />
            <Floor style={{gridArea: "3 / 1 / 4 / 2"}} />
            <Floor style={{gridArea: "4 / 1 / 5 / 2"}} />
            <Floor style={{gridArea: "5 / 1 / 6 / 2"}} />
            <Floor style={{gridArea: "6 / 1 / 7 / 2"}} />
            <Floor style={{gridArea: "7 / 1 / 8 / 2"}} />
            <Floor style={{gridArea: "8 / 1 / 9 / 2"}} />
            <Floor style={{gridArea: "9 / 1 / 10 / 2"}} />
            <Floor style={{gridArea: "10 / 1 / 11 / 2"}} />
            <Floor style={{gridArea: "11 / 1 / 12 / 2"}} />
            <Floor style={{gridArea: "12 / 1 / 13 / 2"}} />
            <Floor style={{gridArea: "13 / 1 / 14 / 2"}} />
            <Floor style={{gridArea: "14 / 1 / 15 / 2"}} />
            <Floor style={{gridArea: "15 / 1 / 16 / 2"}} />
            <Floor style={{gridArea: "16 / 1 / 17 / 2"}} />
            <Floor style={{gridArea: "17 / 1 / 18 / 2"}} />
            <Floor style={{gridArea: "18 / 1 / 19 / 2"}} />
            <Floor style={{gridArea: "19 / 1 / 20 / 2"}} />
            <Floor style={{gridArea: "20 / 1 / 21 / 2"}} />
            <Floor style={{gridArea: "21 / 1 / 22 / 2"}} />
            <Floor style={{gridArea: "22 / 1 / 23 / 2"}} />
            <Floor style={{gridArea: "23 / 1 / 24 / 2"}} />
        </div>
    );
}

export default Wall;