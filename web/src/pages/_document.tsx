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
        <meta name="theme-color" content="#1d9bf0" />
        <link rel="shortcut icon" type="image/png" href="/favicon/iconpng.png" />
      </Head>
      <body className="bg-[#121214] selection:bg-[#86cfff] selection:text-cyan-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
