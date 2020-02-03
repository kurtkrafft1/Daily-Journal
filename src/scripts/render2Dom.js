

const render2Dom = {
    renderMain: (html) => {
        const body = document.querySelector('.domPlace')
        body.innerHTML = html;
    }
}

export default render2Dom;