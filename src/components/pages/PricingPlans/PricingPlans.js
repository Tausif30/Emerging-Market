import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './PricingPlans.css';

const PricingPlans = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Pricing Plan',
            subtitle: 'We offer the following pricing plans',
            
            // Free Trial Plan
            freeTrialTitle: 'Free Trial',
            freeTrialPrice: '¥0',
            freeTrialDescription: 'First, try KiAI with the free version.',
            freeTrialFeatures: [
                'Unlimited countries',
                'Email delivery up to 1 item',
                'Summaries: Limited',
                'Source links: Limited'
            ],
            
            // Small Plan
            smallPlanTitle: 'Small Plan',
            smallPlanPrice: '¥3,980',
            smallPlanDescription: 'For those interested in specific countries. Quickly obtain information.',
            smallPlanFeatures: [
                'Number of countries: 3',
                'Email delivery up to 3 items',
                'Summaries: All',
                'Source links: All'
            ],
            
            // Medium Plan
            mediumPlanTitle: 'Medium Plan',
            mediumPlanPrice: '¥5,980',
            mediumPlanDescription: 'For research and analysis in specific regions. For consultants and analysts.',
            mediumPlanFeatures: [
                'Number of countries: 10',
                'Email delivery up to 5 items',
                'Summaries: All',
                'Source links: All'
            ],
            
            // Large Plan
            largePlanTitle: 'Large Plan',
            largePlanPrice: '¥9,980',
            largePlanDescription: 'Ideal for large-scale information utilization. Analyze freely across 40 countries.',
            largePlanFeatures: [
                'Number of countries: 40',
                'Email delivery up to 10 items',
                'Summaries: All',
                'Source links: All'
            ],
        },
        ja: {
            title: 'プライシングプラン',
            subtitle: '以下の料金プランを提供しています',
            
            // Free Trial Plan
            freeTrialTitle: 'フリートライアル',
            freeTrialPrice: '¥0',
            freeTrialDescription: 'まず、無料版でKiAIをお試しください。',
            freeTrialFeatures: [
                '無制限の国',
                'メール配信最大1件',
                '要約：制限あり',
                'ソースリンク：制限あり'
            ],
            
            // Small Plan
            smallPlanTitle: 'スモールプラン',
            smallPlanPrice: '¥3,980',
            smallPlanDescription: '特定の国に興味のある方向け。迅速に情報を取得。',
            smallPlanFeatures: [
                '対象国数：3',
                'メール配信最大3件',
                '要約：すべて',
                'ソースリンク：すべて'
            ],
            
            // Medium Plan
            mediumPlanTitle: 'ミディアムプラン',
            mediumPlanPrice: '¥5,980',
            mediumPlanDescription: '特定地域での研究・分析向け。コンサルタント・アナリスト向け。',
            mediumPlanFeatures: [
                '対象国数：10',
                'メール配信最大5件',
                '要約：すべて',
                'ソースリンク：すべて'
            ],
            
            // Large Plan
            largePlanTitle: 'ラージプラン',
            largePlanPrice: '¥9,980',
            largePlanDescription: '大規模な情報活用に最適。40か国を自由に分析。',
            largePlanFeatures: [
                '対象国数：40',
                'メール配信最大10件',
                '要約：すべて',
                'ソースリンク：すべて'
            ],
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper pricing-plans-page">
            <h1>{t.title}</h1>
            <p className="page-subtitle">{t.subtitle}</p>

            <div className="pricing-cards-container">
                {/* Free Trial Plan */}
                <div className="pricing-card">
                    <h2>{t.freeTrialTitle}</h2>
                    <p className="price">{t.freeTrialPrice}</p>
                    <p className="plan-description">{t.freeTrialDescription}</p>
                    <ul>
                        {t.freeTrialFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Small Plan */}
                <div className="pricing-card">
                    <h2>{t.smallPlanTitle}</h2>
                    <p className="price">{t.smallPlanPrice}</p>
                    <p className="plan-description">{t.smallPlanDescription}</p>
                    <ul>
                        {t.smallPlanFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Medium Plan */}
                <div className="pricing-card">
                    <h2>{t.mediumPlanTitle}</h2>
                    <p className="price">{t.mediumPlanPrice}</p>
                    <p className="plan-description">{t.mediumPlanDescription}</p>
                    <ul>
                        {t.mediumPlanFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Large Plan */}
                <div className="pricing-card">
                    <h2>{t.largePlanTitle}</h2>
                    <p className="price">{t.largePlanPrice}</p>
                    <p className="plan-description">{t.largePlanDescription}</p>
                    <ul>
                        {t.largePlanFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;