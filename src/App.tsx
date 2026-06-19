/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Home, 
  Sprout, 
  Wrench, 
  Hammer, 
  Trash2, 
  ShoppingBag, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  QrCode, 
  Globe, 
  X, 
  CheckCircle,
  Menu,
  ShieldCheck,
  Award,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';

// Asset Imports for Premium Themed Real estate & Household Services Graphics
import houseCleaningImg from './assets/images/house_cleaning_1781291475268.jpg';
import gardenServiceImg from './assets/images/garden_service_1781291488512.jpg';
import houseCareImg from './assets/images/house_care_1781291501073.jpg';
import heroHouseImg from './assets/images/hero_house_1781291514375.jpg';
import householdHelpImg from './assets/images/household_help_1781291551777.jpg';
import handymanImg from './assets/images/handyman_tools_belt_1781610428027.jpg';
import contactQrImg from './assets/images/contact_qr.svg';

export default function App() {
  const [lang, setLang] = useState<'DE' | 'EN'>(() => {
    // Check localStorage or fallback to browser language
    const saved = localStorage.getItem('jc_lang');
    if (saved === 'DE' || saved === 'EN') return saved;
    return 'DE';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('jc_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  // Monitor theme change
  useEffect(() => {
    localStorage.setItem('jc_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Monitor language change
  useEffect(() => {
    localStorage.setItem('jc_lang', lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  // Monitor scroll for fixed sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    
    // Use active setTimeout to allow the mobile menu to begin transitions and prevent touch event cancellation
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Sticky header height offset to keep titles perfectly visible
        const offset = 80; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  const currentYear = new Date().getFullYear();

  // Helper function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('JC.Hausservice@gmx.net');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] dark:bg-slate-950 flex flex-col font-sans selection:bg-amber-100 selection:text-slate-900 dark:selection:bg-amber-400 dark:selection:text-slate-950 overflow-x-hidden transition-colors duration-300">
      
      {/* 1. HEADER & NAVIGATION */}
      <header 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80 dark:border-slate-800' 
            : 'bg-white dark:bg-slate-950 py-4 border-b border-transparent shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side: Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#07162c] flex items-center justify-center shadow-md border border-amber-400/15 transform transition-transform group-hover:scale-105 flex-shrink-0">
              <svg 
                viewBox="0 0 100 80" 
                className="w-8 h-8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f2d680" />
                    <stop offset="40%" stopColor="#dca842" />
                    <stop offset="70%" stopColor="#bf8e29" />
                    <stop offset="100%" stopColor="#fcedaa" />
                  </linearGradient>
                </defs>
                
                {/* Roof Peak 1: Left & Highest */}
                <path 
                  d="M 16 55 L 48 23 L 68 43" 
                  stroke="url(#gold-gradient)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Roof Peak 2: Right & Medium */}
                <path 
                  d="M 50 43 L 70 27 L 90 43" 
                  stroke="url(#gold-gradient)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                {/* Roof Peak 3: Nested Center / Bottom */}
                <path 
                  d="M 34 50 L 48 36 L 62 50" 
                  stroke="url(#gold-gradient)" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <div>
              <span className="font-serif font-bold text-[17px] tracking-wide text-slate-900 dark:text-slate-100 block leading-none">
                JC HAUS & HOF
              </span>
              <span className="text-[10px] font-serif tracking-[0.3em] text-blue-800 dark:text-amber-400 block mt-1.5 uppercase font-semibold leading-none">
                Service
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScrollTo('services')}
              className="font-sans font-semibold text-xs tracking-wider text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-200 uppercase relative group cursor-pointer"
            >
              {t.nav_services}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleScrollTo('about')}
              className="font-sans font-semibold text-xs tracking-wider text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-200 uppercase relative group cursor-pointer"
            >
              {t.nav_about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="font-sans font-semibold text-xs tracking-wider text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-200 uppercase relative group cursor-pointer"
            >
              {t.nav_contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Side: Theme Selector, Language Switcher & Hamburger */}
          <div className="flex items-center space-x-3.5">
            
            {/* Theme Selector Button */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition-all duration-300 cursor-pointer focus:outline-none hover:scale-105 active:scale-95 flex items-center justify-center p-2"
              title={theme === 'light' ? (lang === 'DE' ? 'Dunkelkopf einschalten' : 'Switch to Dark Mode') : (lang === 'DE' ? 'Lichtkopf einschalten' : 'Switch to Light Mode')}
              aria-label="Toggle dark/light theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative inline-flex items-center p-0.5 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setLang('DE')}
                className={`py-1 px-3 text-[11px] font-bold rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  lang === 'DE' 
                    ? 'bg-blue-700 dark:bg-amber-400 text-white dark:text-slate-950 shadow-xs scale-105' 
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-205'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`py-1 px-3 text-[11px] font-bold rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  lang === 'EN' 
                    ? 'bg-blue-700 dark:bg-amber-400 text-white dark:text-slate-950 shadow-xs scale-105' 
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-205'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-amber-400 focus:ring-offset-2 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-850 overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                <button
                  onClick={() => handleScrollTo('services')}
                  className="block w-full text-left py-3.5 px-5 rounded-xl font-bold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 active:bg-slate-100 dark:active:bg-slate-800 hover:text-blue-700 dark:hover:text-amber-400 active:text-blue-800 dark:active:text-amber-500 transition-all uppercase tracking-wider text-xs cursor-pointer touch-manipulation select-none"
                >
                  {t.nav_services}
                </button>
                <button
                  onClick={() => handleScrollTo('about')}
                  className="block w-full text-left py-3.5 px-5 rounded-xl font-bold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 active:bg-slate-100 dark:active:bg-slate-800 hover:text-blue-700 dark:hover:text-amber-400 active:text-blue-800 dark:active:text-amber-500 transition-all uppercase tracking-wider text-xs cursor-pointer touch-manipulation select-none"
                >
                  {t.nav_about}
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="block w-full text-left py-3.5 px-5 rounded-xl font-bold text-slate-650 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 active:bg-slate-100 dark:active:bg-slate-800 hover:text-blue-700 dark:hover:text-amber-400 active:text-blue-800 dark:active:text-amber-500 transition-all uppercase tracking-wider text-xs cursor-pointer touch-manipulation select-none"
                >
                  {t.nav_contact}
                </button>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                  <a
                    href="tel:017643418716"
                    className="flex items-center space-x-3 w-full justify-center bg-blue-700 dark:bg-amber-400 hover:bg-blue-800 dark:hover:bg-amber-500 text-white dark:text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-xs uppercase tracking-wider transition-colors text-xs"
                  >
                    <Phone className="w-4 h-4 text-white dark:text-slate-950 stroke-[2.5]" />
                    <span>0176 / 43418716</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Adjust viewport top */}
      <div className="h-[73px] bg-white dark:bg-slate-950 transition-colors duration-300"></div>

      {/* 2. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32 border-b border-slate-800">
        
        {/* Modern geometric background design */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none"></div>

        {/* Abstract SVG Grid Accents */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Location Badge */}
              <motion.div 
                key={`badge-${lang}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-blue-905/30 border border-blue-500/20 backdrop-blur-md px-4 py-1.5 rounded-full text-amber-400 font-bold text-xs tracking-wider uppercase shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.hero_location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1"></span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`title-${lang}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight"
                  >
                    {t.hero_title.split('&').map((text, idx, arr) => (
                      <span key={idx}>
                        {text}
                        {idx < arr.length - 1 && <span className="text-amber-400"> &amp; </span>}
                      </span>
                    ))}
                  </motion.h1>
                </AnimatePresence>

                {/* Subtitle */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`subtitle-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-slate-350 text-base sm:text-lg font-normal max-w-2xl leading-relaxed"
                  >
                    {t.hero_subtitle}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Hero CTA Buttons */}
              <motion.div 
                key={`ctas-${lang}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 pt-4"
              >
                {/* Large clickable Dial Call-to-action */}
                <a
                  href="tel:017643418716"
                  className="flex items-center justify-center space-x-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-display font-extrabold text-xs uppercase tracking-wider py-4.5 px-8 rounded-xl shadow-lg shadow-amber-400/10 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.hero_cta_call}: 0176/43418716</span>
                </a>

                {/* Secondary email contact button */}
                <a
                  href="mailto:JC.Hausservice@gmx.net"
                  className="flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-800 text-slate-100 font-bold text-xs uppercase tracking-wider py-4.5 px-8 rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{t.hero_cta_email}</span>
                </a>
              </motion.div>

              {/* Quick credentials */}
              <div className="flex items-center space-x-6 pt-6 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{t.hero_badge_reliable}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{t.hero_badge_professional}</span>
                </div>
              </div>

            </div>            {/* Premium visual mockup representation in Hero */}
            <div className="lg:col-span-5 hidden lg:flex justify-end relative h-full min-h-[380px]">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-850 bg-slate-900 group">
                <img 
                  src={heroHouseImg} 
                  alt="JC Haus & Hof Service - Premium Property Care" 
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-black/20 z-1"></div>

                {/* Glassmorphic content layout aligned on top of the beautiful property photo */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Visual Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-amber-400 mb-2">
                      <Sparkles className="w-4 h-4 fill-amber-400/20" />
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">Premium Standard</span>
                    </div>
                    <h3 className="text-xl font-display font-extrabold text-white leading-tight drop-shadow-md">
                      JC HAUS & HOF SERVICE
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-1.5 font-sans font-medium drop-shadow-xs">
                      Hausbetreuung • Reinigung • Grünpflege
                    </p>
                  </div>

                  {/* Decorative Visual List of Core Values */}
                  <div className="space-y-3.5 my-6">
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 backdrop-blur-md flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Adendorf & Umgebung</h4>
                        <p className="text-[10px] text-slate-300">Schnell vor Ort & flexibel buchbar</p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 backdrop-blur-md flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Gewerbe & Privat</h4>
                        <p className="text-[10px] text-slate-300">Von der Einzelleistung bis zum Abo</p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 backdrop-blur-md flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Fester Ansprechpartner</h4>
                        <p className="text-[10px] text-slate-300">Direkter Kontakt ohne Agenturen</p>
                      </div>
                    </div>
                  </div>

                  {/* Foot element */}
                  <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                    <div className="text-[10px] font-mono text-slate-350">
                      TEL: 0176 / 43418716
                    </div>
                    <div className="text-[9px] uppercase font-bold text-amber-400 tracking-wider bg-amber-400/20 px-2.5 py-1 rounded-md border border-amber-400/30 backdrop-blur-xs">
                      Active 2026
                    </div>
                  </div>
                </div>

                {/* Subtle card grid design element */}
                <div className="absolute right-3 bottom-12 opacity-5 scale-150 z-0">
                  <Home className="w-48 h-48 text-white" />
                </div>

              </div>
            </div>

          </div>

          {/* Service Logos Ribbon Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-24 pt-10 border-t border-slate-800"
          >
            <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase text-center mb-8">
              {lang === 'DE' ? 'UNSERE LEISTUNGEN IM ÜBERBLICK' : 'OUR RANGE OF SERVICES'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 justify-center items-center">
              {[
                { labelDe: 'Reinigungsservice', labelEn: 'Cleaning Service', icon: Sparkles },
                { labelDe: 'Haushaltshilfe', labelEn: 'Household Help', icon: HeartHandshake },
                { labelDe: 'Urlaubsbetreuung', labelEn: 'Home Care', icon: Home },
                { labelDe: 'Gartenpflege', labelEn: 'Garden Help', icon: Sprout },
                { labelDe: 'Hausmeister', labelEn: 'Janitorial Service', icon: Wrench },
                { labelDe: 'Kleinreparaturen', labelEn: 'Minor Repairs', icon: Hammer },
                { labelDe: 'Entrümpelung', labelEn: 'Estate Clearance', icon: Trash2 },
                { labelDe: 'Einkaufshilfe', labelEn: 'Grocery Help', icon: ShoppingBag },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/50 hover:bg-slate-950/70 border border-slate-800/60 hover:border-amber-400/30 backdrop-blur-sm text-center group transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 group-hover:bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors duration-300 shadow-xs mb-2.5">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 leading-snug">
                      {lang === 'DE' ? item.labelDe : item.labelEn}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section id="services" className="py-24 bg-[#f8fafc] dark:bg-slate-900/40 scroll-mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 p-1 px-3.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-[10.5px] font-bold uppercase tracking-wider leading-none border border-blue-200/50 dark:border-blue-900/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-amber-400"></span>
              <span>{lang === 'DE' ? 'LEISTUNGEN' : 'SERVICES'}</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.h2 
                key={`services-t-${lang}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight"
              >
                {t.services_title}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p 
                key={`services-s-${lang}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-600 dark:text-slate-400 text-lg font-medium"
              >
                {t.services_subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Core Services 2x2 Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: Reinigungsservice */}
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
              className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                  <img 
                    src={houseCleaningImg} 
                    alt="Reinigungsservice" 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                    <Sparkles className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>
                
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={`s1-t-${lang}`}
                      className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3"
                    >
                      {t.service1_title}
                    </motion.h3>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={`s1-d-${lang}`}
                      className="text-slate-600 dark:text-slate-405 text-sm leading-relaxed"
                    >
                      {t.service1_desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Haushaltshilfe */}
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
              className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                  <img 
                    src={householdHelpImg} 
                    alt="Haushaltshilfe" 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                    <HeartHandshake className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>
                
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={`s2-t-${lang}`}
                      className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3"
                    >
                      {t.service2_title}
                    </motion.h3>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={`s2-d-${lang}`}
                      className="text-slate-600 dark:text-slate-405 text-sm leading-relaxed"
                    >
                      {t.service2_desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Hausbetreuung im Urlaub */}
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
              className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                  <img 
                    src={houseCareImg} 
                    alt="Hausbetreuung im Urlaub" 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                    <Home className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>
                
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={`s3-t-${lang}`}
                      className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3"
                    >
                      {t.service3_title}
                    </motion.h3>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={`s3-d-${lang}`}
                      className="text-slate-600 dark:text-slate-405 text-sm leading-relaxed"
                    >
                      {t.service3_desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Grünanlagenpflege und Gartenhilfe */}
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
              className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                  <img 
                    src={gardenServiceImg} 
                    alt="Grünanlagenpflege und Gartenhilfe" 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                    <Sprout className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>
                
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={`s4-t-${lang}`}
                      className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3"
                    >
                      {t.service4_title}
                    </motion.h3>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={`s4-d-${lang}`}
                      className="text-slate-600 dark:text-slate-405 text-sm leading-relaxed"
                    >
                      {t.service4_desc}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

          </div>

          {/* LIST FOR ADDITIONAL SERVICES */}
          <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <AnimatePresence mode="wait">
                <motion.h3 
                  key={`add-title-${lang}`}
                  className="font-display font-bold text-2xl text-slate-900 dark:text-white tracking-tight"
                >
                  {t.additional_title}
                </motion.h3>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`add-sub-${lang}`}
                  className="text-slate-500 dark:text-slate-400 text-sm font-medium"
                >
                  {t.additional_subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* List structured horizontally in balanced detail modules with premium imagery */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Add Service 1: Hausmeisterservice */}
              <motion.div 
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/65 dark:border-slate-800/80 shadow-xs flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                    <img 
                      src={handymanImg} 
                      alt={lang === 'DE' ? 'Hausmeisterservice' : 'Janitorial Service'} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs animate-soft">
                      <Wrench className="w-5 h-5 text-blue-700 dark:text-amber-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{t.add_service1_title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.add_service1_desc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Add Service 2: Kleinreparaturen */}
              <motion.div 
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/65 dark:border-slate-800/80 shadow-xs flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                    <img 
                      src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80" 
                      alt={lang === 'DE' ? 'Kleinreparaturen' : 'Minor Repairs'} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                      <Hammer className="w-5 h-5 text-blue-700 dark:text-amber-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{t.add_service2_title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.add_service2_desc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Add Service 3: Haushaltsauflösung */}
              <motion.div 
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/65 dark:border-slate-800/80 shadow-xs flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                    <img 
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" 
                      alt={lang === 'DE' ? 'Haushaltsauflösung' : 'Estate Clearance'} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                      <Trash2 className="w-5 h-5 text-blue-700 dark:text-amber-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{t.add_service3_title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.add_service3_desc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Add Service 4: Einkaufshilfe */}
              <motion.div 
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                className="bg-white dark:bg-slate-900 p-0 overflow-hidden rounded-2xl border border-slate-200/65 dark:border-slate-800/80 shadow-xs flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
                    <img 
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
                      alt={lang === 'DE' ? 'Einkaufshilfe' : 'Grocery Shopping Help'} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center text-blue-700 dark:text-amber-400 shadow-xs">
                      <ShoppingBag className="w-5 h-5 text-blue-700 dark:text-amber-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{t.add_service4_title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.add_service4_desc}</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. ABOUT SECTION (Über Uns) */}
      <section id="about" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 scroll-mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center space-x-1.5 p-1 px-3.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-[10.5px] font-bold uppercase tracking-wider leading-none border border-blue-200/50 dark:border-blue-900/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-amber-400"></span>
              <span>{t.nav_about}</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              {t.about_story_head}
            </h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Column 1: Story Text */}
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {t.about_story_1}
              </p>
              <p>
                {t.about_story_2}
              </p>
              
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100/80 dark:border-slate-800/85 mt-8 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-amber-400 text-amber-400 dark:text-slate-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {lang === 'DE' ? 'Schnell & Lokal vor Ort' : 'Fast & Local Service'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {lang === 'DE' ? 'Wir betreuen vor allem Adendorf, Lüneburg und nahe Umlinge.' : 'We serve Adendorf, Lüneburg, and nearby areas.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Values List Grid */}
            <div className="space-y-6 lg:pl-4">
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white uppercase tracking-wider mb-6">
                {t.about_values_title}
              </h3>
              
              <div className="space-y-6">
                
                {/* Value 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base lg:text-lg mb-1">
                      {t.value1_title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                      {t.value1_desc}
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base lg:text-lg mb-1">
                      {t.value2_title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                      {t.value2_desc}
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base lg:text-lg mb-1">
                      {t.value3_title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                      {t.value3_desc}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. FOOTER & CONTACT INFORMATION */}
      <footer id="contact" className="bg-slate-900 text-slate-100 pt-20 pb-8 relative overflow-hidden border-t-2 border-amber-400">
        
        {/* Decorative background grid and lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6))] pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
            
            {/* Left side: Contact block (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-1.5 p-1 px-3.5 rounded-full bg-blue-950/40 text-amber-400 text-[10.5px] font-bold uppercase tracking-wider leading-none border border-blue-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>{lang === 'DE' ? 'KONTAKT' : 'CONTACT US'}</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  {t.contact_title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
                  {t.contact_subtitle}
                </p>
              </div>

              {/* Bold easy to read Contact details */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                
                {/* Phone Card (Tap to Call Link) */}
                <a 
                  href="tel:017643418716" 
                  className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/50 shadow-sm transition-all group flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-mono">
                      {t.phone_label}
                    </span>
                    <span className="block text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      0176/43418716
                    </span>
                  </div>
                </a>

                {/* Email Card (Mailto Link) */}
                <div className="relative bg-slate-950/60 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/50 shadow-sm transition-all group shrink-0">
                  <div className="flex items-start space-x-4">
                    <a 
                      href="mailto:JC.Hausservice@gmx.net"
                      className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <div className="space-y-1 flex-1 overflow-hidden">
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-mono">
                        {t.email_label}
                      </span>
                      <a 
                        href="mailto:JC.Hausservice@gmx.net"
                        className="block text-base font-bold text-slate-100 hover:text-amber-400 transition-colors truncate"
                      >
                        JC.Hausservice@gmx.net
                      </a>
                    </div>
                  </div>
                  
                  {/* Subtle Copy Clipboard utility */}
                  <button 
                    onClick={copyEmailToClipboard}
                    className="absolute top-3 right-3 text-[10px] uppercase font-mono font-bold py-1 px-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {copied ? (lang === 'DE' ? 'Kopiert!' : 'Copied!') : (lang === 'DE' ? 'Kopieren' : 'Copy')}
                  </button>
                </div>

                {/* Location Display */}
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-mono">
                      {t.location_label}
                    </span>
                    <span className="block text-base font-bold text-white">
                      Adendorf &amp; Lüneburg Region
                    </span>
                  </div>
                </div>

                {/* Working Hours Display */}
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-mono">
                      {t.hours_label}
                    </span>
                    <span className="block text-sm font-bold text-slate-300">
                      {t.hours_val}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right side: QR Code Box Component (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
              <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-inner w-full max-w-[340px] flex flex-col items-center space-y-4">
                
                {/* Bordered Placeholder box with actual rendered Vector QR design */}
                <div className="p-3 bg-white rounded-xl border-4 border-amber-400 shadow-md">
                  
                  {/* Clean SVG QR code representation of contact details */}
                  <img 
                    src={contactQrImg} 
                    alt="Contact QR Code" 
                    className="w-44 h-44 object-contain bg-white"
                  />

                </div>

                <div className="text-center">
                  <span className="font-bold text-sm text-slate-100 flex items-center justify-center space-x-1.5">
                    <QrCode className="w-4 h-4 text-amber-400" />
                    <span>{t.qr_label}</span>
                  </span>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium leading-relaxed">
                    {t.qr_scan_prompt}
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Sub Footer Legal Links & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <div>
              <span>{t.copyright}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Clicking Impressum opens of details */}
              <button 
                onClick={() => setImpressumOpen(true)}
                className="hover:text-amber-400 uppercase tracking-wider text-[11px] font-bold underline decoration-slate-700 hover:decoration-amber-400 underline-offset-4 transition-all"
              >
                {t.legal_notice}
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* 6. MODAL dialog for Impressum & Datenschutz (Legal Notice & GDPR) */}
      <AnimatePresence>
        {impressumOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-none">
                    JC HAUS & HOF SERVICE
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase font-bold tracking-wider">
                    {lang === 'DE' ? 'Rechtliche Informationen' : 'Legal & Regulatory Info'}
                  </p>
                </div>
                <button 
                  onClick={() => setImpressumOpen(false)}
                  className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Legal Body */}
              <div className="p-6 overflow-y-auto space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                
                {/* IMPRESSUM SECTION */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white uppercase tracking-wide border-b border-slate-100 dark:border-slate-800 pb-2">
                    Impressum / Legal Notice
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <span className="block font-bold text-slate-900 dark:text-white">Anbieter / Operator:</span>
                      <p className="font-medium text-slate-700 dark:text-slate-300">
                        JC HAUS & HOF SERVICE<br />
                        Inhaber: J. C. <br />
                        21365 Adendorf<br />
                        Deutschland / Germany
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="block font-bold text-slate-900 dark:text-white">Kontakt / Contact Details:</span>
                      <p className="font-medium text-slate-700 dark:text-slate-300">
                        Telefon: 0176/43418716<br />
                        E-Mail: JC.Hausservice@gmx.net
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-400/5 dark:bg-amber-400/5 border border-amber-400/10 dark:border-amber-400/20 p-4 rounded-xl text-xs space-y-1 mt-4">
                    <p className="font-bold text-slate-900 dark:text-white">
                      {lang === 'DE' ? 'Haftungsausschluss / Verbraucherstreitbeilegung:' : 'Dispute Resolution / Consumer Advisory:'}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {lang === 'DE' 
                        ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter https://ec.europa.eu/consumers/odr finden. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                        : 'The European Commission provides a platform for online dispute resolution (OS), accessible via https://ec.europa.eu/consumers/odr. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.'}
                    </p>
                  </div>
                </div>

                {/* DATENSCHUTZ SECTION */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white uppercase tracking-wide border-b border-slate-100 dark:border-slate-800 pb-2">
                    Datenschutz / Privacy Policy
                  </h4>
                  
                  <div className="space-y-3 font-medium text-slate-700 dark:text-slate-300">
                    <p>
                      <strong className="text-slate-905 dark:text-white">1. Datenschutz auf einen Blick / Privacy at a Glance</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                      {lang === 'DE' 
                        ? 'Uns ist der Schutz Ihrer persönlichen Daten ein großes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Vorschriften (DSGVO). Wenn Sie unsere Website nutzen, werden keine tracking-Cookies von Drittanbietern geladen.'
                        : 'Your privacy is extremely important to us. We handle your personal data confidentially and in strict compliance with legal frameworks (GDPR). When using our simple promotional website, no third-party tracking cookies are loaded.'}
                    </p>

                    <p className="mt-4">
                      <strong className="text-slate-905 dark:text-white">2. Datenerfassung auf unserer Website / Data Collection</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                      {lang === 'DE'
                        ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei handelt es sich um Daten, die Sie uns per E-Mail oder telefonisch für Fragen oder Angebote zusenden. Andere Daten werden automatisch beim Besuch der Website durch die IT-Systeme erfasst (z.B. Browsertyp, Betriebssystem oder Uhrzeit des Seitenaufrufs). Dies dient ausschließlich dem sicheren Betrieb der Website.'
                        : 'Data is collected when you share it with us (e.g., when reaching out by email or calling us for a cleaning quote). Other non-identifying technical data (e.g., browser type, system configuration, or visit timestamp) is recorded automatically by host infrastructure for cybersecurity and auditing purposes.'}
                    </p>

                    <p className="mt-4">
                      <strong className="text-slate-905 dark:text-white">3. Ihre Rechte / Your Rights</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                      {lang === 'DE'
                        ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Kontaktieren Sie uns hierzu einfach per E-Mail an JC.Hausservice@gmx.net.'
                        : 'You have the right at all times to request free information regarding the origin, recipients, and purpose of your stored personal data. You also retain the right to request correct or complete deletion of this data. Simply message us at JC.Hausservice@gmx.net.'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button 
                  onClick={() => setImpressumOpen(false)}
                  className="bg-slate-900 dark:bg-amber-400 hover:bg-slate-805 dark:hover:bg-amber-500 text-white dark:text-slate-950 font-bold text-xs py-2.5 px-6 rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {lang === 'DE' ? 'Schließen' : 'Close'}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
