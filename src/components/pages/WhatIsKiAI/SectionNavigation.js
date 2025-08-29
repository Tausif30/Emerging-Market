import React, { useContext, useState, useEffect, useMemo } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './SectionNavigation.css';

const SectionNavigation = () => {
    const { language } = useContext(LanguageContext);
    const [activeSection, setActiveSection] = useState(-1); // Start with -1 (no section active)
    const [hoveredDot, setHoveredDot] = useState(null);
    const [touchedDot, setTouchedDot] = useState(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

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

    const sections = useMemo(() => [
        { id: 'ki-section-1', label: t.informationGathering },
        { id: 'ki-section-2', label: t.improvingEfficiency },
        { id: 'ki-section-3', label: t.riskMitigation },
        { id: 'ki-section-4', label: t.compliance },
        { id: 'ki-section-5', label: t.leveragingData }
    ], [t]);

    useEffect(() => {
        // Detect touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleScroll = () => {
            const sectionElements = sections.map(section => 
                document.getElementById(section.id)
            ).filter(Boolean);

            if (sectionElements.length === 0) return;

            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const triggerPoint = scrollTop + viewportHeight * 0.5; // Middle of viewport

            let activeIndex = -1; // Default to no section active (main section)

            // Check each section from top to bottom
            for (let i = 0; i < sectionElements.length; i++) {
                const element = sectionElements[i];
                const rect = element.getBoundingClientRect();
                const elementTop = scrollTop + rect.top;
                const elementBottom = elementTop + rect.height;

                // If the trigger point is within this section, it's active
                if (triggerPoint >= elementTop && triggerPoint <= elementBottom) {
                    activeIndex = i;
                    break;
                }
            }

            // Special check: if we're above the first section, ensure no section is active
            const firstElement = sectionElements[0];
            if (firstElement) {
                const firstRect = firstElement.getBoundingClientRect();
                const firstElementTop = scrollTop + firstRect.top;
                
                if (triggerPoint < firstElementTop) {
                    activeIndex = -1;
                }
            }

            setActiveSection(activeIndex);
        };

        // Throttle scroll events
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        window.addEventListener('resize', throttledHandleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
            window.removeEventListener('resize', throttledHandleScroll);
        };
    }, [sections]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    const handleDotClick = (index, sectionId) => {
        if (isTouchDevice) {
            if (touchedDot === index) {
                // Second touch/tap - navigate to section
                scrollToSection(sectionId);
                setTouchedDot(null);
            } else {
                // First touch - show tooltip
                setTouchedDot(index);
                // Auto-hide tooltip after 3 seconds
                setTimeout(() => {
                    setTouchedDot(null);
                }, 3000);
            }
        } else {
            // Desktop - navigate immediately on click
            scrollToSection(sectionId);
        }
    };

    // Hide tooltip when touching outside
    useEffect(() => {
        const handleTouchOutside = (e) => {
            if (isTouchDevice && !e.target.closest('.dot-wrapper')) {
                setTouchedDot(null);
            }
        };

        document.addEventListener('touchstart', handleTouchOutside);
        document.addEventListener('click', handleTouchOutside);
        
        return () => {
            document.removeEventListener('touchstart', handleTouchOutside);
            document.removeEventListener('click', handleTouchOutside);
        };
    }, [isTouchDevice]);

    return (
        <nav className={`dot-navigation ${activeSection === -1 ? 'main-section' : ''}`}>
            <div className="dots-container">
                {sections.map((section, index) => (
                    <div key={section.id} className="dot-wrapper">
                        <button
                            className={`navigation-dot ${activeSection >= 0 && activeSection === index ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDotClick(index, section.id);
                            }}
                            onMouseEnter={() => setHoveredDot(index)}
                            onMouseLeave={() => setHoveredDot(null)}
                            style={{ 
                                touchAction: 'manipulation',
                                userSelect: 'none'
                            }}
                        />
                        {hoveredDot === index && (
                            <div className="dot-tooltip">
                                {section.label}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default SectionNavigation;