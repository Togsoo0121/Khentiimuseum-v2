import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Khentii Museum</h1>
        <p className="subtitle">Explore the history and culture of Khentii</p>
      </header>

      <main className="main-content">
        <section className="about">
          <h2>About the Museum</h2>
          <p>
            The Khentii Museum showcases the rich history, culture, and natural
            beauty of Khentii province. Our collection includes ancient
            artifacts, historical relics, and exhibits on local traditions and
            folklore.
          </p>
        </section>

        <section className="exhibits">
          <h2>Featured Exhibits</h2>
          <div className="exhibit">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Exhibit 1"
              className="exhibit-image"
            />
            <h3 className="exhibit-title">Ancient Artifacts</h3>
            <p>
              Discover ancient tools and items used by early inhabitants of the
              Khentii region.
            </p>
          </div>
          <div className="exhibit">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Exhibit 2"
              className="exhibit-image"
            />
            <h3 className="exhibit-title">Folk Traditions</h3>
            <p>
              Learn about the vibrant folk traditions of the Khentii people and
              their role in Mongolian culture.
            </p>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>Visit us at: 123 Khentii Street, Khentii, Mongolia</p>
          <p>Opening hours: 9 AM - 5 PM (Mon-Sun)</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Khentii Museum. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
