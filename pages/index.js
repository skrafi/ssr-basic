import * as React from 'react';
import { DigitalClock } from '../src/DigitalClock';

class Index extends React.Component {

  static async getInitialProps(){
    return {
      time: new Date().toLocaleTimeString()
    }
  }

  constructor(props){
    super(props);
    this.state = {
      time: props.time
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.thick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  thick = () =>{
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render(){
    return <DigitalClock time={this.state.time}/>;
  }
}

export default Index;