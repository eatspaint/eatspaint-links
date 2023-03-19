import "./App.css";
import { DevTo, GitHub, IG, LinkedIn, Twitter } from "./icons";

const SOURCE = [
  { href: "https://eatspaint.com", title: "Resume & Tech stack" },
  {
    href: "https://dithering.eatspaint.com",
    title: "Experiments with dithering",
  },
  {
    href: "https://guitar.eatspaint.com",
    title: "Guitar drills thing",
  },
  {
    href: "https://spotify-explore.eatspaint.com",
    title: "Spotify exploration",
  },
  {
    href: "https://eatspaint.art",
    title: "Code Art (Canvas)",
  },
  {
    href: "https://idontwatchfootball.com",
    title: "Code Art (p5.js)",
  },
  {
    href: "https://soundcloud.com/eatspaint/sets/2020-2021-collected",
    title: "Experimental electronic music",
  },
];

function App() {
  return (
    <div className="App">
      <div className="content">
        <img
          className="pfp"
          src="/IMG_0452.png"
          alt="mirror selfie in a cathedral"
        />
        <h1>eatspaint online</h1>
        <div className="links">
          {SOURCE.map(({ href, title }) => (
            <a href={href} key={href}>
              {title}
            </a>
          ))}
        </div>
        <div className="icons">
          <a href="https://twitter.com/eatspaint">
            <Twitter />
          </a>
          <a href="https://github.com/eatspaint">
            <GitHub />
          </a>
          <a href="https://dev.to/eatspaint">
            <DevTo />
          </a>
          <a href="https://instagram.com/cef2010">
            <IG />
          </a>
          <a href="https://linkedin.com/in/christianedwardfuller/">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
