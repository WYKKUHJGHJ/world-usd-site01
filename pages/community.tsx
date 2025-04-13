// pages/community.tsx
import Head from "next/head";

export default function Community() {
  return (
    <>
      <Head>
        <title>社群链接 | World USD</title>
        <meta name="description" content="加入 World USD 社群，获取最新动态、讨论与更新。" />
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">加入我们的社群</h1>
          <ul className="space-y-4 text-lg">
            <li>
              Telegram 群组：<a className="text-blue-400 underline" href="https://t.me/WERCRY01" target="_blank">https://t.me/WERCRY01</a>
            </li>
            <li>
              Telegram 频道：<a className="text-blue-400 underline" href="https://t.me/WERCRY02" target="_blank">https://t.me/WERCRY02</a>
            </li>
            <li>
              X（原推特）：<a className="text-blue-400 underline" href="https://x.com/active_world_us?s=21" target="_blank">https://x.com/active_world_us</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
