import '../styles/globals.css';
import '../configureAmplify';
import { useEffect } from 'react';
import Navbar from './components/navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //console.log(pageProps);
  }, []);
  return (
    <div>
      <Navbar />
      <div className='py-8 px-16 bg-slate-100'>
        {' '}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
