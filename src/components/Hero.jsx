export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            COMMUNITY GUIDE
          </p>

          <h1 id="hero-title">
            Learn to train
            <br />
            robots <span>the right way.</span>
          </h1>

          <p className="hero-copy">
            Clear video tutorials for every stage of Axis Robotics from your
            first trajectory to confident work on advanced tasks.
          </p>

          <div className="hero-bottom">
            <a className="hero-button" href="#tutorials">
              <span>Choose your level</span>
              <strong>↓</strong>
            </a>

            <p className="hero-credit">
              Created by members of the Axis community
              <br />
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                samurai_itan
              </a>{" "}
              and{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                bobyhamster
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src="/images/robot.png"
            alt="Axis Robotics"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}