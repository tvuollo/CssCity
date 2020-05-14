import React, { useState } from 'react';

import "./CanvasView.scss";
import Canvas from './../Components/Canvas/Canvas';
import Skyscraper1 from './../Components/Buildings/Skyscraper1/Skyscraper1';

const CanvasView = () => {

    return (
        <>
            <Canvas>
                <Skyscraper1
                floors={20}
                    style={{
                        left: "40rem",
                        top: "40rem"
                    }}
                />
                <Skyscraper1
                    floors={4}
                    windows={6}
                    style={{
                        left: "120rem",
                        top: "40rem"
                    }}
                />
                <Skyscraper1
                    floors={8}
                    windows={18}
                    style={{
                        left: "80rem",
                        top: "100rem"
                    }}
                />
                <Skyscraper1
                    floors={3}
                    windows={4}
                    style={{
                        left: "40rem",
                        top: "140rem"
                    }}
                />
            </Canvas>
        </>
    );

};

export default CanvasView;