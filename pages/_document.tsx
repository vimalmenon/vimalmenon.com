import { Html, Head, Main, NextScript } from 'next/document';
import { NextPage } from 'next/types';

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
