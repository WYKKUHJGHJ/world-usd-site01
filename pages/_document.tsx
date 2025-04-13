import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

function MyDocument({ locale }: { locale?: string }) {
  return (
    <Html lang={locale || "zh"}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 获取 locale 用于设置 <Html lang>
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return { ...initialProps, locale: ctx.locale };
};

export default MyDocument;
