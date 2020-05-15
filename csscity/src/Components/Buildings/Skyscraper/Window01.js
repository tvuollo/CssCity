import React, { useState } from 'react';

import "./Window01.scss";

const Window01 = (props) => {

    let windowClass = "dimmed";
    const random = Math.floor(Math.random() * 100) + 1;
    if (random == 1) {
        windowClass = "blinking window--blinking-1";
    }
    else if (random == 2) {
        windowClass = "blinking window--blinking-2";
    }
    else if (random == 3) {
        windowClass = "blinking window--blinking-3";
    }
    else if (random < 35) {
        windowClass = "lighted";
    }
    else if (random > 85) {
        windowClass = "closed";
    }

    const windowStyles = {
        backgroundSize: "3rem auto"
    }

    const combinedStyles = {...props.style, ...windowStyles };

    return (
        <div className={"window window--" + (windowClass)} style={combinedStyles} data-delay={Math.floor(Math.random() * 6)} />
    );
}

export default Window01;