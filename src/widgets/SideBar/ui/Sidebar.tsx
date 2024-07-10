import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false) //состояние, которое отвчеает свернут ли siteBar ли нет.

    const onToggle = () => { //функция, которая переключает состояни с ture на false
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

