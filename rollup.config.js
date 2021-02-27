import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import dev from 'rollup-plugin-dev'

//const proxy = require('koa-better-http-proxy');
const Koa = require('koa');
const proxy = require('koa-proxy');
//const Proxy = require('koa-proxy-middleware');
/*
const proxy = new Proxy({
  proxies: [
    {
      host: 'http://localhost:8080/api/',
      context: 'api'
    },
  ]
});
*/
const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		!production && dev({
			  dirs: ['public'],
				spa: 'public/index.html',
				limit: '100mb',
				port: 5000,

				extend(app, modules) {
					//app.use(proxy)
          app.use(proxy({
            host:  'http://localhost:8080', // proxy alicdn.com...
            match: /^\/api\//        // ...just the /static folder
          }));
        },

/*
				proxy: {
					'/api/*': 'http://localhost:8080',
				},
*/
			}),


			//dev({ extend(app, modules) { app.use(modules.router.get('/foo', myHandler)) } })


		// In dev mode, call `npm run start` once
		// the bundle has been generated
		//!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		//!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

	],
	watch: {
		clearScreen: false
	}
};
