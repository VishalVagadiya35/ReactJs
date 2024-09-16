import React from 'react';
import { Link } from 'react-router-dom';

function Section3() {
  return (
    <section id="shopify-section-template--15842162016361__how_to_use_gUJWN4">
      <Link
        className="htu container sm-max:hidden"
        to="/product" 
      >
        <h3 className="htu-heading text-h3">How To Use</h3>
        <div className="htu-images">
          <img
            src="//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_howto_step1_desktop_2.jpg?v=1719862118&width=939"
            alt=""
            loading="lazy"
            style={{ objectPosition: '26.9904% 41.4969%' }}
          />
          <img
            src="//bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step2_desktop_1_-optimized.jpg?v=1719614397&width=936"
            alt="A person holding a toothbrush with a toothpaste tablet in their mouth, smiling."
            loading="lazy"
            style={{ objectPosition: '46.8166% 9.4898%' }}
          />
          <img
            src="//bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step3_desktop_1_-optimized.jpg?v=1719614439&width=936"
            alt="A person brushing their teeth with a wooden toothbrush, holding a jar of Bite toothpaste tablets."
            loading="lazy"
            style={{ objectPosition: '49.1941% 40.971%' }}
          />
        </div>

        <div className="htu-steps">
          <div className="htu-step">
            <div className="htu-step-number">1</div>
            <div>
              <div className="htu-step-descriptor">Grab a Toothpaste Bit</div>
              <div>A single Bit is all you need each time.</div>
            </div>
          </div>

          <div className="htu-step">
            <div className="htu-step-number">2</div>
            <div>
              <div className="htu-step-descriptor">Chew your Bit</div>
              <div>A soft paste will form in your mouth.</div>
            </div>
          </div>

          <div className="htu-step">
            <div className="htu-step-number">3</div>
            <div>
              <div className="htu-step-descriptor">Brush with a wet toothbrush</div>
              <div>It'll foam up, just like regular toothpaste.</div>
            </div>
          </div>
        </div>

        <div className="htu-button">
          SHOP NOW
        </div>
      </Link>

      <style>
        {`
        #shopify-section-template--15842162016361__how_to_use_gUJWN4 .htu-button {
          transition: background-color 0.3s ease, color 0.3s ease, text-decoration 0.3s ease;
        }
        #shopify-section-template--15842162016361__how_to_use_gUJWN4 .htu-button:hover {
          background-color: #72f2c7;
          color: #000000;
          text-decoration: none;
        }
      `}
      </style>
    </section>
  );
}

export default Section3;
