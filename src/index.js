import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
        
  state = { lat: null, errorMessage: ''};        

  componentDidMount() {
      navigator.geolocation.getCurrentPosition( 
          position => this.setState({ lat: position.coords.latitude}),
          err => this.setState({ errorMessage: err.message})
      );
    }

    renderContent() {
      if(this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
    } 
    
    if(this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request" /> 
    }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  };                  
  
}





ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
