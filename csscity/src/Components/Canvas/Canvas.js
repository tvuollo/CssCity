import React, { useState } from 'react';

import "./Canvas.scss";
import Grid20 from "./20x20.gif";

const Canvas = (props) => {

    const canvasHeight = props.canvasHeight ? props.canvasHeight : 200;
    const canvasWidth = props.canvasWidth ? props.canvasWidth : 200;

    const [canvasContainerPerspective, setCanvasContainerPerspective] = useState(300);
    const [canvasPerspective, setCanvasPerspective] = useState(3000);
    const [canvasRotateX, setCanvasRotateX] = useState(80);
    const [canvasRotateZ, setCanvasRotateZ] = useState(180);
    const [canvasScale, setCanvasScale] = useState(1);
    const [animation, setAnimation] = useState(false);

    function reset () {
        setCanvasContainerPerspective(300);
        setCanvasPerspective(3000);
        setCanvasRotateX(80);
        setCanvasRotateZ(180);
        setCanvasScale(1);
    }

    return(
        <>
            <div class="controls">
                <label class="control">
                    Canvas container perspective (300rem)
                    <input
                        class="control__input"
                        type="number"
                        min="10"
                        max="10000"
                        step="10"
                        disabled={animation}
                        onChange={(e) => setCanvasContainerPerspective(e.target.value)}
                    />                    
                </label>
                <label class="control">
                    Canvas perspective (3000rem)
                    <input
                        class="control__input"
                        type="number"
                        min="100"
                        max="100000000000"
                        step="100"
                        disabled={animation}
                        onChange={(e) => setCanvasPerspective(e.target.value)}
                    />                    
                </label>
                <label class="control">
                    Canvas rotate X
                    <input
                        class="control__input"
                        type="range"
                        min="0"
                        max="360"
                        disabled={animation}
                        onChange={(e) => setCanvasRotateX(e.target.value)}
                    />                    
                </label>
                <label class="control">
                    Canvas rotate Z
                    <input
                        class="control__input"
                        type="range"
                        min="0"
                        max="360"
                        disabled={animation}
                        onChange={(e) => setCanvasRotateZ(e.target.value)}
                    />                    
                </label>
                <label class="control">
                    Canvas scale (1)
                    <input
                        class="control__input"
                        type="number"
                        min="0.5"
                        max="100"
                        step="0.1"
                        disabled={animation}
                        onChange={(e) => setCanvasScale(e.target.value)}
                    />                    
                </label>
                <div class="control">
                    <button
                        type="button"
                        onClick={() => setAnimation(!animation)}
                    >
                        Toggle rotation animation
                    </button>
                </div>
                <div class="control">
                    <button
                        type="button"
                        disabled={animation}
                        onClick={() => reset()}
                    >
                        Reset values
                    </button>
                </div>
            </div>

            <div style={{
                height: "100vw",
                left: 0,
                margin: 0,
                perspective: canvasContainerPerspective + "rem",
                position: "absolute",
                top: 0,
                width: "100vw"
            }}>
                <div
                    className={animation === true ? "canvas" : ""}
                    style={{
                        background: "rgba(0,90,10,.35) url(" + Grid20 + ")",
                        height: canvasHeight + "rem",
                        perspective: canvasPerspective + "rem",
                        position: "absolute",
                        left: "50%",
                        margin: "-" + canvasHeight/2 + "rem 0px 0px -" + canvasWidth/2 + "rem",
                        top: "50%",
                        width: canvasWidth + "rem",
                        transformStyle: "preserve-3d",
                        transform: "rotateX(" + canvasRotateX + "deg) rotateY(0deg) rotateZ(" + canvasRotateZ + "deg) scale(" + canvasScale + ")"
                    }}
                >
                    {props.children}
                </div>
            </div>
       </>
    );
}

export default Canvas;