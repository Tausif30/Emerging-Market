import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './UnderConstruction.css';

const UnderConstruction = () => {
    const { language } = useContext(LanguageContext);
    const translations = {
        en: {
            title: 'Page under construction',
            message: 'This page is currently being built and will be available soon.',
            goHome: 'Go Back Home',
        },
        ja: {
            title: 'ページ建設中',
            message: 'このページは現在構築中で、まもなく利用可能になります。',
            goHome: 'ホームに戻る',
        },
    };
    const t = translations[language];
    return (
        <div className="page-wrapper under-construction-page">
            <div className="construction-icon">
                <FontAwesomeIcon icon={faPersonDigging} />
            </div>
            <h1>{t.title}</h1>
            <p>{t.message}</p>
            <Link to="/what-is-kiai" className="ki-button-blue">
                {t.goHome}
            </Link>
        </div>
    );
};

export default UnderConstruction;