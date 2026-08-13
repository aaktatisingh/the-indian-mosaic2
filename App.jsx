import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MosaicCard from "./components/MosaicCard";
import Footer from "./components/Footer";
import { states } from "./data/states";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section className="mosaic-section" id="mosaic">
          <div className="section-heading">
            <span className="section-label">THE INDIAN MOSAIC</span>

            <h2>
              Many Cultures.
              <br />
              <span>One Beautiful India.</span>
            </h2>

            <p>
              Discover the colours, traditions, flavours, art and stories
              that make every corner of India unique.
            </p>
          </div>

          <div className="mosaic-grid">
            {states.map((state) => (
              <MosaicCard key={state.id} state={state} />
            ))}
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image">
            <div className="mandala">
              ✦
            </div>

            <div className="story-orbit orbit-one"></div>
            <div className="story-orbit orbit-two"></div>
            <div className="story-orbit orbit-three"></div>
          </div>

          <div className="story-content">
            <span className="section-label">
              OUR STORY
            </span>

            <h2>
              Every piece tells
              <span> an Indian story.</span>
            </h2>

            <p>
              India is a living mosaic. Every state adds its own colours,
              traditions, flavours, art forms and celebrations to the
              larger picture.
            </p>

            <p>
              Indian Mosaic brings these diverse pieces together in one
              digital experience — celebrating what makes us different
              and what brings us together.
            </p>

            <a href="#mosaic" className="story-button">
              Explore the Mosaic →
            </a>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>

          <h2>
            Unity in diversity is not just
            <span> India's identity.</span>
          </h2>

          <p>
            It is India's greatest masterpiece.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;