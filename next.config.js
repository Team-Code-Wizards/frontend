/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'standalone',
	async headers() {
		return [
			{
				source: '/',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: 'beta.code-wizards.team',
					},
				],
			},
		];
	},
};
// коммент
module.exports = nextConfig;
