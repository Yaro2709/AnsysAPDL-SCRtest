import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {//не забываем про типизацию

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, //довление louder для css
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), //опеределяем для css, что метод `css modules` применяется только для файлов, который содержат `.module.`
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]' //генерация имен при `prod` версии и настоящие название ccs файлов при `dev` сборке.
                    },
                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/, //регулярное выражение, по которому мы будем находить файлы, которые необходимо пропустить через loaderы
        use: 'ts-loader',
        exclude: /node_modules/, //исключения папкок, на которые лоудеры не распространяются.
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}
