import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import Navbar from "../components/Navbar";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import bgHero from "../assets/bgimg.jpeg";
import { useNavigate } from "react-router-dom";
import VolunteerModal from "./VolunteerModal";
const backgroundImages = [bgHero, img1, img2, img3];

const stories = [
  { title: 'Community Art Project', category: 'Girl Education', img: img1 },
  { title: 'Youth Empowerment', category: 'Study Resources', img: img2 },
  { title: 'Social Awareness', category: 'Etiquette Learning', img: img3 },
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAbout || showVolunteerModal ? 'hidden' : 'auto';
  }, [showAbout, showVolunteerModal]);

  return (
    <>
      <Navbar onAboutClick={() => setShowAbout(true)} />

      <div className="home">
        {/* Hero Section */}
        <section
          className="hero-section d-flex align-items-center justify-content-center text-white text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            transition: 'background-image 1s ease-in-out',
          }}
        >
          <div className="container">
            <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
              Basti Ki Pathshala
            </h1>
            <p className="lead mb-5 animate__animated animate__fadeInUp animate__delay-1s">
              Empowering Children Through Education and Hope
            </p>
            <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn btn-lg shadow px-4 py-2 fw-semibold" style={{ backgroundColor: '#ff6f61', color: '#fff' }}>
                Donate
              </button>
              <button
                className="btn btn-lg btn-outline-light shadow px-4 py-2 fw-semibold"
               onClick={handleOpenModal}
              >
                Volunteer
              </button>
              <VolunteerModal show={showModal} onHide={handleCloseModal} />
            </div>
          </div>
        </section>

        {/* About Overlay Section */}
        {showAbout && (
          <div className="about-overlay animate__animated animate__fadeInDown">
            <button className="btn btn-close btn-close-white ms-auto d-block" onClick={() => setShowAbout(false)}></button>
            <h2 className="fw-bold mt-3">About Us</h2>
            <p>
              <strong>Basti Ki Pathshala</strong> is a volunteer-driven grassroots movement dedicated to educating children from marginalized communities.
              We believe that every child deserves access to learning, dignity, and opportunity regardless of their socioeconomic background.
            </p>
            <p>
              Started in the heart of underserved bastis (slums), our pathshalas are safe spaces for children to explore, learn, and dream. 
              Our initiatives include informal education, girl child empowerment, creative arts, hygiene education, and life skills.
            </p>
            <p>
              We collaborate with local volunteers, teachers, and NGOs to build a supportive ecosystem that nurtures curiosity and self-worth.
              Our long-term vision is to bridge the educational divide and foster leadership from the ground up.
            </p>
          </div>
        )}

        {/* Volunteer Modal */}
        {showVolunteerModal && (
          <div className="modal-overlay" onClick={() => setShowVolunteerModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowVolunteerModal(false)}>&times;</button>
              <iframe
                src="https://form.jotform.com/201867105447455"
                title="Volunteer Registration"
              ></iframe>
            </div>
          </div>
        )}

        {/* Stories Section */}
        <section id="programs" className="stories">
          <h2>Featured Stories</h2>
          <div className="story-cards">
            {stories.map((story, idx) => (
              <div key={idx} className="card">
                <img src={story.img} alt={story.title} />
                <div className="card-text">
                  <span className="category">{story.category}</span>
                  <h3>{story.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary more">View All Stories</button>
        </section>
      </div>
    </>
  );
};

export default HomePage;
