import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => (
    <div className='hambugger-menu'>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Libraries</a></p>
    </div>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: '1000'
        });
    }, []);

    return (
        <div className='gpt3__navbar' data-aos="fade-down" >
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt">What is GPT3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Libraries</a></p>
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links" data-aos="fade-right" data-aos-duration="1000">
                            <Menu />

                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type='button'>Sign Up</button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar;
