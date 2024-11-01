import MwanaAfrica_1 from "./images/Mwana 1.jpeg"


function AboutUs(){
return (
        <section className="About_Us">
            <div className="About_Us_content container">
                <div className="Ab_TextContent">
                    <h5 className="About_Us_Smallheading">About Us</h5>
                    <h2>Transforming Lives, One Child at a Time</h2>
                    <p>We started small, but our vision has always been big. Mwana Wa Africa began with a few passionate volunteers who saw a need in their community and took action. 
                        Over the years, we've grown into a trusted resource, known for our hands-on approach and commitment to transparency. 
                        Whether it's providing shelter to those without homes, education for the underprivileged or medical aid to those in crisis, 
                        we work tirelessly to turn hope into action. 
                        Our mission is to empower fellow Africans to take that next step forward because we believe every step counts.
                    </p>
                    <a className="Read_More"href="#">Read More</a>
                </div>

                <div className="Ab_Image">
                    <img src= {MwanaAfrica_1} alt="One of the founders teaching" />
                </div>
            </div>
        </section>
);

}

export default AboutUs;
