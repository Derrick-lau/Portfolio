import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (
        <>
        <h1 className='heading-background'>Simplicity</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" ><button>Contact</button></a>
                </p>
            </Fade>
        </>
        );
    }
}

export default Header;