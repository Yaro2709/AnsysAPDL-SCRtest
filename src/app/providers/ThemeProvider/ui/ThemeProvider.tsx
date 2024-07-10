import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT; // получаем тему из локального хранилища, преобразовали ее к типу `Theme` и если локальное хранилище не имеет значение, то по умолчанию ставить светлую тему.

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme); // состояние темы

    const defaultProps = useMemo(() => ({ // позволяет не создавать каждый раз новый объект, а возвращать уже существующий.
        theme,
        setTheme,
    }), [theme]); // theme - массив зависиомсти - это то что, может меняться, в данном случае меняется тема.
    // импортируем контекст, который мы сделали `ThemeContext` и у него есть свойство `Provider`. Также для этого свойства есть значение провайдера `value` именно в него мы будем передавать наше название темы и функцию, которая изменяет эту тему.
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
