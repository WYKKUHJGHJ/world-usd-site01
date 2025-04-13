import Head from "next/head";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import dynamic from "next/dynamic";

const UniswapWidget = dynamic(
  () => import("@uniswap/widgets").then((mod) => mod.Widget),
  { ssr: false }
);

const uniConfig = {
  chainId: 1,
  defaultInputTokenAddress: "NATIVE", // ETH or native token
  defaultOutputTokenAddress: "0xAA9564B56d2fBD9b5bc123a857617DAf6d8a4545", // WUSD 合约地址
};

export default function Buy() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("连接钱包失败:", error);
      }
    } else {
      alert("请安装 MetaMask");
    }
  };

  return (
    <>
      <Head>
        <title>购买 WUSD</title>
        <meta name="description" content="连接钱包后可直接购买 World USD" />
      </Head>
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-start">
        <div className="w-full max-w-xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">购买 WUSD</h1>
            {walletAddress ? (
              <span className="text-green-400 text-sm">
                已连接：{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            ) : (
              <button
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                onClick={connectWallet}
              >
                连接钱包
              </button>
            )}
          </div>
          <UniswapWidget {...uniConfig} />
        </div>
      </main>
    </>
  );
}
