import { useState } from 'react';
import './Header.css';

const Header = () => {

const [isMenuActive, SetMenuActive] = useState(false);

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


                    <div className={`Hamburger_menu ${isMenuActive && "active"}`} onClick={() => SetMenuActive(!isMenuActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={ `Mobile_Menu xl:hidden flex flex-column gap-3 absolute w-full h-auto items-center top-12 left-0 p-4 bg-black ${isMenuActive ? "opacity-100" : "opacity-0"} `}
                    style={{transition: "all 0.3s ease"}}
                    >
                        <li className='Mobile_nav active border-2 rounded-md border-orange-600 w-full text-center '><a  style={{textDecoration: "none", color: "white"}}href="#">Home</a></li>
                        <li className='text-white hover:rounded-md hover:border-orange-600 '><a  style={{textDecoration: "none", color: "white"}}href="#">About Us</a></li>
                        <li className='text-white hover:rounded-md hover:border-orange-600 '><a  style={{textDecoration: "none", color: "white"}}href="#">Causes</a></li>
                        <li className='text-white hover:rounded-md hover:border-orange-600 '><a  style={{textDecoration: "none", color: "white"}}href="#">Blogs</a></li>
                        <li className='text-white hover:rounded-md hover:border-orange-600 '><a style={{textDecoration: "none", color: "white"}}href="#">Contact Us</a></li>
                    </ul>

            </header>
    );
};

export default Header;