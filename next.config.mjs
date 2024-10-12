/** @type {import('next').NextConfig} */
const nextConfig = {
    
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nyerblobstoreprod.blob.core.windows.net',
          port: '',
          pathname: '**',
        },
      ],
  },
};

export default nextConfig;
