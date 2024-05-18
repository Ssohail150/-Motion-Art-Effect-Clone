import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import InfoSection from './components/InfoSection';
import ReviewsSection from './components/ReviewsSection';
import NewSection from './components/NewSection';
import FeatureSection from './components/FeatureSection';  
import Footer from './components/Footer';
import NewFeatureSection from './components/NewFeatureSection';
import CanvasBackground from './components/CanvasBackground'; // Import the parallax background

const App = () => {
  return (
    <>
      <GlobalStyles />
      <CanvasBackground /> {/* Add the parallax background */}
      <Header />
      <PromoSection />
      <InfoSection />
      <ReviewsSection />
      <NewSection />
      <FeatureSection />
      <NewFeatureSection />
      <Footer />
    </>
  );
};

export default App;
