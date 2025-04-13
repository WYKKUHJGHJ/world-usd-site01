import Head from "next/head";

export default function Technology() {
  return (
    <>
      <Head>
        <title>World USD | 技术架构</title>
        <meta name="description" content="WERCRY 区块链技术架构与 World USD 合约机制解析。" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">技术架构</h1>

          <article className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold">WERCRY 公链架构</h2>
              <p>
                WERCRY 是一条结合了 EVM 兼容性与隐私交易的下一代智能合约区块链，核心技术参考 Ethereum + Tornado Cash 的理念，具备匿名交易与智能合约功能。
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>完全兼容以太坊工具链（Solidity、Ethers.js、Hardhat 等）</li>
                <li>引入 zk-SNARK 零知识证明技术实现交易匿名化</li>
                <li>支持 On-chain DID（去中心化身份）验证系统</li>
                <li>模块化虚拟机，支持未来跨链与 Rollup 部署</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">World USD 合约机制</h2>
              <p>
                World USD (WUSD) 是固定总量的锚定型数字资产，依托流动性制造价格锚定假象：
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>代币总量：<strong>18 亿枚</strong>，不增发</li>
                <li>初始价格通过 DEX 上的极端比例流动性池（如 1 WUSD = 200,000,000 USDT）形成</li>
                <li>部署于 Ethereum 主网，将在主网上迁移至 WERCRY</li>
                <li>支持空投、绑定钱包、质押挖矿与社区治理功能</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">技术目标</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>实现智能隐私交易和身份匿名交互</li>
                <li>推动全球用户自由、高效地使用 WUSD 作为价值媒介</li>
                <li>保障安全与审计透明，打造抗审查的区块链金融系统</li>
              </ul>
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
