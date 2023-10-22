//page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Footer from './components/Footer';
import './globals.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importazione degli stili
import { Typewriter } from 'react-simple-typewriter';

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
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showThumbs={false}
                    showStatus={false}
                    className="h-screen mb-8 flex-1 m-0 p-0"
                >
                    <div className="h-full">
                        <img src="/image1.png" alt="Descrizione Immagine 1" className="h-full object-cover" />
                    </div>
                    <div className="h-full">
                        <img src="/image2.png" alt="Descrizione Immagine 2" className="h-full object-cover" />
                    </div>
                    <div className="h-full">
                        <img src="/image3.png" alt="Descrizione Immagine 3" className="h-full object-cover" />
                    </div>
                    <div className="h-full">
                        <img src="/image4.png" alt="Descrizione Immagine 4" className="h-full object-cover" />
                    </div>
                    <div className="h-full">
                        <img src="/image5.png" alt="Descrizione Immagine 5" className="h-full object-cover" />
                    </div>
                    <div className="h-full">
                        <img src="/image6.png" alt="Descrizione Immagine 6" className="h-full object-cover" />
                    </div>
                </Carousel>

                <div className="absolute top-1/4 left-1/4 z-10 font-arial">
                    <h1 className="text-5xl text-white font-bold" style={{ WebkitTextStroke: '1.5px black' }}>EcoTreDi</h1>
                    <span className="text-6xl text-white font-bold" style={{ WebkitTextStroke: '1.5px black' }}>
                        <Typewriter
                            words={[...phrases]}
                            loop={true}
                            cursor={false}
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            onLoopDone={() => setCurrentIndex((prev) => (prev + 1) % phrases.length)}
                        />
                    </span>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Page;
