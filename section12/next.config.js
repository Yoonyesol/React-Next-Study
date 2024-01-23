/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //외부이미지주소 사용 등록
    domains: ["flagcdn.com"],
  },
};

module.exports = nextConfig;
