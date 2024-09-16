import React, { useState } from 'react';

function Section8() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are Toothpaste Bits good for sensitive teeth?",
      answer: (
        <>
          <p>
            Yes, our Bits are safe for sensitive teeth. We use Nano-hydroxyapatite in our Fluoride-Free formula, a mineral that's been proven to strengthen and remineralize enamel and help fight sensitivity.
          </p>
          <p>
            Read the nHAP Study <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4252862/" aria-label="Read the nHAP Study here">here</a> and read more information about it <a href="https://bitetoothpastebits.com/blogs/blog/the-f-word-3-reasons-why-our-bits-are-fluoride-free" aria-label="and read more information about it here">here</a>.
          </p>
          <p>
            We also recommend talking to your dentist about Nano-hydroxyapatite or when making any changes to your oral care routine.
          </p>
        </>
      )
    },
    {
      question: "How do subscriptions work?",
      answer: (
        <>
          <p>
            With subscriptions, we send you all 4 months of Toothpaste Bits at once in our refillable glass jar for $32. Shipments after that will be sent every 4 months for $32 after your initial purchase, so you don't have to worry about running out of Bits. Those orders will come in our compostable refill pouches that are meant to be transferred into your glass jar as soon as you receive them.
          </p>
          <p>
            Our refill pouch will disintegrate in home compost within 12-16 weeks. Or if you don't have a home compost, they can be dropped in the compost bin in a number of stores—Starbucks and Whole Foods are the most common.
          </p>
          <p>
            We will send you an email reminder before your order is processed so you can cancel, postpone or even change the flavor of your upcoming Bits before they ship. You can always update the frequency or flavor of your upcoming Bits by logging into your account and making changes there.
          </p>
        </>
      )
    },
    {
      question: "Can I purchase just the refill pouches first?",
      answer: (
        <>
          <p>
            Unfortunately, we do not sell refill pouches on their own. However we do offer a 4 month subscription – it costs $32 which breaks down to only $8 per month.
          </p>
          <p>
            The Bits come in a 4oz glass jar in the first shipment and then in compostable refill pouches after that, as our tablets are sensitive to humidity and heat. We recommend transferring the refill to the jar as soon as it is delivered to keep the integrity of the Bits.
          </p>
          <p>
            Being as eco-friendly as possible is super important to us, but there are a few things that are equally important, such as the safety of our customers (and their pets!), which is why we send the first round of Bits in a glass jar with a label that has the full ingredient list, and a warning to keep away from pets. Xylitol is great for teeth, but not great for pups!
          </p>
          <p>
            We suggest using the 1oz small bottles that you already have for travel to keep extra Bits in your bag or for a guest bathroom.
          </p>
        </>
      )
    },
    {
      question: "What is the shelf life?",
      answer: (
        <p>
          With proper storage in a cool and dry place our nHap Bits have a shelf life of 2 years and our Fluoride Bits have a shelf life of 1 1/2 years from the manufacturing date (MFT).
        </p>
      )
    },
    {
      question: "How do I use Toothpaste Bits?",
      answer: (
        <>
          <p>It’s easy:</p>
          <ol>
            <li>Put a perfectly portioned Bit into your mouth.</li>
            <li>Chew the Bit gently until it forms a soft powder.</li>
            <li>Brush with a wet toothbrush for 2 minutes; it will foam up - just like what you're used to.</li>
            <li>Spit, smile, and repeat twice a day to make your dentist proud and our Earth happy.</li>
          </ol>
        </>
      )
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="shopify-section-template--15842162016361__0d803749-f8e8-4142-ac38-08bd1b4892b1" className="shopify-section">
      <div className="home-faqs">
        <div className="container home-faqs__container">
          <div className="home-faqs__header">
            <h3 className="home-faqs__heading">FAQs</h3>
          </div>
          <div id="homeFaqsAcc" className="acc home-faqs__acc">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  type="button"
                  className="acc__btn home-faqs__acc-btn js-acc-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="acc__title">{faq.question}</span>
                </button>
                <div className={`acc__menu js-acc-menu ${openIndex === index ? 'is-open' : ''}`} style={{ display: openIndex === index ? 'block' : 'none' }}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
