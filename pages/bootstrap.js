import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/site.css';

class bootstrap extends React.Component {
  render(){
    return (
      <div className="container">
        <h4 className="card-title">Card title</h4>

        <div className="row">
        <div className="card m3">
          <img src="/speakers/snow.png" className="rounded img-thumbnail"/>
          <h6 className="card-title">John Snow</h6>
        </div>
        <div className="card m3">
          <img src="/speakers/ned.jpg" className="rounded img-thumbnail"/>
          <h6 className="card-title">Ned Stark</h6>
        </div>
        <div className="card m3">
          <img src="/speakers/cersei.jpeg" className="rounded img-thumbnail"/>
          <h6 className="card-title">Cersei Lannister</h6>
        </div>

      </div>
      </div>
    )
  }
}

export default bootstrap;