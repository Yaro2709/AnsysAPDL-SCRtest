import {BuildOptions} from "./types/config"; //импортируем файл с конфигруацией путей и опций разработки.
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options; //проведем диструктуризацию: вытаксиваем мод и пути
    return {
        mode: mode, //этап нашей разработки
        entry: paths.entry, //стартовая точка нашего приложения
        output: {
            filename: "[name].[contenthash].js", //название главного файла в нашей сборке
            path: paths.build, //путь куда будет происходить сборка
            clean: true //чистим файлы перед сборкой
        },
        plugins: buildPlugins(options), //вызываем функцию списка плагинов
        module: { //конфигурация loader. Предназначены для обработки файлов, которые выходят за рамки js, например: png, gif, css...
            rules: buildLoaders(), //вызываем фнукцию, списка наших регулярных выражений и исключений
        },
        resolve: buildResolvers(), //вызываем функцию списка расширений, которые мы не будем указывать при подключении
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined, //devServer
    }
}