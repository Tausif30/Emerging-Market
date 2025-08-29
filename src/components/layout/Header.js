import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Header.css';
import logoImage from './assets/Logo.png';

// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const translations = {
        en: {
            howToUse: 'How To Use',
            client: 'Client',
            emergingMarket: 'Emerging Market',
            whyKiai: 'Why KiAI',
            login: 'Login',
            tryFree: 'Try free',
            currentLanguage: 'English'
        },
        ja: {
            howToUse: '使い方',
            client: 'クライアント',
            emergingMarket: '新興市場',
            whyKiai: 'なぜKiAI',
            login: 'ログイン',
            tryFree: '無料で試す',
            currentLanguage: '日本語'
        },
    };

    const t = translations[language];

    // Handle window resize to close mobile menu when switching to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMobileMenuOpen(false);
                document.body.classList.remove('mobile-menu-open');
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('mobile-menu-open');
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
                // Don't close mobile menu on scroll - let user control it manually
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        const newMenuState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newMenuState);
        
        // Prevent body scroll when mobile menu is open
        if (newMenuState) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }
    };

    return (
        <header className={`ki-header ${isVisible ? 'ki-header-visible' : 'ki-header-hidden'} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="ki-header-content">
                {/* Logo Section */}
                <div className="ki-logo-section">
                    <Link to="/what-is-kiai" className="ki-logo-link">
                        <img src={logoImage} alt="KiAI Logo" className="ki-logo-image" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="ki-main-nav ki-desktop-nav">
                    <ul>
                        <li><NavLink to="/how-to-use">{t.howToUse}</NavLink></li>
                        <li><NavLink to="/client">{t.client}</NavLink></li>
                        <li><NavLink to="/what-is-kiai">{t.emergingMarket}</NavLink></li>
                        <li><NavLink to="/why-kiai">{t.whyKiai}</NavLink></li>
                    </ul>
                </nav>

                {/* Right Side Actions */}
                <div className="ki-header-actions">
                    <div className="ki-desktop-only">
                        <NavLink to="/login" className="ki-login-btn">{t.login}</NavLink>
                        <NavLink to="/try-free" className="ki-try-free-btn">{t.tryFree}</NavLink>
                        
                        {/* Language Selector Button */}
                        <button className="ki-language-btn" onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}>
                            <FontAwesomeIcon icon={faGlobe} />
                            {t.currentLanguage}
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="ki-hamburger-button" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`ki-mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/how-to-use" onClick={() => toggleMobileMenu()}>{t.howToUse}</NavLink></li>
                    <li><NavLink to="/client" onClick={() => toggleMobileMenu()}>{t.client}</NavLink></li>
                    <li><NavLink to="/what-is-kiai" onClick={() => toggleMobileMenu()}>{t.emergingMarket}</NavLink></li>
                    <li><NavLink to="/why-kiai" onClick={() => toggleMobileMenu()}>{t.whyKiai}</NavLink></li>
                    <li><NavLink to="/login" onClick={() => toggleMobileMenu()}>{t.login}</NavLink></li>
                    <li><NavLink to="/try-free" onClick={() => toggleMobileMenu()}>{t.tryFree}</NavLink></li>
                    
                    {/* Mobile Language Toggle */}
                    <li>
                        <button className="mobile-language-btn" onClick={() => {
                            setLanguage(language === 'en' ? 'ja' : 'en');
                            toggleMobileMenu();
                        }}>
                            <FontAwesomeIcon icon={faGlobe} />
                            {t.currentLanguage}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;