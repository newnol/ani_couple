import React, { useState } from 'react';

function MessageSection() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setMessage('');
  };

  return (
    <section id="messages">
      <div className="curved-divider"></div>
      <div className="container message-section">
        <h2>Our Messages</h2>
        <p>A space for our heartfelt letters and messages to each other.</p>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default MessageSection;
