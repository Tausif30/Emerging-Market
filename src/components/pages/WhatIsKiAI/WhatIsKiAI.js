import React, { useContext, useRef, useEffect, useState } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhatIsKiAI.css';
import SectionNavigation from './SectionNavigation';
import phoneImage from './assets/phone-image.png';
import data from './assets/Data.png';

const WhatIsKiAI = () => {
    const { language } = useContext(LanguageContext);
    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const translations = {
        en: {
            Title: 'What is Emerging Market Information Gathering?',
            Description1: 'Learn about emerging market through the help of AI.',
            introText: 'Emerging market information gathering is a key process that enables businesses to...',
            section1Title: 'Importance of Information Gathering',
            section1Points: [
                'Emerging markets offer huge growth potential but also high uncertainty.',
                'Reliable, up-to-date data is crucial for making informed decisions.',
                'Key areas to monitor: local regulations, consumer behavior, political climate.',
                'Companies that invest in strong information networks reduce risk and gain a competitive edge.'
            ],
            section2Title: 'Improving Efficiency in Market Expansion',
            section2Content: [
                'Expanding into new regions often takes time and resources.',
                'Data-driven insights reduce delays and improve decision-making.',
                'Strategies include:'
            ],
            section2Strategies: [
                'Building partnerships with trusted local players.',
                'Using AI tools to forecast demand.',
                'Streamlining logistics with digital platforms.'
            ],
            section2Conclusion: 'Companies that act faster capture market share before competitors.',
            section3Title: 'Risk Mitigation and Cost Optimization',
            section3Content:[
                'Emerging markets face risks:',
                'Predictive analytics helps anticipate problems before they occur.',
                'Cost optimization comes from:',
                'Smart risk management leads to long-term stability.'
            ],
            section3Risks:[
                'Political instability',
                'Currency fluctuations',
                'Supply chain disruptions',
                'Sudden regulatory changes'
            ],
            section3Cost:[
                'Identifying lower-cost suppliers',
                'Reducing waste in operations',
                'Preventing compliance fines'
            ],
            section4Title: 'Compliance and Regulatory Adaptation',
            section4Content:[
                'Compliance is not optional—violations can cause major financial and reputational damage.',
                'Each country has unique labor laws, tax policies, and industry regulations.',
                'Key benefits of proactive compliance:'
            ],
            section4Benefits: [
                'Avoiding costly fines and penalties.',
                'Faster government approvals',
                'Stronger reputation with partners and customers'
            ],
            section4Conclusion: 'A structured compliance system ensures smooth operations in changing environments.',
            section5Title: 'Leveraging Data and AI',
            section5Content:[
                'Advanced technologies are transforming how businesses succeed in emerging markets.',
                'Examples:',
                'Companies using data gain a competitive edge and can leapfrog traditional barriers.',
                'Emerging markets often adopt technology faster, opening unique opportunities.'
            ],
            section5Examples:[
                'AI for consumer insights and demand forecasting',
                'Blockchain for transparent supply chains',
                'IoT for monitoring logistics in real time'
            ],
        },
        ja: {
            Title: '新興国の情報収集とは？',
            Description1: '「新興国情報」を3分で学ぶ',
            section1Title: '新興国の情報収集',
            section1Points: [
                '新興国は大きな成長の可能性を持つ一方、不確実性も高い市場です。',
                '信頼できる最新情報を入手することが、正しい意思決定に不可欠です。',
                '注視すべきポイント：現地の規制、消費者行動、政治情勢。',
                '情報ネットワークに投資した企業は、リスクを軽減し競争優位を確立します。'
            ],
            section2Title: 'ビジネス展開の効率化',
            section2Content: [
                '新規市場への展開は、多くの時間と資源を必要とします。',
                'データ活用により、遅延を減らし、意思決定を効率化できます。',
                '有効な戦略例：'
            ],
            section2Strategies: [
                '信頼できる現地パートナーとの連携。',
                '需要を予測するAIツールの活用。',
                'デジタルプラットフォームによる物流の効率化。'
            ],
            section2Conclusion: '迅速に行動できる企業は、競合より先に市場シェアを獲得できます。',
            section3Title: 'リスク低減とコスト最適化',
            section3Content: [
                '新興国は特有のリスクに直面しています：',
                '予測分析により、問題が発生する前に予測できます。',
                'コスト最適化は以下から実現されます：',
                'スマートなリスク管理は、長期的な安定性につながります。'
            ],
            section3Risks: [
                '政治的不安定性',
                '通貨の変動',
                'サプライチェーンの混乱',
                '突然の規制変更'
            ],
            section3Cost: [
                '低コストのサプライヤーを特定する',
                '業務の無駄を削減する',
                'コンプライアンス違反を防ぐ'
            ],
            section4Title: 'コンプライアンスと規制対応',
            section4Content: [
                'コンプライアンスは任意ではありません。違反は重大な財務的および評判の損害を引き起こす可能性があります。',
                '各国には独自の労働法、税政策、業界規制があります。',
                'プロアクティブなコンプライアンスの主な利点：'
            ],
            section4Benefits: [
                '高額な罰金や制裁を回避すること。',
                '政府の承認を迅速化すること。',
                'パートナーや顧客との関係を強化すること。'
            ],
            section4Conclusion: '構造化されたコンプライアンスシステムは、変化する環境でのスムーズな運営を確保します。',
            section5Title: 'データ活用とAI',
            section5Content: [
                '先進技術が新興市場でのビジネス成功をどのように変革しているか。',
                '事例：',
                'データを活用する企業は競争上の優位性を得て、従来の障壁を飛び越えることができます。',
                '新興市場はしばしば技術を迅速に採用し、独自の機会を開きます。'
            ],
            section5Examples: [
                '消費者インサイトと需要予測のためのAI',
                '透明なサプライチェーンのためのブロックチェーン',
                'リアルタイムで物流を監視するためのIoT'
            ],
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
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
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
        }, 500);

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
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
                            </div>
                            <div className="ki-section-image">
                                <img src={data} alt="Data Visualization" />
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
                                        <li key={index}>
                                            {point}
                                            {index === 2 && (
                                                <ul className="ki-section-sub-strategies">
                                                    {t.section2Strategies.map((strategy, strategyIndex) => (
                                                        <li key={strategyIndex}>{strategy}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                    <li>{t.section2Conclusion}</li>
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={data} alt="Data Visualization" />
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
                                        <li key={index}>
                                            {point}
                                            {index === 0 && (
                                                <ul className="ki-section-sub-strategies">
                                                    {t.section3Risks.map((risk, riskIndex) => (
                                                        <li key={riskIndex}>{risk}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {index === 2 && (
                                                <ul className="ki-section-sub-strategies">
                                                    {t.section3Cost.map((cost, costIndex) => (
                                                        <li key={costIndex}>{cost}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={data} alt="Data Visualization" />
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
                                        <li key={index}>
                                            {point}
                                            {index === 2 && (
                                                <ul className="ki-section-sub-strategies">
                                                    {t.section4Benefits.map((benefit, benefitIndex) => (
                                                        <li key={benefitIndex}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                    <li>{t.section4Conclusion}</li>
                                </ul>
                            </div>
                            <div className="ki-section-image">
                                <img src={data} alt="Data Visualization" />
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
                                        <li key={index}>
                                            {point}
                                            {index === 1 && (
                                                <ul className="ki-section-sub-strategies">
                                                    {t.section5Examples.map((example, exampleIndex) => (
                                                        <li key={exampleIndex}>{example}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
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
                </div>
            </div>

            <div className="ki-section-wrapper" ref={containerRef}>
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
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                            <button 
                                className="ki-carousel-btn ki-carousel-prev" 
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                            >
                                ‹
                            </button>
                            
                            <div className="ki-carousel-dots">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <button
                                        key={index}
                                        className={`ki-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                            
                            <button 
                                className="ki-carousel-btn ki-carousel-next" 
                                onClick={nextSlide}
                                disabled={currentSlide === 4}
                            >
                                ›
                            </button>
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
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={data} alt="Data Visualization" />
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
                                                <li key={index}>
                                                    {point}
                                                    {index === 2 && (
                                                        <ul className="ki-section-sub-strategies">
                                                            {t.section2Strategies.map((strategy, strategyIndex) => (
                                                                <li key={strategyIndex}>{strategy}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                            <li>{t.section2Conclusion}</li>
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={data} alt="Data Visualization" />
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
                                                <li key={index}>
                                                    {point}
                                                    {index === 0 && (
                                                        <ul className="ki-section-sub-strategies">
                                                            {t.section3Risks.map((risk, riskIndex) => (
                                                                <li key={riskIndex}>{risk}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {index === 2 && (
                                                        <ul className="ki-section-sub-strategies">
                                                            {t.section3Cost.map((cost, costIndex) => (
                                                                <li key={costIndex}>{cost}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={data} alt="Data Visualization" />
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
                                                <li key={index}>
                                                    {point}
                                                    {index === 2 && (
                                                        <ul className="ki-section-sub-strategies">
                                                            {t.section4Benefits.map((benefit, benefitIndex) => (
                                                                <li key={benefitIndex}>{benefit}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                            <li>{t.section4Conclusion}</li>
                                        </ul>
                                    </div>
                                    <div className="ki-section-image">
                                        <img src={data} alt="Data Visualization" />
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
                                                <li key={index}>
                                                    {point}
                                                    {index === 1 && (
                                                        <ul className="ki-section-sub-strategies">
                                                            {t.section5Examples.map((example, exampleIndex) => (
                                                                <li key={exampleIndex}>{example}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
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
            </div>
        </div>
    );
};

export default WhatIsKiAI;