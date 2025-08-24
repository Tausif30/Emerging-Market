import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './SectionNavigation.css';

const SectionNavigation = () => {
    const { language } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const translations = {
        en: {
            informationGathering: 'Information Gathering',
            improvingEfficiency: 'Improving Efficiency',
            riskMitigation: 'Risk Mitigation',
            compliance: 'Compliance',
            leveragingData: 'Leveraging Data'
        },
        ja: {
            informationGathering: '情報収集',
            improvingEfficiency: '効率向上',
            riskMitigation: 'リスク軽減',
            compliance: 'コンプライアンス',
            leveragingData: 'データ活用'
        }
    };

    const t = translations[language];

    const sections = [
        { id: 'information-gathering', label: t.informationGathering },
        { id: 'improving-efficiency', label: t.improvingEfficiency },
        { id: 'risk-mitigation', label: t.riskMitigation },
        { id: 'compliance', label: t.compliance },
        { id: 'leveraging-data', label: t.leveragingData }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show section nav when scrolling up and past initial scroll
            if (currentScrollY < lastScrollY && currentScrollY > 200) {
                setIsVisible(true);
            }
            // Hide section nav when scrolling down or at the top
            else if (currentScrollY > lastScrollY || currentScrollY < 100) {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleSectionClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`section-navigation ${isVisible ? 'section-nav-visible' : 'section-nav-hidden'}`}>
            <div className="section-nav-content">
                <div className="section-nav-title">Quick Navigation</div>
                <div className="section-nav-items">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className="section-nav-item"
                            onClick={() => handleSectionClick(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SectionNavigation;