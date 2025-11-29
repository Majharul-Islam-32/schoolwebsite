import React from 'react';
import Hero from '../components/ui/Hero';
import NoticeBoard from '../components/ui/NoticeBoard';
import EventGallery from '../components/ui/EventGallery';
import HeadmasterMessage from '../components/ui/HeadmasterMessage';
import Achievements from '../components/ui/Achievements';
import FadeInSection from '../components/ui/FadeInSection';
import SchoolFeatures from '../components/ui/SchoolFeatures';

const Home = () => {
  return (
    <div>
      <Hero />
      <FadeInSection>
        <NoticeBoard />
      </FadeInSection>
      <EventGallery />
      <FadeInSection>
        <SchoolFeatures />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <HeadmasterMessage />
      </FadeInSection>
      <Achievements />
    </div>
  );
};

export default Home;
