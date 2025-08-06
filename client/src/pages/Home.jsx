import React from 'react';
import '../styles/HomePage.css';
import Navbar from "../components/Navbar";
const stories = [
  { title: 'Community Art Project', category: 'Creativity', img: 'https://via.placeholder.com/300' },
  { title: 'Youth Empowerment', category: 'Education', img: 'https://via.placeholder.com/300' },
  { title: 'Climate Action Now', category: 'Justice', img: 'https://via.placeholder.com/300' },
];

const HomePage = () => (
  <>
        <Navbar />

  <div className="home">
    <section className="hero">
      <h1>Voices United</h1>
      <p>Inspiring change through storytelling</p>
      <div className="hero-buttons">
        <button className="btn-primary">Donate</button>
        <button className="btn-secondary">Volunteer</button>
      </div>
    </section>

    <section className="stories">
      <h2>Featured Stories</h2>
      <div className="story-cards">
        {stories.map((s, idx) => (
          <div key={idx} className="card">
            <img src={s.img} alt={s.title} />
            <div className="card-text">
              <span className="category">{s.category}</span>
              <h3>{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary more">View All Stories</button>
    </section>
  </div>
  </>
);

export default HomePage;
