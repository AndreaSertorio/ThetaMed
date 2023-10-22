import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import '../globals.css';

const ContactPage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>Contatti</title>
    </Head>
    <Navbar />
    <main className="main flex p-4 flex-grow">
      <div className="flex flex-col space-y-20 w-full mx-40">

        {/* Prima sezione con immagine e testo a fianco */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-10 md:space-x-2 w-full">
          <div className="flex flex-col justify-center space-y-4 space-x-10 w-full md:w-1/2 md:order-last">
            <h2 className="text-2xl font-bold mb-2">Contatti</h2>
            <p className="text-lg mb-4">Se hai domande o vuoi saperne di più sui nostri servizi, non esitare a contattarci. Il nostro team è sempre pronto ad assisterti.</p>
            <h3 className="text-xl font-bold mb-2">I nostri dettagli di contatto:</h3>
            <ul className="list-disc pl-5 space-y-4 text-lg">
              <li>Email: andreacsertorio@gmail.com</li>
            </ul>
          </div>
          <Image src="/contatti1.png" alt="Ufficio" width={500} height={500} className="md:w-1/2 md:order-first mb-4" />
        </div>

        {/* Seconda immagine che occupa tutta la larghezza */}
        <Image src="/contatti2.png" alt="Team" width={1000} height={500} className="w-full" />

      </div>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
