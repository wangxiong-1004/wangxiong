const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const smp = new SpeedMeasureWebpackPlugin();

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'));

    Object.keys(entryFiles).map(index => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/src\/pages\/(.*)\/index\.js/);
        const pageName = match && match[1];

        entry[pageName] = entryFile;
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                inlineSource: '.css$',
                template: path.join(__dirname, `./src/pages/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: ['vendors', pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCss: true,
                    minifyJs: true,
                    removeComments: false
                }
            })
        )
    });

    return {
        entry,
        htmlWebpackPlugins
    }
};

const {entry, htmlWebpackPlugins} = setMPA();

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = smp.wrap({
    mode: 'production',
    entry,
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 3
                        }
                    },
                    'babel-loader',
                    // 'eslint-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                Autoprefixer({
                                    overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                Autoprefixer({
                                    overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]',
                            outputPath: 'images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        // options: {
                        //     mozjpeg: {
                        //         progressive: true,
                        //         quality: 65
                        //     },
                        //     // optipng.enabled: false will disable optipng
                        //     optipng: {
                        //         enabled: false,
                        //     },
                        //     pngquant: {
                        //         quality: '65-90',
                        //         speed: 4
                        //     },
                        //     gifsicle: {
                        //         interlaced: false,
                        //     },
                        //     // the webp option will enable WEBP
                        //     webp: {
                        //         quality: 75
                        //     }
                        // }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
        //             global: 'React'
        //         },
        //         {
        //             module: 'react-dom',
        //             entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
        //             global: 'ReactDOM'
        //         }
        //     ]
        // }),
        // new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        function () {
            this.hooks.done.tap('done', (stats) => {
                if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
                    console.log('build error');
                    process.exit(1);
                }
            })
        },
        new webpack.DllReferencePlugin({
            manifest: require('./build/library/library.json')
        })
    ].concat(htmlWebpackPlugins),
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react|react-dom)/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    // stats: 'errors-only'
});
