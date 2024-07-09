import {BuildOptions} from "./types/config";
//Тип конфирации WebPack и DevServer пересекается (одинаковые типы), поэтому мы переопределяем его, как DevServerConfiguration
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration { //не забываем про тип
    return {
        port: options.port, //порт, инициализируем из опций
        open: true, //для автоматического открытия страинцы в бразуере
        historyApiFallback: true, //позволяет исправить ошибку, если мы находимся не в корневой странице
    }
}