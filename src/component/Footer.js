import React from 'react';
import './Footer.css';
import { Btn } from './Btn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Crime Registration newsletter to receive all Top News and support the Victims.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Btn buttonStyle='btn--outline'>Subscribe</Btn>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/chatbot'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Help-Line Number</h2>
                        <Link to='/'>100</Link>
                        <Link to='/'>155260</Link>
                        <Link to='/'> 011-24362755</Link>
                        <Link to='/'>011-24361273</Link>
                        <a href="https://indianhelpline.com/" target="_blank">Emergency Helpline Numbers</a>

                    </div>

                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/newstalk1010/?hl=en" target="_blank">Instagram</a>
                        <a href="https://www.facebook.com/MSDNewZealand/" target="_blank">Facebook</a>
                        <a href="https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw" target="_blank">Youtube</a>
                        <a href="https://twitter.com/twitter" target="_blank">Twitter</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CRIME-ALERTER
                        </Link>
                    </div>
                    <small class='website-rights'>Kingsmen: Secret Service © 2020</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href='https://www.facebook.com/MSDNewZealand/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://www.instagram.com/newstalk1010/?hl=en'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link youtube'
                            href='https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://twitter.com/twitter'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://www.linkedin.com/showcase/linkedin-news/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;