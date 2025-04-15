
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Basics from './pages/Basics';
import Techniques from './pages/Techniques';
import AdvancedTechniques from './pages/AdvancedTechniques';
import Models from './pages/Models';
import BestPractices from './pages/BestPractices';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/toaster';
import ThemeProvider from './providers/ThemeProvider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/advanced-techniques" element={<AdvancedTechniques />} />
          <Route path="/models" element={<Models />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
