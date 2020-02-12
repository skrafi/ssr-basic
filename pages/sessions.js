import * as React from 'react';
import axios from 'axios';
import Link from "next/link";

class Sessions extends React.Component {

  static async getInitialProps(){
    return axios.get('http://localhost:4000/sessions').then((response)=>{
      return {
        hasError: false,
        sessionsData: response.data
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
      sessionsData: props.sessionsData
    }
  }

  render(){
    return <div>
      <Link href="speakers"><a>Speakers</a></Link>
      <ul>
      {this.props.sessionsData.map(session => <li key={session.sessionLevel_id}>{session.title}</li>)}
    </ul>
    </div>
  }
}

export default Sessions;