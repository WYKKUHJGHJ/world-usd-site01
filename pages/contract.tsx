import Head from "next/head";
import { motion } from "framer-motion";

export default function Contract() {
  return (
    <>
      <Head>
        <title>合约信息 - World USD</title>
        <meta name="description" content="World USD 智能合约链上信息与实时监控" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            智能合约信息
          </motion.h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              World USD (WUSD) 已部署至 Ethereum 主网，以下为相关合约信息与实时监控：
            </p>

            <div className="bg-gray-800 p-4 rounded-md break-all">
              <strong>合约地址：</strong>
              <br />
              0xAA9564B56d2fBD9b5bc123a857617DAf6d8a4545
            </div>

            <p>
              查看区块链浏览器：
              <a
                href="https://etherscan.io/address/0xaa9564b56d2fbd9b5bc123a857617daf6d8a4545"
                className="text-blue-400 underline ml-2"
                target="_blank"
              >
                Etherscan
              </a>
            </p>

            <p>
              实时市场图表（GeckoTerminal）：
              <a
                href="https://geckoterminal.com/eth/pools/0xd670c21b5c14bd169db487a0dd5852213622fe0e"
                className="text-green-400 underline ml-2"
                target="_blank"
              >
                访问 GeckoTerminal 页面
              </a>
            </p>

            <div className="border border-gray-700 rounded-md overflow-hidden mt-8">
              <iframe
                src="https://geckoterminal.com/eth/pools/0xd670c21b5c14bd169db487a0dd5852213622fe0e?embed=1"
                style={{ width: "100%", height: "600px", border: "none" }}
                allow="clipboard-write"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
