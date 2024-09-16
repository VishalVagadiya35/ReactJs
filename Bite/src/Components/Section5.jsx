import React from 'react';
import { Link } from 'react-router-dom';

function Section5() {
  return (
    <div>
      <div
        id="shopify-section-template--15842162016361__75cb4cd0-0d55-4359-bc4b-5ce629e934b4"
        className="shopify-section" style={{color:"black"}}
      >
        <Link
          className="bits-are-better"
          to="/product" 
          data-uw-rm-brl="PR"
        >
          <div className="bits-are-better__header">
            <h3 className="bits-are-better__heading">Why Bits are Better</h3>
          </div>
          <div className="bits-are-better__wrapper">
            <div className="bits-are-better__copy" style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <img
                src="//bitetoothpastebits.com/cdn/shop/files/BITE_MARCH_2023_03_0072_1.png?v=1700159655&width=3836"
                alt="bottled and jarred packaged goods"
                srcSet="//bitetoothpastebits.com/cdn/shop/files/BITE_MARCH_2023_03_0072_1.png?v=1700159655&width=375 375w, //bitetoothpastebits.com/cdn/shop/files/BITE_MARCH_2023_03_0072_1.png?v=1700159655&width=550 550w, //bitetoothpastebits.com/cdn/shop/files/BITE_MARCH_2023_03_0072_1.png?v=1700159655&width=750 750w"
                width="3836"
                height="1530"
                loading="lazy"
                className="hide-phone"
                sizes="100vw"
                style={{ position: "absolute", height: "fit-content", top: "0", width: "80%" }}
              />
              <ul className="list-reset bits-are-better__icon-list">
                {[
                  {
                    title: 'Perfectly portioned',
                    desc: 'Stop wasting money by using more toothpaste than you need.',
                    icon: 'icon--bit-in-hand',
                  },
                  {
                    title: 'Better-for-You Formulations',
                    desc: 'A dry tablet means we can use less-harmful ingredients and still protect your teeth.',
                    icon: 'icon--hotel-class',
                  },
                  {
                    title: 'Sink-Friendly',
                    desc: 'Our tablets leave less mess in your sink because no glycerine – what makes most toothpaste, paste – means no sticky goop.',
                    icon: 'icon--counter-top',
                  },
                  {
                    title: 'Suitcase-Safe',
                    desc: 'No more toothpaste explosions in your bag. Just throw a few Bits in your pack and you’re good to go.',
                    icon: 'icon--luggage',
                  },
                  {
                    title: 'Earth-Friendly',
                    desc: 'Infinitely refillable with no plastic toothpaste tubes, our Bits are better for our earth and oceans.',
                    icon: 'icon--earth',
                  },
                  {
                    title: 'Stops the spread of Bacteria',
                    desc: 'The top of a toothpaste tube can transfer bacteria from your partner\'s brush to your mouth. Our Bits can stop the spread.',
                    icon: 'icon--anti-bacterial',
                  },
                ].map(({ title, desc, icon }, index) => (
                  <li key={index} className="bits-are-better__icon-item">
                    <div className="bits-are-better__icon-wrap">
                      <i className={`icon ${icon}`} role="presentation"></i>
                      <h4 className="bits-are-better__icon-title">{title}</h4>
                      <p className="bits-are-better__icon-desc">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Section5;
