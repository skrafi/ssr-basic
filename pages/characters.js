import * as React from 'react';
import axios from 'axios';

class Characters extends React.Component {

  static async getInitialProps(){
    return axios.get('http://localhost:4000/characters').then((response)=>{
      return {
        hasError: false,
        charactersData: response.data || []
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
      charactersData: props.charactersData
    }
  }

  render(){
    return<div className="content">
    <ul>
      {this.props.charactersData.map(character => <li key={character.id}>{character.firstnmae} {character.lastname}</li>)}
    </ul>
    </div>
  }
}

export default Characters;