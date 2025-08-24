import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './WhatIsKiAI.css';
import SectionNavigation from './SectionNavigation';
import phoneImage from './assets/phone-image.png'; //

const WhatIsKiAI = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            Title: 'What is Emerging Market Information Gathering?',
            Subtitle: 'Domestic Share No.1 (JP)',
            Tagline: 'KiAI',
            Description1: 'Learn about "emerging market information" in 3 minutes',
            Description2: 'Experience "KiAI"',
            button1: 'Download materials',
            button2: 'Try it for free',
            introText: 'Emerging market information gathering is a key process that enables businesses to...',
            section1Title: 'The Importance of Information Gathering in Emerging Markets',
            section1Text: 'Navigating new markets requires accurate and timely information. Our service helps you identify opportunities and mitigate risks...',
            section2Title: 'Improving Efficiency in Market Expansion',
            section2Text: 'Streamline your business expansion with comprehensive data. KiAI provides insights into local regulations, consumer trends, and competitive landscapes...',
            section3Title: 'Risk Mitigation and Cost Optimization',
            section3Text: 'Minimize operational risks and optimize costs. With KiAI, you can anticipate challenges like political instability, supply chain issues, and regulatory changes...',
            section4Title: 'Compliance and Regulatory Adaptation',
            section4Text: 'Ensure your business operates in full compliance with local laws. Our platform helps you track and adapt to a constantly evolving regulatory environment...',
            section5Title: 'Leveraging Data and Emerging Technologies',
            section5Text: 'Utilize cutting-edge AI and data analytics to gain a competitive edge. KiAI integrates machine learning to provide predictive insights and automated reports...',
        },
        ja: {
            Title: '新興国の情報収集とは？',
            Subtitle: '国内シェアNo.1',
            Tagline: 'KiAI',
            Description1: '「新興国情報」を3分で学ぶ',
            Description2: '「KiAI」を体験する',
            button1: '資料をダウンロード',
            button2: '無料で試す',
            introText: '新興国の情報収集は、企業が成長を加速させるために不可欠なプロセスです...',
            section1Title: '新興国の情報収集の重要性',
            section1Text: '新しい市場に進出するためには、正確でタイムリーな情報が必要です。当社のサービスは、機会を特定し、リスクを軽減するのに役立ちます...',
            section2Title: 'ビジネス展開の効率化',
            section2Text: '包括的なデータでビジネス展開を効率化。KiAIは、現地の規制、消費者動向、競合他社の状況についての洞察を提供します...',
            section3Title: 'リスク低減とコスト最適化',
            section3Text: '運用のリスクを最小限に抑え、コストを最適化します。KiAIを使用すると、政治的不安定性、サプライチェーンの問題、規制変更などの課題を予測できます...',
            section4Title: 'コンプライアンスと規制対応',
            section4Text: '現地の法律を完全に遵守してビジネスを運営します。当社のプラットフォームは、絶えず変化する規制環境を追跡し、適応するのに役立ちます...',
            section5Title: 'データ活用と最新技術とは',
            section5Text: '最先端のAIとデータ分析を活用して、競争力を高めます。KiAIは、機械学習を統合して予測的な洞察と自動レポートを提供します...',
        },
    };

    const t = translations[language];

    return (
        <div className="ki-page-content">
            <SectionNavigation />
            <div className="ki-main">
                <div className="ki-main-text">
                    <p className="ki-main-subtitle">{t.Subtitle}</p>
                    <h2 className="ki-main-tagline">{t.Tagline}</h2>
                    <h1 className="ki-main-title">{t.Title}</h1>
                    <div className="ki-links">
                        <span className="ki-link-item">{t.Description1}</span>
                        <span className="ki-link-item">{t.Description2}</span>
                    </div>
                    <div className="ki-buttons">
                        <button className="ki-button-blue">{t.button1}</button>
                        <button className="ki-button-orange">{t.button2}</button>
                    </div>
                </div>
                <div className="ki-main-image">
                    <img src={phoneImage} alt="A hand holding a phone displaying a mobile app" />
                </div>
            </div>

            <div className="ki-section-wrapper">
                <div className="ki-section" id="information-gathering">
                    <h2>{t.section1Title}</h2>
                    <p>{t.section1Text}</p>
                </div>
                <div className="ki-section" id="improving-efficiency">
                    <h2>{t.section2Title}</h2>
                    <p>{t.section2Text}</p>
                </div>
                <div className="ki-section" id="risk-mitigation">
                    <h2>{t.section3Title}</h2>
                    <p>{t.section3Text}</p>
                </div>
                <div className="ki-section" id="compliance">
                    <h2>{t.section4Title}</h2>
                    <p>{t.section4Text}</p>
                </div>
                <div className="ki-section" id="leveraging-data">
                    <h2>{t.section5Title}</h2>
                    <p>{t.section5Text}</p>
                </div>
            </div>
        </div>
    );
};

export default WhatIsKiAI;