import React from 'react';
import Hero from '../components/ui/Hero';
import NoticeBoard from '../components/ui/NoticeBoard';
import HeadmasterMessage from '../components/ui/HeadmasterMessage';
import QuickStats from '../components/ui/QuickStats';
import FadeInSection from '../components/ui/FadeInSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FadeInSection>
        <NoticeBoard />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <HeadmasterMessage />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <QuickStats />
      </FadeInSection>
    </div>
  );
};

export default Home;
