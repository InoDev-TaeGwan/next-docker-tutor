/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  webpack: (config) => {
    config.watchOptions = { // watch 모드를 사용자 지정하는데 사용하는 일련의 옵션이다.
      poll: 1000, // 기본 폴링 간격을 5007로 설정하는 true 를 전달하거나 폴링 간격을 밀리초(ms)로 지정하여 polling 을 사용할 수 있습니다.
      aggregateTimeout: 300, //첫 번째 파일이 변경된 후 다시 빌드하기 전에 지연을 추가합니다. 이를 통해 webpack 은 이 기간 동안 일어난 다른 모든 변경 사항을 하나의 재빌드로 합칠 수 있습니다. 값은 밀리초(ms) 단위로 전달합니다.
    };
    return config;
  },
}


module.exports = nextConfig
