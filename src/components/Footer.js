import React from "react";

export default function Footer() {
   const year = new Date().getFullYear();
    return(
        <footer className="footer">
        <div>
           
        {`Copyright @ ${year} Rebecca Lawrence `}
        <a href="https://github.com/rkml14" target="_blank"><img src={require('../assets/images/github.png')} alt="Github"/></a>
        <a href="https://www.linkedin.com/in/rebecca-lawrence-762642265/" target="_blank"><img src={require('../assets/images/linkedin.png')} alt="LinkedIn"/></a>
        <a href="https://stackoverflow.com/users/21448112/rebecca-lawrence" target="_blank"><img src={require('../assets/images/stackoverflow.png')} alt="Stack-Overflow"/></a>
        <a href="https://www.instagram.com/bexknitting/" target="_blank"><img src={require('../assets/images/instagram.png')} alt="Instagram"/></a>
        </div>
        </footer>
    )
   
};





