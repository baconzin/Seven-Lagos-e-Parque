/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Segments from './components/Segments';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F5F5F5] font-sans overflow-x-hidden antialiased select-none selection:bg-[#8B5A2B] selection:text-white pb-0">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section Slider */}
      <Hero />

      {/* 3. About Institutional Screen */}
      <About />

      {/* 4. Services Grid with interactive add-ons pricing builder */}
      <Services />

      {/* 5. Custom filtered Portfolio Project grid with zoom lightboxes */}
      <Gallery />

      {/* 6. Step-by-Step Construction Timeline */}
      <Timeline />

      {/* 7. Key Brand Differentials */}
      <Features />

      {/* 8. Verified Customer Statements */}
      <Testimonials />

      {/* Segments Atendidos Section */}
      <Segments />

      {/* 9. Secure WhatsApp Auto-Formatting Contact Questionnaire */}
      <ContactForm />

      {/* 10. Maps Integrated Footer */}
      <Footer />

      {/* 11. Glowing WhatsApp Tooltipped Trigger */}
      <WhatsAppButton />

    </div>
  );
}

