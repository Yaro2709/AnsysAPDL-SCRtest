import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions { // не забываем про типизацию
    return {
        extensions: ['.tsx', '.ts', '.js'], // файлы при импорте которых мы не будем указывать расширения.
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'], // наши зависиомсти
        mainFiles: ['index'], // главный файл для каждого модуля
        alias: {},
    };
}
