import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'), // на два уровня выше путь до папки src
    };
    config.resolve.modules.push(paths.src); // прокидываем в массив modules
    config.resolve.extensions.push('.ts', '.tsx'); // тк используем ts и tsx, то нам надо добавить их расширения

    // проходим по всем дефолтным правилам WebPack
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // если регулярка svg, то в таком мы вернемя новый объект, в котором развернем старое правило, но исключаем файлы svg
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        // т.е. теперь WebPack svg louder не будет обрабатывать svg для StoryBook

        return rule;
    });
    // наш louder svg для StoryBook
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));

    return config;
};
