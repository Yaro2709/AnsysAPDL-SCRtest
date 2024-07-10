import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] { //не забываем про типизацию WebpackPluginInstance

    return [
        new HtmlWebpackPlugin({
            template: paths.html, //объявляем шаблонный файл
        }), //плагин для html сборки
        new webpack.ProgressPlugin(), //плагин для того, чтобы мы видели сколько процентов проекта мы уже собрали.
        new MiniCssExtractPlugin({ //плагин для css
            filename: 'css/[name].[contenthash:8].css', //делаем хеширование в названиях
            chunkFilename: 'css/[name].[contenthash:8].css', //делаем хеширование в названиях
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ]
}