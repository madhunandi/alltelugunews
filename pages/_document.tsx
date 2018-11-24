import React from 'react';
import NextDocument, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Meta {
  property: string;
  content: string;
}

class Document extends NextDocument {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  metas: Meta[] = [
    {
      property: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
  ];

  scripts = [];

  render() {
    return (
      <html lang="en-US">
        <Head>
        {this.metas.map(({ content, property }) => (
            <meta content={content} property={property} />
          ))}

          {this.scripts.map(content => (
            <script dangerouslySetInnerHTML={{ __html: content }} />
          ))}
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,700"
            rel="stylesheet"
          />
          <link href="../static/base.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default Document;