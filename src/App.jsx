import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LevelSelector from "./components/LevelSelector";

import TutorialCard from "./components/TutorialCard";
import TutorialModal from "./components/TutorialModal";
import Authors from "./components/Authors";
import { TUTORIALS } from "./data/tutorials";

export default function App() {
  const [filter, setFilter] = useState("Beginner");
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const visibleTutorials = useMemo(() => {
    if (filter === "All") return TUTORIALS;
    return TUTORIALS.filter((tutorial) => tutorial.level === filter);
  }, [filter]);

  const selectLevel = (level) => {
    setFilter(level);
    document.getElementById("tutorial-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="site" id="top">
      <Header />

      <main>
        <Hero />

        <section id="tutorials" className="section tutorials-section">
  <div className="authors-heading">
    <div>
      <p className="authors-kicker">01 / TUTORIALS</p>
      <h2>Where should we start?</h2>
    </div>
  </div>

  <LevelSelector onSelect={selectLevel} />

          <div id="tutorial-list" className="tutorial-grid">
            {visibleTutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                tutorial={tutorial}
                onOpen={setSelectedTutorial}
              />
            ))}
          </div>

          {visibleTutorials.length === 0 && (
            <div className="empty-state">No tutorials found.</div>
          )}
        </section>

        <Authors />
        <section className="community-links">
  <div className="community-links-inner">

    <a
      href="https://discord.gg/axisrobotics"
      target="_blank"
      rel="noreferrer"
      className="community-icon"
      aria-label="Discord"
    >
      <img
  src="/images/discord.png"
  alt="Discord"
/>
    </a>

    <a
      href="https://x.com/axisrobotics"
      target="_blank"
      rel="noreferrer"
      className="community-icon"
      aria-label="Twitter / X"
    >
      <img
  src="/images/twitter.jpg"
  alt="Twitter / X"
/>
    </a>

    <a
  href="#"
  className="community-icon"
  aria-label="Axis Hub"
  onClick={(e) => {
    e.preventDefault();

    const links = [
      "https://hub.axisrobotics.ai/login?invite_code=KL4NUt83",
      "https://hub.axisrobotics.ai/login?invite_code=TccPrU5p",
    ];

    const randomLink =
      links[Math.floor(Math.random() * links.length)];

    window.open(randomLink, "_blank", "noopener,noreferrer");
  }}
>
  <img
    src="/images/axis.jpg"
    alt="Axis"
  />
</a>

  </div>
</section>
      </main>

      <footer className="site-footer">
        <span>AXIS TUTORIALS</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <TutorialModal
        tutorial={selectedTutorial}
        onClose={() => setSelectedTutorial(null)}
      />
    </div>
  );
}