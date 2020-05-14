import React from 'react';

import Canvas from './../Components/Canvas/Canvas';
import Skyscraper1 from './../Components/Buildings/Skyscraper1/Skyscraper1';

const CanvasView = () => {

    return (
        <Canvas>
            <Skyscraper1
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
        </Canvas>
    );

};

export default CanvasView;