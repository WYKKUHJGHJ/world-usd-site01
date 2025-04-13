/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh"
  },
  // 可选：指定自定义构建输出目录或其他 Next 配置
};
module.exports = nextConfig;
