import React from "react";
import "./Header.css"
import { Link } from "wouter";
import lightLogo from "images/light.png"
import moonLogo from "images/moon.png"

export default function Header() {
    return (
        <div className="header">
            <Link className="logo-link" to="/">.
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="currentcolor">
                    <path fill="currentcolor"
                        d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                </svg>
            </Link>
            <ul className="header-buttons">
                <li>
                    <Link className="header-butt" to='/'>What To Do</Link>
                </li>
                <li>
                    <Link className="header-butt" to='/about'>About</Link>
                </li>
            </ul>
            <button className="changetheme-button" onClick={() => {
                const curentTheme = document.body.classList;
                if (curentTheme.contains('dark')) {
                    document.body.classList.add('light')
                    document.body.classList.remove('dark')
                }
                else if (curentTheme.contains('light')) {
                    document.body.classList.add('dark')
                    document.body.classList.remove('light')
                }
            }}>
                <img alt="light" className="light-icon" src={lightLogo}></img>
                <img alt="dark" className="dark-icon" src={moonLogo}></img>
            </button>
        </div>
    )


}