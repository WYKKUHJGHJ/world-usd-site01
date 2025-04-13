import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>World USD | 首页</title>
        <meta name="description" content="World USD (WUSD) 是一种去中心化数字资产，结合价格锚定、原生隐私功能和可扩展智能合约。" />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">欢迎来到 World USD</h1>
          <p className="text-lg mb-4">
            World USD (WUSD) 是一种去中心化数字资产，致力于在加密市场中提供稳定、透明且高流动性的价值载体。
          </p>
          <p className="text-lg mb-4">
            它结合了比特币的稀缺性和智能合约的灵活性，旨在成为全球范围内的数字资产、投资工具与价值交换媒介。
          </p>
          <p className="text-lg mb-4">
            WUSD 的发行总量为 <strong>18 亿枚</strong>，且永不增发。目前运行在以太坊主网，未来将迁移至自主研发的公链 <strong>WERCRY</strong> 上。
          </p>
          <p className="text-lg">
            本站为 World USD 官方信息门户，你可以在上方导航中访问代币经济、技术架构、路线图和合约详情页面。
          </p>
        </section>
      </main>
    </>
  );
}
