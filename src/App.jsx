import { useEffect } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { MobileCallBar } from './components/MobileCallBar';
import { Navbar } from './components/Navbar';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ServiceArea } from './components/ServiceArea';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { businessInfo } from './data/businessInfo';
import { privacyPolicy } from './data/privacyPolicy';
import { services } from './data/services';
import { translations } from './data/translations';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];
  const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/privacy-policy';
  const privacyContent = privacyPolicy[language];

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        isPrivacyPage
          ? privacyContent.description
          : language === 'fr'
            ? businessInfo.metaDescriptionFr
            : businessInfo.metaDescriptionEn,
      );
    }

    document.title = isPrivacyPage
      ? `${privacyContent.title} | ${businessInfo.name}`
      : businessInfo.name;

    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    if (openGraphTitle) {
      openGraphTitle.setAttribute(
        'content',
        isPrivacyPage ? `${privacyContent.title} | ${businessInfo.name}` : businessInfo.name,
      );
    }

    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphDescription) {
      openGraphDescription.setAttribute(
        'content',
        isPrivacyPage
          ? privacyContent.description
          : language === 'fr'
            ? businessInfo.metaDescriptionFr
            : businessInfo.metaDescriptionEn,
      );
    }
  }, [isPrivacyPage, language, privacyContent.description, privacyContent.title]);

  return (
    <div className="page-shell">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
        businessInfo={businessInfo}
        isPrivacyPage={isPrivacyPage}
      />

      {isPrivacyPage ? (
        <PrivacyPolicy language={language} />
      ) : (
        <main>
          <Hero t={t} businessInfo={businessInfo} />
          <Services
            t={t}
            services={services}
            businessInfo={businessInfo}
            language={language}
          />
          {businessInfo.features.emergencySection && (
            <WhyChooseUs t={t} businessInfo={businessInfo} language={language} />
          )}
          <About t={t} />
          {businessInfo.features.serviceArea && businessInfo.serviceAreas.length > 0 && (
            <ServiceArea t={t} businessInfo={businessInfo} language={language} />
          )}
          <HowItWorks t={t} />
          <Contact t={t} businessInfo={businessInfo} language={language} />
        </main>
      )}

      <Footer
        t={t}
        businessInfo={businessInfo}
        language={language}
        isPrivacyPage={isPrivacyPage}
      />
      {!isPrivacyPage && <MobileCallBar t={t} businessInfo={businessInfo} />}
    </div>
  );
}

export default App;
