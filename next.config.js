/** @type {import('next').NextConfig} */

const securityHeaders = [
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	}
]

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.sanity.io']
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers: securityHeaders
			}
		]
	}
}

module.exports = nextConfig
