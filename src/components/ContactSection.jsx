import React, { useState } from 'react';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('RSVP sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <div className="curved-divider"></div>
      <div className="container">
        <h2>RSVP</h2>
        <p>Please RSVP if you plan to attend our anniversary party.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
          <button type="submit">Send RSVP</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
