import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './NotFoundPage.css';

const NotFoundPage = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: '404 - Page Not Found',
            message: 'The page you are looking for does not exist.',
            goHome: 'Go to Home',
        },
        ja: {
            title: '404 - ページが見つかりません',
            message: 'お探しのページは見つかりませんでした。',
            goHome: 'ホームに戻る',
        },
    };
    const t = translations[language];
    return (
        <div className="page-wrapper not-found-page">
            <h1>{t.title}</h1>
            <p>{t.message}</p>
            <Link to="/what-is-kiai" className="ki-button-blue">
                {t.goHome}
            </Link>
        </div>
    );
};

export default NotFoundPage;