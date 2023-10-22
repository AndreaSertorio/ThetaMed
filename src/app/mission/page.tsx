import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';  // Questa è l'importazione del componente Image
import '../globals.css';

const Page: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>Mission & Vision</title>
    </Head>
    <Navbar />
    <main className="main flex p-4 flex-grow">
      <div className="flex flex-col space-y-20 w-full mx-40">
        
        <h1 className="text-3xl font-bold mb-6">Mission & Vision</h1>

        {/* Prima sezione con testo a sinistra e immagine a destra */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 w-full">
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Mission&Vision</h2>
            <p className="text-lg mb-4">
              Ricerca e sviluppo nel campo biomedico e dell’intelligenza artificiale (AI), per la realizzazione e commercializzazione di una metodica innovativa delle tecniche ecografiche di imaging. La formazione specialistica e professionale nel campo della radiologia per immagini associata all’AI, sia diretta che virtuale; la crescita della consapevolezza biomedica, a supporto delle persone interessate a diminuire il gap tra le proprie conoscenze e lo stato dell’arte nel campo biomedico e AI, con assistenza personale diretta tramite APP/sito.
            </p>
            <p className="text-lg mb-4">
              Intelligenza artificiale: è una disciplina che studia se e in che modo si possano realizzare sistemi informatici intelligenti in grado di simulare la capacità e il comportamento umano. E’ una branca dell'informatica che consente ai computer di fare previsioni e decisioni, risolvere problemi ed eseguire attività. È una tecnologia che sta rapidamente cambiando il mondo e ha un impatto su tutte le discipline e i settori.
            </p>
          </div>
          <Image 
            src="/mission1.png" 
            alt="Descrizione dell'immagine"
            width={500}   // Regola la larghezza desiderata
            height={500}  // Regola l'altezza desiderata
            className="md:w-1/2"
          />
        </div>

        {/* Seconda immagine che occupa tutta la larghezza */}
        <Image 
          src="/mission2.png" 
          alt="Descrizione della seconda immagine"
          width={1000}   // Regola la larghezza desiderata
          height={500}   // Regola l'altezza desiderata
          className="w-full"
        />

      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
