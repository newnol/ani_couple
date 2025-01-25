import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimelineSection from './components/TimelineSection';
import PhotoAlbumSection from './components/PhotoAlbumSection';
import MessageSection from './components/MessageSection';
import CountdownSection from './components/CountdownSection';
import MusicSection from './components/MusicSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <TimelineSection />
            <PhotoAlbumSection />
            <MessageSection />
            <CountdownSection />
            <MusicSection />
            <ContactSection />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
