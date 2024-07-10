import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult { // определяем какие данные будет возвращать наш хук
    toggleTheme: () => void; // функция выбора темы
    theme: Theme; // тема
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); // сохраним локально выбор темы
    };

    return {
        theme,
        toggleTheme,
    };
}
