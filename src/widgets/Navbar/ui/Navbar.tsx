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
                    AnsysSCR
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="basic-navbar-nav" />
                <NavbarB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <AppLink to={RoutePath.main}>
                                Home
                            </AppLink>
                        </Nav.Link>
                        <Nav.Link>
                            <AppLink to={RoutePath.about}>
                                About
                            </AppLink>
                        </Nav.Link>
                        <Nav.Link>
                            <a href="/report.html" target="_blank" rel="noreferrer">
                                About
                            </a>
                        </Nav.Link>
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
