import Head from "next/head";
import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import contentZh from "../content/zh/contract.json";
import contentEn from "../content/en/contract.json";

interface ContractProps {
  content: typeof contentZh;
  name: string;
  symbol: string;
  totalSupply: string;
  transfers: Array<{
    hash: string;
    from: string;
    to: string;
    value: string;
  }>;
}
export default function Contract() {
  return (
    <>
      <Head>
        <title>合约信息页面</title>
      </Head>
      <div>合约信息页面 Coming Soon...</div>
    </>
  );
}

// SSR：服务器端获取链上数据
export const getServerSideProps: GetServerSideProps<ContractProps> = async ({ locale }) => {
  const content = locale === "zh" ? contentZh : contentEn;
  const provider = new ethers.JsonRpcProvider("https://cloudflare-eth.com");
  const address = "0xAA9564B56D2FBD9B5BC123A857617DAF6D8A4545";
  // 简要 ABI 仅包含需要的函数
  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)"
  ];
  const contract = new ethers.Contract(address, abi, provider);
  // 查询链上名称、符号、总供应量
  const [name, symbol, totalSupplyBig] = await Promise.all([
    contract.name(),
    contract.symbol(),
    contract.totalSupply()
  ]);
  // 格式化总供应量为可读字符串（假定18位小数）
  const totalSupply = ethers.formatUnits(totalSupplyBig, 18);

  // 通过 Etherscan API 获取最近的交易记录（需要 API 密钥）
  let transfers: ContractProps["transfers"] = [];
  const apiKey = process.env.ETHERSCAN_API_KEY;
  if (apiKey) {
    const res = await fetch(
      `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${address}&page=1&offset=5&sort=desc&apikey=${apiKey}`
    );
    const data = await res.json();
    if (data.status === "1" && data.result) {
      transfers = data.result.slice(0, 5).map((tx: any) => {
        // 使用 ethers 格式化数值（18位小数），并保留最多4位小数
        const valueStr = ethers.formatUnits(tx.value, 18);
        return {
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: valueStr
        };
      });
    }
  }
  return { props: { content, name, symbol, totalSupply, transfers } };
};

export default function Contract({ content, name, symbol, totalSupply, transfers }: ContractProps) {
  const { pageTitle, nameLabel, symbolLabel, supplyLabel,
    transfersHeading, txHash, txFrom, txTo, txValue, transfersEmpty } = content;

  // 地址/哈希缩写显示
  const short = (addr: string) =>
    addr.slice(0, 6) + "..." + addr.slice(-4);

  return (
    <>
      <Head>
        <title>{pageTitle} - World USD</title>
      </Head>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>

        {/* 合约概览：名称、符号、总供应 */}
        <div className="mb-8 space-y-1">
          <p><b>{nameLabel}:</b> {name}</p>
          <p><b>{symbolLabel}:</b> {symbol}</p>
          <p><b>{supplyLabel}:</b> {totalSupply}</p>
        </div>

        {/* 最近交易列表 */}
        <h2 className="text-2xl font-semibold mb-4">{transfersHeading}</h2>
        {transfers.length === 0 ? (
          <p>{transfersEmpty}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-gray-600">
                <tr>
                  <th className="py-2 pr-4">{txHash}</th>
                  <th className="py-2 pr-4">{txFrom}</th>
                  <th className="py-2 pr-4">{txTo}</th>
                  <th className="py-2 pr-4">{txValue}</th>
                </tr>
              </thead>
              <tbody>
                {transfers.map(tx => (
                  <tr key={tx.hash} className="border-b border-gray-800">
                    <td className="py-2 pr-4">{short(tx.hash)}</td>
                    <td className="py-2 pr-4">{short(tx.from)}</td>
                    <td className="py-2 pr-4">{short(tx.to)}</td>
                    <td className="py-2 pr-4">{tx.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.section>
    </>
  );
}
