import React from 'react';
import '../App.css';
import { Btn } from './Btn';
import './HeroSelection.css';
import RegisterComplain from "./RegisterComplain";


function HeroSection({ user }) {
    return (
        <div className='hero-container'>

            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>Feel safe, be safe!</h1>
            <p> Register your complain here.</p>
            <div className="hero-btns">
                {user?.displayName ? (
                    <div className="hero-btns">
                        <Btn className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><RegisterComplain btnName="Report Complain" user={user} /></Btn>
                        <Btn className='btns' buttonStyle='btn--primary' buttonSize='btn--large'><a href="#viewComplain"> View Complain</a></Btn>
                    </div>
                ) :
                    (
                        <h4 className="">Sorry you need to login for Register Complain</h4>
                    )}


            </div>
        </div>
    )
}

export default HeroSection;
