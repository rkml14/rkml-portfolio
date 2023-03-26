import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div>
            <p className="connection">Find me here:</p>
            </div>
            <div className="social-logos">
                <a href="https://github.com/rkml14" target="_blank"><img src={require('../images/social-media-icons/github.png')} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/rebecca-lawrence-762642265/" target="_blank"><img src={require('../images/social-media-icons/linkedin.png')} alt="LinkedIn" /></a>
                <a href="https://stackoverflow.com/users/21448112/rebecca-lawrence" target="_blank"><img src={require('../images/social-media-icons/stackoverflow.png')} alt="Stack-Overflow" /></a>
                <a href="https://www.instagram.com/bexknitting/" target="_blank"><img src={require('../images/social-media-icons/instagram.png')} alt="Instagram" /></a>
            </div>
            <div className="copyright">
                {`Copyright @ ${year} Rebecca Lawrence `}
            </div>
        </footer>
    )

};





