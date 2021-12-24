import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="root"> element in src/app.html
		target: '#root',

		vite: {
			resolve: {
				alias: {
					'@api': path.resolve('./src/lib/api'),
					'@components': path.resolve('./src/lib/components'),
					'@config': path.resolve('./src/lib/config'),
					'@lib': path.resolve('./src/lib/utils'),
					'@stores': path.resolve('./src/lib/stores'),
					'@styles': path.resolve('./src/lib/styles'),
					'@views': path.resolve('./src/lib/views'),
				},
			},
		},
	},
};

export default config;
