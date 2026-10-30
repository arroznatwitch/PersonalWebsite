import { useState } from "react";
import { FaTwitch, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import "./App.css";

const CHANNEL = "arroznatwitch";

const socials = [
  { name: "Twitch", handle: "@arroznatwitch", url: "https://www.twitch.tv/arroznatwitch", Icon: FaTwitch, color: "#9146ff" },
  { name: "YouTube", handle: "@arroznatwitch", url: "https://www.youtube.com/@arroznatwitch", Icon: FaYoutube, color: "#ff0033" },
  { name: "TikTok", handle: "@arroznatwitch", url: "https://www.tiktok.com/@arroznatwitch", Icon: FaTiktok, color: "#25f4ee" },
  { name: "Instagram", handle: "@arroznatwitch", url: "https://www.instagram.com/arroznatwitch/", Icon: FaInstagram, color: "#e1306c" },
];

// Logos em public/partners/<logo>. Edita o nome e o link (opcional) de cada parceria aqui.
const partners = [
  { name: "GrowUp", logo: "growup.png", url: "https://growup.gg" },
  { name: "Craft And Helps", logo: "cah.png", url: "https://craftandhelps.com" },
  { name: "The Last Survivor", logo: "tls.png", url: "https://playthelastsurvivor.com" },
];

function PartnerLogo({ name, logo }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="logo-fallback">{name[0]}</div>;
  return <img src={`${process.env.PUBLIC_URL}/partners/${logo}`} alt={name} onError={() => setFailed(true)} />;
}

function App() {
  const hosts = new Set([window.location.hostname, "arroznatwitch.org", "www.arroznatwitch.org", "arroznatwitch.github.io"]);
  const parents = [...hosts].map((h) => `parent=${h}`).join("&");

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
        <iframe
          className="embed"
          title="Stream ArrozNaTwitch"
          src={`https://player.twitch.tv/?channel=${CHANNEL}&${parents}&muted=true`}
          allowFullScreen
        />
      </section>

      <section>
        <h2>Parcerias</h2>
        <div className="partners">
          {partners.map(({ name, logo, url }) => {
            const Tag = url ? "a" : "div";
            const link = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Tag key={name} className="card partner" {...link}>
                <PartnerLogo name={name} logo={logo} />
                <strong>{name}</strong>
              </Tag>
            );
          })}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} ArrozNaTwitch</footer>
    </div>
  );
}

export default App;
