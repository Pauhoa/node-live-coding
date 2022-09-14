import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";
function Wilder() {
  const wilders = [
    {
      id: 1,
      name: "Jane Doe",
      description: "Je me nomme Jane Doe, coucou.",
      skills: [
        {
          id: 1,
          name: "Javascript",
          level: 3,
        },
        {
          id: 2,
          name: "PHP",
          level: 2,
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
          name: "Python",
          level: 1,
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
          name: "Humour",
          level: 9,
        },
      ],
    },
  ];

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder) => {
          return (
            <article className="card">
              <img src={blank_profile} alt="Jane Doe Profile" />
              <h3>{wilder.name}</h3>
              <p>{wilder.description}</p>
              <h4>Wild Skills</h4>
              <ul className="skills">
                {wilder.skills.map((skill) => {
                  return <Skill name={skill.name} level={skill.level} />;
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Wilder;
