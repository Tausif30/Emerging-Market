import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './SupportPage.css';

const SupportPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Support',
            content: 'Find comprehensive resources, frequently asked questions, and contact information for KiAI support. We are here to help you get the most out of our service.',
            faqTitle: 'Frequently Asked Questions',
            faq1Q: 'How do I get started with KiAI?',
            faq1A: 'You can begin by signing up for our free trial. Our onboarding guide will walk you through the initial setup and features.',
            faq2Q: 'What kind of data does KiAI provide?',
            faq2A: 'Industrial, economic, and security news, which is difficult to find. AI analyzes and delivers by using unique sources.',
            contactTitle: 'Contact Support',
            contactEmail: 'Email: support@kiai.com',
            contactPhone: 'Phone: +81 50-3575-8368',
            contactHours: 'Support Hours: Mon-Fri, 9 AM - 5 PM (GMT)',
        },
        ja: {
            title: 'サポート',
            content: 'KiAIサポートのための包括的なリソース、よくある質問、連絡先情報を見つける。私たちのサービスを最大限に活用できるようお手伝いします。',
            faqTitle: 'よくある質問',
            faq1Q: 'KiAIを始めるにはどうすればよいですか？',
            faq1A: '無料トライアルにサインアップすることで開始できます。オンボーディングガイドが初期設定と機能をご案内します。',
            faq2Q: 'KiAIはどのようなデータを提供しますか？',
            faq2A: 'KiAIは、経済指標、貿易統計、政治安定性レポート、消費者行動の洞察、新興市場に特化した規制更新など、幅広いデータを提供します。',
            contactTitle: 'サポートへのお問い合わせ',
            contactEmail: 'メール: support@kiai.com',
            contactPhone: '電話: +1 (555) 123-4567',
            contactHours: 'サポート時間: 月～金、午前9時～午後5時 (GMT)',
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper support-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <div className="support-section">
                <h2>{t.faqTitle}</h2>
                <div className="faq-item">
                    <h3>{t.faq1Q}</h3>
                    <p>{t.faq1A}</p>
                </div>
                <div className="faq-item">
                    <h3>{t.faq2Q}</h3>
                    <p>{t.faq2A}</p>
                </div>
            </div>

            <div className="support-section">
                <h2>{t.contactTitle}</h2>
                <p>{t.contactEmail}</p>
                <p>{t.contactPhone}</p>
                <p>{t.contactHours}</p>
            </div>
        </div>
    );
};

export default SupportPage;