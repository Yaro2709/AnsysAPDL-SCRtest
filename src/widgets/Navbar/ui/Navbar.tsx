import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarB from 'react-bootstrap/Navbar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import AnsysIcon from 'shared/assets/icons/ansys.png';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    return (
        <NavbarB expand="lg" className={classNames(cls.Navbar, {}, [className])}>
            <Container>
                <NavbarB.Brand className={classNames(cls.Name, {}, [className])}>
                    <img
                        src={AnsysIcon}
                        width="25"
                        height="25"
                        className="d-inline-block align-top"
                        // eslint-disable-next-line i18next/no-literal-string
                        alt="Ansys"
                    />
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="basic-navbar-nav" />
                <NavbarB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <AppLink to={RoutePath.about}>
                            {t('О приложение')}
                        </AppLink>
                        <AppLink to={RoutePath.main}>
                            {t('Скриншоты')}
                        </AppLink>
                        <a href="http://localhost:7070/.loki/report.html" target="_blank" rel="noreferrer">
                            {t('Отчет')}
                        </a>
                        <LangSwitcher
                            short={collapsed}
                            className={cls.lang}
                        />
                        <ThemeSwitcher />
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    );
};
