import {BuildOptions} from "./types/config"; //импортируем файл с конфигруацией путей и опций разработки.
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options; //проведем диструктуризацию: вытаксиваем мод и пути
    //Просто скопировали все, что было в `webpack.config.ts`.
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}