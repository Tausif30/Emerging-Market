import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './InformationPage.css';

const InformationPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Information',
            content: 'Here you will find general information about KiAI, our company profile, mission, vision, and important announcements.',
            aboutKiAITitle: 'About KiAI',
            aboutKiAIDesc: 'KiAI is a leading provider of AI-driven market intelligence for businesses looking to expand into emerging economies. Our platform leverages advanced analytics to deliver actionable insights, helping clients mitigate risks and seize opportunities.',
            missionTitle: 'Our Mission',
            missionDesc: 'To empower businesses with the most accurate and timely information, fostering sustainable growth in the world\'s fastest-developing markets.',
            visionTitle: 'Our Vision',
            visionDesc: 'To be the indispensable partner for global enterprises navigating the complexities of emerging markets, driven by innovation and data excellence.',
            announcementsTitle: 'Latest Announcements',
            announcement1Title: 'KiAI Partners with Global Economic Forum',
            announcement1Date: 'August 22, 2025',
            announcement1Desc: 'We are proud to announce our new partnership with the Global Economic Forum to provide exclusive market insights.',
        },
        ja: {
            title: 'インフォメーション',
            content: 'ここでは、KiAIに関する一般的な情報、会社概要、ミッション、ビジョン、および重要なお知らせをご覧いただけます。',
            aboutKiAITitle: 'KiAIについて',
            aboutKiAIDesc: 'KiAIは、新興経済圏への進出を目指す企業向けに、AIを活用した市場インテリジェンスを提供するリーディングプロバイダーです。当社のプラットフォームは、高度な分析を活用して実用的な洞察を提供し、クライアントがリスクを軽減し、機会を掴むのを支援します。',
            missionTitle: '私たちの使命',
            missionDesc: '世界で最も急速に発展している市場での持続可能な成長を促進するため、最も正確でタイムリーな情報で企業を力づけること。',
            visionTitle: '私たちのビジョン',
            visionDesc: 'イノベーションとデータ卓越性によって、新興市場の複雑さを乗り越えるグローバル企業の不可欠なパートナーとなること。',
            announcementsTitle: '最新のお知らせ',
            announcement1Title: 'KiAIが世界経済フォーラムと提携',
            announcement1Date: '2025年8月22日',
            announcement1Desc: '独占的な市場洞察を提供するため、世界経済フォーラムとの新たな提携を発表できることを誇りに思います。',
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper information-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <div className="info-section">
                <h2>{t.aboutKiAITitle}</h2>
                <p>{t.aboutKiAIDesc}</p>
            </div>

            <div className="info-section">
                <h2>{t.missionTitle}</h2>
                <p>{t.missionDesc}</p>
            </div>

            <div className="info-section">
                <h2>{t.visionTitle}</h2>
                <p>{t.visionDesc}</p>
            </div>

            <div className="info-section">
                <h2>{t.announcementsTitle}</h2>
                <div className="announcement-item">
                    <h3>{t.announcement1Title}</h3>
                    <p className="announcement-date">{t.announcement1Date}</p>
                    <p>{t.announcement1Desc}</p>
                </div>
            </div>
        </div>
    );
};

export default InformationPage;