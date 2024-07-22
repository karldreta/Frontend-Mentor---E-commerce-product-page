import './style.css';




function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('attribution');
    footer.innerHTML = `
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/karldreta" target="_blank">karlDreta</a>.
    `;

    return footer;
}

document.body.appendChild(createFooter())