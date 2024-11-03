import './Volunteer.css'

const Volunteer = () => {
    return (
        <section className="VolunteerBanner">
    
            <div className="Volunteer_content container">
    
                    <div className="V_Headings">
                        <h5 className="Small-heading">Join Our Cause</h5>
                        <h2 className="Big-heading">Become A Volunteer</h2>
                    </div>
    
                    <form className="Volunteer_Details">
                        <input type="text" placeholder="Enter name" required/>
                        <input type="email" placeholder="Enter email" required/>
                        
                        <button className="V_JoinUs">Join us</button>
                    </form>
    
            </div>
            
    
        </section>
    );
};
export default Volunteer;