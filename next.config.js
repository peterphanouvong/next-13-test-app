/** @type {import('next').NextConfig} */
const webpack = require("webpack");

module.exports = {
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ??
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ??
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/onboarding`,
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
