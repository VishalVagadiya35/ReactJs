import React from 'react';
import { Link } from 'react-router-dom';

function Section6() {
  return (
    <div>
      <div id="shopify-section-template--15842162016361__two_up_xYVqWC" className="shopify-section">
        <div className="two-up">
          <div className="container two-up__container">
            <div className="two-up__section">
              <div className="two-up__block">
                {/* Uncomment this block if you want to display the desktop image
                <div className="image image--responsive hide-mobile" style={{ '--ratio-percent': '79.6875%' }}>
                  <img src="//bitetoothpastebits.com/cdn/shop/files/2up-summer-glow-desktop-v2.jpg?v=1718843452" alt="Desktop Image" />
                </div> */}
                <div className="image image--responsive mobile-only" style={{ '--ratio-percent': '99.74424552429667%' }}>
                  <img src="//bitetoothpastebits.com/cdn/shop/files/2up-summer-glow-mobile.jpg?v=1718840507" alt="Mobile Image" />
                </div>
                <Link to="/product" className="two-up__copy">
                  <div className="two-up__copy-wrapper">
                    <h3 className="two-up__headline">THE SUMMER GLOW KIT</h3>
                    <p className="two-up__subhead">Save $26 with our 3-step system — together for a limited time.</p>
                  </div>
                  <div className="btn btn--primary two-up__cta">
                    Shop Now
                  </div>
                </Link>
              </div>
              <div className="two-up__block">
                {/* Uncomment this block if you want to display the desktop image
                <div className="image image--responsive hide-mobile" style={{ '--ratio-percent': '79.79166666666667%' }}>
                  <img src="//bitetoothpastebits.com/cdn/shop/files/V2jpeg-optimizer_sgk-2up-module-desktop_1.jpg?v=1719862249" alt="Desktop Image 2" />
                </div> */}
                <div className="image image--responsive mobile-only" style={{ '--ratio-percent': '99.74424552429667%' }}>
                  <img src="//bitetoothpastebits.com/cdn/shop/files/sgk-2up-module-mobile-optimized.jpg?v=1719529024" alt="Mobile Image 2" />
                </div>
                <Link to="/product" className="two-up__copy">
                  <div className="two-up__copy-wrapper">
                    <h3 className="two-up__headline">DEODORANT</h3>
                    <p className="two-up__subhead">Stay smelling fresh even in the hottest summer temps.</p>
                  </div>
                  <div className="btn btn--primary two-up__cta">
                    Shop Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
