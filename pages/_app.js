import '../styles/globals.css'

// internal import
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { EtherProvider } from '../Context/Ether.js'

const MyApp = ({ Component, pageProps }) => (
  <EtherProvider>
    <div className='position'>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </div>
  </EtherProvider>

)

export default MyApp
