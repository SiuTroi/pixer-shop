/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');

module.exports = withPWA({
  reactStrictMode: true,
  i18n,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  images: {
    domains: [
      'localhost',
      '127.0.0.1:8000',
      'maps.googleapis.com',
      'goodbeen.com',
      'google.com',
      's3.amazonaws.com',
      'drive.google.com',
      'bapixel-cloud.oss-us-east-1.aliyuncs.com',
      'pixarlaravel.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
