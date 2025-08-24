import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import pages from '../../utils/pages';
import './Footer.css';

const Footer = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            company: 'KiAI Fund',
            rights: 'All rights reserved.',
            mainPages: 'Main Pages',
            services: 'Services',
            resources: 'Resources',
            support: 'Support',
            navWhatiskiai: 'What is KiAI?',
            navPricingplans: 'Pricing and Plans',
            navFunction: 'Function',
            navCasestudies: 'Case studies',
            navSupport: 'Support',
            navBlog: 'Blog',
            navInformation: 'Information',
            navRequestfor: 'Request for'
        },
        ja: {
            company: 'KiAI Fund',
            rights: 'すべての権利は保護されています。',
            mainPages: 'メインページ',
            services: 'サービス',
            resources: 'リソース',
            support: 'サポート',
            navWhatiskiai: 'KiAIとは？',
            navPricingplans: '料金・プラン',
            navFunction: '機能',
            navCasestudies: '導入事例',
            navSupport: 'サポート',
            navBlog: 'ブログ',
            navInformation: 'インフォメーション',
            navRequestfor: '資料請求'
        }
    };

    const t = translations[language];
    const navLinks = pages.filter(page => page.anchorable && page.id !== 'not-found');

    // Group pages by category for sitemap
    const sitemapSections = {
        mainPages: navLinks.filter(page => ['what-is-kiai', 'pricing-plans'].includes(page.id)),
        services: navLinks.filter(page => ['function', 'case-studies'].includes(page.id)),
        resources: navLinks.filter(page => ['blog', 'information'].includes(page.id)),
        support: navLinks.filter(page => ['support', 'request-for'].includes(page.id))
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-company-info">
                    <h3>{t.company}</h3>
                    <p>&copy; 2024 {t.company}. {t.rights}</p>
                </div>

                <div className="footer-section sitemap-section">
                    <div className="sitemap-grid">
                        <div className="sitemap-column">
                            <h5>{t.mainPages}</h5>
                            <div className="sitemap-links">
                                {sitemapSections.mainPages.map((page) => (
                                    <Link key={page.id} to={page.path}>
                                        {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="sitemap-column">
                            <h5>{t.services}</h5>
                            <div className="sitemap-links">
                                {sitemapSections.services.map((page) => (
                                    <Link key={page.id} to={page.path}>
                                        {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="sitemap-column">
                            <h5>{t.resources}</h5>
                            <div className="sitemap-links">
                                {sitemapSections.resources.map((page) => (
                                    <Link key={page.id} to={page.path}>
                                        {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="sitemap-column">
                            <h5>{t.support}</h5>
                            <div className="sitemap-links">
                                {sitemapSections.support.map((page) => (
                                    <Link key={page.id} to={page.path}>
                                        {t[`nav${page.id.replace(/-/g, '').replace(/^\w/, (c) => c.toUpperCase())}`]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;