import { useEffect, useState } from 'react';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Wilder from './components/Wilder';
import WilderForm from './components/WilderForm';
import { getAllWilders } from './services/wilders';
import { Iwilder } from './types/Iwilder';
import { Route, Routes } from 'react-router-dom';
import WildersList from './components/WildersList';
import Home from './components/Home';

function App() {
  const [wilders, setWilders] = useState<Iwilder[]>([]);
  const [loadingWilders, setLoadingWilders] = useState(false);

  const loadWildersIntoState = async () => {
    setLoadingWilders(true);
    try {
      setWilders(await getAllWilders());
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingWilders(false);
    }
  };

  useEffect(() => {
    loadWildersIntoState();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wilders" element={<WildersList />}/>
          <Route path="/create-wilder" element={<WilderForm loadWildersIntoState={loadWildersIntoState}/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
