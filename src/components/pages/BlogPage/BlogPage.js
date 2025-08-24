import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './BlogPage.css';

const BlogPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Blog',
            content: 'Stay updated with the latest news, insights, and articles from KiAI. Our blog covers emerging market trends, data analysis techniques, and product updates.',
            post1Title: 'The Rise of Digital Economies in Southeast Asia',
            post1Date: 'August 20, 2025',
            post1Excerpt: 'Southeast Asia is rapidly becoming a hub for digital innovation. We explore the key drivers and what this means for investors.',
            post2Title: 'Leveraging AI for Predictive Market Analysis',
            post2Date: 'August 15, 2025',
            post2Excerpt: 'Discover how KiAI utilizes artificial intelligence to provide unparalleled predictive insights into volatile emerging markets.',
            post3Title: 'Navigating New Trade Policies in Latin America',
            post3Date: 'August 10, 2025',
            post3Excerpt: 'A deep dive into the recent trade policy changes in Latin America and their impact on international businesses.',
            readMore: 'Read More',
        },
        ja: {
            title: 'ブログ',
            content: 'KiAIからの最新ニュース、洞察、記事で最新情報を入手してください。私たちのブログでは、新興市場のトレンド、データ分析手法、製品更新について取り上げています。',
            post1Title: '東南アジアにおけるデジタル経済の台頭',
            post1Date: '2025年8月20日',
            post1Excerpt: '東南アジアは急速にデジタルイノベーションの拠点となりつつあります。主な推進要因と投資家にとっての意味を探ります。',
            post2Title: '予測市場分析のためのAI活用',
            post2Date: '2025年8月15日',
            post2Excerpt: 'KiAIが人工知能をどのように活用して、変動の激しい新興市場に関する比類のない予測的洞察を提供しているかをご覧ください。',
            post3Title: 'ラテンアメリカの新しい貿易政策への対応',
            post3Date: '2025年8月10日',
            post3Excerpt: 'ラテンアメリカにおける最近の貿易政策変更と、それが国際ビジネスに与える影響を深く掘り下げます。',
            readMore: '続きを読む',
        },
    };
    const t = translations[language];

    return (
        <div className="page-wrapper blog-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <div className="blog-posts-container">
                <div className="blog-post-card">
                    <h2>{t.post1Title}</h2>
                    <p className="post-date">{t.post1Date}</p>
                    <p className="post-excerpt">{t.post1Excerpt}</p>
                    <button className="ki-button-blue">{t.readMore}</button>
                </div>
                <div className="blog-post-card">
                    <h2>{t.post2Title}</h2>
                    <p className="post-date">{t.post2Date}</p>
                    <p className="post-excerpt">{t.post2Excerpt}</p>
                    <button className="ki-button-blue">{t.readMore}</button>
                </div>
                <div className="blog-post-card">
                    <h2>{t.post3Title}</h2>
                    <p className="post-date">{t.post3Date}</p>
                    <p className="post-excerpt">{t.post3Excerpt}</p>
                    <button className="ki-button-blue">{t.readMore}</button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;