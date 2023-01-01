import React from "react";
import "./SocialNetworks.css"
import gitHub from "images/github.png"
import instagram from "images/instagram.png"
import linkedin from "images/linkedin.png"

export default function SocialNetworks() {
    return (
        <div className="socialNets">
            <a rel="noreferrer" className="socialNet-Button" href="https://github.com/AlvaroRuCh" target='_blank'><img alt="github" src={gitHub}></img> </a>
            <a rel="noreferrer" className="socialNet-Button" href="https://instagram.com/aruger_dev" target='_blank'><img alt="instagram" src={instagram}></img> </a>
            <a rel="noreferrer" className="socialNet-Button" href="https://linkedin.com/in/aruger" target='_blank'><img alt="linkedin" src={linkedin}></img> </a>
        </div>
    )
}