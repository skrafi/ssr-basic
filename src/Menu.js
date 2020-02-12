import * as React from 'react';
import Link from "next/link";

class Menu extends React.Component {
  render(){
    return (
      <div className="nav">
        <div className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></div>
        <div className="nav-item"><Link href="/characters"><a className="nav-link">Characters</a></Link></div>
        <div className="nav-item"><Link href="/places"><a className="nav-link">Places</a></Link></div>
      </div>
    )
  }
}

export default Menu;