import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageLoader from './components/PageLoader/PageLoader';
import ChatAssistant from './components/Chatbot/ChatAssistant';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function AppContent() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    // Show full-page loader ONLY on initial application mount
    const fadeTimer = setTimeout(() => {
      setFadeLoader(true);
    }, 500);

    const doneTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 850);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      {isInitialLoad && <PageLoader fadingOut={fadeLoader} />}
      <div style={{ opacity: isInitialLoad && !fadeLoader ? 0 : 1, transition: 'opacity 0.4s ease' }}>
        <AppRoutes />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChatAssistant />
      <AppContent />
    </Router>
  );
}

export default App;
