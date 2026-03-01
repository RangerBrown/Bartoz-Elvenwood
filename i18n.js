/* ============================================
   i18n.js — English / Kannada Language Toggle
   Elvenwood Interiors
   ============================================ */

(function () {
    'use strict';

    const STORAGE_KEY = 'elvenwood-lang';
    const DEFAULT_LANG = 'en';
    let translations = null;
    let englishCache = {};

    // GSAP inline style properties to clear
    const GSAP_PROPS = ['opacity', 'transform', 'visibility', 'clip-path', 'clip', 'will-change'];

    // ── Load translations ────────────────────────────
    async function loadTranslations() {
        try {
            const res = await fetch('/lang/kn.json');
            translations = await res.json();
        } catch (e) {
            console.warn('[i18n] Could not load translations:', e);
        }
    }

    // ── Cache original English text ──────────────────
    function cacheEnglish() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!englishCache[key]) {
                // For elements with child spans (word-by-word animation), store innerHTML
                if (el.querySelector('.word')) {
                    englishCache[key] = { html: el.innerHTML, isWordSpan: true };
                } else {
                    englishCache[key] = { text: el.textContent, isWordSpan: false };
                }
            }
        });
    }

    // ── Clear GSAP inline styles from element + children ──
    function clearGsapStyles(el) {
        GSAP_PROPS.forEach(prop => {
            el.style.removeProperty(prop);
        });
        // Also clear from any child .word spans
        el.querySelectorAll('.word').forEach(word => {
            GSAP_PROPS.forEach(prop => {
                word.style.removeProperty(prop);
            });
        });
    }

    // ── Apply language ───────────────────────────────
    function applyLanguage(lang) {
        if (!translations) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');

            if (lang === 'kn' && translations[key]) {
                // Switch to Kannada
                if (el.querySelector('.word')) {
                    el.innerHTML = translations[key];
                    // Clear GSAP inline styles so text is visible immediately since Kannada is not animated by GSAP
                    clearGsapStyles(el);
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.transform = 'none';
                } else {
                    el.textContent = translations[key];
                }
            } else if (lang === 'en' && englishCache[key]) {
                // Restore English
                const cached = englishCache[key];
                if (cached.isWordSpan) {
                    el.innerHTML = cached.html;
                    // When restoring English, we should let GSAP handle the visibility 
                    // and animation state based on scroll position instead of forcing opacity: 1
                    clearGsapStyles(el);

                    // Re-trigger ScrollTrigger refresh for this element if GSAP is available
                    if (typeof ScrollTrigger !== 'undefined') {
                        setTimeout(() => ScrollTrigger.refresh(), 50);
                    }
                } else {
                    el.textContent = cached.text;
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';

        // Update toggle button states
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Add transition class for text fade
        document.body.classList.add('lang-switching');
        setTimeout(() => document.body.classList.remove('lang-switching'), 300);

        // Persist
        localStorage.setItem(STORAGE_KEY, lang);
    }

    // ── Toggle handler ───────────────────────────────
    function handleToggle(e) {
        const btn = e.target.closest('.lang-toggle-btn');
        if (!btn) return;
        const lang = btn.dataset.lang;
        applyLanguage(lang);
    }

    // ── Init ─────────────────────────────────────────
    async function init() {
        await loadTranslations();
        cacheEnglish();

        // Attach toggle listeners
        document.querySelectorAll('.lang-toggle').forEach(toggle => {
            toggle.addEventListener('click', handleToggle);
        });

        // Apply saved preference
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && saved !== DEFAULT_LANG) {
            applyLanguage(saved);
        }
    }

    // Run after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
