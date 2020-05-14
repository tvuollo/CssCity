import React, { useState } from 'react';
import "./Wall.scss";

import Window from './../Window/Window';

const Wall = () => {
    return (
        <div
            class="wall"
            style={{
                gridColumnGap: 0,
                gridRowGap: 0,
                gridTemplateColumns: "1fr 3fr 1fr 3fr 1fr 3fr 1fr",
                gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
            }}
        >
            <Window style={{ gridArea: "2 / 2 / 3 / 3" }} />
            <Window style={{ gridArea: "2 / 4 / 3 / 5" }} />
            <Window style={{ gridArea: "2 / 6 / 3 / 7" }} />
            
            <Window style={{ gridArea: "4 / 2 / 5 / 3" }} />
            <Window style={{ gridArea: "4 / 4 / 5 / 5" }} />
            <Window style={{ gridArea: "4 / 6 / 5 / 7" }} />

            <Window style={{ gridArea: "6 / 2 / 7 / 3" }} />
            <Window style={{ gridArea: "6 / 4 / 7 / 5" }} />
            <Window style={{ gridArea: "6 / 6 / 7 / 7" }} />

            <Window style={{ gridArea: "8 / 2 / 9 / 3" }} />
            <Window style={{ gridArea: "8 / 4 / 9 / 5" }} />
            <Window style={{ gridArea: "8 / 6 / 9 / 7" }} />
        </div>
    );
}

export default Wall;