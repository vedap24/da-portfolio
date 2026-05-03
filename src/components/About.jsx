import React from 'react';
import { User } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <User size={32} className="text-accent" />
          About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am Veda Praneeth, an aspiring Data Analyst focused on marketing analytics. I work with SQL, Python, Excel, Power BI, Tableau, and Google Analytics to analyze data, build reports, and communicate findings clearly. 
            </p>
            <p>
              My key areas of interest include campaign performance, customer segmentation, churn analysis, funnel analysis, ROI, and A/B testing. 
            </p>
            <p>
              I am currently looking for job opportunities where I can grow as a data professional and contribute to data-driven marketing strategies.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>Marketing</h3>
              <p>Analytics Focus</p>
            </div>
            <div className="stat-card">
              <h3>Data</h3>
              <p>Driven Strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
