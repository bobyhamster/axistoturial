const AUTHORS = [
  {
    username: "Eph",
    avatar: "src/authors/1.jpg",
    x: "https://x.com/laibatdauthoi",
  },
  {
    username: "axisrobotics",
    avatar: "src/authors/axis.jpg",
    x: "https://x.com/axisrobotics",
  },
  {
    username: "KosiOkorie",
    avatar: "src/authors/2.jpg",
    x: "https://x.com/KosiOkorie",
  },
  {
    username: "Sunny",
    avatar: "src/authors/3.jpg",
    x: "https://x.com/Rabiussunny11",
  },
];

export default function Authors() {
  return (
    <section className="section authors-section" id="authors">
      <div className="authors-heading">
        <div>
          <p className="section-kicker">02 / AUTHORS</p>

          <h2>The people behind the videos.</h2>
        </div>

        
      </div>

      <div className="authors-grid">
        {AUTHORS.map((author) => (
          <a
            key={author.username}
            href={author.x}
            target="_blank"
            rel="noreferrer"
            className="author-card"
          >
            <img
              src={author.avatar}
              alt={author.username}
              className="author-avatar"
            />

            <span className="author-username">
              {author.username}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}