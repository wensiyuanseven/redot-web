/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com https://*.clarity.ms https://phpstack-207002-5085356.cloudwaysapps.com https://cdn.respond.io;
    style-src 'self' 'unsafe-inline' https://phpstack-207002-5085356.cloudwaysapps.com https://fonts.googleapis.com;
    img-src 'self' blob: data: https://www.googletagmanager.com https://flagcdn.com https://*.openstreetmap.org https://*.clarity.ms https://*.bing.com https://phpstack-207002-5085356.cloudwaysapps.com;
    font-src 'self' https://*.gstatic.com;
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    media-src 'self' https://*.cloudfront.net;
    connect-src 'self' https://www.googletagmanager.com https://raw.githubusercontent.com https://phpstack-207002-5085356.cloudwaysapps.com https://*.clarity.ms https://*.azurewebsites.net https://cdn.respond.io https://*.respond.io wss://*.respond.io;
    frame-src https://*.respond.io;
`;

const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // 压成一行，避免换行导致的 header 解析问题
            value: cspHeader.replace(/\n/g, ' '),
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        // settings for tailwind version of project
        source: '/tailwind/:path*',
        destination: 'https://phpstack-207002-5285707.cloudwaysapps.com/tailwind/:path*',
      },
    ];
  },
};

export default nextConfig;
