import React from 'react';
import AboutView from '../views/pages/AboutView';
import ContactView from '../views/pages/ContactView';

export function AboutController() {
  return <AboutView />;
}

export function ContactController() {
  return <ContactView />;
}

export default {
  AboutController,
  ContactController
};
