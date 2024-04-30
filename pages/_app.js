import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { EtherProvider } from '../Context/Ether.js';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      {message}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowErrorMessage(window.innerWidth < 600); // Menampilkan pesan jika lebar layar kurang dari 600px
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <EtherProvider>
      <div className='position'>
        {showErrorMessage ? (
          <ErrorMessage message="Website ini hanya dapat diakses pada layar tablet atau lebih besar." />
        ) : (
        <Navbar />
          <Component {...pageProps} />
        <Footer />
        )}
      </div>
    </EtherProvider>
  );
}

export default MyApp;
