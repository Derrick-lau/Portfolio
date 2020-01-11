import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <nav>
            <ul>
                <Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                ><li>Home</li></Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><li>About</li></Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><li>Projects</li></Link>
                <Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><li>Contact</li></Link>
            </ul>
        </nav> 
        );
    }
}
 
export default Navbar;