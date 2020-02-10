import * as React from 'react';
import "./DigitalClock.css";

export class DigitalClock extends React.Component {
  render(){
    const time = this.props.time;
    return <h1 className="clock">Digital CLock {time}</h1>
  }
}