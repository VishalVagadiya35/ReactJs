import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import { db } from '../Firebase/firebase'; 
import { CartContext } from './CartContext'; 

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all'); 
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'productdata2'));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const normalizeCategory = (category) => category.toLowerCase().replace(/\s/g, '-');

  // Filter products based on selected category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => normalizeCategory(product.category) === normalizeCategory(activeCategory));

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <div id="plpHeader" className="plp__header">
        <div className="container plp__container">
          <div className="text-h3 plp__headline hide-mobile">Shop your plastic-free routine.</div>

          <nav id="plpStickyNav" className="plp__nav plp-sticky-nav is-desktop">
            {['all', 'best-sellers', 'sets', 'oral-care', 'body-care'].map((category) => (
              <button
                key={`${category}-sticky`} // Corrected dynamic key
                id={`${category}-btn-sticky`} // Corrected dynamic id
                className={`btn btn--secondary plp__nav-link ${activeCategory === category ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleCategoryChange(category)}
              >
                {category.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div id="best-sellers-target" className="plp-grid__header js-plp-grid-header">
        <h2 className="plp-grid__heading">
          {activeCategory === 'all' ? 'All Products' : activeCategory.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase())}
        </h2>
      </div>

      <div className="plp-grid__list">
        {filteredProducts.map((product) => (
          <div className="plp-grid__item" key={product.id}>
            <article className="pc">
              <div className="pc__content">
                <div className="pc__header hide-mobile">
                  <h3 className="pc__title">{product.name}</h3>
                </div>
                <div className="pc__body">
                  <div className="pc__img">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                  </div>
                  <button 
                    className="btn btn--primary pc-btn" 
                    type="button"
                    onClick={() => addToCart(product)} // Add product to cart
                  >
                    <span>Add to bag</span>
                    <div className="pc-btn__price">${parseFloat(product.price).toFixed(2)}</div>
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
