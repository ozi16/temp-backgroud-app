import React from 'react'
import { socialLink } from '../data'
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link' />
            {/* {pageLink.map((link) => {
                return (
                    <ul className="footer-links" key={link.id}>
                        <li>
                            <a href={link.href} className="footer-link">{link.Text}</a>
                        </li>
                    </ul>
                )
            })} */}

            <ul className="footer-icons">
                {socialLink.map((link) => {
                    return <SocialLinks key={link.id} {...link} itemClass='footer-icon' />
                })}
            </ul>

            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer