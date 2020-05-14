import React, { useState } from 'react';

import Sprite from './Window.gif';

const Window = (props) => {

    let windowStatus = "0 -2rem";
    const random = Math.floor(Math.random() * 100) + 1;
    if (random < 33) {
        windowStatus = "0 0";
    }
    else if (random > 85) {
        windowStatus = "0 -4rem";
    }

    const windowStyles= {
        background: "url(" + Sprite + ") " + windowStatus + " no-repeat",
        backgroundSize: "3rem auto"
    };

    const combinedStyles = {...props.style, ...windowStyles };

    return (
        <div style={combinedStyles} />
    );
}

export default Window;