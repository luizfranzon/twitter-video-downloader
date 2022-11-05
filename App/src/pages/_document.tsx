import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#121214]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
