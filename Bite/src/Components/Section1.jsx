import React from 'react';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <div>
      <section id="shopify-section-template--15842162016361__home-hero" className="shopify-section home-hero">
        <div className="home-hero__wrapper">
          <div className="home-hero__media">
            <img 
              src="//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_mobile_3.jpg?v=1720816209&amp;width=780" 
              alt="" 
              srcSet="//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_mobile_3.jpg?v=1720816209&amp;width=375 375w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_mobile_3.jpg?v=1720816209&amp;width=550 550w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_mobile_3.jpg?v=1720816209&amp;width=750 750w" 
              width="1560" 
              height="2652.0" 
              className="phone-only" 
              sizes="100vw" 
              fetchPriority="high" 
            />
            <img 
              src="//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=3840" 
              alt="" 
              srcSet="//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=375 375w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=550 550w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=750 750w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=1100 1100w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=1500 1500w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=1780 1780w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=2000 2000w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=3000 3000w, //bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_desktop_2.jpg?v=1720816230&amp;width=3840 3840w" 
              width="3840" 
              height="1837.9999999999998" 
              className="hide-phone" 
              sizes="100vw" 
              fetchPriority="high" 
            />
          </div>

          <div className="container home-hero__content">
            <div className="home-hero__copy">
              <h1 className="text-h2 home-hero__headline" role="heading" aria-level="2">It's time to<br role="presentation" />brush better.</h1>
              <p className="text-h6 home-hero__subhead">Clean up your routine with Toothpaste Bits. No plastic, no harsh chemicals – just a better way to brush your teeth.</p>
              {/* Replaced <a> with <Link> */}
              <Link to="/product" className="btn btn--primary home-hero__cta">SHOP NOW</Link>
            </div>
          </div>
        </div>

        <style>
          {`
            #shopify-section-template--15842162016361__home-hero .home-hero__content {
              justify-content: flex-start;
              align-items: center;
            }

            #shopify-section-template--15842162016361__home-hero .home-hero__copy * {
              text-align: center;
            }

            @media screen and (max-width: 767px) {
              #shopify-section-template--15842162016361__home-hero .home-hero__content {
                justify-content: center;
                align-items: flex-start;
              }
              
              #shopify-section-template--15842162016361__home-hero .home-hero__copy,
              #shopify-section-template--15842162016361__home-hero .home-hero__copy * {
                text-align: center;
              }
            }

            .home-hero__wrapper {
              background-color: #fff;
              display: flex;
              min-height: 100vh;
              position: relative;
              z-index: auto;
            }

            .home-hero__media {
              display: block;
              height: 100%;
              left: 0;
              overflow: hidden;
              position: absolute;
              top: 0;
              width: 100%;
            }

            .home-hero__media img {
              display: block;
              max-width: 100%;
              object-fit: cover;
              object-position: top center;
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
            }

            .home-hero__content {
              display: flex;
              justify-content: center;
              position: relative;
              margin: 92px auto;
              max-width: 1490px;
              width: 100%;
              z-index: 2;
            }

            .home-hero__copy {
              max-width: 375px;
              text-align: center;
            }

            .home-hero__headline {
              font-size: 50px;
              margin: 0 0 22px 0;
              text-align: center;
            }

            .home-hero__subhead {
              margin: 0 auto 13px;
              max-width: 276px;
            }

            .home-hero__cta {
              font-size: 12px;
              margin: 0 auto;
              padding: 16px 40px 14px;
            }

            @media only screen and (min-width: 1279px) {
              .home-hero__headline {
                font-size: 72px;
                margin: 0 auto 30px;
              }
              
              .home-hero__subhead {
                font-size: 22px;
                margin: 0 auto 30px;
                max-width: 350px;
              }
            }
          `}
        </style>
      </section>
    </div>
  );
}

export default Section1;
