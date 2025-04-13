import Head from "next/head";

export default function Tokenomics() {
  return (
    <>
      <Head>
        <title>World USD | 代币经济模型</title>
        <meta name="description" content="World USD (WUSD) 是一种总量固定、无需抵押的加密资产，其经济模型类似比特币。" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">代币经济模型</h1>

          <article className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold">WUSD 简介</h2>
              <p>
                World USD (WUSD) 是一种无需抵押、总量恒定的去中心化数字资产，具备稀缺性、抗审查性和高度流动性。其定位类似于 Bitcoin（BTC），但 WUSD 在智能合约层面具有更强的拓展性，未来将在原生公链 WERCRY 上承担基础资产角色。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">核心参数</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>代币总量：<strong>1,800,000,000 枚</strong>（固定永不增发）</li>
                <li>初始链：Ethereum 主网（合约地址：<code>0xAA9564...4545</code>）</li>
                <li>价格参考：当前市场价约 <strong>1 WUSD ≈ 80,000 USDT</strong></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">价值基础</h2>
              <p>
                WUSD 的价值源于其稀缺性与公允市场供需关系，无需锚定实物或法币资产。定价基于用户共识与交易市场真实买盘，类似 BTC 定价机制，由去中心化流动性池提供基础支持。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">代币分配机制</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>50%：社区激励与流动性激发</li>
                <li>20%：公链基础设施建设（WERCRY）</li>
                <li>15%：核心团队（分阶段释放）</li>
                <li>10%：生态与市场拓展</li>
                <li>5%：战略储备</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">未来应用方向</h2>
              <p>
                未来 WUSD 将被广泛应用于匿名交易、DID 绑定、链上结算与跨境支付，成为 Web3 数字世界的稳定资产底层支持力量。所有用户将可在 WERCRY 网络内进行低成本、安全且不可追踪的金融交互。
              </p>
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
