import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import PageLoader from './components/PageLoader/PageLoader';
import ChatAssistant from './components/Chatbot/ChatAssistant';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
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
