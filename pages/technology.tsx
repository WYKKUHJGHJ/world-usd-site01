export default function Technology() {
  return <div>技术架构页面 Coming Soon...</div>;
}
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import contentZh from "../content/zh/technology.json";
import contentEn from "../content/en/technology.json";

interface TechProps {
  content: typeof contentZh;
}

export const getStaticProps: GetStaticProps<TechProps> = async ({ locale }) => {
  const content = locale === "zh" ? contentZh : contentEn;
  return { props: { content } };
};

export default function Technology({ content }: TechProps) {
  const {
    pageTitle, introductionHeading, introductionText,
    featuresHeading, featuresList,
    securityHeading, securityList
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

        <h2 className="text-2xl font-semibold mb-4">{introductionHeading}</h2>
        <p className="mb-6">{introductionText}</p>

        <h2 className="text-2xl font-semibold mb-4">{featuresHeading}</h2>
        <ul className="list-disc pl-5 mb-6">
          {featuresList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{securityHeading}</h2>
        <ul className="list-disc pl-5 mb-6">
          {securityList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
