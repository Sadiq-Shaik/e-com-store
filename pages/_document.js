import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative bg-color-grey-lightest text-color-grey-darkest scroll-smooth">
        <Main />
        <div id="_navPortal" />
        <NextScript />
      </body>
    </Html>
  );
}
