// src/utils/pages.js
const pages = [
    { name: 'What is KiAI?', path: '/what-is-kiai', anchorable: true, id: 'what-is-kiai' },
    { name: 'Pricing and Plans', path: '/pricing-plans', anchorable: true, id: 'pricing-plans' },
    { name: 'Function', path: '/function', anchorable: true, id: 'function' },
    { name: 'Case studies', path: '/case-studies', anchorable: true, id: 'case-studies' },
    { name: 'Support', path: '/support', anchorable: true, id: 'support' },
    { name: 'Blog', path: '/blog', anchorable: true, id: 'blog' },
    { name: 'Information', path: '/information', anchorable: true, id: 'information' },
    { name: 'Request for', path: '/request-for', anchorable: true, id: 'request-for' },
    { name: 'Under Construction', path: '*', anchorable: false, id: 'under-construction' }, // Catch-all for 404
];

// Map for quick lookup by ID - useful for translations
export const pagesMap = new Map(pages.map(page => [page.id, page]));
export default pages;