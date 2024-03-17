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
						value: '*',
					},
				],
			},
			{
				source: '/api/',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: 'https://code-wizards.team/',
					},
				],
			},
		];
	},
};
// коммент
module.exports = nextConfig;
