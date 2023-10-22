import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../globals.css';

const Page: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>Chi Siamo</title>
    </Head>
    <Navbar />
    <main className="main flex p-4 flex-grow">
      <div className="flex flex-col space-y-20 w-full mx-40">

        {/* Prima sezione con immagine e testo a fianco */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-10 md:space-x-2 w-full">
          <div className="flex flex-col justify-center space-y-4  space-x-10 w-full md:w-1/2 md:order-last">
            <h2 className="text-2xl font-bold mb-2">Chi Siamo</h2>
            <p className="text-lg mb-4">ECOTREDI Multisonda è un'impresa leader nel campo biomedico, con un focus sull'innovazione delle tecniche ecografiche e l'intelligenza artificiale (AI). La nostra missione è rivoluzionare le metodiche di imaging attraverso l'ecografia, offrendo soluzioni più precise, efficienti e personalizzate per la diagnosi.</p>
            <h3 className="text-xl font-bold mb-2">La nostra forza e know-how:</h3>
            <ul className="list-disc pl-5 space-y-4 text-lg">
              <li>Ricerca e sviluppo nell'ambito biomedico e dell’intelligenza artificiale.</li>
              <li>Formazione specializzata nel campo della radiologia per immagini legata all'AI.</li>
              <li>Collaborazione stretta con le Unità Operative della Fondazione Policlinico Universitario Campus Bio-Medico.</li>
            </ul>
          </div>
          <img src="/image8.png" alt="Imaging avanzato" className="w-full md:w-1/2 md:order-first mb-4" />
        </div>

        {/* Seconda immagine che occupa tutta la larghezza */}
        <img src="/image9.png" alt="Descrizione Immagine 2" className="w-full" />

      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
