import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] { //не забываем про типизацию WebpackPluginInstance

    return [
        new HtmlWebpackPlugin({
            template: paths.html, //объявляем шаблонный файл
        }), //плагин для html сборки
        new webpack.ProgressPlugin(), //плагин для того, чтобы мы видели сколько процентов проекта мы уже собрали.
        new MiniCssExtractPlugin({ //плагин для css
            filename: 'css/[name].[contenthash:8].css', //делаем хеширование в названиях для обычных файлов
            chunkFilename: 'css/[name].[contenthash:8].css', //делаем хеширование в названиях для чанк файлов
        })
    ]
}