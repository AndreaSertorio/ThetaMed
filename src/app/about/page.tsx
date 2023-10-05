import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Post from '../components/Post';

import Footer from '../components/Footer';
import '../globals.css';

const Page: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>About Us</title>
    </Head>
    <Navbar />
    <main className="main flex p-4 flex-grow">
      <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
        <Post />
        <Post />

      </div>
    </main>
    <Footer />
  </div>
);

export default Page;
