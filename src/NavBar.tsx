
function NavBAR(){
    return (
                <header className="Navigation_Bar">
                    <h2>Mwana Wa Africa</h2>
                        <nav>
                            <ul className="Nav_items">
                                <li className="Nav_links active"><a href="#">Home</a></li>
                                <li className="Nav_links"><a href="#">About Us</a></li>
                                <li className="Nav_links"><a href="#">Causes</a></li>
                                <li className="Nav_links"><a href="#">Blogs</a></li>
                                <li className="Nav_links"><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>

                    <button className="Donate_Navbar"><a href="#">Donate Now</a></button>

                </header>
            );
}

export default NavBAR;