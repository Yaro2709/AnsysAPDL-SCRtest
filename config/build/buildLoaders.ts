import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {//не забываем про типизацию

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
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