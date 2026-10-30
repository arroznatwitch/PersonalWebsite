import { useEffect } from "react";
import { FaTwitch, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import "./App.css";

const CHANNEL = "arroznatwitch";

const socials = [
  { name: "Twitch", handle: "@arroznatwitch", url: "https://www.twitch.tv/arroznatwitch", Icon: FaTwitch, color: "#9146ff" },
  { name: "YouTube", handle: "@arroznatwitch", url: "https://www.youtube.com/@arroznatwitch", Icon: FaYoutube, color: "#ff0033" },
  { name: "TikTok", handle: "@arroznatwitch", url: "https://www.tiktok.com/@arroznatwitch", Icon: FaTiktok, color: "#25f4ee" },
  { name: "Instagram", handle: "@arroznatwitch", url: "https://www.instagram.com/arroznatwitch/", Icon: FaInstagram, color: "#e1306c" },
];

// Edita esta lista com as tuas parcerias reais (url e code são opcionais).
const partners = [
  { name: "Parceiro 1", description: "Descrição curta da parceria.", url: "#", code: "ARROZ" },
  { name: "Parceiro 2", description: "Descrição curta da parceria.", url: "#" },
  { name: "Parceiro 3", description: "Descrição curta da parceria.", url: "#" },
];

function TwitchEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;
    script.onload = () => {
      new window.Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: CHANNEL,
        parent: [window.location.hostname],
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      const el = document.getElementById("twitch-embed");
      if (el) el.innerHTML = "";
    };
  }, []);

  return <div id="twitch-embed" className="embed" />;
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>ArrozNaTwitch</h1>
        <p className="tagline">Streams, vídeos e boa disposição. Passa por cá! 🍚</p>
      </header>

      <section>
        <h2>Redes sociais</h2>
        <div className="socials">
          {socials.map(({ name, handle, url, Icon, color }) => (
            <a key={name} className="card social" href={url} target="_blank" rel="noopener noreferrer" style={{ "--accent": color }}>
              <Icon size={32} />
              <strong>{name}</strong>
              <span>{handle}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2>Vem ver a stream</h2>
        <TwitchEmbed />
      </section>

      <section>
        <h2>Parcerias</h2>
        <div className="partners">
          {partners.map(({ name, description, url, code }) => (
            <a key={name} className="card partner" href={url} target="_blank" rel="noopener noreferrer">
              <strong>{name}</strong>
              <span>{description}</span>
              {code && <em>Código: {code}</em>}
            </a>
          ))}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} ArrozNaTwitch</footer>
    </div>
  );
}

export default App;
