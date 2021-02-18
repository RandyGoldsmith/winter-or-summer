/* eslint-disable no-useless-constructor */
import './SeasonDisplay.css';
import React from 'react';


 const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: "Lets hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: "snowflake"
    }
};

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return(         
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
    );
};

export default SeasonDisplay;