import * as React from 'react';
import axios from 'axios';

class Character extends React.Component {

  static async getInitialProps({query}){
    return axios.get('http://localhost:4000/characters/'+query.characterId).then((response)=>{
      return  {data: response.data};
    }).catch((error)=>{
      return {
        message: error.message
      }
    })
  }

  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
  }

  render(){
    return <div className="content">
      <div>Details, {this.state.data.firstname} </div>
      <img src={`/speakers/${this.state.data.thumbnail}`}/>
    </div>
  }
}

export default Character;