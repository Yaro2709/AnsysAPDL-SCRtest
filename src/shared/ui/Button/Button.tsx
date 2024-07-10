import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton { //темы кнопки
    CLEAR = 'clear', //кнопка без всего, просто текст
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ //по умолчанию в `React` куча Props, поэтому мы их просто объявляем и наследуем
    className?: string;
    theme?: ThemeButton; //наши темы кнокпки
}

export const Button: FC<ButtonProps> = (props) => { //диструкторизация
    const {
        className,
        children,
        theme,   //наш класс с темой
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};