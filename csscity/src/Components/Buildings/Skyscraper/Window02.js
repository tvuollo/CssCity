import React from 'react';

import "./Window02.scss";

const Window02 = (props) => {

    let windowClass = "dimmed";
    const random = Math.floor(Math.random() * 100) + 1;
    if (random == 3) {
        windowClass = "blinking window02--blinking-1";
    }
    else if (random == 4) {
        windowClass = "blinking window02--blinking-2";
    }
    else if (random == 5) {
        windowClass = "blinking window02--blinking-3";
    }
    else if (random < 39) {
        windowClass = "lighted";
    }
    else if (random > 95) {
        windowClass = "closed";
    }

    const windowStyles = {
        backgroundSize: "2rem auto"
    }

    const combinedStyles = {...props.style, ...windowStyles };

    return (
        <div className={"window02 window02--" + (windowClass)} style={combinedStyles} />
    );
}

export default Window02;