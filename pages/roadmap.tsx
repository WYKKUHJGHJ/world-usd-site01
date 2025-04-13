import Head from "next/head";

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>World USD | 路线图</title>
        <meta name="description" content="World USD 和 WERCRY 区块链的发展路线图：从实验性代币到主网迁移与生态建设。" />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">World USD 路线图</h1>
          
          <div className="space-y-6 text-lg">
            <div>
              <h2 className="text-2xl font-semibold">2024 Q3</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>World USD 合约部署至 Ethereum 主网</li>
                <li>初步构建价格锚定机制和流动性策略</li>
                <li>发布第一版白皮书</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2024 Q4</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>World USD 正式转为主力代币，脱离实验性质</li>
                <li>上线多家钱包（如 MetaMask, TokenPocket）</li>
                <li>开启社群治理与多语言官网建设</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2025 Q1</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>WERCRY 公链架构完成，启动隐私合约测试</li>
                <li>发布技术白皮书并提交预审计</li>
                <li>创建原生生态合作计划</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2025 Q2 - Q3</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>WERCRY 主网上线</li>
                <li>World USD 迁移至 WERCRY 作为原生代币</li>
                <li>部署 Tornado 模式隐私机制</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2025 Q4</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>开放 WERCRY 开发者生态支持</li>
                <li>推出 WUSD 质押与 DID 身份模块</li>
                <li>推动全球 Web3 活动合作</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
