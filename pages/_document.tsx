import Document, { Html, Head, Main, NextScript } from "next/document";

const woffFonts = [
  // "quicksand-v24-latin-300.woff",
  // "quicksand-v24-latin-500.woff",
  // "quicksand-v24-latin-600.woff",
  // "quicksand-v24-latin-700.woff",
  // "quicksand-v24-latin-regular.woff",
  // "pacifico-v17-latin-regular.woff",
];

const woff2Fonts = [
  // "quicksand-v24-latin-300.woff2",
  "quicksand-v24-latin-500.woff2",
  // "quicksand-v24-latin-600.woff2",
  // "quicksand-v24-latin-700.woff2",
  // "quicksand-v24-latin-regular.woff2",
  "pacifico-v17-latin-regular.woff2",
];

const meta = {
  title: "Alexander González - UI Developer, Generative Artist.",
  description:
    "Front-end developer currently learning Rust with a passion for UI.",
  type: "website",
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {woff2Fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`/fonts/${font}`}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          ))}

          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Lee Robinson" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />

          <meta
            name="google-site-verification"
            content="ehkgub95G0HGA3ym6sKTkPafYi13C27s50Tssb6-H10"
          />
        </Head>
        <body className="antialiased bg-gray-100 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
