import React, { useState } from 'react';
import './App.css';
import data from './members_details.json';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Add this function to handle both state change and scrolling
  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Get the section element and scroll to it
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo">F!rosh Week</div>
          <div className="nav-links">
            <button 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => handleSectionChange('home')}
            >
              Home
            </button>
            <button 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => handleSectionChange('about')}
            >
              About
            </button>
            <button 
              className={activeSection === 'team' ? 'active' : ''} 
              onClick={() => handleSectionChange('team')}
            >
              Team
            </button>
            <button 
              className={activeSection === 'events' ? 'active' : ''} 
              onClick={() => handleSectionChange('events')}
            >
              Events
            </button>
          </div>
        </div>
      </nav>

      <header className="header" id="home">
        <div className="overlay"></div>
        <div className="container">
          <h1>Welcome to F!rosh Week</h1>
          <p className="tagline">Your gateway to university life</p>
          <button className="cta-button" onClick={() => handleSectionChange('about')}>Learn More</button>
        </div>
      </header>

      <section className={`about-section ${activeSection === 'about' ? 'active-section' : ''}`} id="about">
        <div className="container">
          <div className="section-header">
            <h2>About the Orientation Committee (deprecated)</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                The F!rosh Orientation Committee is a dedicated team of upper-year engineering students who work year-round to plan, organize, and execute the University of Toronto's Engineering orientation program. Our committee is committed to creating a welcoming and exciting experience for all incoming first-year students.
              </p>
              <p>
                We're divided into specialized teams handling events, logistics, marketing, finance, and leadership development. Each team plays a crucial role in ensuring that F!rosh Week runs smoothly and provides a memorable introduction to university life.
              </p>
              <p>
                Want to learn more about the committee or get involved? Follow us on <a href="https://www.instagram.com/froshweek/" target="_blank" rel="noopener noreferrer">Instagram</a> or reach out to any of our team members.
              </p>
            </div>
            <div className="about-image">
              <figure>
                <img src="froshweek2t4.jpg" alt="Purple students at orientation" />
                <figcaption>F!rosh Week 2T4 poster from Skulef!est. Source: photos.skule.ca</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className={`team-section ${activeSection === 'team' ? 'active-section' : ''}`} id="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Your Orientation Leaders</h2>
            <div className="underline"></div>
          </div>
          <div className="team-grid">
            {data.map((member, index) => (
              <a 
                href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`} 
                className="member-link" 
                target="_blank" 
                rel="noopener noreferrer"
                key={index}
              >
                <div className="member-card">
                  <div className="member-image">
                    <img src={member.picture} alt={`${member.name}`} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.position}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`events-section ${activeSection === 'events' ? 'active-section' : ''}`} id="events">
        <div className="container">
          <div className="section-header">
            <h2>Orientation Events</h2>
            <div className="underline"></div>
          </div>
          <div className="event-list">
            <div className="event-card">
              <div className="event-date">
                <span className="day">01</span>
                <span className="month">SEP</span>
              </div>
              <div className="event-details">
                <h3>Matriculation</h3>
                <p>We explain F!rosh and begin the hyped and (in)famous F!ROSH WEEK🥶🥶🥶</p>
                <p className="event-time"><i className="fa fa-clock-o"></i> 9:00 AM - 11:00 AM</p>
                <p className="event-location"><i className="fa fa-map-marker"></i>Convocation Hall</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">02</span>
                <span className="month">SEP</span>
              </div>
              <div className="event-details">
                <h3>Cheer Off</h3>
                <p>Show all the other teams that you are indeed the best greek letter, the loudest, the coolest. Winner gets a special prize...😮😮😮</p>
                <p className="event-time"><i className="fa fa-clock-o"></i> 1:00 PM - 3:00 PM</p>
                <p className="event-location"><i className="fa fa-map-marker"></i> King's College Circle</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">02</span>
                <span className="month">SEP</span>
              </div>
              <div className="event-details">
                <h3>Skule Hunt</h3>
                <p>One of the highlights of F!rosh Week. Find League of Legends players, outrun subways, complete challenges for your team. 🤯🤯🤯</p>
                <p className="event-time"><i className="fa fa-clock-o"></i> 6:00 PM - 10:00 PM</p>
                <p className="event-location"><i className="fa fa-map-marker"></i>Literally the entire GTA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/posts/pengkev_clashroyale-pathoflegends-strategy-activity-7333198691001929729-_bcp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5gB44BwuZ55kpPzt77RINIRhxUmFax86I">FAQ</a></li>
                <li><a href="https://www.linkedin.com/posts/pengkev_clashroyale-pathoflegends-strategy-activity-7333198691001929729-_bcp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5gB44BwuZ55kpPzt77RINIRhxUmFax86I">Resources</a></li>
                <li><a href="https://www.linkedin.com/posts/pengkev_clashroyale-pathoflegends-strategy-activity-7333198691001929729-_bcp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5gB44BwuZ55kpPzt77RINIRhxUmFax86I">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>You should add Kevin Peng to F!rosh Tech Team 2T5.</p>
            <p className="credit">Developed by Kevin Peng</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
