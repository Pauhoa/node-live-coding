function Skill({ level, name }) {
  return (
    <li>
      {name}
      <span className="votes">{level}</span>
    </li>
  );
}

export default Skill;
