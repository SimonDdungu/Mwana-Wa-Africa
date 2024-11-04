import { motion } from 'framer-motion';
import './Causes.css'
import Cause1 from '../images/Causes cards (2).jpeg';
import Cause2 from '../images/Causes cards (1).jpeg';
import Cause3 from '../images/Causes cards (3).jpeg';

const Causes = () => {
  return    <motion.section 
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {duration: 1.2}}}
                viewport={{once: true}}

                className="Causes">

                <div className="Causes_content container">
                    <h2 className='green_color'>Latest Causes</h2>

                    <div className="CauseCard_container">

                        <div className="CauseEach_card">
                            <div className="image_container">
                                <img src={Cause1} alt="Mwana wa Africa kids from school" />
                            </div>
                            
                            <div className="CauseCard_Text">
                                <h5 className="green_color">Education</h5>
                                <h4>Provide books, resources, and learning opportunities to transform young lives</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Goal</p>
                                        </div>
                                        <p className="Cause_Goal">5,000,000 UGX</p>
                                    </div>

                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-users"></i>
                                            <p>Raised</p>
                                        </div>
                                        <p className="Cause_Raised">3,824,169 UGX</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="CauseEach_card">

                            <div className="image_container">
                                <img src={Cause2} alt="Mwana wa Africa kids from school" />
                            </div>

                            
                            <div className="CauseCard_Text">
                                <h5 className="green_color">Food</h5>
                                <h4>Help us put meals on the table for struggling families, bringing relief and hope</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Goal</p>
                                        </div>
                                        <p className="Cause_Goal">10,000,000 UGX</p>
                                    </div>

                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-users"></i>
                                            <p>Raised</p>
                                        </div>
                                        <p className="Cause_Raised">6,325,412 UGX</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="CauseEach_card">

                            <div className="image_container">
                                <img src={Cause3} alt="Mwana wa Africa kids from school" />
                            </div>

                            <div className="CauseCard_Text">
                                <h5 className="green_color">Clothes and Shoes</h5>
                                <h4>Provide essential clothing and footwear for families facing hardship and cold weather</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Goal</p>
                                        </div>
                                        <p className="Cause_Goal">5,000,000 UGX</p>
                                    </div>

                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-users"></i>
                                            <p>Raised</p>
                                        </div>
                                        <p className="Cause_Raised">2,120,937 UGX</p>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </motion.section>
}
export default Causes;