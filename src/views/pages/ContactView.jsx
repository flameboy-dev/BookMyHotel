import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import ContactInfo from '../../components/Contact/ContactInfo';
import ContactCTA from '../../components/Contact/ContactCTA';
import Footer from '../../components/Footer/Footer';

export function ContactView() {
  return (
    <div className="contact-page" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero2
        backgroundImage="/Images/bg_9.jpg"
        breadcrumb="Home / Contact"
        title="Get In Touch"
      />
      <ContactInfo />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default ContactView;
