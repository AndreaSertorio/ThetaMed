import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image'; // Import the Image component from Next.js
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
          <div className="flex flex-col justify-center space-y-4 space-x-10 w-full md:w-1/2 md:order-last">
            <h2 className="text-2xl font-bold mb-2">Chi Siamo</h2>
            <p className="text-lg mb-4">ECOTREDI Multisonda è una start-up innovativa che vuole entrare nel campo biomedico, con un focus sull&apos;innovazione delle tecniche ecografiche e l&apos;intelligenza artificiale (AI). La nostra missione è rivoluzionare le metodiche di imaging attraverso l&apos;ecografia, offrendo soluzioni più precise, efficienti e personalizzate per la diagnosi.</p>
            <h3 className="text-xl font-bold mb-2">La nostra forza e know-how:</h3>
            <ul className="list-disc pl-5 space-y-4 text-lg">
              <li>Ricerca e sviluppo nell&apos;ambito biomedico e dell’intelligenza artificiale.</li>
              <li>Formazione specializzata nel campo della radiologia per immagini legata all&apos;AI.</li>
              <li>Collaborazione stretta con le Unità Operative della Fondazione Policlinico Universitario Campus Bio-Medico.</li>
            </ul>
          </div>
          <Image src="/about1.png" alt="Imaging avanzato" width={500} height={500} className="md:w-1/2 md:order-first mb-4" /> 
        </div>

        <Image src="/about2.png" alt="Descrizione Immagine 2" width={1000} height={500} className="w-full" />

        <div className="flex flex-col space-y-6 w-full">
            <h2 className="text-2xl font-bold mb-2">I soci fondatori ed il team</h2>
            <p className="text-lg mb-4">Il progetto &quot;ECOTREDI Multisonda&quot; è sostenuto da un team dedicato composto da specialisti in radiologia, ingegneri e professionisti IT, che, in collaborazione con partner esterni, forniscono le competenze tecniche e commerciali necessarie per garantire il successo dell&apos;innovazione.</p>

            <div className="flex flex-row space-x-40 w-full">
                <div className="flex flex-col space-y-4 w-1/3">
                    <Image src="/acs.png" alt="Andrea C. Sertorio" width={150} height={150} />
                    <span>Andrea C. Sertorio</span>
                    <span>Medico UOC Diagnostica per immagini, Policlinico Universitario Campus Bio-Medico Esperto IT</span>
                    <span>Socio fondatore</span>
                </div>
                <div className="flex flex-col space-y-4 w-1/3">
                    <Image src="/miriam.png" alt="Miriam Cultrea" width={150} height={150} />
                    <span>Miriam Cultrea</span>
                    <span>Direttore Didattico CdL Nursing Università “La Sapienza”</span>
                    <span>Socia fondatrice</span>
                </div>
                <div className="flex flex-col space-y-4 w-1/3">
                    <Image src="/fgs.png" alt="Filippo G. Sertorio" width={150} height={150} />
                    <span>Filippo G. Sertorio</span>
                    <span>Business Development Aspetti Economico Finanziari Controllo di Gestione</span>
                    <span>Socio fondatore</span>
                </div>
            </div>

            <ul className="list-disc pl-5 space-y-4 text-lg mt-6">
                <li>Carlo Augusto Mallio - Medico UOC Diagnostica per immagini, Policlinico Universitario Docente Tecniche di Radiologia medica per immagini e Radioterapia Esperto IT</li>
                <li>Francesco Maria Giordano - Medico UOC Diagnostica per immagini, Policlinico Universitario Campus Bio-Medico Esperto IT</li>
                <li>Fabrizio Tufaro - Ingegnere Progettista tecnico, Campus Bio-Medico Esperto IT, Socio fondatore, Direttore Didattico CdL Nursing Università “La Sapienza”</li>
            </ul>
        </div>

      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
