import React from 'react';
import { Link } from 'react-scroll';

function HomePage() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Our Journey Together</h1>
        <Link to="timeline" smooth={true} duration={500} className="scroll-down">
          Scroll Down
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
