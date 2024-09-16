import React from 'react';
import { Link } from 'react-router-dom';

function Section4() {
  const categories = [
    {
      href: "/products/fluoride-free-toothpaste-4oz",
      imgSrc: "//bitetoothpastebits.com/cdn/shop/files/shop_by_category_toothpaste_bits_2-optimized.jpg?v=1719615447",
      alt: "Toothpaste",
      title: "Toothpaste Bits"
    },
    {
      href: "/collections/oral-care",
      imgSrc: "//bitetoothpastebits.com/cdn/shop/files/shop_by_category_oral_care_2-optimized.jpg?v=1719615477",
      alt: "Shop Now",
      title: "Oral Care"
    },
    {
      href: "/collections/sets",
      imgSrc: "//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_shop_by_category_sets_1.jpg?v=1719615590",
      alt: "Sets",
      title: "Sets"
    },
    {
      href: "/collections/body-care",
      imgSrc: "//bitetoothpastebits.com/cdn/shop/files/shop_by_category_body_care_2-optimized.jpg?v=1719615613",
      alt: "Body Care",
      title: "Body Care"
    }
  ];

  return (
    <div id="shopify-section-template--15842162016361__ea7c3939-e200-4021-b88e-ed2b0fd411b8" className="shopify-section">
      <div className="three-up">
        <div className="container three-up__container">
          <div className="three-up__header">
            <h3 className="three-up__heading">Shop By Category</h3>
          </div>
          <div className="three-up__list js-three-up-carousel">
            {categories.map((category, index) => (
              <Link to="/product" className="three-up__tile" key={index}>
                <div className="three-up__tile-wrap">
                  <div className="three-up__img-wrap">
                    <div className="three-up__img" style={{ '--ratio-percent': '106.83760683760684%' }}>
                      <img
                        src={category.imgSrc}
                        alt={category.alt}
                        loading="lazy"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  <div className="three-up__copy">
                    <h4 className="text-h6-small-caps three-up__tile-headline">{category.title}</h4>
                    <Link to="/product" className="btn btn--full btn--primary three-up__cta">Shop Now</Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
