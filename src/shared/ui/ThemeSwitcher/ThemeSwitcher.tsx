import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    return (
        <Nav.Link>
            <AppLink
                to="#"
                onClick={toggleTheme}
            >
                {t(theme === Theme.DARK ? 'Темная тема' : 'Светлая тема')}
            </AppLink>
        </Nav.Link>
    );
};
