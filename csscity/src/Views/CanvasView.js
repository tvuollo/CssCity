import React, { useState } from 'react';

import "./CanvasView.scss";
import Canvas from './../Components/Canvas/Canvas';
import Skyscraper from './../Components/Buildings/Skyscraper/Skyscraper';

const CanvasView = () => {

    return (
        <>
            <Canvas>
                <Skyscraper
                floors={20}
                    style={{
                        left: "40rem",
                        top: "40rem"
                    }}
                />
                <Skyscraper
                    floors={4}
                    windows={6}
                    style={{
                        left: "120rem",
                        top: "40rem"
                    }}
                />
                <Skyscraper
                    floors={8}
                    windows={18}
                    style={{
                        left: "80rem",
                        top: "100rem"
                    }}
                />
                <Skyscraper
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