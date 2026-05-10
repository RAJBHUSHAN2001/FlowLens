import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ICView from './pages/ICView';
import ManagerView from './pages/ManagerView';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <ICView />
            </PageWrapper>
          } 
        />
        <Route 
          path="/manager" 
          element={
            <PageWrapper>
              <ManagerView />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-8"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
