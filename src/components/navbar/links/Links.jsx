"use client"
import React, { useState } from 'react';
import styles from './links.module.css'
import NavLink from '../navLink/navLink';

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
];

const Links = () => {
    const [open, setOpen] = useState(false)
    

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            { session ? (
                <>
                { isAdmin && <NavLink item={{path: "/admin", title: "Admin"}}/>}
                <button className={styles.logout}> Logout</button>
                </>
            ) : (
                <NavLink item={{path: "/login", title: "Login"}}/>
            )
            }
        </div>
        <button className={styles.manu} onClick={() => setOpen(prev => !prev)}>| | |</button>
        { open && (
            <div className={styles.mobilelink}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            </div>
        ) 
        }
        </div>
    );
};

export default Links;
