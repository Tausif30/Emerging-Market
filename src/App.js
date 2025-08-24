import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import WhatIsKiAI from './components/pages/WhatIsKiAI/WhatIsKiAI';
import PricingPlans from './components/pages/PricingPlans/PricingPlans';
import FunctionPage from './components/pages/FunctionPage/FunctionPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage/CaseStudiesPage';
import SupportPage from './components/pages/SupportPage/SupportPage';
import BlogPage from './components/pages/BlogPage/BlogPage';
import InformationPage from './components/pages/InformationPage/InformationPage';
import RequestForPage from './components/pages/RequestForPage/RequestForPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import './App.css'; 

const App = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<WhatIsKiAI />} />
                            <Route path="/what-is-kiai" element={<WhatIsKiAI />} />
                            <Route path="/pricing-plans" element={<PricingPlans />} />
                            <Route path="/function" element={<FunctionPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/information" element={<InformationPage />} />
                            <Route path="/request-for" element={<RequestForPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Layout>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default App;