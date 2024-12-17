/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'misc.scdn.co',
			},
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
			},
			{
				protocol: 'https',
				hostname: 'dailymix-images.scdn.co',
			},
		],
	},
};

export default config;
