import * as React from 'react';
import  App from 'next/app';
import Layout from '../src/Layout';

class MyApp extends App {
  static async getInitialProps({Component, router, ctx}){
    let pageProps = {};
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps}
  }

  render(){
    const {Component, pageProps} = this.props;
    return (
      <React.Fragment>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </React.Fragment>
    )
  }
}

export default MyApp;