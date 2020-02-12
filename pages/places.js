import * as React from 'react';
import axios from 'axios';

class Places extends React.Component {

  static async getInitialProps(){
    return axios.get('http://localhost:4000/places').then((response)=>{
      return {
        hasError: false,
        placesData: response.data
      }
    }).catch((error)=>{
      return {
        hasError: true,
        message: error.message
      }
    })
  }

  constructor(props){
    super(props);
    this.state = {
      hasError: props.hasError,
      message: props.message,
      placesData: props.placesData
    }
  }

  render(){
    return <div className="content">
      <ul>
      {this.props.placesData.map(place => <li key={place.id}>{place.name}</li>)}
    </ul>
    </div>
  }
}

export default Places;