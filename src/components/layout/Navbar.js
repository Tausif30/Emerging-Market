import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Header.css'; // Uses the same CSS as Header

const NavbarDropdown = ({ mainTopic, isMobile = false, closeMobileMenu }) => {
    const { language } = useContext(LanguageContext);
    
    // Placeholder sub-topics for each main navbar item
    const subTopicTranslations = {
        en: {
            'What is KiAI?': [
                { name: 'Emerging Market Info', path: '/what-is-kiai/info' },
                { name: 'Our Vision', path: '/what-is-kiai/vision' },
                { name: 'KiAI Technology', path: '/what-is-kiai/tech' },
            ],
            'Pricing and Plans': [
            ],
            'Function': [
                { name: 'Data Sources', path: '/function/data' },
                { name: 'Analytics Tools', path: '/function/analytics' },
                { name: 'API Integration', path: '/function/api' },
            ],
            'Case studies': [
                { name: 'By Industry', path: '/case-studies/industry' },
                { name: 'By Region', path: '/case-studies/region' },
                { name: 'Customer Stories', path: '/case-studies/stories' },
            ],
            'Support': [
                { name: 'FAQs', path: '/support/faq' },
                { name: 'Contact Form', path: '/support/contact' },
            ],
            'Blog': [
                { name: 'Latest Articles', path: '/blog/latest' },
                { name: 'Trends', path: '/blog/trends' },
                { name: 'News & Events', path: '/blog/news' },
            ],
        },
        ja: {
            'KiAIとは？': [
                { name: '新興市場情報', path: '/what-is-kiai/info' },
                { name: '私たちのビジョン', path: '/what-is-kiai/vision' },
                { name: 'KiAIテクノロジー', path: '/what-is-kiai/tech' },
            ],
            '料金・プラン': [
                { name: '料金体系', path: '/pricing-plans/tiers' },
                { name: '機能比較', path: '/pricing-plans/compare' },
                { name: 'カスタムプラン', path: '/pricing-plans/custom' },
            ],
            '機能': [
                { name: 'データソース', path: '/function/data' },
                { name: '分析ツール', path: '/function/analytics' },
                { name: 'API統合', path: '/function/api' },
            ],
            '導入事例': [
                { name: '業界別', path: '/case-studies/industry' },
                { name: '地域別', path: '/case-studies/region' },
                { name: 'お客様の声', path: '/case-studies/stories' },
            ],
            'サポート': [
                { name: 'よくある質問', path: '/support/faq' },
                { name: 'お問い合わせフォーム', path: '/support/contact' },
                { name: 'ドキュメンテーション', path: '/support/docs' },
            ],
            'ブログ': [
                { name: '最新記事', path: '/blog/latest' },
                { name: 'トレンド', path: '/blog/trends' },
                { name: 'ニュース・イベント', path: '/blog/news' },
            ],
        },
    };

    const topics = subTopicTranslations[language][mainTopic] || [];

    if (topics.length === 0) {
        return null;
    }

    return (
        <ul className="ki-dropdown-menu">
            {topics.map((topic, index) => (
                <li key={index}>
                    <Link to={topic.path} onClick={isMobile ? closeMobileMenu : undefined}>
                        {topic.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavbarDropdown;