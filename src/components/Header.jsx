import './Header.css';

const Header = () => {
    return (
            <header className="Navigation_Bar">
                    <h2>Mwana Wa Africa</h2>
                        <nav>
                            <ul className="Nav_items">
                                <li className="Nav_links active  collapse_on_mobile"><a href="#">Home</a></li>
                                <li className="Nav_links  collapse_on_mobile"><a href="#">About Us</a></li>
                                <li className="Nav_links  collapse_on_mobile"><a href="#">Causes</a></li>
                                <li className="Nav_links  collapse_on_mobile"><a href="#">Blogs</a></li>
                                <li className="Nav_links  collapse_on_mobile"><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>

                    <a className="Donate_Navbar collapse_on_mobile" href="#">Donate Now</a>


                    <div className="Hamburger_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

            </header>
    );
};

export default Header;