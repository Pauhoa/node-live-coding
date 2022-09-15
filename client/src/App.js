import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Wilder from "./components/Wilder";

import { useEffect, useState } from "react";
import { getAllWilders } from "./services/wilders";

function App() {
  const [wilders, setWilders] = useState([]);
  const [loadingWilders, setLoadingWilders] = useState(false);

  const loadingWildersIntoState = async () => {
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
    loadingWildersIntoState();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {loadingWilders
            ? "loading..."
            : wilders.map((wilder) => (
                <Wilder
                  key={wilder.id}
                  name={wilder.name}
                  skills={wilder.skills}
                />
              ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
