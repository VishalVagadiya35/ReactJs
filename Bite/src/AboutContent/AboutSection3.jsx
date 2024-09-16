import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection3() {
  return (
    <section className="about-events">
      <header className="about-events__header">
        <h3 className="about-events__headline">Here’s what we’ve accomplished together so far:</h3>
      </header>
      {[
        {
          date: 'August 2017',
          title: "It all started in the living room...",
          description: "Lindsay presses the first tablets on a mission to do better—for you and the planet.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-1.jpg?v=1700114048",
          imgAlt: "August 2017"
        },
        {
          date: 'August 2018',
          title: "*Hits follow button*",
          description: "Bite goes viral.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-2.jpg?v=1700114048",
          imgAlt: "August 2018"
        },
        {
          date: 'March 2020',
          title: "Swimming with the sharks.",
          description: "We jumped into the Shark Tank and came out with 2 offers.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-3.jpg?v=1700114048",
          imgAlt: "March 2020"
        },
        {
          date: 'August 2020',
          title: "Clear your counter.",
          description: "Bite becomes a one-stop shop for oral care.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-4.jpg?v=1700114048",
          imgAlt: "August 2020"
        },
        {
          date: 'September 2021',
          title: "Because It's The Earth",
          description: "We launch our fan-favorite deodorant, becoming more than just an oral care brand.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-5.jpg?v=1700114048",
          imgAlt: "September 2021"
        },
        {
          date: 'September 2022',
          title: "Mama (Earth), we made it.",
          description: "We’re officially a certified B-Corp, something Lindsay had dreamed about from her living room in 2017.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-6.jpg?v=1700114048",
          imgAlt: "September 2022"
        },
        {
          date: 'Today',
          title: "Better together.",
          description: "Because of you, 250,000 lbs of plastic was kept out of landfills and oceans.",
          imgSrc: "//bitetoothpastebits.com/cdn/shop/files/about-us-event-7.jpg?v=1700114048",
          imgAlt: "Today"
        }
      ].map((event, index) => (
        <div key={index} className="about-events__event">
          <div className="about-events__event-block image">
            <div className="image image--responsive" style={{ '--ratio-percent': '96.89922480620154%' }}>
              <img
                src={event.imgSrc}
                srcSet={`${event.imgSrc}&width=180 180w, ${event.imgSrc}&width=360 360w, ${event.imgSrc}&width=540 540w, ${event.imgSrc}&width=720 720w`}
                width="1032"
                loading="lazy"
                alt={event.imgAlt}
              />
            </div>
          </div>
          <div className="about-events__event-block copy">
            <span className="about-events__event-date hide-mobile">{event.date}</span>
            <h3 className="about-events__event-headline">{event.title}</h3>
            <p className="about-events__event-copy">{event.description}</p>
          </div>
        </div>
        
        
      ))}
      <div className="about-events__event">
        <div className="">
          <Link to="/product" className="btn btn--primary about-events__cta" >
            Shop with Purpose
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;
