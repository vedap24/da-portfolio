import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero animate-fade-in" id="home">
      <div className="container hero-content">
        <div className="hero-badge delay-1">
          <Terminal size={16} />
          <span>Available for Work</span>
        </div>
        <h1 className="hero-title delay-2">
          Hi, I'm <span className="text-accent">Veda Praneeth</span>
        </h1>
        <h2 className="hero-subtitle delay-3">
          Data Analyst <span className="separator">|</span> Marketing Analytics
        </h2>
        <p className="hero-description delay-3">
          I use data to understand customer behavior, evaluate campaign performance, and support business decisions with meaningful insights.
        </p>
        <div className="hero-actions delay-3">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
