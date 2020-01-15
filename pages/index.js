import * as React from 'react';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
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
    return <p><h3>Time: {this.state.time}</h3></p>
  }
}

export default Index;