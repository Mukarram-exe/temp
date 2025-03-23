import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Other routes will be added as we implement them */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;