import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Footer.css';
import logoImage from './assets/Logo.png';

const Footer = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            tagline: 'Intelligence for a New Era',
            support: 'Support',
            updates: 'Updates',
            faqs: 'FAQs',
            company: 'Company',
            aboutUs: 'About Us',
            inquiries: 'Inquiries',
            legal: 'Legal',
            termsOfUse: 'Terms of Use',
            privacyPolicy: 'Privacy Policy',
            commercialTransactions: 'Notation based on the Act on Specified Commercial Transactions',
            copyright: '© 2025,KiAI'
        },
        ja: {
            tagline: '新時代のインテリジェンス',
            support: 'サポート',
            updates: 'アップデート',
            faqs: 'よくある質問',
            company: '会社情報',
            aboutUs: '私たちについて',
            inquiries: 'お問い合わせ',
            legal: '法的事項',
            termsOfUse: '利用規約',
            privacyPolicy: 'プライバシーポリシー',
            commercialTransactions: '特定商取引法に基づく表記',
            copyright: '© 2025,KiAI'
        }
    };

    const t = translations[language];

    return (
        <footer className="ki-footer">
            <div className="ki-footer-content">
                {/* Logo and Tagline Section */}
                <div className="ki-footer-brand">
                    <Link to="/what-is-kiai" className="ki-footer-logo-link">
                        <img src={logoImage} alt="KiAI Logo" className="ki-footer-logo" />
                    </Link>
                    <p className="ki-footer-tagline">{t.tagline}</p>
                </div>

                {/* Support Section */}
                <div className="ki-footer-section">
                    <h4 className="ki-footer-title">{t.support}</h4>
                    <ul className="ki-footer-links">
                        <li><Link to="/updates">{t.updates}</Link></li>
                        <li><Link to="/faqs">{t.faqs}</Link></li>
                    </ul>
                </div>

                {/* Company Section */}
                <div className="ki-footer-section">
                    <h4 className="ki-footer-title">{t.company}</h4>
                    <ul className="ki-footer-links">
                        <li><Link to="/about-us">{t.aboutUs}</Link></li>
                        <li><Link to="/inquiries">{t.inquiries}</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div className="ki-footer-section">
                    <h4 className="ki-footer-title">{t.legal}</h4>
                    <ul className="ki-footer-links">
                        <li><Link to="/terms-of-use">{t.termsOfUse}</Link></li>
                        <li><Link to="/privacy-policy">{t.privacyPolicy}</Link></li>
                        <li><Link to="/commercial-transactions">{t.commercialTransactions}</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="ki-footer-bottom">
                <p className="ki-footer-copyright">{t.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;