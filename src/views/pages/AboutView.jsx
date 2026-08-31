import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import AboutStory from '../../components/About/AboutStory';
import AboutTimeline from '../../components/About/AboutTimeline';
import AboutLeadership from '../../components/About/AboutLeadership';
import Mission from '../../components/Mission/MissionGoals';
import FAQs from '../../components/FAQs/FAQSection';
import AboutCTA from '../../components/About/AboutCTA';
import Footer from '../../components/Footer/Footer';

export function AboutView() {
  return (
    <div className="about-page" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Preserved Shared Hero2 Banner */}
      <Hero2
        backgroundImage="/Images/bg_5.jpg"
        breadcrumb="HOME / ABOUT"
        title="About Us"
      />

      {/* 3. Brand Story & Counter Stats Bar */}
      <AboutStory />

      {/* 4. Dedicated Brand Milestones & Timeline */}
      <AboutTimeline />

      {/* 5. Dedicated Leadership Team */}
      <AboutLeadership />

      {/* 6. Mission, Vision & What We Do */}
      <Mission />

      {/* 7. Dedicated Help FAQs */}
      <FAQs />

      {/* 8. Bottom Exploration CTA */}
      <AboutCTA />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default AboutView;
