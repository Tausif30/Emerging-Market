import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './RequestForPage.css';

const RequestForPage = () => {
    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: ''
    });

    const translations = {
        en: {
            title: 'Request for Information / Demo',
            content: 'Fill out this form to request a demo, download materials, or get more information about how KiAI can benefit your business.',
            formName: 'Your Name',
            formEmail: 'Your Email',
            formCompany: 'Company Name',
            formInquiryType: 'Type of Inquiry',
            typeDemo: 'Request a Demo',
            typeMaterials: 'Download Materials',
            typeInfo: 'General Information',
            formMessage: 'Your Message',
            submitButton: 'Submit Request',
            successMessage: 'Thank you for your inquiry! We will get back to you shortly.',
        },
        ja: {
            title: '情報・デモ請求',
            content: 'デモの請求、資料のダウンロード、またはKiAIが貴社のビジネスにどのように役立つかについての詳細情報をご希望の場合は、このフォームにご記入ください。',
            formName: 'お名前',
            formEmail: 'メールアドレス',
            formCompany: '会社名',
            formInquiryType: 'お問い合わせの種類',
            typeDemo: 'デモを請求',
            typeMaterials: '資料をダウンロード',
            typeInfo: '一般情報',
            formMessage: 'メッセージ',
            submitButton: 'リクエストを送信',
            successMessage: 'お問い合わせありがとうございます！追ってご連絡いたします。',
        },
    };
    const t = translations[language];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send formData to a backend API
        console.log('Form Submitted:', formData);
        alert(t.successMessage); // Using alert for simplicity, replace with custom modal
        setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' }); // Clear form
    };

    return (
        <div className="page-wrapper request-for-page">
            <h1>{t.title}</h1>
            <p className="page-description">{t.content}</p>

            <form onSubmit={handleSubmit} className="request-form">
                <div className="form-group">
                    <label htmlFor="name">{t.formName}:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t.formEmail}:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company">{t.formCompany}:</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="inquiryType">{t.formInquiryType}:</label>
                    <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
                        <option value="">-- {language === 'en' ? 'Select' : '選択'} --</option>
                        <option value="demo">{t.typeDemo}</option>
                        <option value="materials">{t.typeMaterials}</option>
                        <option value="info">{t.typeInfo}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t.formMessage}:</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="ki-button-blue">{t.submitButton}</button>
            </form>
        </div>
    );
};

export default RequestForPage;