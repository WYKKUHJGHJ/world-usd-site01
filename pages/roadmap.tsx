export default function Roadmap() {
  return <div>路线图页面 Coming Soon...</div>;
}
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import contentZh from "../content/zh/roadmap.json";
import contentEn from "../content/en/roadmap.json";

interface RoadmapProps {
  content: typeof contentZh;
}

export const getStaticProps: GetStaticProps<RoadmapProps> = async ({ locale }) => {
  const content = locale === "zh" ? contentZh : contentEn;
  return { props: { content } };
};

export default function Roadmap({ content }: RoadmapProps) {
  return (
    <>
      <Head>
        <title>{content.pageTitle} - World USD</title>
      </Head>
      <motion.section
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-6">{content.pageTitle}</h1>
        {content.timeline.map((quarter) => (
          <div key={quarter.quarter} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{quarter.quarter}</h2>
            <ul className="list-disc pl-5">
              {quarter.events.map(event => (
                <li key={event} className="mb-1">{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>
    </>
  );
}
