import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './FunctionPage.css';

const FunctionPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Function',
            content: 'Explore the various features and functionalities offered by KiAI, designed to empower your business in emerging markets.',
            feature1Title: 'Real-time Market Data',
            feature1Desc: 'Access up-to-the-minute market data, including economic indicators, trade statistics, and news from various emerging economies.',
            feature2Title: 'Competitive Landscape Analysis',
            feature2Desc: 'Gain deep insights into your competitors, their strategies, and market positioning within specific emerging markets.',
            feature3Title: 'Regulatory Compliance Tracking',
            feature3Desc: 'Stay ahead of regulatory changes and ensure compliance with local laws and policies in your target markets.',
            feature4Title: 'Consumer Behavior Insights',
            feature4Desc: 'Understand local consumer trends, preferences, and purchasing power to tailor your products and marketing strategies effectively.',
            feature5Title: 'Risk Assessment & Mitigation',
            feature5Desc: 'Identify potential political, economic, and operational risks, and get recommendations for effective mitigation strategies.',
            feature6Title: 'Automated Report Generation',
            feature6Desc: 'Generate customizable reports with key insights, trends, and forecasts, saving time and effort in data compilation.',
        },
        ja: {
            title: '機能',
            content: 'KiAIが提供する様々な機能をご覧ください。これらは新興市場で貴社のビジネスを強化するために設計されています。',
            feature1Title: 'リアルタイム市場データ',
            feature1Desc: 'さまざまな新興経済圏の経済指標、貿易統計、ニュースなど、最新の市場データにアクセスできます。',
            feature2Title: '競合情勢分析',
            feature2Desc: '特定の新興市場における競合他社の戦略や市場での位置付けについて、深い洞察を得ることができます。',
            feature3Title: '規制コンプライアンス追跡',
            feature3Desc: '規制変更に先んじて対応し、ターゲット市場の現地法規や政策へのコンプライアンスを確保します。',
            feature4Title: '消費者行動インサイト',
            feature4Desc: '現地の消費者のトレンド、好み、購買力を理解し、製品やマーケティング戦略を効果的に調整します。',
            feature5Title: 'リスク評価と軽減',
            feature5Desc: '潜在的な政治的、経済的、運営上のリスクを特定し、効果的な軽減戦略の推奨事項を入手します。',
            feature6Title: '自動レポート生成',
            feature6Desc: '主要な洞察、トレンド、予測を含むカスタマイズ可能なレポートを生成し、データ収集の時間と労力を節約します。',
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper function-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <div className="features-grid">
                <div className="feature-card">
                    <h3>{t.feature1Title}</h3>
                    <p>{t.feature1Desc}</p>
                </div>
                <div className="feature-card">
                    <h3>{t.feature2Title}</h3>
                    <p>{t.feature2Desc}</p>
                </div>
                <div className="feature-card">
                    <h3>{t.feature3Title}</h3>
                    <p>{t.feature3Desc}</p>
                </div>
                <div className="feature-card">
                    <h3>{t.feature4Title}</h3>
                    <p>{t.feature4Desc}</p>
                </div>
                <div className="feature-card">
                    <h3>{t.feature5Title}</h3>
                    <p>{t.feature5Desc}</p>
                </div>
                <div className="feature-card">
                    <h3>{t.feature6Title}</h3>
                    <p>{t.feature6Desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FunctionPage;