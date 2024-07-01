import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage';
import CommonSensePage from './components/pages/CommonSensePage';
import TapingPage from './components/pages/TapingPage';
import MassagePage from './components/pages/MassagePage';
import RehabilitationPage from './components/pages/RehabilitationPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/CommonSense" element={<CommonSensePage />} />
        <Route path="/Taping" element={<TapingPage />} />
        <Route path="/Massage" element={<MassagePage />} />
        <Route path="/Rehabilitation" element={<RehabilitationPage />} />
      </Routes>
    </div>
  );
}

export default App;
