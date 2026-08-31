import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import LoginSignup from '../../components/Auth/LoginSignup';
import Footer from '../../components/Footer/Footer';

export function AuthView() {
  return (
    <div className="auth-page-wrapper">
      <Navbar />
      <Hero2 title="Guest Portal" subtitle="Log in or create an account to manage your luxury stays & dining" />
      <main className="auth-main-content">
        <LoginSignup />
      </main>
      <Footer />
    </div>
  );
}

export default AuthView;
