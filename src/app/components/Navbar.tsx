// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
    <nav className="navbar flex justify-between p-4 text-lightning-yellow bg-peacock-blue border-b border-silver-chalice">
        <Link href="/">
            <div className="font-bold text-3xl cursor-pointer">EcoTreDi</div>
        </Link>

        <div className="flex-grow flex justify-center space-x-4">
            <Link href="/about">
                Chi siamo
            </Link>
            {/* <Link href="/projects">
                Progetti
            </Link> */}
            <Link href="/mission">
                Mission & Vision
            </Link>
            <Link href="/contact">
                Contatti
            </Link>
        </div>
        <div className="font-bold text-3xl">___________</div>

    </nav>
);

export default Navbar;
