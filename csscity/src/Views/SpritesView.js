import React from 'react';

import "./SpritesView.scss";
import Wall from './../Components/Buildings/Skyscraper/Wall';

const SpritesView = () => {

    return (
        <div className="sprites">
            <div className="sprite-container">
                <Wall />
            </div>
            <div className="sprite-container">
                <Wall
                    variation={2}
                    windowWidth={2}
                    floorHeight={4}
                    windowSpacing={1}
                    topFloorHeight={6}
                    floorSideGutter={2}
                />
            </div>
        </div>
    );

}

export default SpritesView;