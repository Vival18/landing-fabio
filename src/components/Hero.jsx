export default function Hero() {
  return (
    <section style={{ backgroundColor: "#1e40af", color: "white", padding: "2rem", textAlign: "center" }}>
      <h1>Fabio Vivaldi</h1>
      <p>Web Developer Full-Stack | Creo applicazioni web moderne e funzionali</p>
      <a href="https://vival18.github.io/landing-fabio/FabioVivaldiCV.pdf" download>
        <button style={{ margin: "1rem", padding: "0.5rem 1rem" }}>Scarica CV</button>
      </a>
      <a href="#projects">
        <button style={{ margin: "1rem", padding: "0.5rem 1rem" }}>Progetti</button>
      </a>
    </section>
  );
}

