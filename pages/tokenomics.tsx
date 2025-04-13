export default function Tokenomics() {
  return <div>代币经济页面 Coming Soon...</div>;
}
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import contentZh from "../content/zh/tokenomics.json";
import contentEn from "../content/en/tokenomics.json";

interface TokenomicsProps {
  content: typeof contentZh;
}

export const getStaticProps: GetStaticProps<TokenomicsProps> = async ({ locale }) => {
  const content = locale === "zh" ? contentZh : contentEn;
  return { props: { content } };
};

export default function Tokenomics({ content }: TokenomicsProps) {
  const {
    pageTitle, characteristicsHeading, characteristicsList,
    stablecoinHeading, stablecoinText, comparisonList,
    utilityHeading, utilityText, utilityList,
    distributionHeading, distributionText, allocationList,
    disclaimerHeading, disclaimerText
  } = content;
  return (
    <>
      <Head>
        <title>{pageTitle} - World USD</title>
      </Head>
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>

        <h2 className="text-2xl font-semibold mb-4">{characteristicsHeading}</h2>
        <ul className="list-disc pl-5 mb-6">
          {characteristicsList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{stablecoinHeading}</h2>
        <p className="mb-3">{stablecoinText}</p>
        <ul className="list-disc pl-5 mb-6">
          {comparisonList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{utilityHeading}</h2>
        <p className="mb-3">{utilityText}</p>
        <ul className="list-disc pl-5 mb-6">
          {utilityList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{distributionHeading}</h2>
        <p className="mb-3">{distributionText}</p>
        <ul className="list-disc pl-5 mb-6">
          {allocationList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{disclaimerHeading}</h2>
        <p className="text-gray-300 text-sm">{disclaimerText}</p>
      </motion.section>
    </>
  );
}
