import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './SeasonDisplay';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
        
  state = { lat: null, errorMessage: ''};        

  componentDidMount() {
      navigator.geolocation.getCurrentPosition( 
          position => this.setState({ lat: position.coords.latitude}),
          err => this.setState({ errorMessage: err.message})
      );
  }

  render() {
         if(this.state.errorMessage && !this.state.lat) {
             return <div>Error: {this.state.errorMessage}</div>
         } 
         
         if(this.state.lat && !this.state.errorMessage) {
             return <SeasonDisplay lat={this.state.lat}/>
         }

         return <div>Loading...</div>
          
  }
}





ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
