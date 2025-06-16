import React from 'react';
import Hero from './sections/Hero';
import TokenForm from './sections/TokenForm';
import StatsPanel from './sections/StatsPanel';
import UtilityCards from './sections/UtilityCards';
import Tokenomics from './sections/Tokenomics';
import ComparisonTable from './sections/ComparisonTable';
import TeamSection from './sections/TeamSection';
import StickyFooter from './sections/StickyFooter';
import GlobalEnhancements from './components/GlobalEnhancements';
import SocialSidebar from './components/SocialSidebar';


export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <GlobalEnhancements />
      <Hero />
      <SocialSidebar />
      <TokenForm />
      <StatsPanel />
      <UtilityCards />
      <Tokenomics />
      <ComparisonTable />
      <TeamSection />
      <StickyFooter />
    </div>
  );
}
