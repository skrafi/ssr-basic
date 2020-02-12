import * as React from 'react';
import axios from 'axios';
import Link from "next/link";

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
    return <div className="content">
      <ul>
        {this.props.charactersData.map(character => {
          return (
            <li key={character.id}>
              {character.firstname} {character.lastname}
              <div>
              <Link 
                href={{
                  pathname: '/character', 
                  query: {
                    characterId: character.id
                  }
                  }} 
                as={`/character/${character.id}`}
              >See more</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  }
}

export default Characters;