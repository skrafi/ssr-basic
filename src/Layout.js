import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../public/site.css';

import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render(){
    const {children} = this.props;
    return (
      <React.Fragment>
        <Header/>
        <Menu/>
        {/* Content of the page */}
        {children}
        {/* end */}
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Layout;