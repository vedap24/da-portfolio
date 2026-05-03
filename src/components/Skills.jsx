import React from 'react';
import { Code2, Target } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const tools = [
    'SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'Google Analytics'
  ];

  const focusAreas = [
    'Campaign Performance', 'Customer Segmentation', 'Churn Analysis',
    'Funnel Analysis', 'ROI Analysis', 'A/B Testing'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <Code2 size={32} className="text-accent" />
          Skills & Focus Areas
        </h2>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header">
              <h3>Technical Tools</h3>
            </div>
            <div className="tags-container">
              {tools.map((tool, index) => (
                <div key={index} className="skill-tag">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <Target size={24} className="text-accent" />
              <h3>Areas of Expertise</h3>
            </div>
            <div className="focus-list">
              {focusAreas.map((area, index) => (
                <div key={index} className="focus-item">
                  <div className="focus-bullet"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
