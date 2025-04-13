// pages/buy.tsx
import Head from "next/head";
import dynamic from "next/dynamic";

const UniswapWidget = dynamic(
  () => import("@uniswap/widgets").then((mod) => mod.Widget),
  { ssr: false }
);

const uniConfig = {
  chainId: 1,
  defaultInputTokenAddress: "NATIVE",
  defaultOutputTokenAddress: "0xAA9564B56d2fBD9b5bc123a857617DAf6d8a4545",
};

export default function Buy() {
  return (
    <>
      <Head>
        <title>购买 WUSD</title>
        <meta name="description" content="直接在本站购买 World USD (WUSD)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <UniswapWidget {...uniConfig} />
        </div>
      </main>
    </>
  );
}
