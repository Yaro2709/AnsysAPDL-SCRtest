import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] { // не забываем про типизацию
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'], // языки
                            keyAsDefaultValue: true, // вытаскивает не только ключи, но и автоматически будет в качестве значения подставлять ключ
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // довление louder для css
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // опеределяем для css, что метод `css modules` применяется только для файлов, который содержат `.module.`
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]', // генерация имен при `prod` версии и настоящие название ccs файлов при `dev` сборке.
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/, // регулярное выражение, по которому мы будем находить файлы, которые необходимо пропустить через loaderы
        use: 'ts-loader',
        exclude: /node_modules/, // исключения папкок, на которые лоудеры не распространяются.
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
