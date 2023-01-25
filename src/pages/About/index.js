import React from "react";
import SocialNetworks from "components/SocialNetworks";
import "./About.css"

export default function About() {
    return (
        <div className="about">
            <h1 className="title">About The Proyect</h1>
            <p className="text">This is a free code proyect, just is a demo. This proyect is based in a free use API, <a className="link" href="http://boredapi.com" target='_blanks'>Boredapi.com</a>.</p>
            <br></br>
            <p className="text">What To Do App is a simple generator of random activities for do.</p>

            <br></br>
            <br></br>

            <p className="text bold" > What is WhatToDo used for?</p>
            <p className="text"> It is a simple generator of random activities, where you can classify your search based on your needs, the type of activity, accessibility and its price.</p>
            <p className="text bold"> Is it really useful?</p>
            <p className="text">Only you will decide that, since not all people find it difficult to decide for themselves what to do, however, some people cannot think of anything.</p>

            <br></br>

            <p className="text">If you are really interested in this website and/or you liked it, I am glad to know it, and I thank you for all the support.</p>

            <h1 className="title">About Me</h1>
            <p className="text">My name is <span className="bold link">Álvaro Ruger</span>.</p>
            <p className="text">I'm a beginner web developer, with 2 years of experience in Unity 2D/3D game development, working with C#. I also worked with C++ and .NET, I also know some HTML, CSS and JS. Now I am learning React.</p>
            <p className="text">I want to learn a lot about web development and work on it in the future. But my real dream is work at the video games development, in the part of programming and design.</p>

            <br></br>
            <br></br>

            <p className="text">If you want know more of me, you can enter in my web <a className="link" href="http://arugerdev.vercel.app" target='_blanks'>aruger.dev</a>.</p>

            <br></br>
            <br></br>

            <p className="text bold">Thanks for your visit and time, goodbye, and have fun in your bored time...</p>
            <SocialNetworks></SocialNetworks>
        </div>

    )
}
