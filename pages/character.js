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
    return <div className="content card">
      <div className="row">
        <img className="col-3 mr-5" src={`/speakers/${this.state.data.thumbnail}`}/>
        <div className="col-8">
          <div className="p-3">
          <label className="col-form-label mr-3">
            <b>Name: </b>
          </label> 
          {this.state.data.firstname} {this.state.data.lastname} 
        </div>
        <div className="p-3">
          <label className="col-form-label mr-3">
            <b>Age: </b>
          </label> 
          {this.state.data.age}
        </div>
        <div className="p-3">
          <label className="col-form-label mr-3">
            <b>House: </b>
          </label> 
          {this.state.data.house}
        </div>
        <div className="p-3">
          <label className="col-form-label mr-3">
            <b>Description: </b>
          </label> 
          {this.state.data.description}
        </div>
        <div className="p-3">
          <label className="col-form-label mr-3">
            <b>Quotes: </b>
          </label> 
          <q>{this.state.data.quotes[0]}</q>
        </div>
      </div>
      </div>
    </div>
  }
}

export default Character;