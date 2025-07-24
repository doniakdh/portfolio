import React from 'react';
import './App.css'; 
const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // ici tu peux ajouter la logique d'envoi du message (ex: via API ou service tiers)
    alert('Message sent! Thanks for reaching out.');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p>If you want to get in touch, feel free to send me a message or find me on social media!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:ton.email@example.com">doniakdheri1@gmail.com</a></p>
        <p>Phone: +216 52 956 077</p>
        <p>Location: Jammel, Monastir, Tunisia</p>
      </div>
    </section>
  );
};

export default Contact;
