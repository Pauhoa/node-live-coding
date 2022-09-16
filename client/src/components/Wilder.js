import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";

import { deleteWilder } from "../services/wilders";

function Wilder({ name, wilderId, skills = [], loadWildersIntoState }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteWilder(wilderId);
      loadWildersIntoState();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name[0].toUpperCase() + name.split("").splice(1).join("")}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.name} votes={skill.votes} />
        ))}
      </ul>
      <button onClick={handleDelete} className="button">
        supprimer
      </button>
    </article>
  );
}

export default Wilder;
