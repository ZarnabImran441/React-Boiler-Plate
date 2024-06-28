import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import react from '@vitejs/plugin-react';
import {join} from 'path';
import {ConfigEnv, defineConfig, loadEnv, UserConfigExport} from 'vite';
import dts from 'vite-plugin-dts';
import eslintPlugin from 'vite-plugin-eslint';

const alias = {
    '@': join(__dirname, 'src'),
    'react-toastify/dist/ReactToastify.css': join(
        __dirname,
        './node_modules/react-toastify/dist/ReactToastify.css',
    ),
    components: join(__dirname, 'src/components'),
};

const config = ({mode, command}: ConfigEnv): UserConfigExport => {
    const env = loadEnv(mode, process.cwd(), '');

    const isDev = command === 'serve';

    return defineConfig({
        plugins: [
            react(),
            dts({insertTypesEntry: true}),
            eslintPlugin(),
            libAssetsPlugin({
                outputPath: 'assets',
                regExp: /.*(ttf|woff|woff2)$/,
                exclude: /\.svg(\?.*)?$/,
            }),
        ],
        esbuild: {
            logOverride: {
                'this-is-undefined-in-esm': 'silent',
                'assign-to-import': 'silent',
            },
        },
        resolve: {alias},
        build: {
            target: 'esnext',
            outDir: './dist',
            assetsDir: './',
            sourcemap: true,
            assetsInlineLimit: 8192,
            chunkSizeWarningLimit: 4096,
            emptyOutDir: true,
            commonjsOptions: {
                transformMixedEsModules: true,
                ignore: ['fs'],
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                    exports: 'named',
                },
            },
        },
        optimizeDeps: {
            esbuildOptions: {
                target: 'esnext',
                ignoreAnnotations: false,
            },
        },
        define: {
            ...(isDev ? {global: 'window'} : {}),
        },
        server: {
            port: parseInt(env.VITE_DEV_SERVER_PORT, 10) || 3000,
        },
        base: './',
    });
};

export default config;
