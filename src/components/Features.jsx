import { motion } from "framer-motion";
import './Features.css'

const Feautres = () => {
    return (
        <motion.section 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y:0, transition: {duration: 1, ease: "easeIn"}}}
        viewport={{once: true, amount: 0.1}}
        className="Features">
            <div className="Features_content container">
    
                <div className="Titles">
                    <h3 className="text-xl ">How Your Donation Makes an Impact!</h3>
                    <h2 className="text-2xl font-semibold">Your support can change lives
                        <br />Every contribution counts
                    </h2>
                </div>
    
                    <div className="F_cardcontainer">
    
                        <div className="column1">
    
                            <div className="Each_card">
                                <div className="upper_part">
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                    <h4>Direct Help</h4>
                                </div>
    
                                <div className="lower_part">
                                    <p>Providing immediate help for essentials like food, shelter and care for those in crisis.</p>
                                </div>
                            </div>
    
                            <div className="Each_card">
                                <div className="upper_part">
                                    <i className="fa-solid fa-school"></i>
                                    <h4>Access to Education</h4>
                                </div>
    
                                <div className="lower_part">
                                    <p>Creating access to learning opportunities that improve children's lives for the future.</p>
                                </div>
                            </div>
                        </div>
    
    
    
    
                        <div className="column2">
    
                            <div className="Each_card">
                                <div className="upper_part">
                                    <i className="fa-solid fa-people-group"></i>
                                    <h4>Building Awareness</h4>
                                </div>
    
                                <div className="lower_part">
                                    <p>Spreading knowledge and inspiring action to address critical issues and encourage change.</p>
                                </div>
                            </div>
    
                            <div className="Each_card">
                                <div className="upper_part">
                                    <i className="fa-solid fa-globe"></i>
                                    <h4>Breaking the Cycle of Poverty</h4>
                                </div>
    
                                <div className="lower_part">
                                    <p>Offering resources and guidance to help families and children achieve lasting stability.</p>
                                </div>
                            </div>
                        </div>
    
    
    
                    </div>
            </div>
        </motion.section>
    );
    }
    
    export default Feautres;