import * as React from 'react';
import axios from 'axios';
import Link from "next/link";

class Speakers extends React.Component {

  static async getInitialProps(){
    return axios.get('http://localhost:4000/speakers').then((response)=>{
      return {
        hasError: false,
        speakersData: response.data
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
      speakersData: props.sessionsData
    }
  }

  render(){
    return<div>
    <Link href="/"><a>Sessions</a></Link><ul>
      {this.props.speakersData.map(speaker => <li key={speaker.id}>{speaker.firstnmae} {speaker.lastname}</li>)}
    </ul>
    </div>
  }
}

export default Speakers;