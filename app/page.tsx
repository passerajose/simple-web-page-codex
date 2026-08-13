const focusAreas = ["Web experiences", "Product thinking", "Clean interfaces"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="José Pássera, home">
          JP<span>.</span>
        </a>
        <a className="nav-link" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Available for new ideas
        </div>

        <h1>
          Hi, I&apos;m José.
          <span>I make digital things feel simple.</span>
        </h1>

        <div className="hero-footer">
          <p>
            I&apos;m José Pássera—a developer and creative problem solver focused
            on thoughtful products, useful experiences, and the details that
            make them memorable.
          </p>
          <a className="circle-link" href="#about" aria-label="Read more about me">
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-label">01 / About</p>
        <div className="about-content">
          <h2>Curious by nature.<br />Intentional by design.</h2>
          <div className="about-copy">
            <p>
              I enjoy turning complex ideas into clear, human experiences.
              My approach is equal parts curiosity, craft, and a healthy
              obsession with making things work well.
            </p>
            <p>
              I care about the full picture—from the first sketch to the final
              interaction—and believe the best work is both useful and quietly
              delightful.
            </p>
          </div>
        </div>
      </section>

      <section className="focus" aria-labelledby="focus-title">
        <p className="section-label">02 / Focus</p>
        <div className="focus-list" id="focus-title">
          {focusAreas.map((area, index) => (
            <div className="focus-item" key={area}>
              <span>0{index + 1}</span>
              <h3>{area}</h3>
              <span className="arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <p className="section-label">03 / Contact</p>
        <div className="contact-content">
          <h2>Have something<br />in mind?</h2>
          <a href="mailto:espinoza.esp123@gmail.com">
            Send me a note <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} José Pássera</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
