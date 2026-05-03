import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const placeholders = [
    {
      title: "Customer Churn Prediction",
      type: "Predictive Modeling",
      description: "A forthcoming project focusing on identifying at-risk customers using historical data and behavior patterns to reduce churn rates.",
      tools: ["Python", "Machine Learning", "Pandas"],
      status: "Coming Soon"
    },
    {
      title: "Marketing Campaign ROI Dashboard",
      type: "Data Visualization",
      description: "An interactive dashboard designed to track real-time marketing spend against revenue, highlighting top-performing channels.",
      tools: ["Tableau", "SQL", "Excel"],
      status: "In Progress"
    },
    {
      title: "E-Commerce Funnel Analysis",
      type: "A/B Testing & Analysis",
      description: "Analyzing user drop-off points in an e-commerce funnel to recommend UI/UX improvements and maximize conversion rates.",
      tools: ["Google Analytics", "Python", "SQL"],
      status: "Planned"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <Briefcase size={32} className="text-accent" />
          Projects
        </h2>
        <p className="projects-intro">
          My portfolio projects will be added here as I complete them. These projects will reflect real-world marketing analytics use cases and demonstrate my ability to solve business problems using data.
        </p>

        <div className="timeline">
          {placeholders.map((project, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="project-status">{project.status}</div>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-type">{project.type}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <button className="btn-read-more" disabled>
                  View Case Study <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
