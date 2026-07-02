import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonorDashboard from './pages/DonorDashboard';
import CreateDonation from './pages/CreateDonation';
import RecipientDashboard from './pages/RecipientDashboard';
import TrackDonation from './pages/TrackDonation';
import OrganizationProfile from './pages/OrganizationProfile';
import SettingsNotifications from './pages/SettingsNotifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
        <Route path="/track-donation" element={<TrackDonation />} />
        <Route path="/profile" element={<OrganizationProfile />} />
        <Route path="/settings" element={<SettingsNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;
