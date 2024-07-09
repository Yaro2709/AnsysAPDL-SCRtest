import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions { //не забываем про типизацию
    return {
        extensions: ['.tsx', '.ts', '.js'], //файлы при импорте которых мы не будем указывать расширения.
    }
}