const projects = [
  { title: "Mappa Bianca", desc: "Progetto pilota full-stack: mappa interattiva con gestione dati.", link: "https://Vival18.github.io/mappa-bianca" },
  { title: "Plugin WordPress", desc: "Plugin autoprodotto per visualizzazione contenuti personalizzati.", link: "https://github.com/Vival18/archaeomap" },
  { title: "Portfolio personale", desc: "Vetrina dei miei lavori e delle mie competenze.", link: "https://github.com/Vival18/vival18" },
  { title: "Restyling siti web", desc: "Progetti di UI/UX e responsive design per siti moderni.", link: "https://vival18.github.io/forte-rivoli/" }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Progetti</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {projects.map(p => (
          <div key={p.title} style={{ padding: "15px", backgroundColor: "#f3f4f6", borderRadius: "5px" }}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer"><button>Visita →</button></a>
          </div>
        ))}
      </div>
    </section>
  );
}
