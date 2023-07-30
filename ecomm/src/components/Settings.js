import React from 'react';
import SiteInfo from './SiteInfo';
import ShippingInfo from './ShippingInfo';
import SocialMedia from './SocialMedia';
import ContactInfo from './ContactInfo';
import AboutUs from './AboutUs';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Footer from './Footer';
import '../App.css'

const SettingsPage = () => {
  return (
    <>
      <div >
       
        <SiteInfo />
        <ShippingInfo />
        <SocialMedia />
        <ContactInfo />
        <AboutUs />
        <PrivacyPolicy />
        <TermsOfService />
      <Footer />
      </div>
    </>
  );
};

export default SettingsPage;
