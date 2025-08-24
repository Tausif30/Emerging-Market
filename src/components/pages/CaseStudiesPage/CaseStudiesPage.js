import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './CaseStudiesPage.css';

const CaseStudiesPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Case Studies',
            content: 'Read about how various businesses have successfully leveraged KiAI to achieve their objectives in dynamic emerging markets.',
            case1Title: 'Expanding into Southeast Asia',
            case1Client: 'Global Tech Solutions Inc.',
            case1Result: 'Achieved 25% market share increase within 18 months.',
            case1Desc: 'KiAI provided critical insights into local regulations, consumer preferences, and competitive analysis, enabling a smooth and rapid expansion.',
            case2Title: 'Optimizing Supply Chains in Africa',
            case2Client: 'Agri-Logistics Corp.',
            case2Result: 'Reduced operational costs by 15% and improved delivery times by 10%.',
            case2Desc: 'Our platform identified key logistical challenges and provided data-driven solutions for optimizing supply routes and vendor selection.',
            case3Title: 'Navigating Latin American Regulations',
            case3Client: 'Pharma Innovations Ltd.',
            case3Result: 'Successfully entered two new markets with 100% regulatory compliance.',
            case3Desc: 'KiAI\'s comprehensive regulatory tracking and expert analysis ensured that all product launches met local health and safety standards.',
        },
        ja: {
            title: '導入事例',
            content: 'さまざまな企業がKiAIをどのように活用し、ダイナミックな新興市場で目標を達成したかをご覧ください。',
            case1Title: '東南アジアへの展開',
            case1Client: 'グローバルテックソリューションズ株式会社',
            case1Result: '18ヶ月で市場シェアを25%増加。',
            case1Desc: 'KiAIは、現地の規制、消費者の好み、競合分析に関する重要な洞察を提供し、スムーズで迅速な拡大を可能にしました。',
            case2Title: 'アフリカでのサプライチェーン最適化',
            case2Client: 'アグリロジスティクス株式会社',
            case2Result: '運用コストを15%削減し、配送時間を10%改善。',
            case2Desc: '当社のプラットフォームは、主要な物流課題を特定し、供給ルートとベンダー選択を最適化するためのデータ駆動型ソリューションを提供しました。',
            case3Title: 'ラテンアメリカの規制対応',
            case3Client: 'ファーマイノベーションズ株式会社',
            case3Result: '規制遵守を100%達成し、2つの新市場に成功裏に参入。',
            case3Desc: 'KiAIの包括的な規制追跡と専門家による分析により、すべての製品投入が現地保健・安全基準を満たしていることが保証されました。',
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper case-studies-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <div className="case-studies-grid">
                <div className="case-study-card">
                    <h3>{t.case1Title}</h3>
                    <p><strong>Client:</strong> {t.case1Client}</p>
                    <p><strong>Result:</strong> {t.case1Result}</p>
                    <p>{t.case1Desc}</p>
                </div>
                <div className="case-study-card">
                    <h3>{t.case2Title}</h3>
                    <p><strong>Client:</strong> {t.case2Client}</p>
                    <p><strong>Result:</strong> {t.case2Result}</p>
                    <p>{t.case2Desc}</p>
                </div>
                <div className="case-study-card">
                    <h3>{t.case3Title}</h3>
                    <p><strong>Client:</strong> {t.case3Client}</p>
                    <p><strong>Result:</strong> {t.case3Result}</p>
                    <p>{t.case3Desc}</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesPage;