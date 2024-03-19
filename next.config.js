/** @type {import('next').NextConfig} */
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.KINDE_SITE_URL": JSON.stringify(
          process.env.VERCEL_ENV === "preview"
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : null
        ),
        "process.env.KINDE_POST_LOGOUT_REDIRECT_URL": JSON.stringify(
          process.env.VERCEL_ENV === "preview"
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
            : null
        ),
        "process.env.KINDE_POST_LOGIN_REDIRECT_URL": JSON.stringify(
          process.env.VERCEL_ENV === "preview"
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/overview/dashboard`
            : null
        ),
      })
    );

    return config;
  },
};
