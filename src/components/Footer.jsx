import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Our Anniversary</p>
        <Link to="hero" smooth={true} duration={500}>
          <button>Back to Top</button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
