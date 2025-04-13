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
