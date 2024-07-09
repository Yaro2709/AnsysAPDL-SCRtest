export type BuildMode = 'production' | 'development'; //тип опций сборки

export interface BuildPaths { //формируем массив путей
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions { //передача опций
    mode: BuildMode; //передача типа опции сборки
    paths: BuildPaths; //передаем массив путей
    isDev: boolean; //isDev = true, если BuildMode = production
}