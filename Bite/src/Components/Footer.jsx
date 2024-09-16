import React from 'react';

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer" role="contentinfo">
        <div className="footer__wrapper footer__wrapper--mobile mobile-only">
          <div style={{width:"40%"}}>
          <div className="footer__section footer__section--form">
            <div className="footer__block">
              <h4 className="footer__block-hdg">Stay in the Know</h4>
              <div className="footer__form">
                <h5 className="footer__form-copy">Sign up for 10% off your first order.</h5>
                <form className="footer__subscribe-form" aria-live="polite" noValidate>
                  <input id="email" className="footer__email-input" type="email" placeholder="Enter email address" aria-label="Enter email address" required />
                  <button type="submit" className="footer__subscribe-button">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="footer__logos">
            <div className="footer__logo">
              <span className="screenreader">B-Corp Certified</span>
              <i className="icon icon--b-corp" role="presentation"></i>
            </div>
            <div className="footer__logo">
              <span className="screenreader">Cruelty Free and Vegan</span>
              <i className="icon icon--cruelty-free-badge-footer" role="presentation"></i>
            </div>
            <div className="footer__logo">
              <span className="screenreader">Orangutan Alliance</span>
              <i className="icon icon--oa-badge" role="presentation"></i>
            </div>
            <div className="footer__logo">
              <span className="screenreader">Woman Owned Business</span>
              <i className="icon icon--woman-owned-badge-footer" role="presentation"></i>
            </div>
          </div>
            </div>
            
          </div>
          </div>


          <div style={{display:"flex", width:"-webkit-fill-available",flexWrap:"wrap"}}>

          <div className="footer__section " style={{width:"22%",display:"flex",flexDirection:"column",justifyContent:"flex-start",border:"none"}}>
            <div type="text" className=" js-acc-btn" style={{border:"none",fontWeight:"800"}}>
              <span className="acc__title" style={{color:"white"}}>Shop</span>
            </div>
            <div className="footer__menu js-acc-menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  All Product
                </li>
                <li className="footer__menu-item">
                  Orel Care
                </li>
                <li className="footer__menu-item">
                  Body
                </li>
                <li className="footer__menu-item">
                  
                    Sets
                  
                </li>
              </ul>
            </div>
          </div>


          <div className="footer__section " style={{width:"22%",display:"flex",flexDirection:"column",justifyContent:"flex-start",border:"none"}}>
            <div type="text" className=" js-acc-btn" style={{border:"none",fontWeight:"800"}}>
              <span className="acc__title" style={{color:"white"}}>Learn</span>
            </div>
            <div className="footer__menu js-acc-menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  Ingredients
                </li>
                <li className="footer__menu-item">
                  Our Story
                </li>
                <li className="footer__menu-item">
                  Store Locator
                </li>
              </ul>
            </div>
          </div>

          

          <div className="footer__section " style={{width:"22%",display:"flex",flexDirection:"column",justifyContent:"flex-start",border:"none"}}>
            <div type="text" className=" js-acc-btn" style={{border:"none",fontWeight:"800"}}>
              <span className="acc__title" style={{color:"white"}}>Help</span>
            </div>
            <div className="footer__menu js-acc-menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  Account
                </li>
                <li className="footer__menu-item">
                  Wholesale
                </li>
                <li className="footer__menu-item">
                  FAQs
                </li>
                <li className="footer__menu-item">
                  
                    Sitemap
                  
                </li>
              </ul>
            </div>
          </div>
          

          <div className="footer__section " style={{width:"22%",display:"flex",flexDirection:"column",justifyContent:"flex-start",border:"none"}}>
            <div type="text" className=" js-acc-btn" style={{border:"none",fontWeight:"800"}}>
              <span className="acc__title" style={{color:"white"}}>Follow</span>
            </div>
            <div className="footer__menu js-acc-menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  
                    Instagram
                  
                </li>
                <li className="footer__menu-item">
                  Twitter
                  
                </li>
                <li className="footer__menu-item">
                 
                    TikTok
                  
                </li>
                <li className="footer__menu-item">
                  
                    Facebook
                  
                </li>
              </ul>
            </div>
            </div>
         <div className="footer__section" style={{width:"100%"}}>
          
          <span className="footer__footnote-item">© 2024 Bite. All Rights Reserved.</span>
          <ul className="list-reset">
            <li className="footer__footnote-item">
              <a >Privacy policy</a>
            </li>
            <li className="footer__footnote-item">
              <a >Terms of service</a>
            </li>
            <li className="footer__footnote-item">
              <a >Shipping policy</a>
            </li>
            <li className="footer__footnote-item">
              <a>hello@bitetoothpastebits.com</a>
            </li>
          </ul>
        </div>
          </div>

          
        
        </div>
       

        

        
      </footer>
    </div>
  );
}

export default Footer;
