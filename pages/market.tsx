import Head from "next/head";
import { useState } from "react";

export default function Market() {
  const [symbol, setSymbol] = useState("BTCUSDT");

  return (
    <>
      <Head>
        <title>市场行情</title>
        <meta name="description" content="实时加密货币行情图表" />
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
      </Head>

      <main className="min-h-screen bg-black text-white px-4 py-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">实时市场行情</h1>

        <div className="flex gap-2 mb-4">
          {["BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT", "WUSDUSDT"].map((item) => (
            <button
              key={item}
              className={`px-3 py-1 border rounded ${
                symbol === item ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setSymbol(item)}
            >
              {item.replace("USDT", "")}
            </button>
          ))}
        </div>

        <div className="w-full max-w-5xl">
          <div className="tradingview-widget-container">
            <div id="tv_chart_container" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  new TradingView.widget({
                    width: "100%",
                    height: 600,
                    symbol: "BINANCE:${symbol}",
                    interval: "30",
                    timezone: "Asia/Shanghai",
                    theme: "dark",
                    style: "1",
                    locale: "zh",
                    toolbar_bg: "#1e1e1e",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tv_chart_container"
                  });
                `,
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
