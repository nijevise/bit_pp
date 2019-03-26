const displayPosts = (posts) => {
    posts.forEach(post => {
        let $div = document.createElement('div')
        $div.className = 'wrapper'
        let $h = document.createElement('h2')
        $h.textContent = post.title
        $div.appendChild($h)
        let $p = document.createElement('p')
        $p.textContent = post.body
        $div.appendChild($p)
        document.body.appendChild($div)
    });
}

export { displayPosts }
export { displayError }