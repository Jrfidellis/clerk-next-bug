/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'app.acme.com',
            },
          ],
          destination: '/app/:path*',
        },
      ],
    }
  },
}

export default nextConfig
