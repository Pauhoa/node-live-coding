import Header from "../components/Header";
import Footer from "../components/Footer";
import Wilder from "../components/Wilder";

function HomePage() {
  const wilders = [
    {
      id: 1,
      name: "Jane Doe",
      description: "Je me nomme Jane Doe, coucou.",
      skills: [
        {
          id: 1,
          title: "Javascript",
          votes: 3,
        },
        {
          id: 2,
          title: "PHP",
          votes: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Jean Dodo",
      description: "Hello c'est Jean Dodo, a que coucou !",
      skills: [
        {
          id: 3,
          title: "Python",
          votes: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Marc",
      description: "Vous m'offrez une villa ? C'est pas vrai ...",
      skills: [
        {
          id: 4,
          title: "Humour",
          votes: 9,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder key={wilder.id} name={wilder.name} skills={wilder.skills} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
