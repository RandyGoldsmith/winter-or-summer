/* eslint-disable no-useless-constructor */
import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { lat: null, errorMessage: ''};
    }

    render() {
        navigator.geolocation.getCurrentPosition( 
            position =>  { this.setState({ lat: position.coords.latitude});
        },
            err => { this.setState({ errorMessage: err.message});
            }
        );

        return(
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
            
        );
    }
}

export default SeasonDisplay;