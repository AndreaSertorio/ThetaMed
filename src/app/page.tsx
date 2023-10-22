//page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Footer from './components/Footer';
import './globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/autoplay';
import Typing from 'react-typing-animation';

// Abilita il plugin Autoplay di Swiper
SwiperCore.use([Autoplay]);

const Page: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const phrases = [
  "Ecografia Volumetrica",
  "Precisione 4D",
  "Matrice Adattiva"
];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % phrases.length);
    }, 8000); // Cambia ogni 8 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>EcoTreDi</title>
      </Head>
      <Navbar />

      <main className="main flex p-4 flex-grow relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }} // alterna ogni 5 secondi
          loop={true} // loop infinito
          className="w-full h-screen mb-8"
        >
          <SwiperSlide><img src="/image1.png" alt="Descrizione Immagine 1" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/image2.png" alt="Descrizione Immagine 2" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/image3.png" alt="Descrizione Immagine 3" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/image4.png" alt="Descrizione Immagine 4" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/image5.png" alt="Descrizione Immagine 5" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src="/image6.png" alt="Descrizione Immagine 6" className="w-full h-full object-cover" /></SwiperSlide>
        </Swiper>

        <div className="absolute top-1/4 left-1/4 z-10 font-arial">
          <h1 className="text-5xl text-white font-bold" style={{ WebkitTextStroke: '1.5px black' }}>EcoTreDi</h1>
          <Typing key={currentIndex} hideCursor speed={50}>
              <span className="text-6xl text-white font-bold" style={{ WebkitTextStroke: '1.5px black' }}>{phrases[currentIndex]}</span>
              
              {/* Pausa di 2 secondi dopo aver digitato la frase */}
              <Typing.Delay ms={2000} />
              {/* Cancellazione lettera per lettera */}
              <Typing.Backspace count={phrases[currentIndex].length} />
              <Typing.Reset count={1} />
          </Typing>

        </div>


      </main>


      <Footer />
    </div>
  );
}

export default Page;
