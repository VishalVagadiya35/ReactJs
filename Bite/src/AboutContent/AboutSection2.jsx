import React from 'react';
import './../AboutContent/css/aboutstyle.css';

function AboutSection2() {
    return (
        <section className="about-hero">
            <div className="about-hero__block copy">
                <h3>As a former surf instructor, I used to spend all my time in the water.</h3>
                <p>So when I learned about the one billion plastic toothpaste tubes that end up in landfills and oceans every single year, I knew I couldn’t keep contributing to the problem.</p>
                <p>In a search for something better, I could only find commercial toothpaste with questionable ingredients–in plastic packaging–so I decided to make my own. I took online chemistry courses and learned how to press toothpaste tablets for my friends and family on my living room floor.</p>
                <p>Bite was founded on the belief that a brighter smile doesn’t need to come at the expense of our bodies or the environment. Our daily routines matter, and the small changes we make together can add up to make a big difference.</p>
                <p>Lindsay McCormick<br role="presentation" data-uw-rm-sr=""/>CEO &amp; Founder</p>
            </div>
            <div className="about-hero__block image">
                <div className="image image--responsive hide-mobile" style={{ "--ratio-percent": "75.14450867052024%" }}>
                    <img 
                        src="//bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=1384" 
                        srcSet="//bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=180 180w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=360 360w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=540 540w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=720 720w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=900 900w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=1080 1080w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=1296 1296w, //bitetoothpastebits.com/cdn/shop/files/about-us-hero-desktop.jpg?v=1700114124&amp;width=1384 1384w" 
                        width="1384" 
                        loading="eager" 
                        alt="a person carrying a surfboard" 
                        fetchpriority="high" 
                    />
                </div>

                
            </div>
        </section>
    );
}

export default AboutSection2;
