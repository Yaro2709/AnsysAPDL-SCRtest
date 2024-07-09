import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {//не забываем про типизацию

    const typescriptLoader = {
        test: /\.tsx?$/, //регулярное выражение, по которому мы будем находить файлы, которые необходимо пропустить через loaderы
        use: 'ts-loader',
        exclude: /node_modules/, //исключения папкок, на которые лоудеры не распространяются.
    }

    return [
        typescriptLoader,
    ]
}