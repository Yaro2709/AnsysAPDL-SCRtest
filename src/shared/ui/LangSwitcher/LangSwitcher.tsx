import { useTranslation } from 'react-i18next';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface LangSwitcherProps {
    className?: string;
    // eslint-disable-next-line react/no-unused-prop-types
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppLink
            to="#"
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </AppLink>
    );
};
