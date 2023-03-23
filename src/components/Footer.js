import React from "react";

//import icons 
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import stackoverflow from "../images/stackoverflow.png";

export default function Footer() {
   const year = new Date().getFullYear();
    return(
        <footer className="footer">
        <div>
           
        {`Copyright @ ${year} Rebecca Lawrence `}
        <a href="https://github.com/rkml14"><img src={github} alt="Github"/></a>
        <a href="https://www.linkedin.com/in/rebecca-lawrence-762642265/"><img src={linkedin} alt="LinkedIn"/></a>
        <a href="https://stackoverflow.com/users/21448112/rebecca-lawrence"><img src={stackoverflow} alt="Stack-Overflow"/></a>
        <a href="https://www.instagram.com/bexknitting/"><img src={instagram} alt="Instagram"/></a>
        </div>
        </footer>
    )
   
};





