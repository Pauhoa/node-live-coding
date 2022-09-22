import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Bienvenue sur le Wilders Book</h1>
      <p>Ici vous pouvez accéder à une liste de tous les wilders et en créer de nouveaux</p>
      <Link className="link" to="/wilders">Accéder à la liste des wilders</Link>
    </>
  )
}

export default Home;