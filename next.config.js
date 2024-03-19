/** @type {import('next').NextConfig} */
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.KINDE_SITE_URL":
          process.env.KINDE_SITE_URL ?? `https://${process.env.VERCEL_URL}`,
        "process.env.KINDE_POST_LOGOUT_REDIRECT_URL":
          process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
          `https://${process.env.VERCEL_URL}`,
        "process.env.KINDE_POST_LOGIN_REDIRECT_URL":
          process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
          `https://${process.env.VERCEL_URL}/onboarding`,
      })
    );

    return config;
  },
};

// env: {
//   KINDE_SITE_URL:
//     process.env.KINDE_SITE_URL ?? `https://${process.env.VERCEL_URL}`,
//   KINDE_POST_LOGOUT_REDIRECT_URL:
//     process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
//     `https://${process.env.VERCEL_URL}`,
//   KINDE_POST_LOGIN_REDIRECT_URL:
//     process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
//     `https://${process.env.VERCEL_URL}/onboarding`,
// },
