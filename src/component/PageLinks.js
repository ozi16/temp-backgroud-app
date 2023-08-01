import React from 'react'
import { pageLink } from '../data'

const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLink.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href} className={itemClass}> {link.Text} </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default PageLinks

