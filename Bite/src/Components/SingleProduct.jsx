import React, { useState, useEffect, useContext  } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase';

import { CartContext } from './CartContext';

function SingleProduct() {
  const { id } = useParams(); // Destructure the id from useParams
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, 'productdata2', id);
        const docSnap = await getDoc(docRef); // Correct function for a single doc

        if (docSnap.exists()) {
          setProduct(docSnap.data()); // Set the product data correctly
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#f8f8f8", justifyContent: "space-evenly", padding: "20px" }}>
        <div style={{ width: "10%" }}>
          <img src={product.image} alt={product.name} />
        </div>
        <div style={{ width: "50%" }}>
          <img src={product.image} alt={product.name} />
        </div>
        <div style={{ padding: "50px", width: "40%" }}>
          <h1 className='pv-header__title text-h3'>{product.name}</h1>
          <div className="pv-header__reviews">
            <div className="pv-header__reviews-stars">

              <i className="icon icon--star" role="presentation"></i>

              <i className="icon icon--star" role="presentation"></i>

              <i className="icon icon--star" role="presentation"></i>

              <i className="icon icon--star" role="presentation"></i>

              <i className="icon icon--star" role="presentation"></i>

            </div>

            <span className="pv-header__reviews-copy text-fine-print">
              4.9 •

              <a id="pvReviewsLink" data-uw-rm-brl="PR" data-uw-original-href="https://bitetoothpastebits.com/products/fluoride-toothpaste-subscription?variant=40985682051177&amp;selling_plan=1176993897#junipProductReviews7131918499945">21,579 Reviews</a>

            </span>
          </div><br />
          <p>{product.description}</p>

          <div className="pv-header__benefits">
            <ul className="list-reset pv-header__benefits-list">
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--tooth"></i><span className="text-btn">Trusted by Dentists</span>
              </li>
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--new-releases"></i><span className="text-btn">Easy to Use</span>
              </li>
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--no-block"></i><span className="text-btn">No Harsh Chemicals</span>
              </li>
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--luggage"></i><span className="text-btn">TSA-Approved</span>
              </li>
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--bit-in-hand"></i><span className="text-btn">Perfectly portioned</span>
              </li>
              <li className="pv-header__benefits-item" style={{ display: "flex", alignItems: "center" }}>
                <i className="icon icon--earth"></i><span className="text-btn">Zero-waste</span>
              </li>
            </ul>
          </div>
          <div className="pv-config__options">
            <div className="pv-config__options-group" role="radiogroup" aria-label="Purchase options">
              <a className="pv-radio radio is-active" style={{ color: "black" }}>
                <div className="pv-config__btn text-body-2">
                  <span className="pv-config__btn-block"><i className="icon icon--radio-on"></i>Subscribe and Save</span>


                  <span className="discount-tag">Save 33%</span>

                </div>
                <ul className="list-reset pv-radio__list" style={{ display: "block" }}>

                  <li className="pv-radio__list-item text-fine-print"><i className="icon icon--checkmark" role="presentation"></i>4 Month Supply</li>

                  <li className="pv-radio__list-item text-fine-print"><i className="icon icon--checkmark" role="presentation"></i>Satisfaction Guaranteed</li>

                  <li className="pv-radio__list-item text-fine-print"><i className="icon icon--checkmark" role="presentation"></i>Pause or Cancel Anytime</li>

                </ul>
              </a>

            </div>
          </div>


          <div id="" className="pv-config__action">
            <label className="screenreader" for="quantity">Quantity:</label>
            <input className="screenreader" id="quantity" type="number" name="quantity" value="1" min="1" data-uw-rm-form="nfx" />
            <button className="pv-add__btn btn btn--primary btn--full js-add-to-cart" id="btnAddTocart" title="Add to Bag" onClick={() => addToCart(product)} type="submit" name="add">
              <span id="btnAddTocartText" className="js-add-to-cart-text" >

                Add to Bag

              </span>
              <span> | </span>

              <span id="productPrice" className="js-add-to-cart-price" data-uw-rm-sr="">

                ${product.price}

              </span>
            </button>


            <div className="pv-header__guarantee">
              <ul className="list-reset pv-header__guarantee-list">

                <li className="pv-header__guarantee-item text-fine-print">Satisfaction Guaranteed</li>

                <li className="pv-header__guarantee-item text-fine-print" data-uw-rm-sr="">Free Shipping Over $32</li>

                <li className="pv-header__guarantee-item text-fine-print">Secure Check Out</li>

              </ul>
            </div>

            <div className="pv-header__details">
              <div id="whatsIncluded" className="pv-header__details-block pv-header__details-block--what-you-get">
                <h4 className="pv-header__details-heading text-btn" data-uw-rm-heading="level" role="heading" aria-level="3">What's Included</h4>
                <ul className="list-reset pv-list js-pv-list">

                  <li className="pv-list-item text-body-2">248 Bits (4oz)</li>

                  <li className="pv-list-item text-body-2">4 Month Supply</li>

                  <li className="pv-list-item text-body-2">1 Refillable Jar</li>

                  <li className="pv-list-item text-body-2">1 Refill Pouch</li>

                </ul>
              </div>
            </div>
            <div className="pv-header__details">
              <div id="pvBenefits" className="pv-header__details-block pv-header__details-block--benefits">
                <h4 className="pv-header__details-heading text-btn">Benefits</h4>
                <ul className="list-reset pv-list">

                  <li className="pv-list-item text-body-2">Helps Strengthen Teeth</li>

                  <li className="pv-list-item text-body-2">Helps Brighten Teeth</li>

                  <li className="pv-list-item text-body-2">Helps Fight Cavities</li>

                  <li className="pv-list-item text-body-2">Freshens Bad Breath</li>

                  <li className="pv-list-item text-body-2">Helps Remove Plaque</li>

                </ul>
              </div>
            </div>

          </div>

        </div>


      </div>
      <div className="pv-htu pv-module">
        <div className="container pv-htu__container" style={{display:"flex",flexDirection:"row-reverse", padding:"30px"}} >
          <div className="pv-htu__block pv-htu__block--image">
            <div className="image">
              <img src="//bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=2620" srcset="//bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=180 180w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=360 360w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=540 540w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=720 720w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=900 900w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=1080 1080w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=1296 1296w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=1512 1512w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=1728 1728w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=1944 1944w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=2160 2160w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=2376 2376w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=2592 2592w, //bitetoothpastebits.com/cdn/shop/files/pdp-toothpaste-how-to-use-1up.jpg?v=1700114394&amp;width=2620 2620w" width="2620" loading="lazy" role="background image use for decorative purpose only" fetchpriority="auto" data-uw-rm-alt-original="" alt="How to Use" data-uw-rm-alt="CT" />
            </div>
          </div>

          <div className="pv-htu__block pv-htu__block--copy">
            <h3 className="pv-htu__heading text-h3">How to Use</h3>
            <ul className="list-reset pv-htu__list" style={{flexDirection:"column", alignItems:"start"}}>

              <li className="pv-htu__item">
                <div className="count">1</div>
                <div className="pv-htu__item-copy">

                  <h4 className="pv-htu__item-heading text-h6">Put a perfectly portioned Bit into your mouth. </h4>




                </div></li><li className="pv-htu__item">
                <div className="count">2</div>
                <div className="pv-htu__item-copy">

                  <h4 className="pv-htu__item-heading text-h6">Chew the Bit gently until it forms a soft powder.</h4>




                </div></li><li className="pv-htu__item">
                <div className="count">3</div>
                <div className="pv-htu__item-copy">

                  <h4 className="pv-htu__item-heading text-h6">With a wet toothbrush, brush for 2 minutes.</h4>



                  <p className="pv-htu__item-body">It will foam up, just like what you're used to.</p>

                </div>
              </li>

              <li className="pv-htu__item">
                <div className="count">4</div>
                <div className="pv-htu__item-copy">

                  <h4 className="pv-htu__item-heading text-h6">Spit, smile and repeat twice a day to make your dentist proud and our earth happy.</h4>


                </div>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
