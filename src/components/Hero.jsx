import './Hero.css'

const Hero = () =>{
    return (
        <section className="Hero_Section">
            <div className="overlay">
                
            </div>
            <div className="Hero_Content container">
                <h1>Transforming Lives, <br /><span className="Orange_color">One Child</span> at a Time</h1>
                <p>Every child deserves a chance to succeed. By supporting our mission, 
                    you can help provide essential
                    resources to children in need.
                </p>
                <div className="Hero_buttons">
                    <a className="Hero_Donate" href="#">Donate Now</a>
                    <a className="Hero_LearnMore" href="#">Learn More</a>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;