import React, { useContext, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './WhatIsKiAI.css';
import SectionNavigation from './SectionNavigation';
import map from './assets/map.png';
import law from './assets/Law.png';
import business from './assets/business_expansion.png';
import risk from './assets/Risk.png';
import data from './assets/Data.png';
import market from './assets/Emerging_Market.png'

const WhatIsKiAI = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [showDotTooltip, setShowDotTooltip] = useState(null);
    const [pressedDot, setPressedDot] = useState(null);

    const translations = {
        en: {
            Title: 'Real-Time AI Insights for Emerging Markets',
            Description1: 'Make smarter business moves with instant analysis of trends, risks, and regulations worldwide.',
            tryNow: 'Try now',
            learnMore: 'Learn More',
            introText: 'Emerging market information gathering is a key process that enables businesses to...',
            informationGathering: 'Information Gathering',
            improvingEfficiency: 'Improving Efficiency',
            riskMitigation: 'Risk Mitigation',
            compliance: 'Compliance',
            leveragingData: 'Leveraging Data',
            section1Title: 'Importance of Information Gathering for Emerging Markets',
            section1Points: [
                '70% of international business failures stem from inadequate market research—understanding demand, purchasing power, and market size prevents devastating financial losses.',
                'Gathering insights on local customs, business practices, and consumer preferences ensures products and services align with market expectations.',
                'Early intelligence gathering provides first-mover advantages and prevents entering oversaturated markets where success is unlikely.'
            ],
            section2Title: 'Improving Efficiency in Market Expansion',
            section2Content: [
                'Real-time access to market intelligence eliminates time delays in decision-making processes.',
                'Analyze up to 140 countries simultaneously to identify the most promising expansion opportunities quickly.',
                'Automated processing of vast information volumes delivers actionable insights faster than manual research.',
                'Map existing competitors to develop winning differentiation strategies.'
            ],
            section3Title: 'Risk Mitigation and Cost Optimization',
            section3Content:[
                'Monitor government stability and policy changes to avoid unstable markets.',
                'Automated alerts help businesses anticipate and respond to emerging risks before they impact operations.',
                'Analyze currency volatility and banking systems to prevent losses.'
            ],
            section4Title: 'Compliance and Regulatory Adaptation',
            section4Content:[
               'Stay updated on international & local regulations.',
               'Tailored information delivery by country ensures businesses stay current with local legal and regulatory developments.',
                'Research business registration, taxes, and industry regulations to avoid violations.',
                'Understand labor laws to prevent legal disputes and shutdowns.'
            ],
            section5Title: 'Leveraging Data and AI',
            section5Content:[
                'AI-powered analysis automatically summarizes complex information, helping users grasp key points without reading lengthy reports.',
                'Personalized content delivery based on specific country, category, and keyword combinations.',
                'Get real-time alerts for critical market updates.'
            ],
            mainSectionTitle: 'Why Information Gathering',
            mainSectionSubtitle: 'Learn why you should Gather Information for your Market',
            kiaiTransformsTitle: "KiAI's role in all this",
            kiaiTransformsSubtitle: 'How KiAI is Transforming Markets',
            kiaiTransformsParagraph: 'KiAI eliminates the complexity of emerging market research through its AI-powered platform covering 147 countries with government-verified data. The system automatically processes information across 1,000+ categories, delivering personalized insights via email notifications and real-time analysis. Users can simultaneously monitor up to 40 countries, receive AI-generated summaries of complex reports, and access instant web search capabilities—replacing time-consuming manual research with reliable, actionable intelligence that enables faster, more informed business decisions in emerging markets.'
        },
        ja: {
            Title: '新興市場向けリアルタイムAIインサイト',
            Description1: '世界のトレンド、リスク、規制の瞬時分析でより賢明なビジネス判断を実現。',
            tryNow: '今すぐ試す',
            learnMore: '詳細を見る',
            introText: '新興市場における情報収集は、企業が...',
            informationGathering: '情報収集',
            improvingEfficiency: '効率性の向上',
            riskMitigation: 'リスク軽減',
            compliance: 'コンプライアンス',
            leveragingData: 'データとAIの活用',
            section1Title: '情報収集の必要性',
            section1Points: [
            '国際ビジネスの失敗の70%は不十分な市場調査に起因します。需要、購買力、市場規模を理解することで壊滅的な財務損失を防げます。',
            '地域の慣習、ビジネス慣行、消費者の好みに関する洞察を収集することで、製品とサービスが市場の期待に確実に合致します。',
            '早期の情報収集は先行者利益をもたらし、成功の見込みが低い飽和市場への参入を防ぎます。'
            ],
            section2Title: '市場拡大における効率性の向上',
            section2Content: [
            '市場インテリジェンスへのリアルタイムアクセスにより、意思決定プロセスの時間的遅延を排除します。',
            '最大140カ国を同時に分析し、最も有望な拡大機会を迅速に特定します。',
            '膨大な情報量の自動処理により、手動調査よりも迅速に実行可能な洞察を提供します。',
            '既存の競合他社をマッピングして勝利する差別化戦略を開発します。'
            ],
            section3Title: 'リスク軽減とコスト最適化',
            section3Content:[
            '政府の安定性と政策変更を監視して不安定な市場を回避します。',
            '自動アラートにより、企業は新興リスクが業務に影響を与える前に予測し対応できます。',
            '通貨変動と銀行システムを分析して損失を防ぎます。'
            ],
            section4Title: 'コンプライアンスと規制適応',
            section4Content:[
            '国際および地域の規制に関する最新情報を維持します。',
            '国別に調整された情報配信により、企業は地域の法的・規制的動向を常に把握できます。',
            'ビジネス登録、税務、業界規制を調査して違反を回避します。',
            '労働法を理解して法的紛争と業務停止を防ぎます。'
            ],
            section5Title: 'データとAIの活用',
            section5Content:[
            'AI搭載分析が複雑な情報を自動要約し、長い報告書を読むことなく要点を把握できます。',
            '特定の国、カテゴリ、キーワードの組み合わせに基づくパーソナライズされたコンテンツ配信。',
            '重要な市場更新のリアルタイムアラートを取得します。'
            ],
            mainSectionTitle: '新興市場における情報収集の重要性',
            mainSectionSubtitle: '情報収集が必要な理由を学ぶ',
            kiaiTransformsTitle: 'KiAIが新興市場インテリジェンスを変革する方法',
            kiaiTransformsSubtitle: 'KiAIがこれらすべてをどのように支援するか',
            kiaiTransformsParagraph: 'KiAIは、政府認証データを持つ147カ国をカバーするAI搭載プラットフォームを通じて新興市場調査の複雑さを排除します。システムは1,000以上のカテゴリの情報を自動処理し、メール通知とリアルタイム分析を通じてパーソナライズされた洞察を提供します。ユーザーは最大40カ国を同時監視し、複雑なレポートのAI生成要約を受信し、インスタント・ウェブ検索機能にアクセスできます—時間のかかる手動調査を、新興市場でより迅速で情報に基づいたビジネス決定を可能にする信頼性の高い実行可能なインテリジェンスに置き換えます。'

        },
    };

    const t = translations[language];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Get all sections
        const sections = document.querySelectorAll('.ki-section');
        
        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animate-in class to text and image when section is visible
                    const text = entry.target.querySelector('.ki-section-text');
                    const image = entry.target.querySelector('.ki-section-image');
                    
                    if (text) {
                        // Add slight delay for text animation
                        setTimeout(() => {
                            text.classList.add('animate-in');
                        }, 100);
                    }
                    
                    if (image) {
                        // Add slight delay for image animation
                        setTimeout(() => {
                            image.classList.add('animate-in');
                        }, 300);
                    }
                } else {
                    // Remove animate-in class when section is not visible
                    const text = entry.target.querySelector('.ki-section-text');
                    const image = entry.target.querySelector('.ki-section-image');
                    
                    if (text) {
                        text.classList.remove('animate-in');
                    }
                    
                    if (image) {
                        image.classList.remove('animate-in');
                    }
                }
            });
        }, {
            threshold: 0.3, // Trigger when 30% of section is visible
            rootMargin: '0px 0px -10% 0px' // Trigger slightly before section is fully visible
        });
        
        // Create observer for title sections
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target.querySelector('h1, .ki-transforms-title');
                    const subtitle = entry.target.querySelector('.ki-section-subtitle, .ki-transforms-subtitle');
                    
                    if (title) {
                        setTimeout(() => {
                            title.classList.add('animate-in');
                        }, 100);
                    }
                    
                    if (subtitle) {
                        setTimeout(() => {
                            subtitle.classList.add('animate-in');
                        }, 200);
                    }
                } else {
                    const title = entry.target.querySelector('h1, .ki-transforms-title');
                    const subtitle = entry.target.querySelector('.ki-section-subtitle, .ki-transforms-subtitle');
                    
                    if (title) {
                        title.classList.remove('animate-in');
                    }
                    
                    if (subtitle) {
                        subtitle.classList.remove('animate-in');
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Observe title sections
        const titleSections = document.querySelectorAll('.ki-main-section-title, .ki-transforms-section');
        titleSections.forEach(section => {
            titleObserver.observe(section);
        });
        
        // Also handle the first section immediately if it's in view
        setTimeout(() => {
            const firstSection = sections[0];
            if (firstSection) {
                const rect = firstSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // If first section is in view, animate it immediately
                if (rect.top < windowHeight * 0.7) {
                    const text = firstSection.querySelector('.ki-section-text');
                    const image = firstSection.querySelector('.ki-section-image');
                    
                    if (text) {
                        setTimeout(() => {
                            text.classList.add('animate-in');
                        }, 100);
                    }
                    
                    if (image) {
                        setTimeout(() => {
                            image.classList.add('animate-in');
                        }, 300);
                    }
                }
            }
            
            // Handle title sections immediately if in view
            const mainTitle = document.querySelector('.ki-main-section-title');
            const transformsTitle = document.querySelector('.ki-transforms-section');
            
            [mainTitle, transformsTitle].forEach(titleSection => {
                if (titleSection) {
                    const rect = titleSection.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.top < windowHeight * 0.8) {
                        const title = titleSection.querySelector('h1, .ki-transforms-title');
                        const subtitle = titleSection.querySelector('.ki-section-subtitle, .ki-transforms-subtitle');
                        
                        if (title) {
                            setTimeout(() => {
                                title.classList.add('animate-in');
                            }, 100);
                        }
                        
                        if (subtitle) {
                            setTimeout(() => {
                                subtitle.classList.add('animate-in');
                            }, 200);
                        }
                    }
                }
            });
        }, 500);

        // Cleanup observers on unmount
        return () => {
            observer.disconnect();
            titleObserver.disconnect();
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 5);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 5) % 5);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleDotClick = (index) => {
        if (isMobile) {
            // Show tooltip for 2 seconds on tap
            setShowDotTooltip(index);
            setTimeout(() => {
                setShowDotTooltip(null);
            }, 2000);
            
            // Navigate to slide after a short delay
            setTimeout(() => {
                goToSlide(index);
            }, 300);
        } else {
            goToSlide(index);
        }
    };

    const handleDotMouseDown = (index) => {
        setPressedDot(index);
    };

    const handleDotMouseUp = () => {
        setPressedDot(null);
    };

    const handleDotTouchStart = (index) => {
        setPressedDot(index);
    };

    const handleDotTouchEnd = () => {
        setPressedDot(null);
    };

    const getSectionLabel = (index) => {
        const labels = [
            t.informationGathering,
            t.improvingEfficiency,
            t.riskMitigation,
            t.compliance,
            t.leveragingData
        ];
        return labels[index];
    };

    const handleTryNowClick = () => {
        navigate('/login');
    };

    // Touch handlers for swipe functionality
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentSlide < 4) {
            nextSlide();
        }
        if (isRightSwipe && currentSlide > 0) {
            prevSlide();
        }
    };

    const renderSectionContent = (sectionNumber) => {
        switch(sectionNumber) {
            case 1:
                return (
                    <div className="ki-section-content">
                        <h2>{t.section1Title}</h2>
                        <div className="ki-section-body">
                            <div className="ki-section-text">
                                <ul className="ki-section-points">
                                    {t.section1Points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <div className="ki-section-button-container">
                                    <a 
                                        href="https://www.imf.org/external/datamapper/profile/OEMDC" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="ki-button"
                                    >
                                        {t.learnMore}
                                    </a>
                                </div>
                            </div>
                            <div className="ki-section-image">
                                <img src={map} alt="Data Visualization" />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="ki-section-content">
                        <h2>{t.section2Title}</h2>
                        <div className="ki-section-body">
                           <div className="ki-section-text">
                                <ul className="ki-section-points">
                                    {t.section2Content.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={business} alt="Data Visualization" />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="ki-section-content">
                        <h2>{t.section3Title}</h2>
                        <div className="ki-section-body">
                            <div className="ki-section-text">
                                <ul className="ki-section-points">
                                    {t.section3Content.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <div className="ki-section-button-container">
                                    <a 
                                        href="https://www.allianz-trade.com/en_global/economic-research/country-reports.html" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="ki-button"
                                    >
                                        {t.learnMore}
                                    </a>
                                </div>
                            </div>
                            <div className="ki-section-image">
                                <img src={risk} alt="Arrow up and Down." />
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="ki-section-content">
                        <h2>{t.section4Title}</h2>
                        <div className="ki-section-body">
                            <div className="ki-section-text">
                                <ul className="ki-section-points">
                                    {t.section4Content.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={law} alt="Law Justice" />
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="ki-section-content">
                        <h2>{t.section5Title}</h2>
                        <div className="ki-section-body">
                            <div className="ki-section-text">
                                <ul className="ki-section-points">
                                    {t.section5Content.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={data} alt="Data Visualization" />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="ki-page-content">
            <SectionNavigation />
            <div className="ki-main">
                <div className="ki-main-text">
                    <h1 className="ki-main-title">{t.Title}</h1>
                    <div className="ki-links">
                        <span className="ki-link-item">{t.Description1}</span>
                    </div>
                    <div className="ki-buttons">
                        <button className="ki-button" onClick={handleTryNowClick}>{t.tryNow}</button>
                    </div>
                </div>
            </div>

            <div className="ki-section-wrapper" ref={containerRef}>
                <div className="ki-main-section-title">
                    <h1>{t.mainSectionTitle}</h1>
                    <p className="ki-section-subtitle">{t.mainSectionSubtitle}</p>
                </div>
                {isMobile ? (
                    // Mobile carousel view
                    <div className="ki-carousel">
                        <div 
                            className="ki-carousel-container"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div 
                                className="ki-carousel-slides" 
                                style={{ transform: `translateX(-${currentSlide * 20}%)` }}
                            >
                                {[1, 2, 3, 4, 5].map((sectionNumber) => (
                                    <div key={sectionNumber} className="ki-carousel-slide">
                                        <div className='ki-section'>
                                            {renderSectionContent(sectionNumber)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Carousel Navigation */}
                        <div className="ki-carousel-nav">
                            <div className="ki-carousel-dots">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <div key={index} className="ki-carousel-dot-wrapper">
                                        <button
                                            className={`ki-carousel-dot ${index === currentSlide ? 'active' : ''} ${pressedDot === index ? 'pressed' : ''}`}
                                            onClick={() => handleDotClick(index)}
                                            onMouseDown={() => handleDotMouseDown(index)}
                                            onMouseUp={handleDotMouseUp}
                                            onTouchStart={() => handleDotTouchStart(index)}
                                            onTouchEnd={handleDotTouchEnd}
                                        />
                                        {showDotTooltip === index && (
                                            <div className="ki-carousel-dot-tooltip">
                                                {getSectionLabel(index)}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    // Desktop scroll view
                    <>
                        <div className='ki-section' id='ki-section-1'>
                            <div className="ki-section-content">
                                <h2>{t.section1Title}</h2>
                                <div className="ki-section-body">
                                    <div className="ki-section-text">
                                        <ul className="ki-section-points">
                                            {t.section1Points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                        <div className="ki-section-button-container">
                                            <a 
                                                href="https://www.imf.org/external/datamapper/profile/OEMDC" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="ki-button"
                                            >
                                                {t.learnMore}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={map} alt="Data Visualization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ki-section' id='ki-section-2'>
                            <div className="ki-section-content">
                                <h2>{t.section2Title}</h2>
                                <div className="ki-section-body">
                                    <div className="ki-section-text">
                                        <ul className="ki-section-points">
                                            {t.section2Content.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={business} alt="Data Visualization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ki-section' id='ki-section-3'>
                            <div className="ki-section-content">
                                <h2>{t.section3Title}</h2>
                                <div className="ki-section-body">
                                    <div className="ki-section-text">
                                        <ul className="ki-section-points">
                                            {t.section3Content.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                        <div className="ki-section-button-container">
                                            <a 
                                                href="https://www.allianz-trade.com/en_global/economic-research/country-reports.html" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="ki-button"
                                            >
                                                {t.learnMore}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={risk} alt="Data Visualization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ki-section' id='ki-section-4'>
                            <div className="ki-section-content">
                                <h2>{t.section4Title}</h2>
                                <div className="ki-section-body">
                                    <div className="ki-section-text">
                                        <ul className="ki-section-points">
                                            {t.section4Content.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={law} alt="Data Visualization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ki-section' id='ki-section-5'>
                            <div className="ki-section-content">
                                <h2>{t.section5Title}</h2>
                                <div className="ki-section-body">
                                    <div className="ki-section-text">
                                        <ul className="ki-section-points">
                                            {t.section5Content.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={data} alt="Data Visualization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                
                {/* KiAI Transforms Section */}
                <div className="ki-transforms-section">
                    <div className="ki-transforms-title-container">
                    <h2 className="ki-transforms-title">{t.kiaiTransformsTitle}</h2>
                    <p className="ki-transforms-subtitle">{t.kiaiTransformsSubtitle}</p>
                    </div>
                    <p className="ki-transforms-paragraph">{t.kiaiTransformsParagraph}</p>
                </div>
                
                {/* Contact Form Section */}
                <div className="ki-contact-section">
                    <div className="ki-contact-content">
                        <div className="ki-contact-info">
                            <h2>Contact</h2>
                            <p>If you have any questions or requests, please feel free to contact us using the form below.</p>
                        </div>
                        <div className="ki-contact-form">
                            <form>
                                <div className="ki-form-row">
                                    <div className="ki-form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="sample@example.com" />
                                    </div>
                                    <div className="ki-form-group">
                                        <label htmlFor="name">Name / Organization</label>
                                        <input type="text" id="name" name="name" placeholder="Yamada Corporation" />
                                    </div>
                                </div>
                                <div className="ki-form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject of your inquiry" />
                                </div>
                                <div className="ki-form-group">
                                    <label htmlFor="content">Content</label>
                                    <textarea id="content" name="content" rows="6" placeholder="Inquiry details"></textarea>
                                </div>
                                <button type="submit" className="ki-contact-submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsKiAI;