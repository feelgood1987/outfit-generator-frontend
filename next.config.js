require("dotenv").config();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyerblobstoreprod.blob.core.windows.net",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
