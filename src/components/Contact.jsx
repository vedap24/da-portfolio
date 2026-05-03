import React from 'react';
import { Mail, GitBranch, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title">
              <Send size={32} className="text-accent" />
              Get In Touch
            </h2>
            <p className="contact-desc">
              I'm always open to discussing data analytics opportunities, marketing strategies, or how I can help your team make data-driven decisions.
            </p>
            
            <div className="contact-links">
              <a href="mailto:vedapraneeth9@gmail.com" className="contact-card">
                <div className="icon-wrapper">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>vedapraneeth9@gmail.com</p>
                </div>
              </a>
              
              <a href="https://github.com/vedap24" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="icon-wrapper">
                  <GitBranch size={24} className="text-accent" />
                </div>
                <div>
                  <h3>GitHub</h3>
                  <p>github.com/vedap24</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
