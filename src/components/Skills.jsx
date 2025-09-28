const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP", "WordPress", "Git & GitHub"];

export default function Skills() {
  return (
    <section>
      <h2>Competenze</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {skills.map(skill => <div key={skill} style={{ padding: "10px 15px", backgroundColor: "#e5e7eb", borderRadius: "5px" }}>{skill}</div>)}
      </div>
    </section>
  );
}
