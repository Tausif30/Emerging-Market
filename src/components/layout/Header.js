import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import NavbarDropdown from './Navbar';
import pages from '../../utils/pages';
import './Header.css';

// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown, faPhoneVolume, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const translations = {
        en: {
            serviceName: 'KiAI',
            tagline: 'AI-driven emerging market intelligence',
            inquiry: 'Inquiry',
            logIn: 'Log in',
            onlineConsultation: 'Online consultation',
            themeSwitch: 'Theme',
            langSwitch: 'Language',
            navWhatiskiai: 'What is KiAI?',
            navPricingplans: 'Pricing and Plans',
            navFunction: 'Function',
            navCasestudies: 'Case studies',
            navSupport: 'Support',
            navBlog: 'Blog',
            navInformation: 'Information',
            navRequestfor: 'Request for',
        },
        ja: {
            serviceName: 'KiAI',
            tagline: 'AIによる新興市場インテリジェンス',
            inquiry: 'お問い合わせ',
            logIn: 'ログイン',
            onlineConsultation: 'オンライン相談',
            themeSwitch: 'テーマ',
            langSwitch: '言語',
            navWhatiskiai: 'KiAIとは？',
            navPricingplans: '料金・プラン',
            navFunction: '機能',
            navCasestudies: '導入事例',
            navSupport: 'サポート',
            navBlog: 'ブログ',
            navInformation: 'インフォメーション',
            navRequestfor: '資料請求',
        },
    };

    const t = translations[language];
    const navLinks = pages.filter(page => page.anchorable && page.id !== 'not-found');

    // Handle window resize to close mobile menu when switching to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMobileMenuOpen(false);
                setOpenSubmenu(null);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle scroll to show/hide header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Set scrolled state based on scroll position
            setIsScrolled(currentScrollY > 10);
            
            // Show header when scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide header when scrolling down and not at the top
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setIsMobileMenuOpen(false); // Close mobile menu when hiding header
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSubmenu = (menuId) => {
        setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    };

    const handleSmoothScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close menu after click
        }
    };

    return (
        <header className={`ki-header ${isVisible ? 'ki-header-visible' : 'ki-header-hidden'} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="ki-top-bar">
                <div className="ki-top-left">
                    <Link to="/what-is-kiai" className="ki-logo-link">
                        <span className="ki-logo">{t.serviceName}</span>
                        <span className="ki-tagline">{t.tagline}</span>
                    </Link>
                </div>
                <div className="ki-top-right ki-desktop-only">
                    <a href="#consultation" className="ki-link" onClick={(e) => handleSmoothScroll(e, 'consultation')}>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        {t.onlineConsultation}
                    </a>
                    <NavLink to="/request-for" className="ki-link">
                        <FontAwesomeIcon icon={faQuestionCircle} />
                        {t.inquiry}
                    </NavLink>
                    <a href="#login" className="ki-link ki-login-link" onClick={(e) => handleSmoothScroll(e, 'login')}>
                        <FontAwesomeIcon icon={faUser} />
                        {t.logIn}
                    </a>

                    <div className="ki-control-group">
                        <label htmlFor="language-select" className="ki-label">{t.langSwitch}:</label>
                        <select id="language-select" value={language} onChange={handleLanguageChange} className="ki-select">
                            <option value="en">English</option>
                            <option value="ja">日本語</option>
                        </select>
                    </div>

                    <div className="ki-control-group">
                        <label htmlFor="theme-toggle" className="ki-label">{t.themeSwitch}:</label>
                        <label className="ki-switch">
                            <input type="checkbox" id="theme-toggle" checked={theme === 'dark'} onChange={toggleTheme} />
                            <span className="ki-slider round"></span>
                        </label>
                    </div>
                </div>
                <button className="ki-hamburger-button" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Desktop Navbar with hover popups */}
            <nav className="ki-main-nav ki-desktop-nav">
                <ul>
                    {navLinks.map((page) => (
                        <li key={page.id} className={page.id === 'information' ? 'ki-highlighted' : (page.id === 'request-for' ? 'ki-request-btn' : '')}>
                            <NavLink
                                to={page.path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                            </NavLink>
                            {page.id !== 'information' && page.id !== 'request-for' && (
                                <NavbarDropdown mainTopic={page.name} />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navbar (Hamburger Menu) with collapsible sub-menus */}
            <nav className={`ki-mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((page) => {
                        const hasSubmenu = page.id !== 'information' && page.id !== 'request-for';
                        return (
                            <li key={page.id}>
                                <div className="mobile-nav-item-header">
                                    <NavLink
                                        to={page.path}
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                        onClick={() => {
                                            if (!hasSubmenu) {
                                                toggleMobileMenu();
                                            } else {
                                                toggleSubmenu(page.id);
                                            }
                                        }}
                                    >
                                        {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                                    </NavLink>
                                    {hasSubmenu && (
                                        <span className={`mobile-chevron ${openSubmenu === page.id ? 'open' : ''}`} onClick={() => toggleSubmenu(page.id)}>
                                            <FontAwesomeIcon icon={faCaretDown} />
                                        </span>
                                    )}
                                </div>
                                {hasSubmenu && (
                                    <div className={`mobile-submenu ${openSubmenu === page.id ? 'open' : ''}`}>
                                        <NavbarDropdown mainTopic={page.name} isMobile={true} closeMobileMenu={toggleMobileMenu} />
                                    </div>
                                )}
                            </li>
                        );
                    })}
                    
                    {/* Action links with same styling as nav items */}
                    <li>
                        <div className="mobile-nav-item-header">
                            <a href="#consultation" className="ki-link" onClick={(e) => {
                                handleSmoothScroll(e, 'consultation');
                                toggleMobileMenu();
                            }}>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                {t.onlineConsultation}
                            </a>
                        </div>
                    </li>
                    
                    <li>
                        <div className="mobile-nav-item-header">
                            <NavLink 
                                to="/request-for" 
                                className="ki-link"
                                onClick={() => toggleMobileMenu()}
                            >
                                <FontAwesomeIcon icon={faQuestionCircle} />
                                {t.inquiry}
                            </NavLink>
                        </div>
                    </li>
                    
                    <li>
                        <div className="mobile-nav-item-header">
                            <a href="#login" className="ki-link" onClick={(e) => {
                                handleSmoothScroll(e, 'login');
                                toggleMobileMenu();
                            }}>
                                <FontAwesomeIcon icon={faUser} />
                                {t.logIn}
                            </a>
                        </div>
                    </li>

                    {/* Language selector with same styling */}
                    <li>
                        <div className="mobile-nav-item-header">
                            <div className="mobile-control-item">
                                <FontAwesomeIcon icon={faCaretDown} />
                                <span>{t.langSwitch}</span>
                                <select value={language} onChange={handleLanguageChange} className="mobile-select">
                                    <option value="en">English</option>
                                    <option value="ja">日本語</option>
                                </select>
                            </div>
                        </div>
                    </li>

                    {/* Theme toggle with same styling */}
                    <li>
                        <div className="mobile-nav-item-header">
                            <div className="mobile-control-item">
                                <FontAwesomeIcon icon={faCaretDown} />
                                <span>{t.themeSwitch}</span>
                                <label className="mobile-switch">
                                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                                    <span className="mobile-slider"></span>
                                </label>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;