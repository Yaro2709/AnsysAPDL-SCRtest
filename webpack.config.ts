import path from 'path';
import webpack from 'webpack';//для доступа к встроенным плагинам
import HtmlWebpackPlugin from 'html-webpack-plugin';//импортируем плагин html-webpack-plugin

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'), //стартовая точка нашего приложения
    output: { //настройки куда и как мы будем делать сборку нашего приложения
        filename: "[name].[contenthash].js", //название главного файла в нашей сборке
        path: path.resolve(__dirname, 'build'), //путь куда будет происходить сборка
        clean: true, //чистим файлы
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') //объявляем шаблонный файл
        }), //плагин для html сборки
        new webpack.ProgressPlugin(), //плагин для того, чтобы мы видели сколько процентов проекта мы уже собрали.
    ],
    module: { //конфигурация loader. Предназначены для обработки файлов, которые выходят за рамки js, например: png, gif, css...
        rules: [
            {
                test: /\.tsx?$/, //регулярное выражение, по которому мы будем находить файлы, которые необходимо пропустить через loader
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], //файлы при импорте которых мы не будем указывать расширения.
    },
}

export default config;