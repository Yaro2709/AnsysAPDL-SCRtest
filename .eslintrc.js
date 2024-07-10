module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4], // отступы в jsx
        'react/jsx-indent-props': [2, 4], // правило для пропсов с отступами
        indent: [2, 4], // отступы для других файлов
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // расширения в которых jsx разрешен
        'import/no-unresolved': 'off', // отлкючаем правила на асболютные пути, тк мы используем относитлеьные
        'import/prefer-default-export': 'off', // отключаем дефолтный экспорт
        'no-unused-vars': 'warn', // переменная нигде не используется
        'react/require-default-props': 'off', // отключаем если не задано дефолтное значение
        'react/react-in-jsx-scope': 'off', // при использование react 17 версии не надо импортировать react
        'react/jsx-props-no-spreading': 'warn', // использование спред для пропсов, но для ui комопнентов это нормально
        'react/function-component-definition': 'off', // использование стрелочных функций для комопнентов
        'no-shadow': 'off',
        'import/extensions': 'off', // в импортах не надо указывать расширение, тк мы так настроили вебпак
        'import/no-extraneous-dependencies': 'off', // отключим запрет на импорт дев зависимостей
        'no-underscore-dangle': 'off', // разршение на нижние подчеркивание
        'max-len': ['error', { ignoreComments: true, code: 130 }], // длинные комментарии не дебажим
    },
    globals: {
        __IS_DEV__: true,
    },
};