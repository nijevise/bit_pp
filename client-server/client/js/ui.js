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

const displayError = () => {
    let $div = document.createElement('div')
    $div.className = 'wrapperError'
    let $h = document.createElement('h1')
    $h.innerHTML = 'Come back soon...' + ' <i class="far fa-smile-wink"></i>'
    let $img = document.createElement('img')
    $img.src = './js/under.png'
    $div.appendChild($h)
    $div.appendChild($img)
    document.body.appendChild($div)
}

export { displayPosts }
export { displayError }