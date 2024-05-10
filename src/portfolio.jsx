// Removed the import statement for 'React' since it is not being used.

function Portfolio() {
  const mySkills = [
    {
      name: "JavaScript",
      comfort: 4,
      frontEnd: true,
      backend: true,
    },
    {
      name: "CSS",
      comfort: 4,
      frontEnd: true,
      backend: false,
    },
    {
      name: "HTML",
      comfort: 4,
      frontEnd: true,
      backend: false,
    },
  ];

  return (
    <div>
      <h1>My Skills</h1>
      <ul>
        {mySkills.map((skill) => (
          <li key={skill.name}>
            <strong>{skill.name}</strong> (Comfort Level: {skill.comfort})
            <br />
            Front-End: {skill.frontEnd ? "Yes" : "No"} | Back-End:{" "}
            {skill.backend ? "Yes" : "Yes"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
