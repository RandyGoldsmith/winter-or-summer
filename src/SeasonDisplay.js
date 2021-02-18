/* eslint-disable no-useless-constructor */
import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { lat: null};
    }

    render() {
        navigator.geolocation.getCurrentPosition( 
            position =>  { this.setState({ lat: position.coords.latitude});
        },
            err => console.log(err)
        );

        return(
            <div>Latitude: {this.state.lat}</div>
        );
    }
}

export default SeasonDisplay;