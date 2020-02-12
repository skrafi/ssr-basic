import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;