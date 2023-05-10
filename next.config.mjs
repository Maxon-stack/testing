/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
const isProd = process.env.NODE_ENV === 'production';

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://maxon-stack.github.io/testing' : undefined,
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
