import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/site.css';
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps(){
      return{}
    }

  render(){
    return (
      <div>
        <div className="jumbotron">
          <h4 className="card-title">Game of thrones characters</h4>
          
        </div>
        <div className="nav">
          <div className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></div>
          <div className="nav-item"><Link href="/speakers"><a className="nav-link">Characters</a></Link></div>
          <div className="nav-item"><Link href="/sessions"><a className="nav-link">Places</a></Link></div>
        </div>
        <div className="content">
          Home Page

        </div>

        <div className="footer text-center py-3">
          Contact
        </div>
      </div>
    )
  }
}

export default Index;