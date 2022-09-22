import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllWilders } from "../services/wilders";
import { Iwilder } from "../types/Iwilder";
import Wilder from "./Wilder";

const WildersList = () => {
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
      <h2>Wilders</h2>
      <section className="card-row">
        {loadingWilders
          ? "Loading..."
          : wilders.map((wilder) => (
            <Wilder
            key={wilder.id}
            setWilders={setWilders}
            wilder={wilder}
            />
            ))}
      </section>
      <Link className="link" to="/create-wilder">Ajouter un wilder</Link>
    </>
  );
}

export default WildersList;