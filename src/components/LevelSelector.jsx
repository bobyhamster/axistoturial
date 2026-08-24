export default function LevelSelector({ onSelect }) {
  const levels = [
    {
      id: "Beginner",
      number: "01",
      title: "For beginners",
      description: "First steps, controls, and fundamentals",
    },
    {
      id: "Advanced",
      number: "02",
      title: "For advanced users",
      description: "Precision, speed, and strategy",
    },
  ];

  return (
    <div className="level-selector">
      {levels.map((level) => (
        <button
          key={level.id}
          type="button"
          className="level-card"
          onClick={() => onSelect(level.id)}
        >
          <span className="level-number">{level.number}</span>

          <div className="level-content">
            <h3>{level.title}</h3>
            <p>{level.description}</p>
          </div>

          <span className="level-arrow">→</span>
        </button>
      ))}
    </div>
  );
}