import React from 'react';
import './../ImpectContent/impactcss.css'

const Impact1 = () => {
    return (
        <div className="lp-element lp-pom-root" id="lp-pom-root">
            <div id="lp-pom-root-color-overlay"></div>
            <div className="lp-positioned-content">
                <div className='impacthead1'>

                <div className='impacthead2'>
                <header className="lp-element lp-pom-text serif-title nlh" id="lp-pom-text-13">
                    <h1 style={{ lineHeight: '77px', fontSize: '60px', color: 'rgb(19, 19, 19)' }}>
                        <span style={{ fontFamily: 'Oswald', fontWeight: 400 }}>Our Impact Report</span>
                    </h1>
                </header>

                <section className="lp-element lp-pom-text nlh" id="lp-pom-text-14">
                    <p style={{ lineHeight: '35px', fontSize: '17px', color: 'rgb(19, 19, 19)' }}>
                        Transparency and sustainability are at the heart of everything we do at Bite.
                        We believe that every person deserves to know what’s in the products they use
                        every day and how they affect the planet. We’re sharing this report with you
                        to show how we’re making a positive impact as a company, and why it matters to you.
                    </p>
                </section>

                <a className="lp-element lp-pom-button" id="lp-pom-button-15" href="https://drive.google.com/file/d/1UKWFzV_4_7mbpJIZ6lRviy9gRxEhGlFk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <strong>Read The Full Report Here</strong>
                </a>
                </div>
                <div className='impacthead3'>
                <img src="https://d9hhrg4mnvzow.cloudfront.net/try.bitetoothpastebits.com/impact-report-2022/947a29fa-clounds-optimized_10000000rs0qw0000a5000.jpg" alt="" />
        
                </div>

                </div>
                <div className="lp-element lp-pom-text serif-title nlh" id="lp-pom-text-20">
                    <h2 style={{ fontWeight: "400", fontFamily: "Oswald", fontSize: "50px", color: "rgb(19, 19, 19)" }}>
                        We measure our impact across 5 different categories
                    </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {impactCategories.map((category, index) => (

                        <div key={index} className="lp-element lp-pom-box" id={`lp-pom-box-${index + 21}`} style={{ width: "35%" }}>
                            <div className="lp-element lp-pom-text serif-title nlh" id={`lp-pom-text-${index + 23}`}>
                                <h2 style={{ lineHeight: '54px', fontSize: '36px', color: 'rgb(19, 19, 19)' }}>
                                    {category.title}
                                </h2>
                            </div>
                            <div className="lp-element lp-pom-text nlh" id={`lp-pom-text-${index + 24}`}>
                                <p style={{ lineHeight: '24px', fontSize: '18px', color: 'rgb(19, 19, 19)' }}>
                                    <strong><em>{category.subTitle}</em></strong>
                                </p>
                            </div>
                            <div className="lp-element lp-pom-text nlh" id={`lp-pom-text-${index + 26}`}>
                                <p style={{ lineHeight: '29px', fontSize: '18px', color: 'rgb(19, 19, 19)' }}>
                                    {category.description}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="lp-element lp-pom-text nlh" id="lp-pom-text-64" style={{ textAlign: 'center' }}>
                    <p style={{ lineHeight: '35px', fontSize: '28px', color: 'rgb(19, 19, 19)' }}>
                        Want to take a deep dive into our impact? Read the full report <a href="https://drive.google.com/file/d/1UKWFzV_4_7mbpJIZ6lRviy9gRxEhGlFk/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(13, 57, 245)' }}>here</a>.
                    </p>
                </div>




            </div>
        </div>
    );
};

const impactCategories = [
    {
        title: 'Governance',
        subTitle: 'Ethical values and integrity, Public Benefit Corporation, Incorporate stakeholder feedback.',
        description: 'We have an unwavering commitment to maintaining our ethical values and integrity. In becoming a Public Benefit Corporation and certified B Corp, we re-wrote our company by-laws to legally bind us to uphold these principles – we take this responsibility seriously. We value the feedback of our stakeholders (that’s you!) and actively incorporate it into our business model.'
    },
    {
        title: 'Environment',
        subTitle: 'Divert plastic waste, sustainable materials, carbon neutrality, sustainability education.',
        description: 'In 2022 alone, we successfully diverted 75,000 pounds of plastic waste, and are committed to increasing our impact in years to come. Our circular refill system, sustainable packaging + materials, and carbon neutral certification all demonstrate our dedication to leaving the planet better than we found it. We are passionate about sharing sustainability education with our customers and community.'
    },
    {
        title: 'Customers',
        subTitle: 'Only clean + safe ingredients, Acting on customer feedback.',
        description: 'Only the good, never the bad. We thoughtfully formulate our products to ensure our customers can have healthy smiles and bodies while protecting the planet. We actively seek out the feedback of our community and are committed to utilizing that feedback to improve and innovate our products.'
    },
    {
        title: 'Workers',
        subTitle: 'Competitive pay and benefits, career development, culture of mutual respect.',
        description: 'Our small but mighty team is fundamental to our impact – they inspire us daily. We happily provide a living family wage and benefits, career development opportunities, and nurture a thriving company culture.'
    },
    {
        title: 'Community',
        subTitle: 'Community engagement, Charitable giving, Employee volunteer work.',
        description: 'Through our community engagement, charitable giving and employee volunteer work, we are in a position to further uplift our mission of leaving a cleaner planet for future generations.'
    },
    {
        title: '',
        subTitle: '',
        description: ''
    },
];

const additionalLinks = [
    { text: 'Shop All Products', href: 'https://bitetoothpastebits.com/collections/featured-products' },
    { text: 'All Products', href: 'https://bitetoothpastebits.com/collections/all' },
    { text: 'Oral Care', href: 'https://bitetoothpastebits.com/collections/oral-care' },
    { text: 'Personal Care', href: 'https://bitetoothpastebits.com/collections/personal-care' },
    { text: 'Bundles', href: 'https://bitetoothpastebits.com/collections/bundles' },
    { text: 'Sustainability', href: 'https://bitetoothpastebits.com/pages/sustainability' },
    { text: 'About Us', href: 'https://bitetoothpastebits.com/pages/about-us' },
    { text: 'FAQ', href: 'https://bitetoothpastebits.com/apps/help-center' },
    { text: 'Store Locator', href: 'https://bitetoothpastebits.com/pages/store-locator' },
];

export default Impact1;
